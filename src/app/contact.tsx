import Title from './components/title'
import Button from './components/button'
import InputMask from 'react-input-mask'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { toast } from 'react-hot-toast'

import Mapa from './components/map'
import { schema } from './validation/validation'
import axios from 'axios'
import dynamic from 'next/dynamic'
import { useState } from 'react'

export default function Contact() {
  const MapWithNoSSR = dynamic(() => import('./components/map'), {
    ssr: false,
  })

  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  type FormData = yup.InferType<typeof schema>
  const onSubmit = async (data: any) => {
    setIsLoading(true)
    try {
      const body = {
        from: 'Acme <onboarding@resend.dev>',
        to: ['gustavo.ramos@titoonline.com'],
        subject: 'Contato Suporte',
        message: data.message,
        name: data.name,
        phone: data.phone,
        address: data.address,
        email: data.email,
      }

      await axios.post('/api', body)

      toast.success('Mensagem enviada com sucesso!')
      setIsLoading(false)
    } catch (error) {
      toast.error('Ocorreu um erro ao enviar a mensagem!')
      console.error('Erro ao enviar email:', error)
    }
  }

  return (
    <div className="flex flex-col lg:flex-row justify-center  items-center  w-full mb-10  ">
      <div className=" bg-white w-full px-4 lg:px-10 py-10  max-w-[900px]">
        <Title title="CONTATO" />
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="d-flex justify-between">
            <div className="flex flex-col mt-8">
              <div className="relative z-0 mb-5">
                <input
                  {...register('name')}
                  type="text"
                  className="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-gray-100 appearance-none dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <p className="text-red-700 text-sm">{errors.name?.message}</p>
                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                  Nome
                </label>
              </div>

              <div className="relative z-0 mb-5">
                <input
                  {...register('email')}
                  type="text"
                  className="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-gray-100 appearance-none  dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <p className="text-red-700 text-sm">{errors.email?.message}</p>
                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                  Email
                </label>
              </div>

              <div className="relative z-0 mb-5">
                <input
                  {...register('address')}
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
                <InputMask
                  {...register('phone')}
                  mask="(99) 99999-9999"
                  type="text"
                  id="floating_standard"
                  className="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-gray-100 appearance-none  dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <p className="text-red-700 text-sm">{errors.phone?.message}</p>
                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                  Telefone
                </label>
              </div>
              <div className="relative z-0 mb-5">
                <textarea
                  {...register('message')}
                  name="message"
                  rows={2}
                  className="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-gray-100 appearance-none  dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                />
                <p className="text-red-700 text-sm">
                  {errors.message?.message}
                </p>
                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                  Mensagem
                </label>
              </div>
              <Button isLoading={isLoading} text="Enviar" onclick={() => ''} />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
