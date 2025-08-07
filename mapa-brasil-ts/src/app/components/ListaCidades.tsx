// Componente da Lista de cidades

import { ICidade } from "../page";



interface CidadesProps {
    cidadesList: ICidade[];
}

const ListaCidades = ({ cidadesList }: CidadesProps) => {

    const estado = cidadesList[1]?.estado; null;

    return (
        <div className="card bg-transparent text-neutral-content w-2xl">
            <div className="card-body items-start ">
                <h2 className="card-title">{estado}</h2>
                <ul className="list bg-base-100 rounded-box shadow-md w-full ">
                    {cidadesList.map((cidade) => (
                        <li key={cidade.id} className="list-row">
                            <div>
                                <p>{cidade.nome}</p>
                            </div>
                        </li>
                    ))

                    }
                </ul>
            </div>
        </div>
    )
}

export default ListaCidades;