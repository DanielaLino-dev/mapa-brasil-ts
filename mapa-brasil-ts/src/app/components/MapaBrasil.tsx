
import React, { ReactNode } from "react";

interface MapaProps {
    onEstadoClick: (estadoId: string) => void;
    children: ReactNode;
}

const MapaBrasil = ({ onEstadoClick, children }: MapaProps) => {
    const handleClick = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
        const target = e.target as SVGAElement;
        const estadoId = target.id;
        if (estadoId && onEstadoClick) {
            onEstadoClick(estadoId);
        }
    }

    return (
        <svg
            onClick={handleClick}
            {...({
                "xmlns:mapsvg": "http://mapsvg.com",
                "xmlns:dc": "http://purl.org/dc/elements/1.1/",
                "xmlns:rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
                "xmlns:svg": "http://www.w3.org/2000/svg",
                "xmlns": "http://www.w3.org/2000/svg",
                "width": "612.51611",
                "height": "639.04297",
                "mapsvg:geoViewBox": "-74.008595 5.275696 -34.789914 -33.743888",
            } as any)}
        >
            {children}
        </svg>
    )
}
export default MapaBrasil;

// import Image from "next/image";
// import mapaBrasil from '../assets/brazil.svg'
// import React from "react";

// const MapaBrasil = () => {
//     return (
//         <Image
//         src={mapaBrasil}
//         alt="Mapa do Brasil"
//         unoptimized
//         />
//     )

// }

// export default MapaBrasil;