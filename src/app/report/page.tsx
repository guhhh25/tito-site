"use client";
import Path from "../components/path";
import Title from "../components/title";
import Footer from "../footer";
import Header from "../header";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { LuNewspaper } from "react-icons/lu";
import { RiLockPasswordLine } from "react-icons/ri";

export default function Report() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex-grow flex w-full ">
        <div className="flex flex-col justify-center items-center w-full h-fit">
          <Path
            link1="/"
            namePath1="Home"
            namePath2="Logística Internacional"
            link2="/internationallogistics"
          />
          <div className="content w-full ">
            <div className="w-full px-10 mb-10  w-full">
              <div className="flex flex-col  justify-center w-full text-center items-center w-full">
                <p className="text-gray-600 font-bold tracking-wider text-2xl">
                  CANAL DE DENUNCIA
                </p>
                <div className="flex flex-col lg:flex-row justify-center items-end w-full">
                  <div className="flex  justify-center items-center justify-center flex-col w-full">
                    <a
                      href="#"
                      className="block max-w-sm p-6 bg-tito-color shadow-xl rounded-lg shadow  "
                    >
                      <p className="font-bold text-gray-100 ">
                        O Canal de Denúncias, possibilita que funcionários,
                        parceiros comerciais, clientes e outros interessados no
                        processo, reportem fatos, denúncias e sugestões, de
                        forma anônima, bem como permite que a Adaministração da
                        empresa tenha conhecimento de fatos, investigue e
                        previna condutas antiéticas que não estejam de acordo
                        com os valores expressados em seu Código de Conduta.
                      </p>
                    </a>
                    <div className="flex justify-center text-center  items-center lg:mt-2 mt-5 mb-5">
                      <div className=" flex justify-center text-center  items-center  border rounded-full bg-tito-color h-[50px] w-[50px]">
                        <HiOutlineSpeakerphone className="h-[50px] w-[25px] text-white" />
                      </div>
                      <p className="ml-2  text-gray-800 font-bold">
                        Enviando a denuncia
                      </p>
                    </div>
                  </div>
                  <div className="flex  justify-center items-center justify-center flex-col w-full">
                    <a
                      href="#"
                      className="block max-w-sm p-6 bg-tito-color shadow-2xl rounded-lg shadow   "
                    >
                      <p className="font-bold text-gray-100 ">
                        De forma a garantir comunicação com sigilo, a empresa
                        contratou empresa de auditoria MGI, para recebimento,
                        análise e encaminhamento dos relatos recebidos, de forma
                        independente
                      </p>
                    </a>
                    <div className="flex justify-center text-center  items-center lg:mt-2 mt-5 mb-5">
                      <div className=" flex justify-center text-center  items-center  border rounded-full bg-tito-color h-[50px] w-[50px]">
                        <LuNewspaper className="h-[50px] w-[25px] text-white" />
                      </div>

                      <p className="ml-2 text-gray-800 font-bold">
                        Registre seu relato
                      </p>
                    </div>
                  </div>
                  <div className="flex  justify-center items-center justify-center flex-col w-full">
                    <a
                      href="#"
                      className="block max-w-sm p-6 bg-tito-color shadow-2xl rounded-lg shadow  "
                    >
                      <p className="font-bold text-gray-100 ">
                        A empresa de auditoria analisará os relatos, realizando
                        devidas análises e investigações, reportando à Diretoria
                        e Conselho da empresa, para encaminhamento conforme seu
                        Código de Conduta.
                      </p>
                    </a>
                    <div className="flex justify-center text-center  items-center lg:mt-2 mt-5 mb-5">
                      <div className=" flex justify-center text-center  items-center  border rounded-full bg-tito-color h-[50px] w-[50px]">
                        <RiLockPasswordLine className="h-[50px] w-[25px] text-white" />
                      </div>
                      <p className="ml-2 text-gray-800 font-bold">Segurança</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-around w-full text-gray-600 font-bold bg-white py-5 tracking-wider text-2xl mt-10 mb-5">
                  REGISTRE SEU RELATO
                  <div>
                    <form className="flex flex-col justify-center items-center mt-10 w-full ">
                      <div className="flex lg:flex-row flex-col">
                        <div className="mb-5 px-5">
                          <input
                            type="text"
                            id="email"
                            className="bg-tito-color border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[600px] p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-800 dark:focus:border-blue-800"
                            placeholder="Nome (Não Obrigatório)"
                            required
                          />
                        </div>
                        <div className="mb-5 px-5">
                          <input
                            type="text"
                            id="email"
                            className="bg-tito-color border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[600px] p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-800 dark:focus:border-blue-800"
                            placeholder="Data da Ocorrencia"
                            required
                          />
                        </div>
                      </div>
                      <div className="flex lg:flex-row flex-col">
                        <div className="mb-5 px-5">
                          <input
                            type="email"
                            id="email"
                            className="bg-tito-color border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[600px] p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-800 dark:focus:border-blue-800"
                            placeholder="Email (Não Obrigatório)"
                            required
                          />
                        </div>
                        <div className="mb-5 px-5">
                          <input
                            type="text"
                            id="email"
                            className="bg-tito-color border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[600px] p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-800 dark:focus:border-blue-800"
                            placeholder="Telefone (Não Obrigatório)"
                            required
                          />
                        </div>
                      </div>
                      <div className="flex lg:flex-row flex-col">
                        <div className="mb-5 px-5">
                          <input
                            type="text"
                            id="email"
                            className="bg-tito-color border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[600px] p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-800 dark:focus:border-blue-800"
                            placeholder="Nome (Não Obrigatório)"
                            required
                          />
                        </div>
                        <div className="mb-5 px-5">
                          <input
                            type="text"
                            id="email"
                            className="bg-tito-color border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[600px] p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-800 dark:focus:border-blue-800"
                            placeholder="Data da Ocorrencia"
                            required
                          />
                        </div>
                      </div>
                      <div className="flex lg:flex-row flex-col">
                        <div className="mb-5 px-5">
                          <select
                            multiple
                            id="countries_multiple"
                            className="bg-tito-color border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[600px] p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-800 dark:focus:border-blue-800"
                          >
                            <option selected>
                              SUDEX TITO COMISSARIA DE DESPACHOS ADUANEIROS LTDA{" "}
                            </option>
                            <option value="US">
                              SUDEX - TITO LOGISTICA LTDA{" "}
                            </option>
                          </select>
                        </div>
                        <div className="mb-5 px-5">
                          <select
                            multiple
                            id="countries_multiple"
                            className="bg-tito-color border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[600px] p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-800 dark:focus:border-blue-800"
                          >
                            <option selected>Agressão Verbal</option>
                            <option value="US">Agressão Verbal</option>
                            <option value="CA">Agressão Verbal</option>
                            <option value="FR">Agressão Verbal</option>
                            <option value="DE">Agressão Verbal</option>
                          </select>
                        </div>
                      </div>
                      <button className="bg-gray-300 hover:bg-gray-400 text-lg text-gray-800 font-bold py-2 px-4 max-w-[200px] h-[50px] rounded-r mt-5">
                        Proximo
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
