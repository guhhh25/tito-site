import Mapa from "./components/map";
import Title from "./components/title";

export default function Contact(){
    return (
        <div className="flex justify-center px-8 lg:p-20  items-center w-[100%] mb-10 lg:max-h-[622px] ">
        <div className=" bg-white w-full px-4 lg:px-10 py-10 rounded-lg w-full max-w-[1720px] ">

        <Title title="CONTATO" />
        <form className="w-1/2">
          <div className="flex flex-col mt-8">
            <input
              type="text"
              className=" border-b border-gray-600 bg-transparent focus:outline-none mb-5 text-gray-600 placeholder-gray-600 py-1 "
              placeholder="Nome"
            />

            <input
              type="text"
              className=" border-b border-gray-600 bg-transparent focus:outline-none mb-5 text-gray-600 placeholder-gray-600 py-1 "
              placeholder="Telefone"
            />

            <input
              type="text"
              className=" border-b border-gray-600 bg-transparent focus:outline-none mb-5 text-gray-600 placeholder-gray-600 py-1 "
              placeholder="Email"
            />

            <input
              type="text"
              className=" border-b border-gray-600 bg-transparent focus:outline-none mb-5 text-gray-600 placeholder-gray-600 py-1 "
              placeholder="Assunto"
            />

            <textarea
              rows={2}
              className=" border-b border-gray-600 bg-transparent focus:outline-none mb-5 text-gray-600 placeholder-gray-600 py-1 "
              placeholder="Mensagem"
            />

            <button className="bg-gray-500 mt-8 text-white hover:bg-gray-600 text-white-700 font-semibold hover:text-white py-2 px-4 rounded-lg">
              ENVIAR
            </button>
          </div>
          
        </form>
            </div>
        <Mapa/>
            </div>
    )
}