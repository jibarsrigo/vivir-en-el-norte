# -*- coding: utf-8 -*-
from __future__ import annotations
import json, time, urllib.error, urllib.parse, urllib.request
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
UA = "VivirEnElNorte/1.0 (identity photo curator; jose@local)"
SLEEP = 3.2

JOBS = {
    "gondomar": ["Gondomar Pontevedra valle", "Gondomar Galicia casas", "Gondomar Miñor vista", "Vincios Gondomar"],
    "meano": ["Meaño Galicia", "Meaño Pontevedra", "Dena Meaño", "Meaño Umia"],
    "sanxenxo": ["Sanxenxo puerto casas", "Sanxenxo Portonovo vista", "Sanxenxo Galicia casco", "Portonovo Galicia casas"],
    "vilanova-de-arousa": ["Vilanova de Arousa vista", "Vilanova de Arousa puerto", "Vilanova Arousa casas", "Villanueva de Arosa"],
    "porto-do-son": ["Porto do Son Galicia", "Puerto del Son vista", "Portosín Galicia", "Porto do Son casas"],
    "o-vicedo": ["O Vicedo Galicia", "Vicedo Lugo vista", "O Vicedo puerto", "Vicedo ría"],
    "salinas-castrillon": ["Salinas Asturias casas", "Salinas Castrillón vista", "Salinas Asturias paseo", "Playa de Salinas chalets"],
    "santander": ["Santander bahía casas", "Santander Sardinero edificios", "Santander Paseo Pereda bahía", "Santander vista desde"],
    "santona": ["Santoña Cantabria vista", "Santoña puerto casas", "Santoña Buciero pueblo", "Santoña desde Laredo"],
    "vila-nova-de-cerveira": ["Vila Nova de Cerveira vista", "Vila Nova de Cerveira Minho", "Cerveira Portugal casas", "Vila Nova de Cerveira rio"],
    "moledo-caminha": ["Moledo Caminha", "Moledo Portugal casas", "Moledo praia casas", "Moledo Viana"],
    "afife-carreco": ["Afife Portugal", "Afife Viana do Castelo", "Afife casas praia", "Carreço Portugal"],
}

skip = ("mapa","escudo","logo","flag","bandera","placa","station","train","svg","360","pantocr","concello","ayuntamiento","cruceiro","manhole","futbol","estatua","escultura","fachada","window","ventana","retrato","portrait","mujer","hombre","player","football","soccer","mint","menta","interior","patio","cloister","claustro")

def api(params):
    params = {**params, "format": "json"}
    url = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(params)
    for attempt in range(10):
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        try:
            with urllib.request.urlopen(req, timeout=50) as r:
                return json.loads(r.read().decode())
        except urllib.error.HTTPError as e:
            if e.code == 429:
                w = 20 + attempt * 10
                print(f"  429 wait {w}s", flush=True)
                time.sleep(w)
                continue
            raise
    raise RuntimeError("429")

def search(q, limit=8):
    data = api({"action":"query","list":"search","srsearch":q,"srnamespace":6,"srlimit":limit})
    time.sleep(SLEEP)
    return [s["title"].replace("File:","") for s in data.get("query",{}).get("search",[])]

def imageinfo(title):
    data = api({"action":"query","titles":f"File:{title}","prop":"imageinfo","iiprop":"url|mime","iiurlwidth":1600})
    time.sleep(SLEEP)
    for p in (data.get("query") or {}).get("pages",{}).values():
        info = (p.get("imageinfo") or [None])[0]
        if info and str(info.get("mime","")).startswith("image/"):
            return info
    return None

def download(url, dest):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    for attempt in range(8):
        try:
            with urllib.request.urlopen(req, timeout=90) as r:
                dest.write_bytes(r.read())
            return
        except urllib.error.HTTPError as e:
            if e.code == 429:
                time.sleep(20 + attempt * 10)
                continue
            raise

out = ROOT / "output" / "identidad_batch25"
out.mkdir(parents=True, exist_ok=True)

for slug, queries in JOBS.items():
    print(f"\n=== {slug} ===", flush=True)
    seen=set(); hits=[]
    for q in queries:
        try:
            for t in search(q):
                low=t.lower()
                if any(k in low for k in skip): continue
                suf=Path(t).suffix.lower()
                if suf and suf not in {".jpg",".jpeg",".png",".tif",".tiff",".webp"}: continue
                if t in seen: continue
                seen.add(t); hits.append(t)
        except Exception as e:
            print(" search", e, flush=True)
    picks = hits[:5]
    for i,t in enumerate(picks,1):
        print(f"  {i}. {t}", flush=True)
    ddir = out/slug; ddir.mkdir(exist_ok=True)
    meta=[]
    for i,title in enumerate(picks,1):
        try:
            info = imageinfo(title)
            if not info: continue
            url = info.get("thumburl") or info.get("url")
            raw = ddir/f"{i:02d}.bin"
            download(url, raw)
            jpg = ddir/f"{i:02d}.jpg"
            img = Image.open(raw)
            if img.mode != "RGB": img = img.convert("RGB")
            w,h = img.size
            if w>1600: img=img.resize((1600,int(h*1600/w)), Image.Resampling.LANCZOS)
            img.save(jpg, "JPEG", quality=82, optimize=True)
            raw.unlink(missing_ok=True)
            meta.append({"n":i,"title":title})
            print(f"  DL {i} OK", flush=True)
        except Exception as e:
            print(f"  DL {i} err {e}", flush=True)
    (ddir/"meta.json").write_text(json.dumps(meta, ensure_ascii=False, indent=2), encoding="utf-8")

print("\nBATCH25 DONE", flush=True)
