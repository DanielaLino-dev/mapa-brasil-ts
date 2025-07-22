// Componente da estrutura do mapa SVG clicável

import Image from "next/image";
import mapaBrasil from '../assets/brazil.svg'

const MapaBrasil = () => {

    return(
        <Image
        alt="Imagem do mapa do Brasil com as divisórias dos estados"
        src={mapaBrasil}
        />
    )
} 

export default MapaBrasil;