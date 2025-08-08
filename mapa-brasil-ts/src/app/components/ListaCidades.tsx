// Componente da Lista de cidades

import { ICidade } from "./homePageMapa";

interface CidadesProps {
    cidadesList: ICidade[];
}

const ListaCidades = ({ cidadesList }: CidadesProps) => {
    console.log("chegou em listaCidades",cidadesList);
    

    const estado = cidadesList[1]?.estado; null;

    return (
        <div className="card bg-transparent text-neutral-content w-96">
            <div className="card-body items-start ">
                <h2 className="card-title">{estado}</h2>
                <ul className="list bg-[#002776] rounded-box shadow-md w-full overflow-y-scroll  h-120">
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

{/* <div className="join">
  <button className="join-item btn">«</button>
  <button className="join-item btn">Page 22</button>
  <button className="join-item btn">»</button>
</div> */}

export default ListaCidades;