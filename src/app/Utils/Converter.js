const axios = require('axios')

function formatDate (date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}${month}${day}`
}

export async function MoneyConverter (code, codein, date, value) {
  const formateDate = date.replace(/[^\w\s]/gi, '')
  const currentDate = new Date()
  const formattedDate = formatDate(currentDate)

  try {
    const response = await axios.get(
      `https://economia.awesomeapi.com.br/json/daily/${codein}?start_date=${formateDate}&end_date=${formattedDate}`
    )

    const data = await response.data[0]

    const totalvalue = parseFloat(data.ask)

    const convertedValue = totalvalue * value

    let symbol = ''
    if (codein.split('-')[1] === 'EUR') {
      symbol = '€'
    } else if (codein.split('-')[1] === 'USD') {
      symbol = '$'
    } else if (codein.split('-')[1] === 'BRL') {
      symbol = 'R$'
    }

    return `${symbol}${convertedValue}`
  } catch (error) {
    console.error('Ocorreu um erro ao fazer a requisição:', error)
  }
}
