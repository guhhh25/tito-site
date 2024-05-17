'use client'

import { MdCheck } from 'react-icons/md'
import Path from '../components/path'
import Footer from '../footer'
import Header from '../header'

export default function Planning() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex-grow flex">
          <div className="flex flex-col items-start">
            <Path
              link1="/"
              namePath1="Home"
              namePath2="Planejamento"
              link2="/planning"
            />
            <div className="content  ">
              <div className="w-full px-10 mb-10 h-50">
                <div className=" bg-white p-5  border-1 rounded-lg mt-5">
                  <p className="mt-5 mb-5">
                    Ao contratar a Tito sua empresa não está contratando um
                    serviço, ESTÁ CONTRATANDO UM RESULTADO. A Tito é
                    especializada no planejamento de soluções integrando todos
                    os serviços e conhecimento necessários para sucesso de seu
                    embarque em um ÚNICO FORNECEDOR. A Tito combina Gestão
                    Aduaneira, no nível de operações e consultoria legal com
                    ferramentas de Logística Internacional, tanto no âmbito
                    operacional quanto gerenciamento.
                  </p>
                  <div className="flex flex-col xl:flex-row gap-5">
                    <div>
                      <p className="text-gray-800 font-semibold mt-3">
                        Os objetivos dos planos da Tito para seus clientes são:
                      </p>
                      <p className="flex items-center mt-2">
                        <MdCheck className="mr-1" /> Redução de multas
                      </p>
                      <p className="flex items-center mt-2">
                        <MdCheck className="mr-1" /> Redução de tempo de cargas
                        paradas
                      </p>
                      <p className="flex items-center mt-2">
                        <MdCheck className="mr-1" />
                        Maior visibilidade da operação
                      </p>
                      <p className="flex items-center mt-2">
                        <MdCheck className="mr-1" /> Redução dos custos totais e
                        ganhos operacionais
                      </p>
                      <p className="flex items-center mt-2">
                        <MdCheck className="mr-1" /> Melhores alternativas em
                        contingência paradas
                      </p>
                      <p className="flex items-center mt-2">
                        <MdCheck className="mr-1" />
                        Efetivação de Ex-tarifários e Recuperação de Impostos
                        Pagos
                      </p>
                      <p className="flex items-center mt-2">
                        <MdCheck className="mr-1" /> Defesas de Multas
                      </p>
                      <p className="flex items-center mt-2">
                        <MdCheck className="mr-1" /> Regimes de Origem
                      </p>
                      <p className="flex items-center mt-2">
                        <MdCheck className="mr-1" />
                        Maior visibilidade da operação
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-800 font-semibold mt-3">
                        <br />
                      </p>
                      <p className="flex items-center mt-2">
                        <MdCheck className="mr-1" /> Redução de multas
                      </p>
                      <p className="flex items-center mt-2">
                        <MdCheck className="mr-1" /> Redução de tempo de cargas
                        paradas
                      </p>
                      <p className="flex items-center mt-2">
                        <MdCheck className="mr-1" />
                        Maior visibilidade da operação
                      </p>
                      <p className="flex items-center mt-2">
                        <MdCheck className="mr-1" /> Redução dos custos totais e
                        ganhos operacionais
                      </p>
                      <p className="flex items-center mt-2">
                        <MdCheck className="mr-1" /> Melhores alternativas em
                        contingência paradas
                      </p>
                      <p className="flex items-center mt-2">
                        <MdCheck className="mr-1" />
                        Efetivação de Ex-tarifários e Recuperação de Impostos
                        Pagos
                      </p>
                      <p className="flex items-center mt-2">
                        <MdCheck className="mr-1" /> Defesas de Multas
                      </p>
                      <p className="flex items-center mt-2">
                        <MdCheck className="mr-1" /> Regimes de Origem
                      </p>
                      <p className="flex items-center mt-2">
                        <MdCheck className="mr-1" />
                        Maior visibilidade da operação
                      </p>
                    </div>
                  </div>
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
