import Image from 'next/image'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Title from './components/title'
import { Carousel } from 'react-responsive-carousel'
import GlobalViewCard from './components/globalViewCard'
import { useEffect, useState } from 'react'
import initTranslations from './i18n'

export default function GlobalView({ locale }) {
  const [translate, setTranslate] = useState<any>()

  const initializeTranslateAsync = async () => {
    const translation = await initTranslations(locale, ['Home page'])
    setTranslate(translation)
  }

  useEffect(() => {
    initializeTranslateAsync()
  }, [])

  return (
    <div className="w-full">
      <Carousel
        showArrows={false}
        showStatus={false}
        interval={4000}
        emulateTouch
        transitionTime={1500}
      >
        {[
          <GlobalViewCard
            image="/globalView/image.png"
            title="Global View"
            content={translate && translate.t && translate.t('GlobalViewAbout')}
            key={1}
            hreftext={translate && translate.t && translate.t('VisitGlobalView')}
          />,
          <GlobalViewCard
            image="/globalView/map.png"
            title={translate && translate.t && translate.t('GlobalViewMap')}
            content={
              translate && translate.t && translate.t('GlobalViewMapAbout')
            }
            key={2}
            hreftext={translate && translate.t && translate.t('VisitGlobalView')}
          />,

          <GlobalViewCard
            image="/globalView/processos.png"
            title={
              translate && translate.t && translate.t('GlobalViewProcessos')
            }
            content={
              translate &&
              translate.t &&
              translate.t('GlobalViewProcessosAbout')
            }
            key={3}
            hreftext={translate && translate.t && translate.t('VisitGlobalView')}
          />,
          <GlobalViewCard
            image="/globalView/dashboard.png"
            title="Dashboard"
            content={
              translate &&
              translate.t &&
              translate.t('GlobalViewDashboardAbout')
            }
            key={4}
            hreftext={translate && translate.t && translate.t('VisitGlobalView')}
          />,
          <GlobalViewCard
            image="/globalView/painel.png"
            title={translate && translate.t && translate.t('GlobalViewPainel')}
            content={
              translate && translate.t && translate.t('GlobalViewPainelAbout')
            }
            key={5}
            hreftext={translate && translate.t && translate.t('VisitGlobalView')}
          />,
          <GlobalViewCard
            image="/globalView/relatorio.png"
            title={
              translate && translate.t && translate.t('GlobalViewRelatorios')
            }
            content={
              translate &&
              translate.t &&
              translate.t('GlobalViewRelatoriosAbout')
            }
            key={6}
            hreftext={translate && translate.t && translate.t('VisitGlobalView')}
          />,
        ]}
      </Carousel>
    </div>
  )
}
