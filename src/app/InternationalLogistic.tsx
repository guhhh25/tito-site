import { useEffect, useState } from 'react'
import InternationalLogisticContent from './components/InternationLogisticContent'
import Title from './components/title'
import initTranslations from './i18n'
import LocaleProps from './Utils/localeType'

export default function InternationalLogistic({ locale }: LocaleProps) {
  const [translate, setTranslate] = useState<any>()
  const [type, setType] = useState('maritmo')

  const initializeTranslateAsync = async () => {
    const translation = await initTranslations(locale, ['Home page'])
    setTranslate(translation)
  }

  useEffect(() => {
    initializeTranslateAsync()
  }, [])

  const setTypeState = (value: string) => {
    setType(value)
  }

  return (
    <div className="flex flex-col  lg:flex-row    mt-10 mb-10 justify-center items-center ">
      <div className="flex justify-center items-center flex-col">
        <Title
          title={
            translate &&
            translate.t &&
            translate.t('HeaderInternationalLogistic')
          }
        />
        <div className="flex p-6 border border-gray-300 rounded-lg shadow bg-white">
          <p className=" mt-5 ">
            {translate &&
              translate.t &&
              translate.t('InternationalLogisticsText')}
          </p>
        </div>
        <div className="w-full mt-8">
          <div className="flex justify-center flex-wrap ">
            <button
              onClick={() => setTypeState('maritmo')}
              className={`${
                type === 'maritmo'
                  ? 'bg-blue-500 hover:bg-blue-700'
                  : 'bg-gray-500 hover:bg-gray-700'
              } text-white font-bold py-2 px-6   -mr-1 rounded-b-none`}
            >
              {translate && translate.t && translate.t('Maritime')}
            </button>
            <button
              onClick={() => setTypeState('aereo')}
              className={` -mr-1 ${
                type === 'aereo'
                  ? 'bg-blue-500 hover:bg-blue-700'
                  : 'bg-gray-500 hover:bg-gray-700'
              }  text-white font-bold py-2 px-6 `}
            >
              {translate && translate.t && translate.t('Plane')}
            </button>
            <button
              onClick={() => setTypeState('rodoviario')}
              className={`-mr-1  ${
                type === 'rodoviario'
                  ? 'bg-blue-500 hover:bg-blue-700'
                  : 'bg-gray-500 hover:bg-gray-700'
              }  text-white font-bold py-2 px-6 `}
            >
              {translate && translate.t && translate.t('Road')}
            </button>
            <button
              onClick={() => setTypeState('projeto')}
              className={` -mr-1 ${
                type === 'projeto'
                  ? 'bg-blue-500 hover:bg-blue-700'
                  : 'bg-gray-500 hover:bg-gray-700'
              }  text-white font-bold py-2 px-6  `}
            >
              {translate && translate.t && translate.t('Project')}
            </button>
            <button
              onClick={() => setTypeState('planejamento')}
              className={` -mr-1 ${
                type === 'planejamento'
                  ? 'bg-blue-500 hover:bg-blue-700'
                  : 'bg-gray-500 hover:bg-gray-700'
              }  text-white font-bold py-2 px-6 `}
            >
              {translate && translate.t && translate.t('Planning')}
            </button>
            <button
              onClick={() => setTypeState('rastreabilidade')}
              className={` -mr-1 ${
                type === 'rastreabilidade'
                  ? 'bg-blue-500 hover:bg-blue-700'
                  : 'bg-gray-500 hover:bg-gray-700'
              }  text-white font-bold py-2 px-6   rounded-b-none`}
            >
              {translate && translate.t && translate.t('Traceability')}
            </button>
          </div>

          <InternationalLogisticContent type={type} locale={locale} />
        </div>
      </div>
    </div>
  )
}
