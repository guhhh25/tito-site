import Image from 'next/image'
import { useEffect, useState } from 'react'
import { getQuotation } from './Utils/GetQuotation'
import { VscArrowUp } from 'react-icons/vsc'
import { VscArrowDown } from 'react-icons/vsc'
import { PiChartLineUpThin } from 'react-icons/pi'
import { PiChartLineDownThin } from 'react-icons/pi'
import { PiCalendarBlankThin } from 'react-icons/pi'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react'
import { AR, BR, ES, MX, US } from 'country-flag-icons/react/3x2'
import initTranslations from './i18n'
import LocaleProps from './Utils/localeType'

interface usdQuotationValueProps {
  ask: string
  bid: string
  USDBRL: any
  create_date: string
}

export default function Header({ locale }: LocaleProps) {
  const [translate, setTranslate] = useState<any>()

  console.log(locale, 'locale header')

  const initializeTranslateAsync = async () => {
    const translation = await initTranslations(locale, ['Home page'])
    setTranslate(translation)
  }

  useEffect(() => {
    initializeTranslateAsync()
    console.log(locale)
  }, [])

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [usdQuotationValue, setUsdQuotationValue] =
    useState<usdQuotationValueProps>()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        let actualQuotation = await getQuotation()

        setUsdQuotationValue(actualQuotation as any)
      } catch (error) {
        console.error('Ocorreu um erro:', error)
      }
    }

    fetchData()
  }, [])

  //let formattedData = FormatData(usdQuotationValue);

  return (
    <div
      style={{ transition: 'background-color 0.3s ease' }}
      className={`fixed shadow-2xl w-full z-10 h-auto flex items-center justify-between bg-white p-4   ${
        isScrolled ? 'bg-white bg-opacity-40' : ''
      }`}
    >
      <a href="/">
        <Image
          className={`h-auto w-auto cursor-pointer ${
            isScrolled ? 'opacity-40' : ''
          }`}
          style={{ width: '100%', height: 'auto' }}
          alt="tito logo"
          width={110}
          height={110}
          src="/logosTito/logo-tito-transparente.png"
        />
      </a>
      {/* Botão de menu para dispositivos móveis */}
      <button
        className="block lg:hidden focus:outline-none z-50"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>
      {/* Menu desktop */}
      <div className="hidden lg:flex lg:items-center lg:space-x-8 links text-sm">
        <a
          href="/internationallogistcs"
          className="text-gray-700 hover:text-blue-600"
        >
          {translate &&
            translate.t &&
            translate.t('HeaderInternationalLogistic')}
        </a>
        <a href="/titotools" className="text-gray-700 hover:text-blue-600">
          {translate && translate.t && translate.t('HeaderTools')}
        </a>
        <a href="/certifications" className="text-gray-700 hover:text-blue-600">
          {translate && translate.t && translate.t('HeaderCertifications')}
        </a>

        <a
          href="#"
          id="hoverItem"
          className="text-gray-700 hover:text-blue-600"
        >
          {translate && translate.t && translate.t('HeaderDolar')}
        </a>
        <div id="popup" className="popup">
          <p className="text-xl text-gray-500 mt-2 mb-4">
            {translate && translate.t && translate.t('HeaderQuotationDolar')}
          </p>
          <div className="flex items-center">
            <VscArrowUp className="w-[16px] h-[16px]" />{' '}
            <p className="text-green-500 ml-2 mt-0.5  font-medium text-[16px]">
              {' '}
              {translate && translate.t && translate.t('HeaderBuyDolar')}
            </p>
            <span className=" ml-1 mt-0.5 font-medium ">
              ${usdQuotationValue?.USDBRL.bid.substring(0, 4)}
            </span>
          </div>
          <div className="flex items-center mt-4">
            <VscArrowDown className="w-[16px] h-[16px]" />
            <p className="text-red-500 ml-2 mt-0.5  font-medium text-[16px]">
              {translate && translate.t && translate.t('HeaderSellDolar')}
            </p>
            <span className=" ml-1 mt-0.5 font-medium ">
              ${usdQuotationValue?.USDBRL.ask.substring(0, 4)}
            </span>
          </div>
          <div className="flex items-center mt-4">
            <PiChartLineUpThin className="w-[18px] h-[18px]" />
            <p className="text-green-500 ml-2 mt-0.5  font-medium text-[16px]">
              {translate && translate.t && translate.t('HeaderHighValueDolar')}
            </p>
            <span className=" ml-1 font-medium ">
              ${usdQuotationValue?.USDBRL.high.substring(0, 4)}
            </span>
          </div>
          <div className="flex items-center mt-4">
            <PiChartLineDownThin className="w-[18px] h-[18px]" />
            <p className="text-red-500 ml-2 mt-0.5  font-medium text-[16px]">
              {translate && translate.t && translate.t('HeaderLowValueDolar')}
            </p>
            <span className="ml-1 font-medium">
              ${usdQuotationValue?.USDBRL.low.substring(0, 4)}
            </span>
          </div>
          <div className="flex items-center mt-4">
            <PiCalendarBlankThin className="w-[16px] h-[16px]" />

            <p className="text-yellow-500 ml-2 mt-0.5  font-medium text-[16px]">
              {translate && translate.t && translate.t('DOLARPTAX')}
            </p>
            <span className="ml-1 font-medium">
              {usdQuotationValue?.USDBRL.create_date}
            </span>
          </div>
        </div>

        <a href="/units" className="text-gray-700 hover:text-blue-600">
          {translate && translate.t && translate.t('HeaderUnits')}
        </a>

        <a href="/traceability" className="text-gray-700 hover:text-blue-600">
          {translate && translate.t && translate.t('HeaderTraceability')}
        </a>

        <a
          href="/report"
          id="hoverItem"
          className="text-gray-700 hover:text-blue-600"
        >
          {translate && translate.t && translate.t('HeaderReport')}
        </a>
        <div className="border-1 border-blue-500">
          <a
            href="https://home.titoonline.com.br/intranet_1/"
            target="_blank"
            className="relative inline-flex text-center items-center justify-center px-4  overflow-hidden  transition-all bg-transparent rounded hover:bg-white group border border-blue-500"
          >
            <span className=" w-48 h-48 rounded text-center rotate-[-30deg] bg-blue-500 absolute bottom-0 -left-50 -translate-x-full ease-out duration-500 transition-all translate-y-full  group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="text-gray-700 hover:text-blue-600 relative w-full  text-center text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white p-2">
              INTRANET
            </span>
          </a>
        </div>

        <Dropdown>
          <DropdownTrigger>
            <Button className="border-none outline-none">
              {locale === 'pt' ? <BR className="h-10 w-10" /> : ''}
              {locale === 'en' ? <US className="h-10 w-10" /> : ''}
              {locale === 'es' ? <ES className="h-10 w-10" /> : ''}
              {locale === 'ar' ? <AR className="h-10 w-10" /> : ''}
              {locale === 'mx' ? <MX className="h-10 w-10" /> : ''}
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            {locale !== 'pt'
              ? ((
                  <DropdownItem key="new">
                    <a href="/pt">
                      <BR className="h-10 w-10" />
                    </a>
                  </DropdownItem>
                ) as any)
              : ''}
            {locale !== 'en'
              ? ((
                  <DropdownItem key="new">
                    <a href="/en">
                      <US className="h-10 w-10" />
                    </a>
                  </DropdownItem>
                ) as any)
              : ''}
            {locale !== 'es'
              ? ((
                  <DropdownItem key="new">
                    <a href="/es">
                      <ES className="h-10 w-10" />
                    </a>
                  </DropdownItem>
                ) as any)
              : ''}
            {locale !== 'ar'
              ? ((
                  <DropdownItem key="new">
                    <a href="/es">
                      <AR className="h-10 w-10" />
                    </a>
                  </DropdownItem>
                ) as any)
              : ''}
            {locale !== 'mx'
              ? ((
                  <DropdownItem key="new">
                    <a href="/es">
                      <MX className="h-10 w-10" />
                    </a>
                  </DropdownItem>
                ) as any)
              : ''}
          </DropdownMenu>
        </Dropdown>
      </div>

      {/* Menu mobile */}
      <div
        className={` lg:hidden fixed top-0 right-0 bottom-0 left-0 bg-white  transition-all duration-300 ease-in-out z-30 ${
          isMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'
        }`}
      >
        <div className="p-5 mt-2 ">
          <a href="/">
            {' '}
            <Image
              className="cursor-pointer mb-5"
              alt="tito logo"
              width={110}
              height={110}
              src="/logosTito/logo-tito-white.png"
            />
          </a>

          <a
            href="/internationallogistcs"
            className="block mb-3 py-2 border-b-2 border-bottom hover:text-blue-700"
          >
            {translate &&
              translate.t &&
              translate.t('HeaderInternationalLogistic')}
          </a>
          <a
            href="/titotools"
            className="block mb-3 py-2 border-b-2 border-bottom hover:text-blue-700"
          >
            {translate && translate.t && translate.t('HeaderTools')}
          </a>
          <a
            href="/certifications"
            className="block mb-3 py-2 border-b-2 border-bottom hover:text-blue-700"
          >
            {translate && translate.t && translate.t('HeaderCertifications')}
          </a>
          <a
            href="/units"
            className="block mb-3 py-2 border-b-2 border-bottom hover:text-blue-700"
          >
            {translate && translate.t && translate.t('HeaderUnits')}
          </a>
          <a
            href="/traceability"
            className="block mb-3 py-2 border-b-2 border-bottom hover:text-blue-700"
          >
            {translate && translate.t && translate.t('HeaderTraceability')}
          </a>
          <a
            href="/report"
            className="block mb-3 py-2 border-b-2 border-bottom hover:text-blue-700"
          >
            {translate && translate.t && translate.t('HeaderReport')}
          </a>
          <a
            href="/"
            id="hoverItem"
            className="block mb-3 py-2 border-b-2 border-bottom hover:text-blue-700"
          >
            {translate && translate.t && translate.t('HeaderDolar')}
          </a>
          <div id="popupMobile" className="popupMobile">
            <p className="text-xl text-gray-500 mt-2 mb-2">COMERCIAL</p>
            <div className="flex items-center">
              <p className="text-green-500   font-bold text-[16px]">
                {' '}
                {translate && translate.t && translate.t('HeaderBuyDolar')}
              </p>
              <span className=" ml-1 font-bold ">
                ${usdQuotationValue?.USDBRL.bid.substring(0, 4)}
              </span>
            </div>
            <div className="flex items-center mt-2">
              <p className="text-red-500 font-bold text-[16px]">
                {' '}
                {translate && translate.t && translate.t('HeaderSellDolar')}
              </p>
              <span className="ml-1 font-bold">
                ${usdQuotationValue?.USDBRL.ask.substring(0, 4)}
              </span>
            </div>
            <div className="flex items-center mt-2">
              <p className="text-green-500 mb-1  font-bold text-[16px]">
                {translate &&
                  translate.t &&
                  translate.t('HeaderHighValueDolar')}
              </p>
              <span className=" ml-1 font-bold ">
                ${usdQuotationValue?.USDBRL.high.substring(0, 4)}
              </span>
            </div>
            <div className="flex items-center mt-2">
              <p className="text-red-500 font-bold text-[16px]">
                {translate && translate.t && translate.t('HeaderLowValueDolar')}
              </p>
              <span className="ml-1 font-bold">
                ${usdQuotationValue?.USDBRL.low.substring(0, 4)}
              </span>
            </div>
            <div className="flex items-center mt-2">
              <p className="text-yellow-500 font-bold text-[16px]">
                {translate && translate.t && translate.t('HeaderDolarPtax')}
              </p>
              <span className="ml-1 font-bold">10/04/2024</span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <a
              href="https://home.titoonline.com.br/intranet_1/"
              target="_blank"
              className="relative inline-flex text-center items-center justify-center px-4  overflow-hidden  transition-all bg-transparent rounded hover:bg-white group border border-blue-500"
            >
              <span className=" w-48 h-48 rounded text-center rotate-[-30deg] bg-blue-500 absolute bottom-0 -left-50 -translate-x-full ease-out duration-500 transition-all translate-y-full  group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="text-gray-700 hover:text-blue-600 relative w-full  text-center text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white p-2">
                INTRANET
              </span>
            </a>
            <Dropdown>
              <DropdownTrigger>
                <Button className="border-none outline-none">
                  {locale === 'pt' ? <BR className="h-10 w-10" /> : ''}
                  {locale === 'en' ? <US className="h-10 w-10" /> : ''}
                  {locale === 'es' ? <ES className="h-10 w-10" /> : ''}
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                {locale !== 'pt'
                  ? ((
                      <DropdownItem key="new">
                        <a href="/pt">
                          <BR className="h-10 w-10" />
                        </a>
                      </DropdownItem>
                    ) as any)
                  : ''}
                {locale !== 'en'
                  ? ((
                      <DropdownItem key="new">
                        <a href="/en">
                          <US className="h-10 w-10" />
                        </a>
                      </DropdownItem>
                    ) as any)
                  : ''}
                {locale !== 'es'
                  ? ((
                      <DropdownItem key="new">
                        <a href="/es">
                          <ES className="h-10 w-10" />
                        </a>
                      </DropdownItem>
                    ) as any)
                  : ''}
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  )
}
