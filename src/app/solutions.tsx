import Card from './components/card'
import Title from './components/title'

export default function Solutions() {
  return (
    <div className="flex flex-col  lg:px-20 items-center w-[100%] mb-10 lg:max-h-fit ">
      <div className="w-full px-10 lg:py-10   rounded-lg w-full max-w-[1720px] ">
        <Title title="SOLUÇÕES" />
      </div>
      <div className="flex flex-col  px-8 w-full h-auto lg:flex-row  items-center justify-between 2xl:justify-center ">
        <Card
          href="/internationallogistcs"
          image={'/solutions/truckcard.jpg'}
          title="Transporte Internacional"
          text=" A TITO garante agilidade e visibilidade em embarques de Cargas Marítimas, Aéreas e Terrestres, com competências em modernos sistemas de gerenciamento e serviços especializados em diversos modais."
        />
        <Card
          href="/customsmanagement"
          image={'/solutions/card2.jpg'}
          title="Gestão Aduanera"
          text="
          A Tito oferece suporte jurídico em Direito Aduaneiro, agilizando operações comerciais globalmente. Sua equipe participa ativamente de entidades do comércio internacional, garantindo eficiência em vários setores de mercado."
        />
        <Card
          href="/planning"
          image={'/solutions/card3.jpg'}
          title="Planejamento"
          text="Ao optar pela Tito, sua empresa garante não apenas um serviço, mas um resultado. Especializada em soluções integradas, a Tito oferece tudo o que é necessário para o sucesso do seu embarque em um único fornecedor."
        />
      </div>
      <div className="flex flex-col  px-8 w-full h-auto lg:flex-row  items-center justify-between 2xl:justify-center ">
        <Card
          href="/drawback"
          image={'/solutions/drawback.jpeg'}
          title="Drawback"
          text="O Drawback é crucial para exportações, com modalidades como Suspensão, Isenção e Restituição de Tributos sobre insumos importados. Investimos em sistemas e ferramentas para agilizar o processo, reduzindo custos e melhorando a cadeia de exportação."
        />
        <Card
          image={'/solutions/rastreabilidade.jpeg'}
          title="Rastreabilidade"
          href="/traceability"
          text="
          A Tito usa alta tecnologia, com intranet e extranet para sincronizar clientes na cadeia de suprimentos. Oferece rastreabilidade, integração com sistemas de clientes e visibilidade total através do Web Tracking Tito."
        />
        <Card
          image={'/solutions/ferramentas.jpeg'}
          href="/titotools"
          title="Ferramentas"
          text="Ao optar pela Tito, sua empresa garante não apenas um serviço, mas um resultado. Especializada em soluções integradas, a Tito oferece tudo o que é necessário para o sucesso do seu embarque em um único fornecedor."
        />
      </div>
    </div>
  )
}
