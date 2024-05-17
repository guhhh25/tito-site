'use client'
import InternationalLogistic from '../InternationalLogistic'
import Path from '../components/path'
import Footer from '../footer'
import Header from '../header'

export default function InternationalLogistics() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <div className="flex-grow  flex flex-col xl:flex-row justify-center items-center px-10 w-full">
        <div className="flex w-full">
          <Path
            link1="/"
            namePath1="Home"
            namePath2="Logística Internacional"
            link2="/internationallogistics"
          />
          <div className="content  flex justify-center items-center">
            <InternationalLogistic />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
