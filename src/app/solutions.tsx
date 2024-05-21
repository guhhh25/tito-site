import { useEffect, useState } from 'react'
import Card from './components/card'
import Title from './components/title'
import initTranslations from './i18n'
import LocaleProps from './Utils/localeType'

export default function Solutions({ locale }: LocaleProps) {
  const [translate, setTranslate] = useState<any>()

  const initializeTranslateAsync = async () => {
    const translation = await initTranslations(locale, ['Home page'])
    setTranslate(translation)
  }

  useEffect(() => {
    initializeTranslateAsync()
  }, [])

  return (
    <div className="flex flex-col  lg:px-20 items-center w-[100%] mb-10 lg:max-h-fit ">
      <div className="w-full px-10 lg:py-10   rounded-lg w-full max-w-[1720px] ">
        <Title title={translate && translate.t && translate.t('Solutions')} />
      </div>
      <div className="flex flex-col  px-8 w-full h-auto lg:flex-row  items-center justify-between 2xl:justify-center ">
        <Card
          href="/internationallogistcs"
          image={'/solutions/truckcard.jpg'}
          title={
            translate &&
            translate.t &&
            translate.t('InternationalTransportSolution')
          }
          text={
            translate &&
            translate.t &&
            translate.t('InternationalTransportCard')
          }
        />
        <Card
          href="/customsmanagement"
          image={'/solutions/card2.jpg'}
          title={
            translate && translate.t && translate.t('CustomsManagementSolution')
          }
          text={
            translate && translate.t && translate.t('CustomsManagementCard')
          }
        />
        <Card
          href="/planning"
          image={'/solutions/card3.jpg'}
          title={translate && translate.t && translate.t('PlanningSolution')}
          text={translate && translate.t && translate.t('PlanningCard')}
        />
      </div>
      <div className="flex flex-col  px-8 w-full h-auto lg:flex-row  items-center justify-between 2xl:justify-center ">
        <Card
          href="/drawback"
          image={'/solutions/drawback.jpeg'}
          title="Drawback"
          text={translate && translate.t && translate.t('DrawbackCard')}
        />
        <Card
          image={'/solutions/rastreabilidade.jpeg'}
          title={
            translate && translate.t && translate.t('TraceabilitySolution')
          }
          href="/traceability"
          text={translate && translate.t && translate.t('TraceabilityCard')}
        />
        <Card
          image={'/solutions/ferramentas.jpeg'}
          href="/titotools"
          title={translate && translate.t && translate.t('ToolsSolution')}
          text={translate && translate.t && translate.t('ToolsCard')}
        />
      </div>
    </div>
  )
}
