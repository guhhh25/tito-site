"use client";
import Image from "next/image";
import CertificationsList from "../components/certificationsList";
import Path from "../components/path";
import Title from "../components/title";
import Footer from "../footer";
import Header from "../header";

export default function Certification() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow flex justify-center">
        <div className="flex flex-col items-start mx-4">
          <Path
            link1="/"
            namePath1="Home"
            namePath2="Certificações"
            link2="/certification"
          />
          <div className="content">
            <br />
            <div className="flex flex-col justify-center items-center  lg:flex-row">
              <CertificationsList
                letter="F"
                text="TSA (Transportation Security Administration): Approved IAC"
              />

              <CertificationsList
                letter="T"
                text=" IATA (International Air Transport Association)"
              />
            </div>

            <CertificationsList
              letter="O"
              text=" OEA (Programa Brasileiro de Operador Econômico Autorizado): Sudex Logística"
            />
            <CertificationsList
              letter="I"
              text="FMC (Federal Maritime Commission) License: NVOCC, OTI"
            />

            <div className="flex justify-center items-center flex-col lg:flex-row justify-around w-full">
              <Image
                src={"/certifications/logo-oea.png"}
                alt="oea"
                width={240}
                height={500}
              />
              <Image
                src={"/certifications/logo-dnb.png"}
                alt="oea"
                width={200}
                height={100}
                className="h-[50px]"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
