'use client'
import { useEffect, useState } from 'react'
import InternationalLogistic from '../../InternationalLogistic'
import Path from '../../components/path'
import Footer from '../../footer'
import Header from '../../header'
import initTranslations from '../../i18n'
import Loading from '@//components/loading'

export default function InternationalLogistics({
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
    console.log(params.locale)
  }, [])

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center h-[100vh]">
          <Loading />
        </div>
      ) : (
        <div className="flex flex-col min-h-screen w-full">
          <Header locale={params.locale} />
          <div className="flex-grow  flex flex-col xl:flex-row justify-center items-center px-10 w-full">
            <div className="flex w-full">
              <Path
                link1="/"
                namePath1="HOME"
                namePath2={
                  translate &&
                  translate.t &&
                  translate.t('HeaderInternationalLogistic')
                }
                link2="/internationallogistics"
              />
              <div className="content  flex justify-center items-center">
                <InternationalLogistic locale={params.locale} />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  )
}
