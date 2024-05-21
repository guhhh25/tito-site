import Image from 'next/image'
import Title from './components/title'
import Button from './components/button'
import { useEffect, useState } from 'react'
import initTranslations from './i18n'
import LocaleProps from './Utils/localeType'

export default function AboutUs({ locale }: LocaleProps) {
  const [translate, setTranslate] = useState<any>()

  const initializeTranslateAsync = async () => {
    const translation = await initTranslations(locale, ['Home page'])
    setTranslate(translation)
  }

  useEffect(() => {
    initializeTranslateAsync()
  }, [])

  return (
    <>
      <div className="flex flex-col xl:flex-row 2xl:justify-center  items-center 2xl:items-center text-start justify-start lg:p-20 ">
        <div className="2xl:max-w-[1110px] px-8">
          <Title
            title={translate && translate.t && translate.t('AboutTitle')}
          />
          <p className="text-gray-800  w-full text-4xl mt-4 mb-4">
            {translate && translate.t && translate.t('AboutHeader')}
          </p>
          <p className="text-xl  max-w-[1100px] w-full ">
            {translate && translate.t && translate.t('AboutText')}
          </p>

          <div className="flex gap-3">
            <a href="/ourstory">
              <Button
                text={translate && translate.t && translate.t('AboutBtnAbout')}
              />
            </a>
            <a
              href="https://titoonline.com/pt/pdf/normas_conduta_ptb.pdf"
              target="_blank"
            >
              <Button
                text={translate && translate.t && translate.t('AboutCondut')}
              />
            </a>
          </div>
        </div>
        <div className="relative">
          <Image
            alt="truck"
            className="hidden xl:block border-1 rounded-lg px-8 lg:px-0  w-full"
            src="/truck/truck.jpg"
            width={600}
            height={200}
          />
        </div>
      </div>
    </>
  )
}
