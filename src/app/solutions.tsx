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
          text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil. "
        />
        <Card
          image={'/solutions/card2.jpg'}
          title="Gestión Aduanera"
          text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil."
        />
        <Card
          image={'/solutions/card3.jpg'}
          title="Logística Nacional"
          text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil."
        />
      </div>
    </div>
  )
}
