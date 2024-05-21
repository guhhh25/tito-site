'use client'
import './globals.css'
import 'typeface-roboto'
import Header from '../header'
import Carrousel from '../carrousel'
import Solutions from '../solutions'
import GlobalView from '../globalView'
import { Fade } from 'react-awesome-reveal'
import AboutUs from '../aboutUs'
import Footer from '../footer'
import Partnerships from '../partnerships'
import BackPageToTop from '../components/backToTopBtn'
import { useEffect, useState } from 'react'
import Features from '../features'
import Loading from '../components/loading'
import Contact from '../contact'
import CookiesModal from '../components/cookiesModal'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import initTranslations from '../i18n'

export default function Page({ params }: { params: { locale: string } }) {
  const [isHidden, setIsHidden] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [acceptCookies, setAcceptCookies] = useState(false)

  const MapWithNoSSR = dynamic(() => import('../components/map'), {
    ssr: false,
  })

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 500) {
        setIsHidden(false)
      } else {
        setIsHidden(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    setIsLoading(false)

    if (document.cookie != null) {
      setAcceptCookies(!acceptCookies)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  console.log(params?.locale)

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center h-[100vh]">
          <Loading />
        </div>
      ) : (
        <div className="w-full">
          <div>
            <Header locale={params.locale} />
            <Carrousel locale={params.locale} />
          </div>
          <div>
            <BackPageToTop hidden={isHidden} />
            <CookiesModal />
            <Fade
              triggerOnce={true}
              delay={200}
              duration={1000}
              className="w-full flex justify-center items-center"
            >
              <AboutUs locale={params.locale} />

              <GlobalView locale={params.locale} />
              <Solutions locale={params.locale} />
              <Partnerships locale={params.locale} />
              <Features locale={params.locale} />
              <div className="flex flex-col xl:flex-row  px-10 xl:px-20  max-w-[1820px] w-full justify-center">
                <Contact locale={params.locale} />
                <MapWithNoSSR />
              </div>
            </Fade>
            <Footer />
          </div>
        </div>
      )}
    </div>
  )
}
