import Image from 'next/image'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Title from './components/title'
import { Carousel } from 'react-responsive-carousel'
import GlobalViewCard from './components/globalViewCard'

export default function GlobalView() {
  return (
    <div className="w-full">
      <Carousel
        //autoPlay
        //infiniteLoop
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        interval={4000}
        transitionTime={2500}
      >
        {[
          <GlobalViewCard
            image="/globalView/image.png"
            title="Global View"
            content="   O GlobalView fornece aos clientes e operadores dados de status em
       tempo real de seus processos no Mapa. O aplicativo fornece uma visão
       geral integrada de despacho, logística nos mais diversos modais,
       sendo eles aéreo, marítimo e rodoviário, incluindo ETA, ETD,
       documentos dentre outras funcionalidades."
          />,
          <GlobalViewCard
            image="/globalView/map.png"
            title="Mapa"
            content=" Com o GlobalView, você pode mergulhar profundamente em cada processo, acompanhando cada etapa com precisão e eficiência. Seja um avião cruzando os céus, um navio navegando pelos mares ou um caminhão percorrendo estradas, você terá acesso imediato à sua localização em tempo real. Além disso, você pode visualizar informações vitais, como previsão de chegada, rota atual e até mesmo o porto mais próximo."
          />,

          <GlobalViewCard
            image="/globalView/processos.png"
            title="Processos"
            content="Em nossa página de processos, oferecemos uma visão detalhada e organizada de cada etapa do seu processo logístico. Você encontrará informações essenciais, como modelo de transporte, número do processo, empresa responsável, datas de embarque e chegada, além da situação atual, seja faturado, aguardando embarque ou outro status relevante. Essa abordagem permite um gerenciamento eficiente e informado de suas operações logísticas.
          "
          />,
          <GlobalViewCard
            image="/globalView/dashboard.png"
            title="Dashboard"
            content="
          Em nosso dashboard, você encontra uma análise completa dos processos logísticos, desde a quantidade de processos em diversos canais e modais até o tempo de trânsito por região. Além disso, oferecemos insights sobre o custo do frete em relação ao valor da mercadoria, impostos pagos e outras despesas. Com essas informações centralizadas e acessíveis, você pode tomar decisões mais estratégicas e eficientes para otimizar suas operações logísticas..
          "
          />,
          <GlobalViewCard
            image="/globalView/painel.png"
            title="Painel"
            content="
            Nosso painel de controle oferece uma visualização clara do status de cada processo logístico, desde Aguardando Embarque até Faturado, simplificando o acompanhamento de cada etapa. Fornecemos informações cruciais, como o número do processo (IM) e dados sobre embarque, chegada e marcos importantes, facilitando a gestão eficiente dos processos em andamento."
          />,
          <GlobalViewCard
            image="/globalView/relatorio.png"
            title="Relatorios"
            content="
            Oferecemos uma solução eficiente de geração automática de relatórios em diversos formatos (Excel, TXT e PDF), garantindo precisão e agilidade. Esses relatórios fornecem insights valiosos sobre desempenho, eficiência e tendências, facilitando tomadas de decisão informadas e estratégicas. Simplificamos o processo de geração e compartilhamento de relatórios, otimizando a gestão logística de ponta a ponta.

            "
          />,
        ]}
      </Carousel>
    </div>
  )
}
