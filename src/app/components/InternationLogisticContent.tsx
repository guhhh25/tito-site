import { useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import { MdCheck } from 'react-icons/md'
import initTranslations from '../i18n'

interface LocaleInterface {
  type: string
  locale: string
}

export default function InternationalLogisticContent({
  locale,
  type,
}: LocaleInterface) {
  const [translate, setTranslate] = useState<any>()

  const initializeTranslateAsync = async () => {
    const translation = await initTranslations(locale, ['Home page'])
    setTranslate(translation)
  }

  useEffect(() => {
    initializeTranslateAsync()
  }, [])

  return (
    <div className=" w-full">
      {type === 'maritmo' ? (
        <Fade>
          <div className="block w-full p-6 border border-gray-300 rounded-lg shadow bg-gray-200 mt-1">
            <p className="text-lg w-full font-normal text-black">
              {translate &&
                translate.t &&
                translate.t('InternationalLogisticMaritmeCard')}
            </p>
            <ul className="mt-5 font-normal text-black  text-lg flex flex-col lg:flex-row justify-between w-full lg:w-[80%] ">
              <div>
                <li className="flex items-center">
                  {' '}
                  <MdCheck className="mr-1" />{' '}
                  {translate &&
                    translate.t &&
                    translate.t('InternationalLogisticMaritmeCardItem1')}
                </li>
                <li className="flex items-center">
                  {' '}
                  <MdCheck className="mr-1" />{' '}
                  {translate &&
                    translate.t &&
                    translate.t('InternationalLogisticMaritmeCardItem2')}
                </li>
                <li className="flex items-center">
                  {' '}
                  <MdCheck className="mr-1" />{' '}
                  {translate &&
                    translate.t &&
                    translate.t('InternationalLogisticMaritmeCardItem3')}
                </li>
              </div>
              <div>
                <li className="flex items-center">
                  {' '}
                  <MdCheck className="mr-1" />{' '}
                  {translate &&
                    translate.t &&
                    translate.t('InternationalLogisticMaritmeCardItem4')}
                </li>
                <li className="flex items-center">
                  {' '}
                  <MdCheck className="mr-1" />{' '}
                  {translate &&
                    translate.t &&
                    translate.t('InternationalLogisticMaritmeCardItem5')}
                </li>
                <li className="flex items-center">
                  {' '}
                  <MdCheck className="mr-1" />
                  {translate &&
                    translate.t &&
                    translate.t('InternationalLogisticMaritmeCardItem6')}
                </li>
              </div>
            </ul>
          </div>
        </Fade>
      ) : (
        ''
      )}
      {type === 'aereo' ? (
        <Fade>
          <div className="block w-full p-6  border border-gray-300 rounded-lg shadow  bg-gray-200 mt-1">
            <p className="text-lg w-full font-normal text-black">
              {translate &&
                translate.t &&
                translate.t('InternationalLogisticPlaneCard')}
            </p>
            <ul className="mt-5 font-normal text-black  text-lg flex flex-col lg:flex-row justify-between w-full lg:w-[80%] ">
              <div>
                <li className="flex items-center">
                  {' '}
                  <MdCheck className="mr-1" />{' '}
                  {translate &&
                    translate.t &&
                    translate.t('InternationalLogisticPlaneCardItem1')}
                </li>
                <li className="flex items-center">
                  {' '}
                  <MdCheck className="mr-1" />
                  {translate &&
                    translate.t &&
                    translate.t('InternationalLogisticPlaneCardItem2')}
                </li>
              </div>
              <div>
                <li className="flex items-center">
                  {' '}
                  <MdCheck className="mr-1" />{' '}
                  {translate &&
                    translate.t &&
                    translate.t('InternationalLogisticPlaneCardItem3')}
                </li>
                <li className="flex items-center">
                  {' '}
                  <MdCheck className="mr-1" />{' '}
                  {translate &&
                    translate.t &&
                    translate.t('InternationalLogisticPlaneCardItem4')}
                </li>
              </div>
            </ul>
          </div>
        </Fade>
      ) : (
        ''
      )}
      {type === 'rodoviario' ? (
        <Fade>
          <div className="block w-full p-6  border border-gray-300 rounded-lg shadow  bg-gray-200 mt-1">
            <p className="w-full text-lg w-full">
              {translate &&
                translate.t &&
                translate.t('InternationalLogisticRoadCard')}
            </p>
            <ul className="mt-5 text-lg flex flex-col lg:flex-row justify-between w-full lg:w-[80%] ">
              <div>
                <li className="flex items-center">
                  {' '}
                  <MdCheck className="mr-1" />
                  {translate &&
                    translate.t &&
                    translate.t('InternationalLogisticRoadCardItem1')}
                </li>
                <li className="flex items-center">
                  {' '}
                  <MdCheck className="mr-1" />
                  {translate &&
                    translate.t &&
                    translate.t('InternationalLogisticRoadCardItem2')}
                </li>
                <li className="flex items-center">
                  {' '}
                  <MdCheck className="mr-1" />{' '}
                  {translate &&
                    translate.t &&
                    translate.t('InternationalLogisticRoadCardItem3')}
                </li>
                <li className="flex items-center">
                  {' '}
                  <MdCheck className="mr-1" />
                  {translate &&
                    translate.t &&
                    translate.t('InternationalLogisticRoadCardItem4')}
                </li>
              </div>
              <div>
                <li className="flex items-center">
                  {' '}
                  <MdCheck className="mr-1" />{' '}
                  {translate &&
                    translate.t &&
                    translate.t('InternationalLogisticRoadCardItem5')}
                </li>
                <li className="flex items-center">
                  {' '}
                  <MdCheck className="mr-1" />{' '}
                  {translate &&
                    translate.t &&
                    translate.t('InternationalLogisticRoadCardItem6')}
                </li>
                <li className="flex items-center">
                  {' '}
                  <MdCheck className="mr-1" />{' '}
                  {translate &&
                    translate.t &&
                    translate.t('InternationalLogisticRoadCardItem7')}
                </li>
                <li className="flex items-center">
                  {' '}
                  <MdCheck className="mr-1" />{' '}
                  {translate &&
                    translate.t &&
                    translate.t('InternationalLogisticRoadCardItem8')}
                </li>
              </div>
            </ul>
          </div>
        </Fade>
      ) : (
        ''
      )}

      {type === 'projeto' ? (
        <Fade>
          <div className="block w-full p-6  border border-gray-300 rounded-lg shadow  bg-gray-200 mt-1">
            <p className="w-full text-lg">
              {translate &&
                translate.t &&
                translate.t('InternationalLogisticProjectCard')}
            </p>
            <ul className="mt-5 text-lg">
              <li className="flex items-center">
                {' '}
                <MdCheck className="mr-1" />{' '}
                {translate &&
                  translate.t &&
                  translate.t('InternationalLogisticProjectCardItem1')}
              </li>
              <li className="flex items-center">
                {' '}
                <MdCheck className="mr-1" />{' '}
                {translate &&
                  translate.t &&
                  translate.t('InternationalLogisticProjectCardItem2')}
              </li>
              <li className="flex items-center">
                {' '}
                <MdCheck className="mr-1" />{' '}
                {translate &&
                  translate.t &&
                  translate.t('InternationalLogisticProjectCardItem3')}
              </li>
              <li className="flex items-center">
                {' '}
                <MdCheck className="mr-1" />{' '}
                {translate &&
                  translate.t &&
                  translate.t('InternationalLogisticProjectCardItem4')}
              </li>
            </ul>
          </div>
        </Fade>
      ) : (
        ''
      )}
      {type === 'planejamento' ? (
        <Fade>
          <div className="block w-full p-6  border border-gray-300 rounded-lg shadow  bg-gray-200 mt-1">
            <p className="w-full text-lg">
              {translate &&
                translate.t &&
                translate.t('InternationalLogisticPlanningCard')}
            </p>
            <ul className="mt-5 text-lg flex flex-col lg:flex-row justify-between w-full lg:w-[80%] ">
              <div>
                <li className="flex items-center">
                  {' '}
                  <MdCheck className="mr-1" />{' '}
                  {translate &&
                    translate.t &&
                    translate.t('InternationalLogisticPlanningCardItem1')}
                </li>
                <li className="flex items-center">
                  {' '}
                  <MdCheck className="mr-1" />{' '}
                  {translate &&
                    translate.t &&
                    translate.t('InternationalLogisticPlanningCardItem2')}
                </li>
                <li className="flex items-center">
                  {' '}
                  <MdCheck className="mr-1" />{' '}
                  {translate &&
                    translate.t &&
                    translate.t('InternationalLogisticPlanningCardItem3')}
                </li>
                <li className="flex items-center">
                  {' '}
                  <MdCheck className="mr-1" />{' '}
                  {translate &&
                    translate.t &&
                    translate.t('InternationalLogisticPlanningCardItem4')}
                </li>
                <li className="flex items-center">
                  {' '}
                  <MdCheck className="mr-1" />
                  {translate &&
                    translate.t &&
                    translate.t('InternationalLogisticPlanningCardItem5')}
                </li>
                <li>
                  {' '}
                  <MdCheck className="mr-1" />
                  {translate &&
                    translate.t &&
                    translate.t('InternationalLogisticPlanningCardItem6')}
                </li>
                <li className="flex items-center">
                  {' '}
                  <MdCheck className="mr-1" />{' '}
                  {translate &&
                    translate.t &&
                    translate.t('InternationalLogisticPlanningCardItem7')}
                </li>
                <li className="flex items-center">
                  {' '}
                  <MdCheck className="mr-1" />{' '}
                  {translate &&
                    translate.t &&
                    translate.t('InternationalLogisticPlanningCardItem8')}
                </li>
              </div>
              <div>
                <li className="flex items-center">
                  {' '}
                  <MdCheck className="mr-1" />{' '}
                  {translate &&
                    translate.t &&
                    translate.t('InternationalLogisticPlanningCardItem9')}
                </li>
                <li className="flex items-center">
                  {' '}
                  <MdCheck className="mr-1" />{' '}
                  {translate &&
                    translate.t &&
                    translate.t('InternationalLogisticPlanningCardItem10')}
                </li>
                <li className="flex items-center">
                  {' '}
                  <MdCheck className="mr-1" />{' '}
                  {translate &&
                    translate.t &&
                    translate.t('InternationalLogisticPlanningCardItem11')}
                </li>
                <li className="flex items-center">
                  {' '}
                  <MdCheck className="mr-1" />{' '}
                  {translate &&
                    translate.t &&
                    translate.t('InternationalLogisticPlanningCardItem12')}
                </li>
                <li className="flex items-center">
                  {' '}
                  <MdCheck className="mr-1" />{' '}
                  {translate &&
                    translate.t &&
                    translate.t('InternationalLogisticPlanningCardItem13')}
                </li>
                <li className="flex items-center">
                  {' '}
                  <MdCheck className="mr-1" />{' '}
                  {translate &&
                    translate.t &&
                    translate.t('InternationalLogisticPlanningCardItem14')}
                </li>
                <li className="flex items-center">
                  {' '}
                  <MdCheck className="mr-1" />{' '}
                  {translate &&
                    translate.t &&
                    translate.t('InternationalLogisticPlanningCardItem15')}
                </li>
                <li className="flex items-center">
                  {' '}
                  <MdCheck className="mr-1" />{' '}
                  {translate &&
                    translate.t &&
                    translate.t('InternationalLogisticPlanningCardItem16')}
                </li>
              </div>
            </ul>
          </div>
        </Fade>
      ) : (
        ''
      )}
      {type === 'rastreabilidade' ? (
        <Fade>
          <div className="block w-full p-6  border border-gray-300 rounded-lg shadow  bg-gray-200 mt-1 ">
            <p className="w-full lg:w-[85%] text-lg  ">
              {translate &&
                translate.t &&
                translate.t('InternationalLogisticTraceabilityCard')}
            </p>
            <p className="text-lg mt-5">
              {translate &&
                translate.t &&
                translate.t('InternationalLogisticTraceabilityCardItem1')}
            </p>
            <ul className="mt-5 text-lg">
              <li className="flex items-center">
                {' '}
                <MdCheck className="mr-1" />{' '}
                {translate &&
                  translate.t &&
                  translate.t('InternationalLogisticTraceabilityCardItem2')}
              </li>
              <li className="flex items-center">
                {' '}
                <MdCheck className="mr-1" />{' '}
                {translate &&
                  translate.t &&
                  translate.t('InternationalLogisticTraceabilityCardItem1')}
              </li>
              <li className="flex items-center">
                {' '}
                <MdCheck className="mr-1" />{' '}
                {translate &&
                  translate.t &&
                  translate.t('InternationalLogisticTraceabilityCardItem3')}
              </li>
              <li className="flex items-center">
                {' '}
                <MdCheck className="mr-1" />{' '}
                {translate &&
                  translate.t &&
                  translate.t('InternationalLogisticTraceabilityCardItem4')}
              </li>
            </ul>
          </div>
        </Fade>
      ) : (
        ''
      )}
    </div>
  )
}
