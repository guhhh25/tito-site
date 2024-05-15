import dynamic from 'next/dynamic'
import Title from './components/title'
import Button from './components/button'
import SendEmail from './api/email'
import { useEffect } from 'react'

export default function Contact() {
  const MapWithNoSSR = dynamic(() => import('./components/map'), {
    ssr: false,
  })

  useEffect(() => {
    try {
      SendEmail()
    } catch (e) {
      console.log(e)
    }
  }, [])

  return (
    <div className="flex flex-col lg:flex-row justify-center px-8 lg:p-20  items-center  w-full mb-10 lg:max-h-[622px] ">
      <div className=" bg-white w-full px-4 lg:px-10 py-10  max-w-[900px]">
        <Title title="CONTATO" />
        <form className="w-full">
          <div className="d-flex justify-between">
            <div className="flex flex-col mt-8">
              <div className="relative z-0 mb-5">
                <input
                  type="text"
                  id="floating_standard"
                  className="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-gray-100 appearance-none  dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                  Nome
                </label>
              </div>

              <div className="relative z-0 mb-5">
                <input
                  type="text"
                  id="floating_standard"
                  className="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-gray-100 appearance-none  dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                  Email
                </label>
              </div>

              <div className="relative z-0 mb-5">
                <input
                  type="text"
                  id="floating_standard"
                  className="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-gray-100 appearance-none  dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                  Endereço
                </label>
              </div>

              <div className="relative z-0 mb-5">
                <input
                  type="text"
                  id="floating_standard"
                  className="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-gray-100 appearance-none  dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                  Telefone
                </label>
              </div>
              <div className="relative z-0 mb-5">
                <textarea
                  rows={2}
                  className="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-gray-100 appearance-none  dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                />
                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                  Mensagem
                </label>
              </div>

              <Button text="Enviar" />
            </div>
            <div></div>
          </div>
        </form>
      </div>
      <div className="w-full 2xl:w-auto">
        <MapWithNoSSR />
      </div>
    </div>
  )
}
