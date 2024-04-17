export function getQuotation() {
  return fetch("https://economia.awesomeapi.com.br/last/USD-BRL")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao obter a cotação do dólar.");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error("Erro ao obter a cotação do dólar:", error);
    });
}
