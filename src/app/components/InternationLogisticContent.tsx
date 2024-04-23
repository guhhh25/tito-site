import { Fade } from "react-awesome-reveal";
import { MdCheck } from "react-icons/md";

interface TypeProps {
  type: string;
}

export default function InternationalLogisticContent(props: TypeProps) {
  const { type } = props;

  return (
    <div className=" w-full">
      {type === "maritmo" ? (
        <Fade>
          <div className="block w-full p-6 border border-gray-300 rounded-lg shadow bg-gray-200 mt-1">
            <p className="text-lg w-full font-normal text-black">
              A Tito oferece soluções no modal marítimo, seja de forma pontual
              até integrações com múltiplas ferramentas e outros modais.
            </p>
            <ul className="mt-5 font-normal text-black  text-lg flex flex-col lg:flex-row justify-between w-full lg:w-[80%] ">
              <div>
                <li className="flex items-center">
                  {" "}
                  <MdCheck className="mr-1" /> Relacionamento com as principais
                  cias marítimas e NVOCC
                </li>
                <li className="flex items-center">
                  {" "}
                  <MdCheck className="mr-1" /> Tarifas competitivas
                </li>
                <li className="flex items-center">
                  {" "}
                  <MdCheck className="mr-1" /> Embarques Door to Door
                </li>
              </div>
              <div>
                <li className="flex items-center">
                  {" "}
                  <MdCheck className="mr-1" /> Embarques FCL
                </li>
                <li className="flex items-center">
                  {" "}
                  <MdCheck className="mr-1" /> Consolidação de carga e rotas
                  regulares
                </li>
                <li className="flex items-center">
                  {" "}
                  <MdCheck className="mr-1" />
                  Follow-up diário e relatórios via sistema
                </li>
              </div>
            </ul>
          </div>
        </Fade>
      ) : (
        ""
      )}
      {type === "aereo" ? (
        <Fade>
          <div className="block w-full p-6  border border-gray-300 rounded-lg shadow  bg-gray-200 mt-1">
            <p className="text-lg w-full font-normal text-black">
              O Transporte Aéreo Internacional da Tito, combina o melhor tempo
              para sua operação.
            </p>
            <ul className="mt-5 font-normal text-black  text-lg flex flex-col lg:flex-row justify-between w-full lg:w-[80%] ">
              <div>
                <li className="flex items-center">
                  {" "}
                  <MdCheck className="mr-1" /> Tarifas competitivas
                </li>
                <li className="flex items-center">
                  {" "}
                  <MdCheck className="mr-1" />
                  Consolidação de cargas e rotas regulares
                </li>
              </div>
              <div>
                <li className="flex items-center">
                  {" "}
                  <MdCheck className="mr-1" /> Consolidado semanal Miami x
                  Viracopos
                </li>
                <li className="flex items-center">
                  {" "}
                  <MdCheck className="mr-1" /> Follow-up diário via sistema
                </li>
              </div>
            </ul>
          </div>
        </Fade>
      ) : (
        ""
      )}
      {type === "rodoviario" ? (
        <Fade>
          <div className="block w-full p-6  border border-gray-300 rounded-lg shadow  bg-gray-200 mt-1">
            <p className="w-full text-lg w-full">
              Transporte Rodoviário Internacional Tito Smart Modal Logistics. A
              expertise e a segurança que sua operação precisa.
            </p>
            <ul className="mt-5 text-lg flex flex-col lg:flex-row justify-between w-full lg:w-[80%] ">
              <div>
                <li className="flex items-center">
                  {" "}
                  <MdCheck className="mr-1" /> Brasil l Argentina l Chile l
                  Paraguai l Uruguai
                </li>
                <li className="flex items-center">
                  {" "}
                  <MdCheck className="mr-1" />
                  Carga Consolidada e Full: Geral e Química
                </li>
                <li className="flex items-center">
                  {" "}
                  <MdCheck className="mr-1" /> Rumos Sul e Norte
                </li>
                <li className="flex items-center">
                  {" "}
                  <MdCheck className="mr-1" />
                  Carga Geral e Química
                </li>
              </div>
              <div>
                <li className="flex items-center">
                  {" "}
                  <MdCheck className="mr-1" /> Tarifas competitivas
                </li>
                <li className="flex items-center">
                  {" "}
                  <MdCheck className="mr-1" /> Bases de apoio e liberação nas
                  principais fronteiras
                </li>
                <li className="flex items-center">
                  {" "}
                  <MdCheck className="mr-1" /> Opção MIC DTA (Door to Door)
                </li>
                <li className="flex items-center">
                  {" "}
                  <MdCheck className="mr-1" /> Rastreamento e Follow-up dos
                  embarques em tempo real.
                </li>
              </div>
            </ul>
          </div>
        </Fade>
      ) : (
        ""
      )}

      {type === "projeto" ? (
        <Fade>
          <div className="block w-full p-6  border border-gray-300 rounded-lg shadow  bg-gray-200 mt-1">
            <p className="w-full text-lg">
              A Competência na medida certa para seu projeto.
            </p>
            <ul className="mt-5 text-lg">
              <li className="flex items-center">
                {" "}
                <MdCheck className="mr-1" /> Equipe com know-how e dedicada em
                cargas especiais que planejam todas as etapas do projeto
              </li>
              <li className="flex items-center">
                {" "}
                <MdCheck className="mr-1" /> Estudo de viabilidade do projeto
                com melhor custo e menor tempo
              </li>
              <li className="flex items-center">
                {" "}
                <MdCheck className="mr-1" /> Acompanhamento físico do embarque
                na origem, seja através da nossa rede de agentes ou
                profissionais Tito
              </li>
              <li className="flex items-center">
                {" "}
                <MdCheck className="mr-1" /> Follow-up diário e relatórios via
                sistema
              </li>
            </ul>
          </div>
        </Fade>
      ) : (
        ""
      )}
      {type === "planejamento" ? (
        <Fade>
          <div className="block w-full p-6  border border-gray-300 rounded-lg shadow  bg-gray-200 mt-1">
            <p className="w-full text-lg">
              Os objetivos dos planos da Tito para seus clientes são:
            </p>
            <ul className="mt-5 text-lg flex flex-col lg:flex-row justify-between w-full lg:w-[80%] ">
              <div>
                <li className="flex items-center">
                  {" "}
                  <MdCheck className="mr-1" /> Redução de multas
                </li>
                <li className="flex items-center">
                  {" "}
                  <MdCheck className="mr-1" /> Redução de tempo de cargas
                  paradas
                </li>
                <li className="flex items-center">
                  {" "}
                  <MdCheck className="mr-1" /> Maior visibilidade da operação
                </li>
                <li className="flex items-center">
                  {" "}
                  <MdCheck className="mr-1" /> Redução dos custos totais e
                  ganhos operacionais
                </li>
                <li className="flex items-center">
                  {" "}
                  <MdCheck className="mr-1" /> Melhores alternativas em
                  contingência
                </li>
                <li>
                  - Efetivação de Ex-tarifários e Recuperação de Impostos Pagos
                </li>
                <li className="flex items-center">
                  {" "}
                  <MdCheck className="mr-1" /> Defesas de Multas
                </li>
                <li className="flex items-center">
                  {" "}
                  <MdCheck className="mr-1" /> Regimes de Origem
                </li>
              </div>
              <div>
                <li className="flex items-center">
                  {" "}
                  <MdCheck className="mr-1" /> Maior visibilidade da operação
                </li>
                <li className="flex items-center">
                  {" "}
                  <MdCheck className="mr-1" /> Redução de multas
                </li>
                <li className="flex items-center">
                  {" "}
                  <MdCheck className="mr-1" /> Redução de tempo de cargas
                  paradas
                </li>
                <li className="flex items-center">
                  {" "}
                  <MdCheck className="mr-1" /> Maior visibilidade da operação
                </li>
                <li className="flex items-center">
                  {" "}
                  <MdCheck className="mr-1" /> Redução de multas
                </li>
                <li className="flex items-center">
                  {" "}
                  <MdCheck className="mr-1" /> Redução de tempo de cargas
                  paradas
                </li>
                <li className="flex items-center">
                  {" "}
                  <MdCheck className="mr-1" /> Maior visibilidade da operação
                </li>
                <li className="flex items-center">
                  {" "}
                  <MdCheck className="mr-1" /> Follow-up diário e relatórios via
                  sistema
                </li>
              </div>
            </ul>
          </div>
        </Fade>
      ) : (
        ""
      )}
      {type === "rastreabilidade" ? (
        <Fade>
          <div className="block w-full p-6  border border-gray-300 rounded-lg shadow  bg-gray-200 mt-1">
            <p className="w-full lg:w-[85%] text-lg  ">
              O conceito de Smartmodal Logistics, também está fortemente
              embasado em alta tecnologia. Uma poderosa intranet, com um sistema
              “back to office” garante a sincronização entre clientes regionais
              da cadeia de suprimentos logísticos. Já sua Extranet permite que
              cada cliente possa ter estações de trabalho para interação ou
              acompanhamento de operações. Esta plataforma oferece
              rastreabilidade, transparência e inteligência para planejamento e
              rápida tomada de decisão. O sistema de Gestão de Processos da
              Bysoft nos módulos i Broker Import, i Broker export e i Drawback,
              possibilita interface com sistemas Easy, Software, entre outros
              sistemas de nossos clientes.
            </p>
            <p className="text-lg mt-5">
              A partir do Web Tracking Tito, nossos clientes possuem:
            </p>
            <ul className="mt-5 text-lg">
              <li className="flex items-center">
                {" "}
                <MdCheck className="mr-1" /> Maior visibilidade em todas as
                etapas do processo;
              </li>
              <li className="flex items-center">
                {" "}
                <MdCheck className="mr-1" /> Relatórios gerenciais de acordo com
                a necessidade de cada operação;
              </li>
              <li className="flex items-center">
                {" "}
                <MdCheck className="mr-1" /> Documentos relativos às operações
                no sistema.
              </li>
              <li className="flex items-center">
                {" "}
                <MdCheck className="mr-1" /> Follow-up diário e relatórios via
                sistema
              </li>
            </ul>
          </div>
        </Fade>
      ) : (
        ""
      )}
    </div>
  );
}
