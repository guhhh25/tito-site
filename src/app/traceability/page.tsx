'use client'

import { MdCheck } from 'react-icons/md'
import Path from '../components/path'
import Footer from '../footer'
import Header from '../header'

export default function Traceability() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex-grow flex">
          <div className="flex flex-col items-start">
            <Path
              link1="/"
              namePath1="Home"
              namePath2="Rastreabilidade"
              link2="/traceability"
            />
            <div className="content  ">
              <div className="w-full px-10 mb-10 h-50">
                <div className=" bg-white p-5  border-1 rounded-lg mt-5">
                  <p className="mt-5 mb-5">
                    O conceito de Smartmodal Logistics, também está fortemente
                    embasado em alta tecnologia. Uma poderosa intranet, com um
                    sistema “back to office” garante a sincronização entre
                    clientes regionais da cadeia de suprimentos logísticos. Já
                    sua Extranet permite que cada cliente possa ter estações de
                    trabalho para interação ou acompanhamento de operações. Esta
                    plataforma oferece rastreabilidade, transparência e
                    inteligência para planejamento e rápida tomada de decisão. O
                    sistema de Gestão de Processos da Bysoft nos módulos i
                    Broker Import, i Broker export e i Drawback, possibilita
                    interface com sistemas Easy, Software, entre outros sistemas
                    de nossos clientes.
                  </p>
                  <p className="text-gray-800 font-semibold mt-3">
                    A partir do Web Tracking Tito:
                  </p>
                  <p className="flex items-center mt-2">
                    <MdCheck className="mr-1" />
                    Maior visibilidade em todas as etapas do processo
                  </p>
                  <p className="flex items-center mt-2">
                    <MdCheck className="mr-1" /> Relatórios gerenciais de acordo
                    com a necessidade de cada operação
                  </p>
                  <p className="flex items-center mt-2">
                    <MdCheck className="mr-1" /> Documentos relativos às
                    operações no sistema.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
