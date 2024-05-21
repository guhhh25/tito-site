'use client'

import Loading from '@//components/loading'
import Path from '@//components/path'
import Footer from '@//footer'
import Header from '@//header'
import initTranslations from '@//i18n'
import { useEffect, useState } from 'react'
import { MdCheck } from 'react-icons/md'

export default function Planning({ params }: { params: { locale: string } }) {
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
                namePath2="Planejamento"
                link2="/planning"
              />
              <div className="content  ">
                <div className="w-full px-10 mb-10 h-50">
                  <div className=" bg-white p-5  border-1 rounded-lg mt-5">
                    <p className="mt-5 mb-5">
                      {translate && translate.t && translate.t('PlanningText')}
                    </p>
                    <div className="flex flex-col xl:flex-row gap-5">
                      <div>
                        <p className="text-gray-800 font-semibold mt-3">
                          {translate &&
                            translate.t &&
                            translate.t('PlanningObj')}
                        </p>
                        <p className="flex items-center mt-2">
                          <MdCheck className="mr-1" />{' '}
                          {translate &&
                            translate.t &&
                            translate.t('PlanningItem1')}
                        </p>
                        <p className="flex items-center mt-2">
                          <MdCheck className="mr-1" />{' '}
                          {translate &&
                            translate.t &&
                            translate.t('PlanningItem2')}
                        </p>
                        <p className="flex items-center mt-2">
                          <MdCheck className="mr-1" />
                          {translate &&
                            translate.t &&
                            translate.t('PlanningItem3')}
                        </p>
                        <p className="flex items-center mt-2">
                          <MdCheck className="mr-1" />
                          {translate &&
                            translate.t &&
                            translate.t('PlanningItem4')}
                        </p>
                        <p className="flex items-center mt-2">
                          <MdCheck className="mr-1" />{' '}
                          {translate &&
                            translate.t &&
                            translate.t('PlanningItem5')}
                        </p>
                        <p className="flex items-center mt-2">
                          <MdCheck className="mr-1" />
                          {translate &&
                            translate.t &&
                            translate.t('PlanningItem6')}
                        </p>
                        <p className="flex items-center mt-2">
                          <MdCheck className="mr-1" />{' '}
                          {translate &&
                            translate.t &&
                            translate.t('PlanningItem7')}
                        </p>
                        <p className="flex items-center mt-2">
                          <MdCheck className="mr-1" />{' '}
                          {translate &&
                            translate.t &&
                            translate.t('PlanningItem8')}
                        </p>
                        <p className="flex items-center mt-2">
                          <MdCheck className="mr-1" />
                          {translate &&
                            translate.t &&
                            translate.t('PlanningItem9')}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-800 font-semibold mt-3">
                          <br />
                        </p>
                        <p className="flex items-center mt-2">
                          <MdCheck className="mr-1" />{' '}
                          {translate &&
                            translate.t &&
                            translate.t('PlanningItem10')}
                        </p>
                        <p className="flex items-center mt-2">
                          <MdCheck className="mr-1" />{' '}
                          {translate &&
                            translate.t &&
                            translate.t('PlanningItem11')}
                        </p>
                        <p className="flex items-center mt-2">
                          <MdCheck className="mr-1" />
                          {translate &&
                            translate.t &&
                            translate.t('PlanningItem12')}
                        </p>
                        <p className="flex items-center mt-2">
                          <MdCheck className="mr-1" />{' '}
                          {translate &&
                            translate.t &&
                            translate.t('PlanningItem13')}
                        </p>
                        <p className="flex items-center mt-2">
                          <MdCheck className="mr-1" />
                          {translate &&
                            translate.t &&
                            translate.t('PlanningItem14')}
                        </p>
                        <p className="flex items-center mt-2">
                          <MdCheck className="mr-1" />
                          {translate &&
                            translate.t &&
                            translate.t('PlanningItem15')}
                        </p>
                        <p className="flex items-center mt-2">
                          <MdCheck className="mr-1" />{' '}
                          {translate &&
                            translate.t &&
                            translate.t('PlanningItem16')}
                        </p>
                        <p className="flex items-center mt-2">
                          <MdCheck className="mr-1" />{' '}
                          {translate &&
                            translate.t &&
                            translate.t('PlanningItem17')}
                        </p>
                        <p className="flex items-center mt-2">
                          <MdCheck className="mr-1" />
                          {translate &&
                            translate.t &&
                            translate.t('PlanningItem18')}
                        </p>
                      </div>
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
