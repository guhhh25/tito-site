import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { useEffect, useState } from 'react'
import initTranslations from './i18n'
import LocaleProps from './Utils/localeType'

export default function Carrousel({ locale }: LocaleProps) {
  const [translate, setTranslate] = useState<any>()

  const initializeTranslateAsync = async () => {
    const translation = await initTranslations(locale, ['Home page'])
    setTranslate(translation)
  }

  useEffect(() => {
    initializeTranslateAsync()
    console.log(locale)
  }, [])
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      interval={4000}
      transitionTime={2500}
      emulateTouch
      className="mb-2 w-full"
    >
      <div className="relative">
        <ParallaxProvider>
          <Parallax speed={-40}>
            <Image
              src="/carrousel/carrouselBoat.jpg"
              alt="Image 1"
              width={900}
              className="h-[80vh] 2xl:max-h-[800px]  filter brightness-50"
              height={900}
            />
          </Parallax>
        </ParallaxProvider>
        <div className="absolute top-1/2 lg:top-[50%]  left-1/2 xl:left-[40%] transform -translate-x-1/2 -translate-y-1/2 text-white text-center lg:text-start">
          <p className="text-2xl sm:text-3xl lg:text-4xl 3xl:text-5xl font-bold lg:text-left">
            {translate && translate.t && translate.t('CarroselFirstSlide')}
          </p>
        </div>
      </div>

      <div>
        <ParallaxProvider>
          <Parallax speed={-50}>
            <Image
              src="/carrousel/carrouselPlane.jpg"
              alt="Image 1"
              width={900}
              className="h-[80vh] 2xl:max-h-[800px]  filter brightness-50"
              height={900}
            />
          </Parallax>
        </ParallaxProvider>

        <div className="absolute top-1/2 lg:top-[50%]  left-1/2 xl:left-[40%]  transform -translate-x-1/2 -translate-y-1/2 text-white text-center lg:text-start">
          <p className="text-2xl sm:text-3xl lg:text-4xl 3xl:text-5xl font-bold lg:text-left">
            {translate && translate.t && translate.t('CarroselSecondSlide')}
          </p>
        </div>
      </div>
      <div>
        <ParallaxProvider>
          <Parallax speed={-50}>
            <Image
              src="/carrousel/carrouselTruck.jpg"
              alt="Image 1"
              width={900}
              className="h-[80vh] 2xl:max-h-[800px]  filter brightness-50"
              height={900}
            />
          </Parallax>
        </ParallaxProvider>

        <div className="absolute top-1/2 lg:top-[50%]  left-1/2 xl:left-[40%]  transform -translate-x-1/2 -translate-y-1/2 text-white text-center lg:text-start">
          <p className="text-2xl sm:text-3xl lg:text-4xl 3xl:text-5xl font-bold lg:text-left">
            {translate && translate.t && translate.t('CarroselThirdSlide')}
          </p>
        </div>
      </div>
    </Carousel>
  )
}
