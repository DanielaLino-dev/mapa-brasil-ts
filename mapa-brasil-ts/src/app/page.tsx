// Arquivo de Conteúdo da página central(inicial)

import MapaBrasil from "@/app/components/MapaBrasil";
import ListaCidades from "./components/ListaCidades";

export default function HomePage() {
  return (
    <section className="w-full flex flex-col gap-14 items-center  ">
      <h1 className="text-4xl pt-7">Mapa de Estados do Brasil</h1>
      <MapaBrasil/>
      <ListaCidades/>
    </section>
  );
}
