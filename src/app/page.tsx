'use client'
import './globals.css'
import 'typeface-roboto'
import Header from '../app/header'
import Carrousel from '../app/carrousel'
import Solutions from '../app/solutions'
import GlobalView from '../app/globalView'
import { Fade } from 'react-awesome-reveal'
import AboutUs from '../app/aboutUs'
import Footer from '../app/footer'
import Partnerships from './partnerships'
import BackPageToTop from './components/backToTopBtn'
import { useEffect, useState } from 'react'
import Features from './features'
import Loading from './components/loading'
import Contact from './contact'
import CookiesModal from './components/cookiesModal'

export default function Page() {
  const [isHidden, setIsHidden] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [acceptCookies, setAcceptCookies] = useState(false)

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

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center h-[100vh]">
          <Loading />
        </div>
      ) : (
        <div className="w-full">
          <div>
            <Header />
            <Carrousel />
          </div>
          <div>
            <BackPageToTop hidden={isHidden} />
            <CookiesModal />
            <Fade triggerOnce={true} delay={200} duration={1000}>
              <AboutUs />

              <GlobalView />
              <Solutions />
              <Partnerships />
              <Features />
              <Contact />
            </Fade>
            <Footer />
          </div>
        </div>
      )}
    </div>
  )
}
