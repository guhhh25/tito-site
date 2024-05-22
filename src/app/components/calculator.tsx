import { useEffect, useState } from 'react'
import { HandleCalculate } from '../Utils/Calculate'
import initTranslations from '../i18n'
import LocaleProps from '../Utils/localeType'

export default function calculator({ locale }: LocaleProps) {
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
    units: '',
    length: '',
    width: '',
    height: '',
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

  const handleSubmit = () => {
    let calculate = HandleCalculate(
      inputs.length,
      inputs.width,
      inputs.height,
      inputs.units
    )
    setResult(calculate as any)
  }

  return (
    <div className="bg-white  w-full  border-1 rounded-lg bg-white p-10 max-w-[500px]">
      <h2 className="font-sm">
        {translate &&
          translate.t &&
          translate.t('CalculationofVolumetricWeight')}
      </h2>
      <div className="mb-6">
        <div className="mt-5">
          <label className="block mb-2 text-sm font-medium text-black">
            {translate && translate.t && translate.t('Unitsusedforcalculation')}
          </label>

          <select
            id="units"
            name="units"
            value={inputs.units}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 focus:outline-none  text-sm rounded-lg focus:border-blue-300 block w-full p-2.5 text-gray-500 "
          >
            <option disabled value="" defaultValue={'selecione'}>
              {translate && translate.t && translate.t('ReportSelect')}
            </option>
            <option value="cm">cm / kg</option>
            <option value="lb">pol / lb</option>
          </select>
        </div>
        <div className="mt-5">
          <label className="block mb-2 text-sm font-medium text-black">
            {translate && translate.t && translate.t('Length')}
          </label>

          <input
            type="number"
            id="length"
            name="length"
            value={inputs.length}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 focus:outline-none  text-sm rounded-lg focus:border-blue-300 block w-full p-2.5 text-gray-500 "
          />
        </div>
        <div className="mt-5">
          <label className="block mb-2 text-sm font-medium text-black">
            {translate && translate.t && translate.t('Width')}
          </label>
          <input
            type="number"
            id="width"
            name="width"
            value={inputs.width}
            onChange={handleChange}
            className="bg-gray-50  border border-gray-300 focus:outline-none  text-sm rounded-lg focus:border-blue-300 block w-full p-2.5 text-gray-500 "
          />
        </div>
        <div className="mt-5">
          <label className="block mb-2 text-sm font-medium text-black">
            {translate && translate.t && translate.t('Height')}
          </label>
          <input
            type="number"
            id="height"
            name="height"
            value={inputs.height}
            onChange={handleChange}
            className="bg-gray-50 border  border-gray-300 focus:outline-none  text-sm rounded-lg focus:border-blue-300 block w-full p-2.5 text-gray-500 "
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

        <span className={`mr-8 ${result !== undefined ? 'block' : 'hidden'}`}>
          {translate && translate.t && translate.t('VolumetricWeight')}:{' '}
          {result}{' '}
        </span>
      </div>
    </div>
  )
}
