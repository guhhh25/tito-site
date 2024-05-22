import { useEffect, useState } from 'react'
import { MoneyConverter } from '../Utils/Converter'
import { Moedas } from '../Utils/Moedas'
import LocaleProps from '../Utils/localeType'
import initTranslations from '../i18n'

export default function ConverterForm({ locale }: LocaleProps) {
  const [translate, setTranslate] = useState<any>()
  const [isLoading, setIsLoading] = useState(true)

  const initializeTranslateAsync = async () => {
    const translation = await initTranslations(locale, ['Home page'])
    setTranslate(translation)
  }

  useEffect(() => {
    initializeTranslateAsync()
    setIsLoading(false)
  }, [])
  const [result, setResult] = useState<number>()
  const [inputs, setInputs] = useState({
    code: '',
    codein: '',
    date: '',
    value: '',
  })

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target
    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  const handleSubmit = async () => {
    let convert = await MoneyConverter(
      inputs.code,
      inputs.codein,
      inputs.date,
      inputs.value
    )
    await setResult(convert as any)
  }

  return (
    <div className="bg-white  max-w-[500px] border-1 rounded-lg bg-white p-10">
      <h2 className="font-sm">
        {translate && translate.t && translate.t('CurrencyConverter')}
      </h2>
      <div className="mb-6">
        <div className="mt-5">
          <label className="block mb-2 text-sm font-medium text-black">
            {translate && translate.t && translate.t('Unitsusedforcalculation')}
          </label>

          <select
            id="codein"
            name="codein"
            value={inputs.codein}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 focus:outline-none  text-sm rounded-lg focus:border-blue-300 block w-full p-2.5 text-gray-500 "
          >
            <option disabled value="" defaultValue={'selecione'}>
              {translate && translate.t && translate.t('ReportSelect')}
            </option>

            {Moedas.sort((a, b) => a.name.localeCompare(b.name)).map(
              (moeda, index) => (
                <option key={index} value={moeda.code}>
                  {moeda.name}
                </option>
              )
            )}
          </select>
        </div>
        <div className="mt-5"></div>
        <div className="mt-5">
          <label className="block mb-2 text-sm font-medium text-black">
            {translate && translate.t && translate.t('DateofQuotation')}
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={inputs.date}
            onChange={handleChange}
            className="bg-gray-50  border border-gray-300 focus:outline-none  text-sm rounded-lg focus:border-blue-300 block w-full p-2.5 text-gray-500 "
          />
        </div>
        <div className="mt-5">
          <label className="block mb-2 text-sm font-medium text-black">
            {translate && translate.t && translate.t('Valueforconversion')}
          </label>

          <input
            type="number"
            id="value"
            name="value"
            value={inputs.value}
            onChange={handleChange}
            className="bg-gray-50  border border-gray-300 focus:outline-none  text-sm rounded-lg focus:border-blue-300 block w-full p-2.5 text-gray-500 "
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button
          onClick={() => handleSubmit()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {translate && translate.t && translate.t('Calculate')}
        </button>

        <span className={`mr-8 ${result !== null ? 'block' : 'hidden'}`}>
          {translate && translate.t && translate.t('Result')}: {result}{' '}
        </span>
      </div>
    </div>
  )
}
