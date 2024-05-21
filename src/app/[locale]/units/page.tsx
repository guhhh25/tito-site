'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { BR } from 'country-flag-icons/react/3x2'
import { AR } from 'country-flag-icons/react/3x2'
import { US } from 'country-flag-icons/react/3x2'
import { MX } from 'country-flag-icons/react/3x2'
import { LU } from 'country-flag-icons/react/3x2'
import Header from '@//header'
import Path from '@//components/path'
import UnitItems from '@//components/unitItems'
import Footer from '@//footer'
import initTranslations from '@//i18n'

interface Country {
  country: string
}

export default function Units({ params }: { params: { locale: string } }) {
  const [translate, setTranslate] = useState<any>()

  const initializeTranslateAsync = async () => {
    const translation = await initTranslations(params.locale, ['Home page'])
    setTranslate(translation)
  }

  useEffect(() => {
    initializeTranslateAsync()
  }, [])
  const [isLoading, setIsLoading] = useState(true)
  const [country, setCountry] = useState<Country>({ country: 'brasil' })

  const handleCoutry = (country: string) => {
    setCountry({ country })
  }

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <>
      <Header locale={params.locale} />
      <div className="flex-grow flex w-full">
        <div className="flex flex-col justify-center items-center w-full">
          <Path
            link1="/"
            namePath1="Home"
            namePath2="Unidades"
            link2="/units"
          />
          <div className="content w-full h-full mb-10">
            <div className="px-10 mt-5 w-full">
              <div className="bg-white p-8 rounded-lg h-full w-full">
                <p className="text-gray-600 mb-8 text-lg">
                  {translate && translate.t && translate.t('TitoUnitsText')}
                </p>
                <div className="flex justify-center items-center w-full  mt-10">
                  <Image
                    src={'/units/mapa_abrangencia2.jpg'}
                    alt="img"
                    width={900}
                    height={200}
                  />
                </div>
                <div
                  className="flex justify-center flex-col xl:flex-row mt-10 mb-5 w-full"
                  role="group"
                >
                  <button
                    type="button"
                    className="px-6 py-3 min-w-[120px] text-sm mb-2 xl:mb-0 font-medium text-gray-900 bg-white border border-gray-200 xl:rounded-s-lg hover:bg-gray-100 hover:text-blue-700  focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700  dark:focus:text-white"
                    onClick={() => handleCoutry('brasil')}
                  >
                    Brasil
                  </button>
                  <button
                    type="button"
                    className="px-6 py-3 min-w-[120px] mb-2 xl:mb-0  text-sm font-medium text-gray-900 bg-white border border-gray-200  hover:bg-gray-100 hover:text-blue-700  focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700  dark:focus:text-white"
                    onClick={() => handleCoutry('argentina')}
                  >
                    Argentina
                  </button>
                  <button
                    type="button"
                    className="px-6 py-3 min-w-[120px] mb-2 xl:mb-0  text-sm font-medium text-gray-900 bg-white border border-gray-200  hover:bg-gray-100 hover:text-blue-700  focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700  dark:focus:text-white"
                    onClick={() => handleCoutry('usa')}
                  >
                    USA
                  </button>
                  <button
                    type="button"
                    className="px-6 py-3 min-w-[120px] mb-2 xl:mb-0  text-sm font-medium text-gray-900 bg-white border border-gray-200  hover:bg-gray-100 hover:text-blue-700  focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700  dark:focus:text-white"
                    onClick={() => handleCoutry('mexico')}
                  >
                    MEXICO
                  </button>
                  <button
                    type="button"
                    className="px-6 py-3 min-w-[120px] mb-2 xl:mb-0  text-sm font-medium text-gray-900 bg-white border border-gray-200 xl:rounded-r-lg hover:bg-gray-100 hover:text-blue-700  focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700  dark:focus:text-white"
                    onClick={() => handleCoutry('holanda')}
                  >
                    HOLANDA
                  </button>
                </div>
                <div className="flex flex-col  lg:flex-row bg-gray-100 w-full h-fit py-5 mt-1 justify-center items-center">
                  <div className="hidden xl:block">
                    {country.country === 'brasil' ? (
                      <div>
                        <div className="flex flex-row p-2">
                          <UnitItems
                            adress="São Caetano do Sul - SP"
                            street=" Av. Goiás, 1860 3º andar • B. Barcelona • CEP 09550-050"
                            phone=" Fone: 11 2102-9300 • Fax: 11 4221 4393"
                            country={
                              <BR
                                title="United States"
                                className="w-8 h-8 absolute right-8"
                              />
                            }
                          />
                          <UnitItems
                            adress="Santos - SP"
                            street="Av. D. Ana Costa, 61 - Gonzaga - Santos - SP • CEP: CEP 11060-002"
                            phone="Fone: 13 3512-0141"
                            country={
                              <BR
                                title="United States"
                                className="w-8 h-8 absolute right-8"
                              />
                            }
                          />
                        </div>
                        <div className="flex flex-row p-2">
                          <UnitItems
                            adress="Campinas - SP"
                            street=" Rod. Santos Dumont, Km 66 • s/nº • 1º Andar Sala 152 • CEP 13055-900"
                            phone="Fone/Fax: 19 3725-6264"
                            country={
                              <BR
                                title="United States"
                                className="w-8 h-8 absolute right-8"
                              />
                            }
                          />
                          <UnitItems
                            adress="Suzano - SP"
                            street="Rodovia Índio Tibiriça 12000, KM 58 • Bairro Palmeiras • CEP 08635-170"
                            phone="Fone: 11 4746-7559 • Fax: 11 4748-0525"
                            country={
                              <BR
                                title="United States"
                                className="w-8 h-8 absolute right-8"
                              />
                            }
                          />
                        </div>
                        <div className="flex flex-row p-2">
                          <UnitItems
                            adress="Uruguaiana - RS"
                            street=" Av. Flores da Cunha, 1838 • Centro • CEP 97501-650"
                            phone="Fone: 55 2102-5500 • Fax: 55 3412-5646"
                            country={
                              <BR
                                title="United States"
                                className="w-8 h-8 absolute right-8"
                              />
                            }
                          />
                          <UnitItems
                            adress="São Borja - RS"
                            street="Aparício mariense, 2520 - Centro - São Borja - RS • CEP: 97670-000"
                            phone="Não informado"
                            country={
                              <BR
                                title="United States"
                                className="w-8 h-8 absolute right-8"
                              />
                            }
                          />
                        </div>
                        <div className="flex flex-row p-2">
                          <UnitItems
                            adress="Novo Hamburgo - RS"
                            street="Av. Nações Unidas, 2475 • 4º andar • sala 401 • CEP: 93336-013"
                            phone="Fone: 51 3333-8707"
                            country={
                              <BR
                                title="United States"
                                className="w-8 h-8 absolute right-8"
                              />
                            }
                          />
                          <UnitItems
                            adress="Rio Grande - RS"
                            street="Rua dos Andradas, 195 - Sala 103"
                            phone="Fone/fax: 53 3035-1558 • CEP: 96200-030"
                            country={
                              <BR
                                title="United States"
                                className="w-8 h-8 absolute right-8"
                              />
                            }
                          />
                        </div>
                        <div className="flex flex-row p-2">
                          <UnitItems
                            adress="Rio de Janeiro - RJ"
                            street="Praça XV de novembro, 20 • 8 andar • Sala 4 • CEP: 20010-010"
                            phone=" Fone: 21 2509-4386"
                            country={
                              <BR
                                title="United States"
                                className="w-8 h-8 absolute right-8"
                              />
                            }
                          />
                          <UnitItems
                            adress="Itajaí - SC"
                            street="Rua Dagoberto Nogueira, 100 - Sala 702"
                            phone="Fone/fax: 47 3046-1011 • CEP: 88301-060"
                            country={
                              <BR
                                title="United States"
                                className="w-8 h-8 absolute right-8"
                              />
                            }
                          />
                        </div>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                  <div className="xl:hidden block">
                    {country.country === 'brasil' ? (
                      <div>
                        <div className="flex flex-row p-2">
                          <UnitItems
                            adress="São Caetano do Sul - SP"
                            street=" Av. Goiás, 1860 3º andar • B. Barcelona • CEP 09550-050"
                            phone=" Fone: 11 2102-9300 • Fax: 11 4221 4393"
                            country={
                              <BR
                                title="United States"
                                className="w-8 h-8 absolute right-8"
                              />
                            }
                          />
                        </div>
                        <div className="flex flex-row p-2">
                          <UnitItems
                            adress="Santos - SP"
                            street="Av. D. Ana Costa, 61 - Gonzaga - Santos - SP • CEP: CEP 11060-002"
                            phone="Fone: 13 3512-0141"
                            country={
                              <BR
                                title="United States"
                                className="w-8 h-8 absolute right-8"
                              />
                            }
                          />
                        </div>
                        <div className="flex flex-row p-2">
                          <UnitItems
                            adress="Campinas - SP"
                            street=" Rod. Santos Dumont, Km 66 • s/nº • 1º Andar Sala 152 • CEP 13055-900"
                            phone="Fone/Fax: 19 3725-6264"
                            country={
                              <BR
                                title="United States"
                                className="w-8 h-8 absolute right-8"
                              />
                            }
                          />
                        </div>
                        <div className="flex flex-row p-2">
                          <UnitItems
                            adress="Suzano - SP"
                            street="Rodovia Índio Tibiriça 12000, KM 58 • Bairro Palmeiras • CEP 08635-170"
                            phone="Fone: 11 4746-7559 • Fax: 11 4748-0525"
                            country={
                              <BR
                                title="United States"
                                className="w-8 h-8 absolute right-8"
                              />
                            }
                          />
                        </div>
                        <div className="flex flex-row p-2">
                          <UnitItems
                            adress="Uruguaiana - RS"
                            street=" Av. Flores da Cunha, 1838 • Centro • CEP 97501-650"
                            phone="Fone: 55 2102-5500 • Fax: 55 3412-5646"
                            country={
                              <BR
                                title="United States"
                                className="w-8 h-8 absolute right-8"
                              />
                            }
                          />
                        </div>
                        <div className="flex flex-row p-2">
                          <UnitItems
                            adress="São Borja - RS"
                            street="Aparício mariense, 2520 - Centro - São Borja - RS • CEP: 97670-000"
                            phone="Não informado"
                            country={
                              <BR
                                title="United States"
                                className="w-8 h-8 absolute right-8"
                              />
                            }
                          />
                        </div>
                        <div className="flex flex-row p-2">
                          <UnitItems
                            adress="Novo Hamburgo - RS"
                            street="Av. Nações Unidas, 2475 • 4º andar • sala 401 • CEP: 93336-013"
                            phone="Fone: 51 3333-8707"
                            country={
                              <BR
                                title="United States"
                                className="w-8 h-8 absolute right-8"
                              />
                            }
                          />
                        </div>
                        <div className="flex flex-row p-2">
                          <UnitItems
                            adress="Rio Grande - RS"
                            street="Rua dos Andradas, 195 - Sala 103"
                            phone="Fone/fax: 53 3035-1558 • CEP: 96200-030"
                            country={
                              <BR
                                title="United States"
                                className="w-8 h-8 absolute right-8"
                              />
                            }
                          />
                        </div>
                        <div className="flex flex-row p-2">
                          <UnitItems
                            adress="Rio de Janeiro - RJ"
                            street="Praça XV de novembro, 20 • 8 andar • Sala 4 • CEP: 20010-010"
                            phone=" Fone: 21 2509-4386"
                            country={
                              <BR
                                title="United States"
                                className="w-8 h-8 absolute right-8"
                              />
                            }
                          />
                        </div>
                        <div className="flex flex-row p-2">
                          <UnitItems
                            adress="Itajaí - SC"
                            street="Rua Dagoberto Nogueira, 100 - Sala 702"
                            phone="Fone/fax: 47 3046-1011 • CEP: 88301-060"
                            country={
                              <BR
                                title="United States"
                                className="w-8 h-8 absolute right-8"
                              />
                            }
                          />
                        </div>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                  {country.country === 'argentina' ? (
                    <div>
                      <div className="flex flex-row p-2">
                        <UnitItems
                          adress="Buenos Aires"
                          street="Perú, 367 • 5º Piso • C1067AAG"
                          phone="tito.argentina@titoonline.com"
                          country={
                            <AR
                              title="Argentina"
                              className="w-8 h-8 absolute right-8"
                            />
                          }
                        />
                      </div>
                    </div>
                  ) : (
                    ''
                  )}

                  {country.country === 'usa' ? (
                    <div>
                      <div className="flex flex-row p-2">
                        <UnitItems
                          adress="Miami - FL"
                          street="6701 NW 7th Street / Suite #156 / Docks 27-31"
                          phone=" Phone: 1 305 677 8140"
                          country={
                            <US
                              title="United States"
                              className="w-8 h-8 absolute right-8"
                            />
                          }
                        />
                      </div>
                    </div>
                  ) : (
                    ''
                  )}

                  {country.country === 'mexico' ? (
                    <div>
                      <div className="flex flex-row p-2">
                        <UnitItems
                          adress="Ciudad de México"
                          street="Mariano Escobedo, 396 • 2º Piso, Despacho 201"
                          phone="Tel/Fax : +52 55 2453-3100"
                          country={
                            <MX
                              title="United States"
                              className="w-8 h-8 absolute right-8"
                            />
                          }
                        />
                      </div>
                    </div>
                  ) : (
                    ''
                  )}

                  {country.country === 'holanda' ? (
                    <div>
                      <div className="flex flex-row p-2">
                        <UnitItems
                          adress="2991XV, Barendrecht / The Netherlands"
                          street="Mariano Escobedo, 396 • 2º Piso, Despacho 201"
                          phone="Tel: +31 0 6 17 55 88 40 /  rotterdam@titoonline.com"
                          country={
                            <LU
                              title="United States"
                              className="w-8 h-8 absolute right-8"
                            />
                          }
                        />
                      </div>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
