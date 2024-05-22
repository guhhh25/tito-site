'use client'

import Loading from '@//components/loading'
import Path from '@//components/path'
import Footer from '@//footer'
import Header from '@//header'
import initTranslations from '@//i18n'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function OurStory({ params }: { params: { locale: string } }) {
  const [translate, setTranslate] = useState<any>()
  const [isLoading, setIsLoading] = useState(true)

  const initializeTranslateAsync = async () => {
    const translation = await initTranslations(params.locale, ['Home page'])
    setTranslate(translation)
  }

  useEffect(() => {
    initializeTranslateAsync()
    setIsLoading(false)
    console.log(params.locale)
  }, [])
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-[100vh]">
          <Loading />
        </div>
      ) : (
        <div className="flex  flex-col h-screen">
          <Header locale={params.locale} />
          <div className="flex-grow flex">
            <div className="flex flex-col justify-center items-center w-full">
              <Path
                link1="/"
                namePath1="Home"
                namePath2="Nossa Historia"
                link2="/ourstory"
              />
              <div className="content  ">
                <div className="w-full px-10 mb-10 h-50">
                  <div className="flex flex-col  items-center justify-center  bg-white p-5  border-1 rounded-lg mt-5">
                    <div className="flex flex-col justify-center xl:flex-row px-[65px]  items-center relative">
                      <div className="w-full">
                        <p className="flex justify-center max-w-[700px]  items-center mt-5 px-8 mb-5 text-wrap text-lg 2xl:text-xl tracking-wider ">
                          {translate && translate.t && translate.t('history')}
                        </p>
                      </div>
                      <div className="w-full">
                        <Image
                          src={'/story/history01.jpg'}
                          className=""
                          objectFit="fit"
                          height={800}
                          width={690}
                          alt="history01"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col xl:flex-row px-[65px]  items-center">
                      <div className="w-full">
                        <Image
                          src={'/story/history02.jpg'}
                          className=""
                          objectFit="fit"
                          height={800}
                          width={690}
                          alt="history02"
                        />
                      </div>
                      <div className="w-full">
                        <p className="flex justify-center max-w-[700px]  items-center mt-5 px-8 mb-5 text-wrap text-lg 2xl:text-xl tracking-wider ">
                          {translate && translate.t && translate.t('history1')}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center xl:flex-row px-[65px]  items-center relative">
                      <div className="w-full">
                        <p className="flex justify-center  max-w-[700px]  items-center mt-5 mb-5   px-8 text-lg 2xl:text-lg tracking-wider ">
                          {translate && translate.t && translate.t('history2')}
                        </p>
                      </div>
                      <div className="flex justify-center items-center relative w-full">
                        <Image
                          src={'/story/history01.jpg'}
                          className=""
                          objectFit="fit"
                          height={800}
                          width={690}
                          alt="history01"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col xl:flex-row px-[65px]  items-center">
                      <div className="w-full">
                        <Image
                          src={'/story/history02.jpg'}
                          className=""
                          objectFit="fit"
                          height={800}
                          width={690}
                          alt="history02"
                        />
                      </div>
                      <div className="w-full">
                        <p className="flex justify-center max-w-[700px]  items-center mt-5 px-8 mb-5 text-wrap text-lg 2xl:text-xl tracking-wider ">
                          {translate && translate.t && translate.t('history3')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  )
}
