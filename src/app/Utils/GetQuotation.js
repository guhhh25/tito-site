export async function getQuotation () {
  return await fetch('https://economia.awesomeapi.com.br/last/USD-BRL')
    .then(async (response) => {
      if (!response.ok) {
        throw new Error('Erro ao obter a cotação do dólar.')
      }
      return await response.json()
    })
    .then((data) => {
      return data
    })
    .catch((error) => {
      console.error('Erro ao obter a cotação do dólar:', error)
    })
}
