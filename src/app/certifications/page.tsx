'use client'
import Image from 'next/image'
import CertificationsList from '../components/certificationsList'
import Path from '../components/path'
import Footer from '../footer'
import Header from '../header'

export default function Certification() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow flex ">
        <div className="flex flex-col  mx-4 w-full justify-center items-center">
          <Path
            link1="/"
            namePath1="Home"
            namePath2="Certificações"
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
  )
}
