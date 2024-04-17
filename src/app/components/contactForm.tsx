import { FaMapLocation } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import Title from "./title";

export default function ContactForm() {
  return (
    <div className="flex flex-col lg:flex-row  justify-center items-center w-full px-20 mb-10  lg:mt-10 ">
      <div className="w-full px-10 lg:py-10   rounded-lg w-full  ">
        <Title title="CONTATO" />
      </div>
      <div className="bg-[#dae0eb] h-[550px] border-1 w-[100%] mt-10  lg:rounded-l-lg p-8 mb-5 lg:mb-0">
        <p className="text-gray-600 text-2xl">ENTRE EM CONTATO</p>

        <form className="">
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
      <div className="bg-tito-color h-[550px] w-[100%] mt-10 border-1 lg:rounded-r-lg p-8">
        <div>
          <p className="text-white text-xl">Informações de contato</p>
          <p className="text-gray-300 text-lg mt-4">
            Estamos abertos para qualquer sugestão ou apenas para bater um papo.
          </p>
          <div className="mt-8 flex items-start">
            <div className="flex justify-center bg-[#0c2247] h-[50px] w-[50px] border-1 rounded-full items-center">
              <FaMapLocation className="text-white min-w-[35px] text-xl " />
            </div>
            <div>
              <p className="text-white mb-1 ml-4">Endereço:</p>
              <p className="text-gray-400 ml-4 max-w-[260px]">
                198 West 21th Street, Suite 721 New York NY 10016
              </p>
            </div>
          </div>
          <div className="mt-10 flex items-start">
            <div className="flex justify-center bg-[#0c2247] h-[50px] w-[50px] border-1 rounded-full items-center">
              <FaPhone className="text-white min-w-[35px] text-xl" />
            </div>
            <div>
              <p className="text-white mb-1 ml-4">Telefone:</p>
              <p className="text-gray-400 ml-4">+1235 2355 98</p>
            </div>
          </div>
          <div className="mt-10 flex items-start">
            <div className="flex justify-center bg-[#0c2247] h-[50px] w-[50px] border-1 rounded-full items-center">
              <SiMinutemailer className="text-white min-w-[35px] text-xl " />
            </div>
            <div>
              <p className="text-white mb-1 ml-4">Email:</p>
              <span className="text-gray-400 ml-4">teste@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
