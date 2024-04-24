"use client";
import Path from "../components/path";
import TermsModal from "../components/termsModal";
import Title from "../components/title";
import Footer from "../footer";
import Header from "../header";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { LuNewspaper } from "react-icons/lu";
import { RiLockPasswordLine } from "react-icons/ri";
import Select from "react-select";
import { titoItemsObjects, reasonsObjects } from "./../Utils/reportSelectItems";
import { useEffect, useState } from "react";
import Loading from "../components/loading";

export default function Report() {
  const [isLoading, setIsLoading] = useState(true);
  const [nextStep, setNextStep] = useState(false);

  const handleNextStep = () => {
    setNextStep(!nextStep);
  };

  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col h-full ">
      {isLoading ? (
        <div className="flex justify-center items-center h-[100vh] w-full">
        <Loading />
      </div>
      ) : (
        <>
          <Header />
          <div className="flex-grow flex w-full  ">
            <div className="flex flex-col justify-center items-center w-full h-fit">
              <Path
                link1="/"
                namePath1="Home"
                namePath2="Logística Internacional"
                link2="/internationallogistics"
              />
              <div className="content w-full">
                <div className="w-full px-10 mb-10  w-full">
                  <div className="flex flex-col  justify-center w-full text-center items-center w-full">
                    <TermsModal />
                    <p className="text-gray-600 font-bold tracking-wider text-2xl py-5 pb-5">
                      CANAL DE DENUNCIA
                    </p>
                    <div className="flex flex-col lg:flex-row justify-center items-end w-full py-5">
                      <div className="flex  justify-center items-center justify-center flex-col w-full">
                        <a
                          href="#"
                          className="block max-w-sm p-6 bg-tito-color shadow-xl rounded-lg shadow  "
                        >
                          <p className="font-bold text-gray-100 ">
                            O Canal de Denúncias, possibilita que funcionários,
                            parceiros comerciais, clientes e outros interessados
                            no processo, reportem fatos, denúncias e sugestões,
                            de forma anônima, bem como permite que a
                            Adaministração da empresa tenha conhecimento de
                            fatos, investigue e previna condutas antiéticas que
                            não estejam de acordo com os valores expressados em
                            seu Código de Conduta.
                          </p>
                        </a>
                        <div className="flex justify-center text-center  items-center  mt-5 mb-5">
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
                            De forma a garantir comunicação com sigilo, a
                            empresa contratou empresa de auditoria MGI, para
                            recebimento, análise e encaminhamento dos relatos
                            recebidos, de forma independente
                          </p>
                        </a>
                        <div className="flex justify-center text-center  items-center mt-5 mb-5">
                          <div className=" flex justify-center text-center  items-center  border rounded-full bg-tito-color h-[50px] w-[50px]">
                            <LuNewspaper className="h-[50px] w-[25px] text-white" />
                          </div>

                          <p className="ml-2 text-gray-800 font-bold">
                            Registre seu relato
                          </p>
                        </div>
                      </div>
                      <div className="flex  justify-center items-center justify-center flex-col  w-full">
                        <a
                          href="#"
                          className="block max-w-sm p-6 bg-tito-color shadow-2xl rounded-lg shadow  "
                        >
                          <p className="font-bold text-gray-100 ">
                            A empresa de auditoria analisará os relatos,
                            realizando devidas análises e investigações,
                            reportando à Diretoria e Conselho da empresa, para
                            encaminhamento conforme seu Código de Conduta.
                          </p>
                        </a>
                        <div className="flex justify-center text-center  items-center  mt-5 mb-5">
                          <div className=" flex justify-center text-center  items-center  border rounded-full bg-tito-color h-[50px] w-[50px]">
                            <RiLockPasswordLine className="h-[50px] w-[25px] text-white" />
                          </div>
                          <p className="ml-2 text-gray-800 font-bold">
                            Segurança
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-around w-full text-gray-600 font-bold bg-white py-5 tracking-wider text-2xl mt-10 mb-5">
                      REGISTRE SEU RELATO
                      <div>
                        {/* SECTION 1 */}
                        {!nextStep ? (
                          <form className="flex flex-col justify-center items-center mt-10  w-full ">
                            <div className="flex lg:flex-row flex-col ">
                              <div className="mb-5 px-5 ">
                                <input
                                  type="text"
                                  className=" text-gray-700 border border-gray-300  text-sm rounded-lg border-3 focus:outline-none focus:border-sky-500  block w-[600px] p-2.5"
                                  placeholder="Nome (Não Obrigatório)"
                                  required
                                />
                              </div>
                              <div className="mb-5 px-5">
                                <input
                                  type="date"
                                  placeholder="Data da Ocorrencia"
                                  className=" text-gray-700 border border-gray-300  text-sm rounded-lg border-3 focus:outline-none focus:border-sky-500  block w-[600px] p-2.5"
                                  required
                                />
                              </div>
                            </div>
                            <div className="flex lg:flex-row flex-col">
                              <div className="mb-5 px-5">
                                <input
                                  type="email"
                                  className=" text-gray-700 border border-gray-300  text-sm rounded-lg border-3 focus:outline-none focus:border-sky-500  block w-[600px] p-2.5"
                                  placeholder="Email (Não Obrigatório)"
                                  required
                                />
                              </div>
                              <div className="mb-5 px-5">
                                <input
                                  type="text"
                                  className=" text-gray-700 border border-gray-300  text-sm rounded-lg border-3 focus:outline-none focus:border-sky-500  block w-[600px] p-2.5"
                                  placeholder="Telefone (Não Obrigatório)"
                                  required
                                />
                              </div>
                            </div>
                            <div className="flex lg:flex-row flex-col">
                              <div className="mb-5 px-5">
                                <input
                                  type="text"
                                  className=" text-gray-700 border border-gray-300  text-sm rounded-lg border-3 focus:outline-none focus:border-sky-500  block w-[600px] p-2.5"
                                  placeholder="Nome (Não Obrigatório)"
                                  required
                                />
                              </div>
                              <div className="mb-5 px-5">
                                <input
                                  type="text"
                                  className=" text-gray-700 border border-gray-300  text-sm rounded-lg border-3 focus:outline-none focus:border-sky-500  block w-[600px] p-2.5"
                                  placeholder="Data da Ocorrencia"
                                  required
                                />
                              </div>
                            </div>
                            <div className="flex lg:flex-row flex-col">
                              <div className="mb-5 px-5">
                                <Select
                                  isMulti
                                  options={reasonsObjects}
                                  className=" w-[600px] text-sm text-start"
                                  placeholder="Selecione..."
                                />
                              </div>
                              <div className="mb-5 px-5">
                                <Select
                                  isMulti
                                  options={titoItemsObjects}
                                  className=" w-[600px] text-sm text-start"
                                  placeholder="Selecione..."
                                />
                              </div>
                            </div>
                            <button
                              onClick={() => handleNextStep()}
                              className="bg-gray-300 hover:bg-gray-400 text-lg text-gray-800 font-bold py-2 px-4 max-w-[200px] h-[50px] rounded-r mt-5"
                            >
                              Proximo
                            </button>
                          </form>
                        ) : (
                          <div className="text-start flex animate-fade-right px-10 mt-10 ">
                            <form className="w-full">
                              <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
                                <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
                                  <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
                                    <div className="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                                      <button
                                        type="button"
                                        className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white "
                                      >
                                        <svg
                                          className="w-4 h-4"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 12 20"
                                        >
                                          <path
                                            stroke="currentColor"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                                          />
                                        </svg>
                                        <span className="sr-only">
                                          Attach file
                                        </span>
                                      </button>
                                      <button
                                        type="button"
                                        className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                      >
                                        <svg
                                          className="w-4 h-4"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="currentColor"
                                          viewBox="0 0 16 20"
                                        >
                                          <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                                        </svg>
                                        <span className="sr-only">
                                          Embed map
                                        </span>
                                      </button>
                                      <button
                                        type="button"
                                        className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                      >
                                        <svg
                                          className="w-4 h-4"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="currentColor"
                                          viewBox="0 0 16 20"
                                        >
                                          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                        </svg>
                                        <span className="sr-only">
                                          Upload image
                                        </span>
                                      </button>
                                      <button
                                        type="button"
                                        className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                      >
                                        <svg
                                          className="w-4 h-4"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="currentColor"
                                          viewBox="0 0 16 20"
                                        >
                                          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                                          <path d="M14.067 0H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.933-2ZM6.709 13.809a1 1 0 1 1-1.418 1.409l-2-2.013a1 1 0 0 1 0-1.412l2-2a1 1 0 0 1 1.414 1.414L5.412 12.5l1.297 1.309Zm6-.6-2 2.013a1 1 0 1 1-1.418-1.409l1.3-1.307-1.295-1.295a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1-.001 1.408v.004Z" />
                                        </svg>
                                        <span className="sr-only">
                                          Format code
                                        </span>
                                      </button>
                                      <button
                                        type="button"
                                        className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                      >
                                        <svg
                                          className="w-4 h-4"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                        >
                                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3.5 9.5A5.5 5.5 0 0 1 4.6 11h10.81A5.5 5.5 0 0 1 10 15.5Z" />
                                        </svg>
                                        <span className="sr-only">
                                          Add emoji
                                        </span>
                                      </button>
                                    </div>
                                    <div className="flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:ps-4">
                                      <button
                                        type="button"
                                        className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                      >
                                        <svg
                                          className="w-4 h-4"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 21 18"
                                        >
                                          <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9.5 3h9.563M9.5 9h9.563M9.5 15h9.563M1.5 13a2 2 0 1 1 3.321 1.5L1.5 17h5m-5-15 2-1v6m-2 0h4"
                                          />
                                        </svg>
                                        <span className="sr-only">
                                          Add list
                                        </span>
                                      </button>
                                      <button
                                        type="button"
                                        className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                      >
                                        <svg
                                          className="w-4 h-4"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                        >
                                          <path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
                                        </svg>
                                        <span className="sr-only">
                                          Settings
                                        </span>
                                      </button>
                                      <button
                                        type="button"
                                        className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                      >
                                        <svg
                                          className="w-4 h-4"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                        >
                                          <path d="M18 2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM2 18V7h6.7l.4-.409A4.309 4.309 0 0 1 15.753 7H18v11H2Z" />
                                          <path d="M8.139 10.411 5.289 13.3A1 1 0 0 0 5 14v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .7-.288l2.886-2.851-3.447-3.45ZM14 8a2.463 2.463 0 0 0-3.484 0l-.971.983 3.468 3.468.987-.971A2.463 2.463 0 0 0 14 8Z" />
                                        </svg>
                                        <span className="sr-only">
                                          Timeline
                                        </span>
                                      </button>
                                      <button
                                        type="button"
                                        className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                      >
                                        <svg
                                          className="w-4 h-4"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                        >
                                          <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                                          <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                                        </svg>
                                        <span className="sr-only">
                                          Download
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                  <button
                                    type="button"
                                    data-tooltip-target="tooltip-fullscreen"
                                    className="p-2 text-gray-500 rounded cursor-pointer sm:ms-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white "
                                  >
                                    <svg
                                      className="w-4 h-4"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 19 19"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 1h5m0 0v5m0-5-5 5M1.979 6V1H7m0 16.042H1.979V12M18 12v5.042h-5M13 12l5 5M2 1l5 5m0 6-5 5"
                                      />
                                    </svg>
                                    <span className="sr-only">Full screen</span>
                                  </button>
                                  <div
                                    id="tooltip-fullscreen"
                                    role="tooltip"
                                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                                  >
                                    Show full screen
                                    <div
                                      className="tooltip-arrow"
                                      data-popper-arrow
                                    ></div>
                                  </div>
                                </div>
                                <div className="px-4 py-2 bg-white rounded-b-lg ">
                                  <label className="sr-only">
                                    Publish post
                                  </label>
                                  <textarea
                                    className=" text-gray-700 border border-gray-300 w-full h-[280px] text-sm rounded-lg border-3 focus:outline-none focus:border-sky-500  block p-2.5"
                                    placeholder="Write an article..."
                                    required
                                  ></textarea>
                                </div>
                              </div>
                            <div>
                            <p className="text-start  mt-5  text-sm">
                          <label className="inline-flex items-center  cursor-pointer">
                            <input
                              type="checkbox"
                              value=""
                              className="sr-only peer"
                            />
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-500">
                              Concordo com os termos apresentados
                            </span>
                          </label>
                          <button
                            type="submit"
                            className="flex mt-5 items-end w-[100px] items-end px-5 py-2.5 text-sm font-medium text-end text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                          >
                            Enviar
                          </button>
                        </p>
                        </div>
                            </form>
                          </div>
                          
                        )}
                     
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </>
      )}
    </div>
  );
}
