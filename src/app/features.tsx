import CardFeature from './components/cardFeature'
import Title from './components/title'
import { SlPlane } from 'react-icons/sl'
import { IoBoatOutline } from 'react-icons/io5'
import { PiTrain } from 'react-icons/pi'
import { TbClockBolt } from 'react-icons/tb'
import { TiArrowRightThick } from 'react-icons/ti'
import Button from './components/button'
import initTranslations from './i18n'
import { useEffect, useState } from 'react'
import LocaleProps from './Utils/localeType'
export default function Features({ locale }: LocaleProps) {
  const [translate, setTranslate] = useState<any>()

  const initializeTranslateAsync = async () => {
    const translation = await initTranslations(locale, ['Home page'])
    setTranslate(translation)
  }

  useEffect(() => {
    initializeTranslateAsync()
  }, [])

  return (
    <div className="flex flex-col lg:flex-row justify-center  lg:px-20   items-center mb-10 lg:max-h-[622px] ">
      <div className="px-10">
        <Title
          title={translate && translate.t && translate.t('IncredibleFeatures')}
        />
        <p className="text-gray-800  lg:max-w-[500px]   w-full text-4xl mt-4 mb-4">
          {translate && translate.t && translate.t('FeatureText')}
        </p>

        <p className="bg-blue-500 h-2 w-20 rounded-full"></p>

        <p className="text-gray-400  lg:max-w-[500px]   w-full text-xl mt-4 mb-4">
          {translate && translate.t && translate.t('FeatureFooter')}
        </p>
      </div>
      <div className="flex justify-center items-center flex-wrap xl:flex-nowrap lg:justify-start items-start">
        <div className="flex flex-col justify-center items-center  lg:px-0 ">
          <CardFeature
            title={translate && translate.t && translate.t('FeaturesPlane')}
            text={translate && translate.t && translate.t('FeaturesPlaneCard')}
            icon={<SlPlane className="w-[50px] h-[80px]" />}
          />
          <CardFeature
            title={translate && translate.t && translate.t('FeaturesVessel')}
            text={translate && translate.t && translate.t('FeaturesVesselCard')}
            icon={<IoBoatOutline className="w-[50px] h-[80px]" />}
          />
        </div>
        <div className="flex flex-col justify-center items-center  lg:px-0">
          <CardFeature
            title={translate && translate.t && translate.t('FeaturesHighway')}
            text={
              translate && translate.t && translate.t('FeaturesHighwayCard')
            }
            icon={<PiTrain className="w-[50px] h-[80px]" />}
          />
          <CardFeature
            title={translate && translate.t && translate.t('FeaturesTime')}
            text={translate && translate.t && translate.t('FeaturesTimeCard')}
            icon={<TbClockBolt className="w-[50px] h-[80px]" />}
          />
        </div>
      </div>
    </div>
  )
}
