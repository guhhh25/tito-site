'use client'

import { MdCheck } from 'react-icons/md'
import Path from '../components/path'
import Footer from '../footer'
import Header from '../header'

export default function CustomsManagment() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex-grow flex">
          <div className="flex flex-col items-start">
            <Path
              link1="/"
              namePath1="Home"
              namePath2="Gestão Adunaneira"
              link2="/customsmanagement"
            />
            <div className="content  ">
              <div className="w-full px-10 mb-10 h-50">
                <div className=" bg-white p-5  border-1 rounded-lg mt-5">
                  <p className="mt-5 mb-5">
                    Uma retaguarda composta por advogados especializados em
                    Direito Aduaneiro oferece suporte técnico ou jurídico nos
                    diversos processos para os clientes da Tito. Entre as
                    vantagens que a Tito integra estão: máxima celeridade nas
                    operações; elaboração de pré-custo e custo final do produto
                    no fechamento do embarque; elaboração e controle dos KPI’s;
                    redução no tempo de desembaraço e lead times operacionais;
                    relatórios gerenciais customizados. A TITO é membro atuante,
                    com participação efetiva junto às principais entidades no
                    comércio internacional: Federação Nacional do Despachantes
                    Aduaneiros; Câmara Americana de Comércio Brasil-EUA –
                    AMCHAM; Associação Internacional de Agentes Aduaneiros
                    Privados – ASAPRA; Centro de Despachantes Aduaneiros da
                    República Argentina – CDA; Confederação das Associações dos
                    Agentes Aduaneiros da República Mexicana – CAAAREM;
                    Instituto PROCOMEX; Associação Brasileira de Transportadores
                    Internacionais – ABTI; FECOMÉRCIO; CPN – Cargo Partners
                    Network. A Tito possui profissionais qualificados que tratam
                    cada operação com cuidados específicos, para que os
                    processos sejam geridos em conformidade aos requisitos
                    aduaneiros internacionais. As metodologias de trabalho
                    adotadas buscam organizar e aumentar a eficiência
                    operacional, sempre focando na melhoria continua dos
                    serviços prestados. Aliado a experiência nos principais
                    setores do mercado: automotivo, alimentício, fármaco,
                    químico, embalagens, varejo, entre outros.
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
