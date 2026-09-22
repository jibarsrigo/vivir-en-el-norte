# -*- coding: utf-8 -*-
"""CURSOR_37 — compare hardcoded zone €/m² mentions vs capa precioM2."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
COMP = ROOT / "web/src/components"
DATA = ROOT / "web/src/data"

RELATO = {
    "baixo-mino": "RelatoBaixoMino.tsx",
    "val-minor": "RelatoValMinor.tsx",
    "vigo-e-ria": "RelatoVigoERia.tsx",
    "o-morrazo": "RelatoOMorrazo.tsx",
    "pontevedra-e-sanxenxo": "RelatoPontevedraESanxenxo.tsx",
    "o-salnes": "RelatoOSalnes.tsx",
    "barbanza-e-noia": "RelatoBarbanzaENoia.tsx",
    "golfo-artabro-e-ferrol": "RelatoGolfoArtabroEFerrol.tsx",
    "a-marina": "RelatoAMarina.tsx",
    "asturias-occidente": "RelatoAsturiasOccidente.tsx",
    "asturias-centro": "RelatoAsturiasCentro.tsx",
    "asturias-oriente": "RelatoAsturiasOriente.tsx",
    "cantabria-occidental": "RelatoCantabriaOccidental.tsx",
    "cantabria-oriental": "RelatoCantabriaOriental.tsx",
    "alto-minho": "RelatoAltoMinho.tsx",
    "litoral-norte": "RelatoLitoralNorte.tsx",
}

# alias nombre -> slug fragments for fuzzy
ALIASES = {
    "Nigrán": "nigran",
    "Baiona": "baiona",
    "Gondomar": "gondomar",
    "Vigo": "vigo",
    "Redondela": "redondela",
    "Soutomaior": "soutomaior",
    "Vilaboa": "vilaboa",
    "Cangas": "cangas",
    "Moaña": "moana",
    "Bueu": "bueu",
    "Marín": "marin",
    "Pontevedra": "pontevedra",
    "Poio": "poio",
    "Sanxenxo": "sanxenxo",
    "O Grove": "o-grove",
    "Meaño": "meano",
    "Cambados": "cambados",
    "A Illa": "a-illa-de-arousa",
    "Vilanova": "vilanova-de-arousa",
    "Vilagarcía": "vilagarcia-de-arousa",
    "Rianxo": "rianxo",
    "Boiro": "boiro",
    "A Pobra": "a-pobra-do-caraminal",
    "Noia": "noia",
    "Porto do Son": "porto-do-son",
    "Ribeira": "ribeira",
    "Oleiros": "oleiros",
    "Ares": "ares",
    "Miño": "mino",
    "Sada": "sada",
    "Ferrol": "ferrol",
    "Bergondo": "bergondo",
    "Viveiro": "viveiro",
    "Cervo": "cervo",
    "Foz": "foz",
    "Ribadeo": "ribadeo",
    "O Vicedo": "o-vicedo",
    "Xove": "xove",
    "Barreiros": "barreiros",
    "Burela": "burela",
    "Castropol": "castropol",
    "Navia": "navia",
    "Luarca": "luarca-valdes",
    "Tapia": "tapia-de-casariego",
    "Muros": "muros-de-nalon",
    "Soto": "soto-del-barco",
    "Cudillero": "cudillero",
    "Candás": "candas-carreno",
    "Salinas": "salinas-castrillon",
    "Luanco": "luanco-gocon",
    "Gijón": "gijon",
    "Villaviciosa": "villaviciosa",
    "Ribadedeva": "ribadedeva",
    "Colunga": "colunga",
    "Llanes": "llanes",
    "Ribadesella": "ribadesella",
    "Suances": "suances",
    "Liencres": "liencres-pienagos",
    "San Vicente": "san-vicente-de-la-barquera",
    "Comillas": "comillas",
    "Santander": "santander",
    "Santoña": "santona",
    "Laredo": "laredo",
    "Ribamontán": "ribamontan-al-mar",
    "Noja": "noja",
    "Castro": "castro-urdiales",
    "Valença": "valenca",
    "Cerveira": "vila-nova-de-cerveira",
    "Ponte de Lima": "ponte-de-lima",
    "Caminha": "caminha",
    "Vila Praia de Âncora": "vila-praia-de-ancora",
    "Âncora": "vila-praia-de-ancora",
    "Afife-Carreço": "afife-carreco",
    "Afife": "afife-carreco",
    "Viana": "viana-do-castelo",
    "Moledo": "moledo-caminha",
    "Esposende": "esposende",
    "Póvoa de Varzim": "povoa-de-varzim",
    "Vila do Conde": "vila-do-conde",
    "A Coruña": "a-coruna",
}


def parse_num(s: str) -> int:
    return int(s.replace(".", "").replace(",", ""))


def main() -> None:
    conflicts = []
    for zid, fname in RELATO.items():
        mun = {
            m["slug"]: m
            for m in json.loads((DATA / f"municipios-{zid}.json").read_text(encoding="utf-8"))
        }
        text = (COMP / fname).read_text(encoding="utf-8")
        # patterns: Name ... 1.234 €/m²  OR Name ronda 1.234 OR Name, 1.234
        # also "euros por metro cuadrado"
        patterns = [
            re.compile(
                r"([A-ZÁÉÍÓÚÑ][A-Za-zÁÉÍÓÚáéíóúñüÜ\- ]{2,30}?)\s+"
                r"(?:está en|ronda(?:\s+los)?|con|,)\s*"
                r"~?\s*(\d{1,2}\.?\d{3})\s*€\s*/\s*m",
                re.I,
            ),
            re.compile(
                r"([A-ZÁÉÍÓÚÑ][A-Za-zÁÉÍÓÚáéíóúñüÜ\- ]{2,30}?)\s+"
                r"ronda(?:\s+los)?\s+(\d{1,2}\.?\d{3})\s*euros\s+por\s+metro",
                re.I,
            ),
            re.compile(
                r"([A-ZÁÉÍÓÚÑ][A-Za-zÁÉÍÓÚáéíóúñüÜ\- ]{2,30}?)\s+los\s+(\d{1,2}\.?\d{3})"
                r"(?=\s*(?:y|,|\.|euros))",
                re.I,
            ),
            re.compile(
                r"([A-ZÁÉÍÓÚÑ][A-Za-zÁÉÍÓÚáéíóúñüÜ\- ]{2,25}?),\s+(\d{1,2}\.?\d{3})"
                r"(?=\s*(?:;|,|\.|€))",
                re.I,
            ),
            re.compile(
                r"([A-ZÁÉÍÓÚÑ][A-Za-zÁÉÍÓÚáéíóúñüÜ\- ]{2,25}?)\s+\(~?(\d{1,2}\.?\d{3})\)",
                re.I,
            ),
        ]
        seen = set()
        for pat in patterns:
            for m in pat.finditer(text):
                name = m.group(1).strip().rstrip(",")
                # normalize short names
                for alias in sorted(ALIASES, key=len, reverse=True):
                    if name.startswith(alias) or alias.startswith(name) or name == alias:
                        name = alias
                        break
                slug = ALIASES.get(name)
                if not slug or slug not in mun:
                    continue
                key = (zid, slug, m.group(2))
                if key in seen:
                    continue
                seen.add(key)
                narr = parse_num(m.group(2))
                capa = mun[slug].get("precioM2")
                nd = capa is None
                conflicts.append(
                    {
                        "zona": zid,
                        "nombre": name,
                        "slug": slug,
                        "narrativo": narr,
                        "capa": capa,
                        "nd": nd,
                        "delta": None if nd or capa is None else narr - capa,
                        "status": (
                            "ND_INVENTADO"
                            if nd
                            else (
                                "OK"
                                if abs(narr - capa) <= 50
                                else ("DESVIO" if abs(narr - capa) <= 200 else "CONTRADICCION")
                            )
                        ),
                    }
                )

    (ROOT / "output/_cursor37_price_conflicts.json").write_text(
        json.dumps(conflicts, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    from collections import Counter

    c = Counter(x["status"] for x in conflicts)
    print("n", len(conflicts), dict(c))
    for x in conflicts:
        if x["status"] != "OK":
            print(x["status"], x["zona"], x["nombre"], x["narrativo"], "vs", x["capa"])


if __name__ == "__main__":
    main()
