'use client'
import LocaleProps from '@//Utils/localeType'
import ConverterForm from '@//components/converterForm'
import Path from '@//components/path'
import Footer from '@//footer'
import Header from '@//header'
import initTranslations from '@//i18n'
import { useEffect, useState } from 'react'

export default function Converter({ params }: { params: { locale: string } }) {
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
    <div className="flex flex-col h-screen">
      <Header locale={params.locale} />
      <div className="flex-grow flex justify-center items-center">
        <div className="flex flex-col items-start mx-4 mt-10">
          <Path
            link1="/"
            link2="/titotools"
            namePath1="HOME"
            namePath2={translate && translate.t && translate.t('HeaderTools')}
            link3="/titotools/converter"
            namePath3={
              translate &&
              translate.t &&
              translate.t('CurrencyConverter').toUpperCase()
            }
          />
          <div className="flex flex-row w-full items-center justify-center py-20 mt-20">
            <ConverterForm locale={params.locale} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
