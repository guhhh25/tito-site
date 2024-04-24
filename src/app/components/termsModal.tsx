import { useEffect, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";

export default function TermsModal() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen ? (
        <>

          <div className={` ${
              isModalOpen ? "block" : "hidden"} fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50`}></div>
        
          <div
            id="default-modal"
        
            aria-hidden="true"
            className={`${
              isModalOpen ? "block " : "hidden"
            } flex justify-center items-center animate-fade-down fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
          >
            <div className="relative p-4 w-full max-w-[1000px] w-full max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    TERMOS
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="default-modal"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>

                <div className="p-4 md:p-5 space-y-4">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    Site hospeda um sistema on line e estritamente confidencial.
                    Pode ser utilizado por qualquer indivíduo que possua contato
                    direto ou indireto com a empresa. A empresa encoraja a todos
                    sua utilização, ressaltando que não são coletadas
                    informações acerca da identificação de qualquer usuário.
                    Toda informação aposta no site é sigilosa, sendo vedada a
                    sua divulgação ou sua utilização para qualquer finalidade
                    escusa ou antiética. O usuário fica ciente, contudo que o
                    fornecimento intencional de informações falsas não será
                    tolerado. A denúncia poderá ser anônima ou não, podendo o
                    usuário fornecer qualquer informação que lhe permita
                    identificar. Qualquer acesso não autorizado a áreas
                    privativas do site, assim como tentativas ou consumação de
                    acesso ao código-fonte, serão consideradas atos de violação,
                    sendo devidamente tratadas de acordo com a especificação
                    penal vigente à época. As informações são protegidas e o
                    armazenamento seguro das mesmas é de responsabilidade do
                    Legal Ética. Qualquer informação adicional ou falha
                    sistêmica, deverá ser contatado o suporte técnico pelo canal
                    canal.tito@sengerwagner.com.br O uso responsável dessa
                    ferramenta contribui com um ambiente mais ético para todos.
                  </p>
                </div>

                <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    data-modal-hide="default-modal"
                    onClick={() => handleModal()}
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Aceito
                  </button>
                  <a href="/">
                  <button
                    data-modal-hide="default-modal"
                    type="button"
                    className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Recusar
                  </button>
                  </a>
                </div>
              </div>
            </div>
          
          </div>
       
        </>
      ) : (
        ""
      )}

    </>
  );
}
