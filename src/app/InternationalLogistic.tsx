import { useState } from "react";
import InternationalLogisticContent from "./components/InternationLogisticContent";

export default function InternationalLogistic() {

  const [type, setType] = useState('maritmo');

  const setTypeState = (value: string) => {
    setType(value);
  }

  return (
    <div className="flex flex-col  lg:flex-row   mt-10 ">
      <div>
        <p className="tracking-wider font-bold">LOGÍSTICA INTERNACIONAL</p>

        <p className="tracking-wider text-lg lg:mt-5">
          As competências que a TITO desenvolveu, amparadas em modernos sistemas
          de gerenciamento dos fluxos, garantem agilidade e visibilidade nos
          embarques de Agenciamento de Cargas Marítimas, Aéreas e Terrestres.
        </p>
        <div className="w-full mt-4">
        <button onClick={() => setTypeState("maritmo")} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2">
          Marítimo
        </button>
        <button  onClick={() => setTypeState("aereo")} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
          Aéreo
        </button>
        <button onClick={() => setTypeState("rodoviario")} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mr-2">
          Rodoviario
        </button>
        <button onClick={() => setTypeState("projeto")} className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mr-2">
          Projeto
        </button>
        <button onClick={() => setTypeState("planejamento")} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
          Planejamento
        </button>
        <button onClick={() => setTypeState("rastreabilidade")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
          Rastreabilidade
        </button>

        <InternationalLogisticContent type={type}/>

        </div>
      </div>
      <div className="w-[720px] text-center">
       
      </div>
    </div>
  );
}
