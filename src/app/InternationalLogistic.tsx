import { useState } from "react";
import InternationalLogisticContent from "./components/InternationLogisticContent";
import Title from "./components/title";

export default function InternationalLogistic() {

  const [type, setType] = useState('maritmo');


  const setTypeState = (value: string) => {
    setType(value);
  }

  return (
    <div className="flex flex-col  lg:flex-row   mt-10 ">
      <div>
        <Title title="LOGÍSTICA INTERNACIONAL"/>

        <p className="tracking-wider text-lg lg:mt-5">
          As competências que a TITO desenvolveu, amparadas em modernos sistemas
          de gerenciamento dos fluxos, garantem agilidade e visibilidade nos
          embarques de Agenciamento de Cargas Marítimas, Aéreas e Terrestres.
        </p>
        <div className="w-full mt-4">
        <button onClick={() => setTypeState("maritmo")} className= {`${type === "maritmo" ? "bg-blue-500 hover:bg-blue-700" : "bg-gray-500 hover:bg-gray-700" }  text-white font-bold py-2 px-4 rounded mr-2`}>
          Marítimo
        </button>
        <button  onClick={() => setTypeState("aereo")} className= {`${type === "aereo" ? "bg-blue-500 hover:bg-blue-700" : "bg-gray-500 hover:bg-gray-700" }  text-white font-bold py-2 px-4 rounded mr-2`}>
          Aéreo
        </button>
        <button onClick={() => setTypeState("rodoviario")} className= {`${type === "rodoviario" ? "bg-blue-500 hover:bg-blue-700" : "bg-gray-500 hover:bg-gray-700" }  text-white font-bold py-2 px-4 rounded mr-2`}>
          Rodoviario
        </button>
        <button onClick={() => setTypeState("projeto")} className= {`${type === "projeto" ? "bg-blue-500 hover:bg-blue-700" : "bg-gray-500 hover:bg-gray-700" }  text-white font-bold py-2 px-4 rounded mr-2`}>
          Projeto
        </button>
        <button onClick={() => setTypeState("planejamento")} className= {`${type === "planejamento" ? "bg-blue-500 hover:bg-blue-700" : "bg-gray-500 hover:bg-gray-700" }  text-white font-bold py-2 px-4 rounded mr-2`}>
          Planejamento
        </button>
        <button onClick={() => setTypeState("rastreabilidade")} className= {`${type === "rastreabilidade" ? "bg-blue-500 hover:bg-blue-700" : "bg-gray-500 hover:bg-gray-700" }  text-white font-bold py-2 px-4 rounded mr-2`}>
          Rastreabilidade
        </button>

        <InternationalLogisticContent type={type}/>

        </div>
      </div>
     
    </div>
  );
}
