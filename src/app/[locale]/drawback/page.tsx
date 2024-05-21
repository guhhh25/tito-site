'use client'

import Loading from '@//components/loading'
import Path from '@//components/path'
import Footer from '@//footer'
import Header from '@//header'
import initTranslations from '@//i18n'
import { useEffect, useState } from 'react'
import { MdCheck } from 'react-icons/md'

export default function Drawback({ params }: { params: { locale: string } }) {
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
        <div className="flex justify-center items-center h-[100vh] w-full">
          <Loading />
        </div>
      ) : (
        <div className="flex flex-col h-screen">
          <Header locale={params.locale} />
          <div className="flex-grow flex">
            <div className="flex flex-col items-start">
              <Path
                link1="/"
                namePath1="Home"
                namePath2="Drawback"
                link2="/drawback"
              />
              <div className="content  ">
                <div className="w-full px-10 mb-10 h-50">
                  <div className=" bg-white p-5  border-1 rounded-lg mt-5">
                    <div className="flex flex-col xl:flex-row gap-5 justify-center  ">
                      <p className="mt-5 mb-5 px-10 text-sm max-w-[800px]">
                        {translate && translate.t && translate.t('Drawback')}
                      </p>

                      <p className="mt-5 mb-5 max-w-[800px] px-10  ">
                        <strong>
                          {translate &&
                            translate.t &&
                            translate.t('whoaretheprofs')}
                        </strong>
                        <br />
                        {translate &&
                          translate.t &&
                          translate.t('professionalsdescription')}
                        <br />
                        <strong>
                          {translate &&
                            translate.t &&
                            translate.t('whatweaimfor')}
                        </strong>
                        <br />
                        {translate &&
                          translate.t &&
                          translate.t('advisoryservice')}
                        <br />
                        <strong>
                          {translate &&
                            translate.t &&
                            translate.t('whatweprioritize')}
                        </strong>
                        <br />{' '}
                        {translate &&
                          translate.t &&
                          translate.t('workingaccordingtothestandards')}
                      </p>
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
