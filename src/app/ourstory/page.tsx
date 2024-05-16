'use client'

import Image from 'next/image'
import Path from '../components/path'
import Footer from '../footer'
import Header from '../header'

export default function OurStory() {
  return (
    <>
      <div className="flex  flex-col h-screen">
        <Header />
        <div className="flex-grow flex">
          <div className="flex flex-col justify-center items-center w-full">
            <Path
              link1="/"
              namePath1="Home"
              namePath2="Nossa Historia"
              link2="/ourstory"
            />
            <div className="content  ">
              <div className="w-full px-10 mb-10 h-50">
                <div className="flex flex-col  items-center justify-center  bg-white p-5  border-1 rounded-lg mt-5">
                  <div className="flex flex-col justify-center xl:flex-row px-[65px]  items-center relative">
                    <div className="w-full">
                      <p className="flex justify-center max-w-[700px]  items-center mt-5 px-8 mb-5 text-wrap text-lg 2xl:text-xl tracking-wider ">
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
                    <div className="w-full">
                      <Image
                        src={'/story/history01.jpg'}
                        className=""
                        objectFit="fit"
                        height={800}
                        width={690}
                        alt="history01"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col xl:flex-row px-[65px]  items-center">
                    <div className="w-full">
                      <Image
                        src={'/story/history02.jpg'}
                        className=""
                        objectFit="fit"
                        height={800}
                        width={690}
                        alt="history02"
                      />
                    </div>
                    <div className="w-full">
                      <p className="flex justify-center max-w-[700px]  items-center mt-5 px-8 mb-5 text-wrap text-lg 2xl:text-xl tracking-wider ">
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
                  <div className="flex flex-col justify-center xl:flex-row px-[65px]  items-center relative">
                    <div className="w-full">
                      <p className="flex justify-center  max-w-[700px]  items-center mt-5 mb-5   px-8 text-lg 2xl:text-lg tracking-wider ">
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
                    <div className="flex justify-center items-center relative w-full">
                      <Image
                        src={'/story/history01.jpg'}
                        className=""
                        objectFit="fit"
                        height={800}
                        width={690}
                        alt="history01"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col xl:flex-row px-[65px]  items-center">
                    <div className="w-full">
                      <Image
                        src={'/story/history02.jpg'}
                        className=""
                        objectFit="fit"
                        height={800}
                        width={690}
                        alt="history02"
                      />
                    </div>
                    <div className="w-full">
                      <p className="flex justify-center max-w-[700px]  items-center mt-5 px-8 mb-5 text-wrap text-lg 2xl:text-xl tracking-wider ">
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
