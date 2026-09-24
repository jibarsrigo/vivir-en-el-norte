# -*- coding: utf-8 -*-
import json, time, urllib.parse, urllib.request, urllib.error
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
UA = "VivirEnElNorte/1.0 (identity photo curator; jose@local)"
SLEEP = 3.5

JOBS = {
    "suances": ["Suances puerto casas", "Suances Cantabria vista", "Suances pueblo", "Playa de la Concha Suances casas"],
    "moana": ["Moaña ría Vigo", "Moaña Galicia vista", "Moaña Domaio", "Moaña desde Cangas"],
    "noia": ["Noia ría vista", "Noia Galicia casas", "Noya Galicia ría", "Noia desde"],
    "rianxo": ["Rianxo ría Arousa", "Rianxo puerto vista", "Rianxo Galicia casas"],
    "navia": ["Navia Asturias puerto", "Navia Asturias vista pueblo", "Puerto de Vega Navia"],
    "villaviciosa": ["Villaviciosa ría Asturias", "Villaviciosa vista", "Villaviciosa casco"],
    "redondela": ["Redondela ría Vigo", "Redondela viaducto", "Cesantes Redondela"],
    "foz": ["Foz Lugo ría", "Foz puerto vista", "Foz Galicia casas"],
    "marin": ["Marín ría Pontevedra", "Marín puerto vista casas", "Marín Galicia panorama"],
    "bueu": ["Bueu puerto Galicia", "Bueu Morrazo vista", "Bueu casas puerto"],
    "gondomar": ["Gondomar Pontevedra", "Gondomar valle Minor"],
    "boiro": ["Boiro ría Arousa", "Boiro Galicia vista"],
    "ribeira": ["Ribeira Galicia puerto", "Ribeira A Coruña vista"],
}

skip = ("mapa","escudo","logo","flag","bandera","placa","station","train","svg","360","santorini","greece","pantocr","concello","ayuntamiento","cruceiro","manhole","auditorio","futbol","estatua","escultura","1928","fachada","window","ventana")

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

out = ROOT / "output" / "identidad_v4"
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
    picks = hits[:4]
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
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            for attempt in range(8):
                try:
                    with urllib.request.urlopen(req, timeout=90) as r:
                        raw.write_bytes(r.read())
                    break
                except urllib.error.HTTPError as e:
                    if e.code==429:
                        time.sleep(20+attempt*10); continue
                    raise
            if not raw.exists(): continue
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

print("V4 DONE", flush=True)
