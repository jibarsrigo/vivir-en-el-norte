import RelatoBaixoMino from "@/components/RelatoBaixoMino";
import RelatoValMinor from "@/components/RelatoValMinor";
import RelatoVigoERia from "@/components/RelatoVigoERia";
import RelatoOMorrazo from "@/components/RelatoOMorrazo";
import RelatoPontevedraESanxenxo from "@/components/RelatoPontevedraESanxenxo";
import RelatoOSalnes from "@/components/RelatoOSalnes";
import RelatoBarbanzaENoia from "@/components/RelatoBarbanzaENoia";
import RelatoGolfoArtabroEFerrol from "@/components/RelatoGolfoArtabroEFerrol";
import RelatoAMarina from "@/components/RelatoAMarina";
import RelatoAsturiasOccidente from "@/components/RelatoAsturiasOccidente";
import RelatoAsturiasCentro from "@/components/RelatoAsturiasCentro";
import RelatoAsturiasOriente from "@/components/RelatoAsturiasOriente";
import RelatoCantabriaOccidental from "@/components/RelatoCantabriaOccidental";
import RelatoCantabriaOriental from "@/components/RelatoCantabriaOriental";
import RelatoAltoMinho from "@/components/RelatoAltoMinho";
import RelatoLitoralNorte from "@/components/RelatoLitoralNorte";
import type { Zona } from "@/lib/zonas";

/** Relato de zona compartido (CURRENT y NUEVO2 hasta reescrituras propias). */
export default function RelatoZona({ zona }: { zona: Zona }) {
  if (zona.id === "baixo-mino") return <RelatoBaixoMino zona={zona} />;
  if (zona.id === "val-minor") return <RelatoValMinor zona={zona} />;
  if (zona.id === "vigo-e-ria") return <RelatoVigoERia zona={zona} />;
  if (zona.id === "o-morrazo") return <RelatoOMorrazo zona={zona} />;
  if (zona.id === "pontevedra-e-sanxenxo") return <RelatoPontevedraESanxenxo zona={zona} />;
  if (zona.id === "o-salnes") return <RelatoOSalnes zona={zona} />;
  if (zona.id === "barbanza-e-noia") return <RelatoBarbanzaENoia zona={zona} />;
  if (zona.id === "golfo-artabro-e-ferrol") return <RelatoGolfoArtabroEFerrol zona={zona} />;
  if (zona.id === "a-marina") return <RelatoAMarina zona={zona} />;
  if (zona.id === "asturias-occidente") return <RelatoAsturiasOccidente zona={zona} />;
  if (zona.id === "asturias-centro") return <RelatoAsturiasCentro zona={zona} />;
  if (zona.id === "asturias-oriente") return <RelatoAsturiasOriente zona={zona} />;
  if (zona.id === "cantabria-occidental") return <RelatoCantabriaOccidental zona={zona} />;
  if (zona.id === "cantabria-oriental") return <RelatoCantabriaOriental zona={zona} />;
  if (zona.id === "alto-minho") return <RelatoAltoMinho zona={zona} />;
  if (zona.id === "litoral-norte") return <RelatoLitoralNorte zona={zona} />;
  return null;
}
