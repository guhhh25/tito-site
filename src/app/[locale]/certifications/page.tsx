'use client'
import CertificationsList from '@//components/certificationsList'
import Loading from '@//components/loading'
import Path from '@//components/path'
import Footer from '@//footer'
import Header from '@//header'
import initTranslations from '@//i18n'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Certification({
  params,
}: {
  params: { locale: string }
}) {
  const [translate, setTranslate] = useState<any>()
  const [isLoading, setIsLoading] = useState(true)

  const initializeTranslateAsync = async () => {
    const translation = await initTranslations(params.locale, ['Home page'])
    setTranslate(translation)
  }

  useEffect(() => {
    initializeTranslateAsync()
    setIsLoading(false)
  }, [])
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-[100vh]">
          <Loading />
        </div>
      ) : (
        <div className="flex flex-col h-screen">
          <Header locale={params.locale} />
          <div className="flex-grow flex ">
            <div className="flex flex-col  mx-4 w-full justify-center items-center">
              <Path
                link1="/"
                namePath1="HOME"
                namePath2={
                  translate &&
                  translate.t &&
                  translate.t('HeaderCertifications')
                }
                link2="/certification"
              />
              <div className="content">
                <br />
                <div className="flex flex-col   lg:flex-row">
                  <CertificationsList text="TSA (Transportation Security Administration): Approved IAC" />

                  <CertificationsList text=" IATA (International Air Transport Association)" />
                </div>

                <CertificationsList text=" OEA (Programa Brasileiro de Operador Econômico Autorizado): Sudex Logística" />
                <CertificationsList text="FMC (Federal Maritime Commission) License: NVOCC, OTI" />
              </div>
              <div className="flex justify-around mb-10 items-center flex-col lg:flex-row w-full">
                <Image
                  src={'/certifications/tsaLogo.png'}
                  alt="oea"
                  width={200}
                  height={100}
                  className="h-[180px]"
                />
                <Image
                  src={'/certifications/logo-oea.png'}
                  alt="oea"
                  width={240}
                  height={500}
                />
                <Image
                  src={'/certifications/logo-dnb.png'}
                  alt="oea"
                  width={200}
                  height={100}
                  className="h-[50px]"
                />
                <Image
                  src={'/certifications/iataLogo.png'}
                  alt="oea"
                  width={200}
                  height={100}
                  className="h-[180px]"
                />
                <Image
                  src={'/certifications/fmcBLogo.png'}
                  alt="oea"
                  width={200}
                  height={100}
                  className="h-[180px]"
                />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  )
}
