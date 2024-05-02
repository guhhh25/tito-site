'use client'

import Image from 'next/image'
import Path from '../components/path'
import Footer from '../footer'
import Header from '../header'

export default function OurStory() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex-grow flex">
          <div className="flex flex-col items-start">
            <Path
              link1="/"
              namePath1="Home"
              namePath2="Nossa Historia"
              link2="/ourstory"
            />
            <div className="content  ">
              <div className="w-full px-10 mb-10 h-50">
                <div className="flex flex-col items-center justify-center  bg-white p-5  border-1 rounded-lg mt-5">
                  <div className="flex flex-col xl:flex-row px-[65px]  items-center">
                    <div className="max-w-[690px]">
                      <p className="flex justify-center items-center mt-5 mb-5   px-8 text-lg 2xl:text-xl tracking-wider ">
                        Em 1935, o Sr. Tito Cademartori (foto) iniciou suas
                        atividades profissionais no escritório de serviços de
                        sua família, sucedendo ao seu pai, Sr. Alcides
                        Cademartori. Nascia a empresa. As atividades aduaneiras
                        eram exercidas na Vila da Barra do Quarai, atuando na
                        representação de importadores e exportadores nacionais.
                        A história da Tito teve início em uma época quando
                        expressões como logística, livre-comércio, outsourcing e
                        drawback sequer existiam. A Tito deu a cada uma delas
                        outros significados e outras funcionalidades e, a uma
                        especialmente, deu uma importância incalculável: A
                        CONFIANÇA.
                      </p>
                    </div>
                    <div className="flex justify-center items-center relative 2xl:w-[900px]">
                      <Image
                        src={'/story/history01.jpg'}
                        className=""
                        objectFit="fit"
                        height={800}
                        width={690}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col xl:flex-row px-[65px]  items-center">
                    <div className="flex justify-center items-center 2xl:justify-start relative 2xl:w-1/2">
                      <Image
                        src={'/story/history02.jpg'}
                        className=""
                        objectFit="fit"
                        height={800}
                        width={690}
                      />
                    </div>
                    <div className="max-w-[690px] ">
                      <p className="flex justify-center items-center mt-5 px-8 mb-5 text-wrap text-lg 2xl:text-xl tracking-wider ">
                        Nos anos 40, lideranças ligadas à Tito integraram a
                        Comissão Mista Pró-construção da Ponte Internacional
                        entre Paso de los Libres e Uruguaiana, demonstrando o
                        espírito empreendedor de seus integrantes. Com a
                        inauguração desta ponte, ao longo dos anos 40 e 50
                        intensificou-se o comércio bi-lateral entre Brasil e
                        Argentina. A Tito sente-se orgulhosa de manter em sua
                        atual carteira de clientes importadores e exportadores
                        que utilizavam seus serviços desde aquela época.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col xl:flex-row px-[65px]  items-center">
                    <div className="max-w-[690px]">
                      <p className="flex justify-center items-center mt-5 mb-5   px-8 text-lg 2xl:text-xl tracking-wider ">
                        No início dos anos 60 ocorreram dois marcos importantes
                        no comércio bi-lateral: a assinatura dos primeiros
                        protocolos da ALALC (Associação Latino-Americana de
                        Livre Comércio), que reduzia impostos e fomentou
                        relações comerciais no Cone Sul, além da concessão
                        recíproca de habilitações à transportadoras rodoviárias
                        terrestres, que propiciou uma nova alternativa de
                        transporte, deflagrando a pavimentação e modernização
                        das rodovias. Novamente a Tito teve papel nesse
                        intercâmbio, articulando acordos operacionais e
                        viabilizando negócios.
                      </p>
                    </div>
                    <div className="flex justify-center items-center relative 2xl:w-[900px]">
                      <Image
                        src={'/story/history03.jpg'}
                        className=""
                        objectFit="fit"
                        height={800}
                        width={690}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col xl:flex-row px-[65px]  items-center">
                    <div className="flex justify-center items-center 2xl:justify-start relative 2xl:w-1/2">
                      <Image
                        src={'/story/history05.jpeg'}
                        className=""
                        objectFit="fit"
                        height={500}
                        width={690}
                      />
                    </div>
                    <div className="max-w-[690px] ">
                      <p className="flex justify-center items-center mt-5 px-8 mb-5 text-wrap text-lg 2xl:text-xl tracking-wider ">
                        Nos anos 70 a empresa já possuía uma sólida atuação na
                        América do Sul. Com a consolidação dos fluxos comerciais
                        e a intensa movimentação de mercadorias, foram criados
                        os terminais de fronteira como centros de serviços
                        aduaneiros. Nos anos 80, a Tito foi uma das três
                        primeiras empresas do Brasil a automatizarem seus
                        processos internos investindo maciçamente em
                        informática.
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
