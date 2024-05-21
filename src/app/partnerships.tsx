import CardPartnerShip from './components/cardPartnership'
import Title from './components/title'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Slider from 'react-slick'
import Card from './components/card'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import initTranslations from './i18n'

export default function Partnerships({ locale }) {
  const [translate, setTranslate] = useState<any>()

  const initializeTranslateAsync = async () => {
    const translation = await initTranslations(locale, ['Home page'])
    setTranslate(translation)
  }

  useEffect(() => {
    initializeTranslateAsync()
  }, [])

  return (
    <div className="flex justify-center px-8 lg:p-20  items-center w-[100%] mb-10 lg:max-h-[622px] ">
      <div className=" bg-white w-full px-4 lg:px-10 py-10 rounded-lg w-full max-w-[1720px] ">
        <Title
          title={translate && translate.t && translate.t('Partnerships')}
        />
        <div className="w-full">
          <div className="flex lg:flex-row lg:items-center justify-around mt-5 flex-wrap">
            <Image
              src={'/partnerships/amacarga.png'}
              alt="amacarga"
              width={180}
              height={100}
              className="py-5  "
            />

            <Image
              src={'/partnerships/image.png'}
              alt="amacarga"
              width={180}
              height={100}
              className="py-5"
            />
            <Image
              src={'/partnerships/cambras.png'}
              alt="amacarga"
              width={180}
              height={100}
              className="py-5"
            />
            <Image
              src={'/partnerships/camebra.png'}
              alt="amacarga"
              width={180}
              height={100}
              className="py-5"
            />
            <Image
              src={'/partnerships/novo_dutcham.png'}
              alt="amacarga"
              width={180}
              height={100}
              className="py-5"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
