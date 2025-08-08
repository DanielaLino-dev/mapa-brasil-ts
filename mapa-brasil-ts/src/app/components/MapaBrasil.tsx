'use client'

import React, { ReactNode } from "react";

//Interface dos parametros a serem recebidos. A função que retorna os dados das cidades e estados,
//  e os paths dos estados do svg
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
            className="mapa-brasil fill-[#002776] w-fit "
            onClick={handleClick}
            xmlns="http://www.w3.org/2000/svg"
            width="612.51611"
            height="639.04297"
        >
            {children}
        </svg>
    )
}
export default MapaBrasil;

