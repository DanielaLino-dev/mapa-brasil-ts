// Componente da Lista de cidades

interface cidadesProps {
    cidadesList: string[];
    estadoSelecionado: string | null;
}

const ListaCidades = ({ cidadesList, estadoSelecionado }: cidadesProps) => {

    

    return (
        <div className="card bg-transparent text-neutral-content w-2xl">
            <div className="card-body items-start ">
                <h2 className="card-title">{estadoSelecionado}</h2>
                <ul className="list bg-base-100 rounded-box shadow-md w-full ">
                    {cidadesList.map((cidade) =>
                    (<li className="list-row">
                        <div>
                            <div>{cidade}</div>
                        </div>
                    </li>))

                    }
                </ul>
            </div>
        </div>
    )
}

export default ListaCidades;