import { useState } from "react";
import InternationalLogisticContent from "./components/InternationLogisticContent";
import Title from "./components/title";
import { MdCheck } from "react-icons/md";

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
        <div className="w-full mt-8">
          <div className="flex justify-center">
        <button onClick={() => setTypeState("maritmo")} className={`${
    type === "maritmo" ? "bg-blue-500 hover:bg-blue-700" : "bg-gray-500 hover:bg-gray-700"
  } text-white font-bold py-2 px-6   -mr-1 rounded-b-none`}>
          Marítimo
        </button>
        <button  onClick={() => setTypeState("aereo")} className= {` -mr-1 ${type === "aereo" ? "bg-blue-500 hover:bg-blue-700" : "bg-gray-500 hover:bg-gray-700" }  text-white font-bold py-2 px-6 `}>
          Aéreo
        </button>
        <button onClick={() => setTypeState("rodoviario")} className= {`-mr-1  ${type === "rodoviario" ? "bg-blue-500 hover:bg-blue-700" : "bg-gray-500 hover:bg-gray-700" }  text-white font-bold py-2 px-6 `}>
          Rodoviario
        </button>
        <button onClick={() => setTypeState("projeto")} className= {` -mr-1 ${type === "projeto" ? "bg-blue-500 hover:bg-blue-700" : "bg-gray-500 hover:bg-gray-700" }  text-white font-bold py-2 px-6  `}>
          Projeto
        </button>
        <button onClick={() => setTypeState("planejamento")} className= {` -mr-1 ${type === "planejamento" ? "bg-blue-500 hover:bg-blue-700" : "bg-gray-500 hover:bg-gray-700" }  text-white font-bold py-2 px-6 `}>
          Planejamento
        </button>
        <button onClick={() => setTypeState("rastreabilidade")} className= {` -mr-1 ${type === "rastreabilidade" ? "bg-blue-500 hover:bg-blue-700" : "bg-gray-500 hover:bg-gray-700" }  text-white font-bold py-2 px-6   rounded-b-none`}>
          Rastreabilidade
        </button>
        </div>

        <InternationalLogisticContent type={type}/>

        </div>
      </div>
     
    </div>
  );
}
