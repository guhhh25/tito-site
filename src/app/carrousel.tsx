import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

export default function Carrousel() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      interval={4000}
      transitionTime={2500}
      className="mb-10 w-full"
    >
      <div className="relative">
        <ParallaxProvider>
          <Parallax speed={-50}>
            <Image
              src="/carrousel/carrouselBoat.jpg"
              alt="Image 1"
              width={900}
              className="h-[100vh] 2xl:max-h-[800px]  filter brightness-50"
              height={900}
            />
          </Parallax>
        </ParallaxProvider>
        <div className="absolute top-1/2 lg:top-[50%]  left-1/2 xl:left-[40%] transform -translate-x-1/2 -translate-y-1/2 text-white text-center lg:text-start">
          <p className="text-2xl sm:text-3xl lg:text-4xl 3xl:text-5xl font-bold lg:text-left">
            Um dos grandes objetivos de qualquer operação logística é a redução
            de custos. Porém simplesmente cortar custos buscando preço nos BIDs,
            traz impacto direto na qualidade.
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
              className="h-[100vh] 2xl:max-h-[800px]  filter brightness-50"
              height={900}
            />
          </Parallax>
        </ParallaxProvider>

        <div className="absolute top-1/2 lg:top-[50%]  left-1/2 xl:left-[40%]  transform -translate-x-1/2 -translate-y-1/2 text-white text-center lg:text-start">
          <p className="text-2xl sm:text-3xl lg:text-4xl 3xl:text-5xl font-bold lg:text-left">
            se por um lado os importadores e exportadores precisam cortar
            gastos, por outro é igualmente essencial que se tornem mais
            competitivos. E isso implica em atingir a máxima qualidade.
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
              className="h-[100vh] 2xl:max-h-[800px]  filter brightness-50"
              height={900}
            />
          </Parallax>
        </ParallaxProvider>

        <div className="absolute top-1/2 lg:top-[50%]  left-1/2 xl:left-[40%]  transform -translate-x-1/2 -translate-y-1/2 text-white text-center lg:text-start">
          <p className="text-2xl sm:text-3xl lg:text-4xl 3xl:text-5xl font-bold lg:text-left">
            solução reside em reduzir custo sim, mas de modo inteligente. Neste
            sentido, o impacto de uma gestão integrada e otimizada é muito maior
            do que simplesmente negociar preço.
          </p>
        </div>
      </div>
    </Carousel>
  )
}
