# -*- coding: utf-8 -*-
"""Busca y descarga candidatas a foto de identidad (Commons). Rate-limit >=2.5s."""
from __future__ import annotations

import argparse
import json
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
UA = "VivirEnElNorte/1.0 (identity photo curator; jose@local)"
SLEEP = 2.6

PUEBLOS: list[tuple[str, str, str, list[str]]] = [
    ("oia", "baixo-mino", "Oia", [
        "Oia Galicia vista filetype:bitmap",
        "Oia Pontevedra costa casas",
        "Oia Galicia monasterio pueblo",
        "Oia Mougas Galicia",
    ]),
    ("o-rosal", "baixo-mino", "O Rosal", [
        "O Rosal Galicia vista filetype:bitmap",
        "O Rosal Pontevedra valle",
        "Rosal Galicia casas",
    ]),
    ("tomino", "baixo-mino", "Tomino", [
        "Tomino Galicia vista filetype:bitmap",
        "Goian Tomino",
        "Tomino Mino casas",
        "Tomino Pontevedra",
    ]),
    ("tui", "baixo-mino", "Tui", [
        "Tui Galicia vista rio filetype:bitmap",
        "Tui catedral casco Mino",
        "Tuy Galicia panorama",
        "Tui desde Portugal",
    ]),
    ("nigran", "val-minor", "Nigran", [
        "Nigran Panxon vista filetype:bitmap",
        "Panxon Galicia casas playa",
        "Nigran Galicia costa",
        "Playa America Nigran casas",
    ]),
    ("gondomar", "val-minor", "Gondomar", [
        "Gondomar Galicia vista filetype:bitmap",
        "Gondomar Pontevedra valle",
        "Gondomar villa casas",
    ]),
    ("cangas", "o-morrazo", "Cangas", [
        "Cangas Morrazo vista filetype:bitmap",
        "Cangas do Morrazo puerto casas",
        "Cangas Galicia ria",
    ]),
    ("moana", "o-morrazo", "Moana", [
        "Moana Galicia vista filetype:bitmap",
        "Moana ria Vigo casas",
        "Moana puerto",
    ]),
    ("bueu", "o-morrazo", "Bueu", [
        "Bueu Galicia vista filetype:bitmap",
        "Bueu puerto casas",
        "Bueu Morrazo",
    ]),
    ("marin", "o-morrazo", "Marin", [
        "Marin Galicia vista filetype:bitmap",
        "Marin Pontevedra puerto casas",
        "Marin ria",
    ]),
    ("redondela", "vigo-e-ria", "Redondela", [
        "Redondela Galicia vista filetype:bitmap",
        "Redondela ria Vigo",
        "Redondela viaducto casas",
    ]),
    ("soutomaior", "vigo-e-ria", "Soutomaior", [
        "Soutomaior Galicia vista filetype:bitmap",
        "Sotomayor Galicia castillo",
        "Soutomaior valle",
    ]),
    ("vilaboa", "vigo-e-ria", "Vilaboa", [
        "Vilaboa Galicia vista filetype:bitmap",
        "Vilaboa Pontevedra",
    ]),
    ("rianxo", "barbanza-e-noia", "Rianxo", [
        "Rianxo Galicia vista filetype:bitmap",
        "Rianxo ria Arousa casas",
        "Rianxo puerto",
    ]),
    ("boiro", "barbanza-e-noia", "Boiro", [
        "Boiro Galicia vista filetype:bitmap",
        "Boiro ria Arousa",
        "Boiro puerto casas",
    ]),
    ("ribeira", "barbanza-e-noia", "Ribeira", [
        "Ribeira Galicia vista filetype:bitmap",
        "Ribeira A Coruna puerto casas",
        "Santa Uxia de Ribeira",
    ]),
    ("noia", "barbanza-e-noia", "Noia", [
        "Noia Galicia vista filetype:bitmap",
        "Noia ria casas",
        "Noya Galicia casco",
    ]),
    ("viveiro", "a-marina", "Viveiro", [
        "Viveiro Galicia vista filetype:bitmap",
        "Viveiro ria casas",
        "Vivero Lugo panorama",
    ]),
    ("foz", "a-marina", "Foz", [
        "Foz Galicia vista filetype:bitmap",
        "Foz Lugo puerto casas",
        "Foz ria",
    ]),
    ("ribadeo", "a-marina", "Ribadeo", [
        "Ribadeo Galicia vista filetype:bitmap",
        "Ribadeo ria casas",
        "Ribadeo panorama",
    ]),
    ("burela", "a-marina", "Burela", [
        "Burela Galicia vista filetype:bitmap",
        "Burela puerto casas",
    ]),
    ("castropol", "asturias-occidente", "Castropol", [
        "Castropol Asturias vista filetype:bitmap",
        "Castropol ria Eo casas",
        "Castropol panorama",
    ]),
    ("navia", "asturias-occidente", "Navia", [
        "Navia Asturias vista filetype:bitmap",
        "Navia puerto casas",
        "Navia Asturias pueblo",
    ]),
    ("villaviciosa", "asturias-oriente", "Villaviciosa", [
        "Villaviciosa Asturias vista filetype:bitmap",
        "Villaviciosa ria casas",
        "Villaviciosa pueblo",
    ]),
    ("ribadesella", "asturias-oriente", "Ribadesella", [
        "Ribadesella vista filetype:bitmap",
        "Ribadesella casas puerto",
        "Ribadesella panorama",
    ]),
    ("llanes", "asturias-oriente", "Llanes", [
        "Llanes Asturias vista filetype:bitmap",
        "Llanes puerto casas",
        "Llanes casco",
    ]),
    ("comillas", "cantabria-occidental", "Comillas", [
        "Comillas Cantabria vista filetype:bitmap",
        "Comillas casas mar",
        "Comillas panorama",
    ]),
    ("suances", "cantabria-occidental", "Suances", [
        "Suances Cantabria vista filetype:bitmap",
        "Suances puerto casas",
        "Suances ria",
    ]),
    ("laredo", "cantabria-oriental", "Laredo", [
        "Laredo Cantabria vista filetype:bitmap",
        "Laredo casco casas mar",
        "Laredo pueblo antiguo",
    ]),
    ("santona", "cantabria-oriental", "Santona", [
        "Santona Cantabria vista filetype:bitmap",
        "Santona puerto casas",
        "Santona bahia",
    ]),
    ("noja", "cantabria-oriental", "Noja", [
        "Noja Cantabria vista filetype:bitmap",
        "Noja casas playa",
    ]),
]


def api(params: dict) -> dict:
    params = {**params, "format": "json"}
    url = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(params)
    for attempt in range(5):
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        try:
            with urllib.request.urlopen(req, timeout=45) as r:
                return json.loads(r.read().decode("utf-8"))
        except urllib.error.HTTPError as e:
            if e.code == 429:
                wait = 8 + attempt * 5
                print(f"  429 - wait {wait}s")
                time.sleep(wait)
                continue
            raise
    raise RuntimeError("too many 429")


def search(query: str, limit: int = 10) -> list[str]:
    data = api({
        "action": "query",
        "list": "search",
        "srsearch": query,
        "srnamespace": 6,
        "srlimit": limit,
    })
    time.sleep(SLEEP)
    return [s["title"].replace("File:", "") for s in data.get("query", {}).get("search", [])]


def imageinfo(title: str) -> dict | None:
    data = api({
        "action": "query",
        "titles": f"File:{title}",
        "prop": "imageinfo",
        "iiprop": "url|size|mime",
        "iiurlwidth": 1600,
    })
    time.sleep(SLEEP)
    for p in (data.get("query") or {}).get("pages", {}).values():
        info = (p.get("imageinfo") or [None])[0]
        if info and str(info.get("mime", "")).startswith("image/"):
            return info
    return None


def download(url: str, dest: Path) -> None:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    for attempt in range(5):
        try:
            with urllib.request.urlopen(req, timeout=90) as r:
                dest.write_bytes(r.read())
            return
        except urllib.error.HTTPError as e:
            if e.code == 429:
                time.sleep(8 + attempt * 5)
                continue
            raise
    raise RuntimeError(f"download fail {url}")


def compress_jpeg(src: Path, dest: Path, max_w: int = 1600, q: int = 82) -> None:
    img = Image.open(src)
    if img.mode in ("RGBA", "P"):
        img = img.convert("RGB")
    elif img.mode != "RGB":
        img = img.convert("RGB")
    w, h = img.size
    if w > max_w:
        img = img.resize((max_w, int(h * max_w / w)), Image.Resampling.LANCZOS)
    dest.parent.mkdir(parents=True, exist_ok=True)
    img.save(dest, "JPEG", quality=q, optimize=True)


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--zona", default="")
    ap.add_argument("--slug", default="")
    ap.add_argument("--max-per", type=int, default=6)
    ap.add_argument("--download", action="store_true")
    args = ap.parse_args()

    rows = [
        p for p in PUEBLOS
        if (not args.zona or p[1] == args.zona)
        and (not args.slug or p[0] == args.slug)
    ]
    out = ROOT / "output" / "identidad_candidatas"
    out.mkdir(parents=True, exist_ok=True)
    report: list[dict] = []

    skip_kw = (
        "mapa", "map ", "coat of", "escudo", "logo", "flag", "bandera",
        "placa", "plaque", "night", "noche", "estacion", "station",
        "train", "ferrocarril", "svg", "icon", "diagram", "chart",
    )

    for slug, zona, nombre, queries in rows:
        print(f"\n=== {nombre} ({slug}) ===", flush=True)
        seen: set[str] = set()
        hits: list[str] = []
        for q in queries:
            try:
                for t in search(q):
                    low = t.lower()
                    if any(k in low for k in skip_kw):
                        continue
                    suf = Path(t).suffix.lower()
                    if suf and suf not in {".jpg", ".jpeg", ".png", ".tif", ".tiff", ".webp"}:
                        continue
                    if t in seen:
                        continue
                    seen.add(t)
                    hits.append(t)
            except Exception as e:
                print(f"  search err {q}: {e}", flush=True)
        picks = hits[: args.max_per]
        for i, t in enumerate(picks, 1):
            print(f"  {i}. {t}", flush=True)
        report.append({"slug": slug, "zona": zona, "nombre": nombre, "candidatas": picks})

        if args.download and picks:
            ddir = out / slug
            ddir.mkdir(parents=True, exist_ok=True)
            meta = []
            for i, title in enumerate(picks, 1):
                try:
                    info = imageinfo(title)
                    if not info:
                        print(f"  skip (no info): {title}", flush=True)
                        continue
                    url = info.get("thumburl") or info.get("url")
                    if not url:
                        continue
                    ext = Path(urllib.parse.urlparse(url).path).suffix or ".jpg"
                    raw = ddir / f"{i:02d}_raw{ext}"
                    print(f"  DL {i}: {title[:70]}...", flush=True)
                    download(url, raw)
                    jpg = ddir / f"{i:02d}.jpg"
                    try:
                        compress_jpeg(raw, jpg)
                        raw.unlink(missing_ok=True)
                    except Exception as e:
                        print(f"  compress fail: {e}", flush=True)
                        if raw.exists() and ext.lower() in (".jpg", ".jpeg"):
                            raw.rename(jpg)
                    meta.append({"n": i, "title": title, "file": jpg.name if jpg.exists() else None})
                except Exception as e:
                    print(f"  DL err: {e}", flush=True)
            (ddir / "meta.json").write_text(
                json.dumps(meta, ensure_ascii=False, indent=2), encoding="utf-8"
            )

    (out / "candidatas.json").write_text(
        json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print(f"\nGuardado {out / 'candidatas.json'}", flush=True)


if __name__ == "__main__":
    main()
