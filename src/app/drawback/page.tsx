'use client'

import { MdCheck } from 'react-icons/md'
import Path from '../components/path'
import Footer from '../footer'
import Header from '../header'

export default function Drawback() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex-grow flex">
          <div className="flex flex-col items-start">
            <Path
              link1="/"
              namePath1="Home"
              namePath2="Drawback"
              link2="/drawback"
            />
            <div className="content  ">
              <div className="w-full px-10 mb-10 h-50">
                <div className=" bg-white p-5  border-1 rounded-lg mt-5">
                  <div className="flex flex-col xl:flex-row gap-5 justify-center  ">
                    <p className="mt-5 mb-5 px-10 text-sm max-w-[800px]">
                      O Drawback, sendo um dos maiores incentivos fiscais
                      destinado a estimular as exportações, atualmente se
                      apresenta nas seguintes modalidades: Drawback Integrado
                      Suspensão, Integrado Isenção e Restituição dos Tributos;
                      consiste na eliminação ou suspensão dos tributos
                      incidentes sobre os insumos importados para emprego no
                      produto a ser exportado. E com o intuito de usufruirmos da
                      melhor forma desse benefício e sendo o cliente nosso maior
                      parceiro, buscamos sempre contribuir no processo como um
                      todo, viabilizando melhorias em toda a cadeia, efetuando
                      análise crítica e identificando oportunidades com foco na
                      redução de custos. Analisando esta necessidade do mercado,
                      a Tito investiu fortemente no desenvolvimento do sistema
                      informatizado para ganhar robustez e segurança no impute
                      das informações e simultaneamente implementou uma
                      ferramenta de captação dos dados e transmissão em lotes ,
                      obtendo dessa forma maior celeridade no pleito do Ato
                      Concessório , em especial para atender a alta demanda do
                      Drawback Isenção Intermediário.
                    </p>

                    <p className="mt-5 mb-5 max-w-[800px] px-10  ">
                      <strong>Quem são os profissionais?</strong>
                      <br />
                      Os profissionais atuantes na Gestão do Drawback possuem
                      experiência sólida e conhecimento técnico. Atuam no
                      mercado há mais de 10 anos e estão alocados na unidade
                      Tito de São Caetano do Sul-SP. Sendo primordial a
                      atualização e treinamento constantes, visto o dinamismo do
                      mercado.
                      <br />
                      <strong>O que buscamos?</strong>
                      <br />
                      Prestar uma assessoria com plenitude e assegurar aos
                      nossos clientes a utilização correta do benefício,
                      demonstrando constantemente a relação custo x benefício.{' '}
                      <br />
                      <strong>O que Priorizamos?</strong>
                      <br /> Trabalhar de acordo com as normas estabelecidas,
                      executando todas as etapas do processo com rigor.
                      Priorizando as necessidades de cada cliente, onde
                      efetuamos o completo estudo de viabilidade e administração
                      dos Atos Concessórios, com procedimentos inseridos em
                      nossa rotina.
                    </p>
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
