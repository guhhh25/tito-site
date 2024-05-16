'use client'
import InternationalLogistic from '../InternationalLogistic'
import Path from '../components/path'
import Footer from '../footer'
import Header from '../header'

export default function InternationalLogistics() {
  return (
    <div className="w-full ">
      <Header />
      <div className="flex-grow flex">
        <div className="flex flex-col items-start">
          <Path
            link1="/"
            namePath1="Home"
            namePath2="Logística Internacional"
            link2="/internationallogistics"
          />
          <div className="content  ">
            <div className="w-full px-10 mb-10 h-50">
              <InternationalLogistic />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
