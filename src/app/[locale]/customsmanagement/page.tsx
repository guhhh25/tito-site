'use client'

import Loading from '@//components/loading'
import Path from '@//components/path'
import Footer from '@//footer'
import Header from '@//header'
import initTranslations from '@//i18n'
import { useEffect, useState } from 'react'
import { MdCheck } from 'react-icons/md'

export default function CustomsManagment({
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
                namePath2="Gestão Adunaneira"
                link2="/customsmanagement"
              />
              <div className="content  ">
                <div className="w-full px-10 mb-10 h-50">
                  <div className=" bg-white p-5  border-1 rounded-lg mt-5">
                    <p className="mt-5 mb-5">
                      {translate &&
                        translate.t &&
                        translate.t('CustomManagement')}
                    </p>
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
