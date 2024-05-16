import Card from './components/card'
import Title from './components/title'

export default function Solutions() {
  return (
    <div className="flex flex-col  lg:px-20 items-center w-[100%] mb-10 lg:max-h-[622px] ">
      <div className="w-full px-10 lg:py-10   rounded-lg w-full max-w-[1720px] ">
        <Title title="SOLUÇÕES" />
      </div>
      <div className="flex flex-col  px-8 w-full h-auto lg:flex-row  items-center justify-between 2xl:justify-center ">
        <Card
          image={'/solutions/truckcard.jpg'}
          title="Transporte Internacional"
          text=" A TITO garante agilidade e visibilidade em embarques de Cargas Marítimas, Aéreas e Terrestres, com competências em modernos sistemas de gerenciamento e serviços especializados em diversos modais."
        />
        <Card
          image={'/solutions/card2.jpg'}
          title="Gestão Aduanera"
          text="
          A Tito oferece suporte jurídico em Direito Aduaneiro, agilizando operações comerciais globalmente. Sua equipe participa ativamente de entidades do comércio internacional, garantindo eficiência em vários setores de mercado."
        />
        <Card
          image={'/solutions/card3.jpg'}
          title="Planejamento"
          text="Ao optar pela Tito, sua empresa garante não apenas um serviço, mas um resultado. Especializada em soluções integradas, a Tito oferece tudo o que é necessário para o sucesso do seu embarque em um único fornecedor."
        />
      </div>
    </div>
  )
}
