'use client'
import Calculator from '@//components/calculator'
import Path from '@//components/path'
import Footer from '@//footer'
import Header from '@//header'
import initTranslations from '@//i18n'
import { useEffect, useState } from 'react'

export default function Calculate({ params }: { params: { locale: string } }) {
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
    <div className="flex flex-col h-fit w-full">
      <Header locale={params.locale} />
      <div className="flex-grow flex justify-center w-full items-center">
        <div className="flex flex-col items-start mx-4 mt-10 w-full">
          <Path
            link1="/"
            link2="/titotools"
            namePath1="HOME"
            namePath2={translate && translate.t && translate.t('HeaderTools')}
            link3="/titotools/calculator"
            namePath3={
              translate &&
              translate.t &&
              translate.t('CalculationofVolumetricWeight').toUpperCase()
            }
          />
          <div className="flex flex-row items-center justify-center lg:py-20 mt-[200px] lg:mt-20 w-full ">
            <Calculator locale={params.locale as string} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
