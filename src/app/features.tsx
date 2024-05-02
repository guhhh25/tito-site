import CardFeature from './components/cardFeature'
import Title from './components/title'
import { SlPlane } from 'react-icons/sl'
import { IoBoatOutline } from 'react-icons/io5'
import { PiTrain } from 'react-icons/pi'
import { TbClockBolt } from 'react-icons/tb'
import { TiArrowRightThick } from 'react-icons/ti'
import Button from './components/button'
export default function Features() {
  return (
    <div className="flex flex-col lg:flex-row justify-center  lg:px-20   items-center mb-10 lg:max-h-[622px] ">
      <div className="px-10">
        <Title title="RECURSOS INCRÍVEIS" />
        <p className="text-gray-800  lg:max-w-[500px]   w-full text-4xl mt-4 mb-4">
          NÓS OFERECEMOS SOLUÇÕES RAPIDAS E PODEROSAS PARA TRANSPORTE
        </p>

        <p className="bg-blue-500 h-2 w-20 rounded-full"></p>

        <p className="text-gray-400  lg:max-w-[500px]   w-full text-xl mt-4 mb-4">
          Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
        </p>

        <Button text="Nossos Serviços" />
      </div>
      <div className="flex justify-center items-center flex-wrap lg:flex-nowrap lg:justify-start items-start">
        <div className="flex flex-col justify-center items-center  lg:px-0">
          <CardFeature
            title={'VOOS'}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
            icon={<SlPlane className="w-[50px] h-[80px]" />}
          />
          <CardFeature
            title={'EMBARCAÇÃO'}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
            icon={<IoBoatOutline className="w-[50px] h-[80px]" />}
          />
        </div>
        <div className="flex flex-col justify-center items-center  lg:px-0">
          <CardFeature
            title={'TREM'}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            icon={<PiTrain className="w-[50px] h-[80px]" />}
          />
          <CardFeature
            title={'TEMPO'}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            icon={<TbClockBolt className="w-[50px] h-[80px]" />}
          />
        </div>
      </div>
    </div>
  )
}
