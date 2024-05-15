const { default: axios } = require('axios')

export default function SendEmail() {
  const postUrl = 'https://tito.com.br/sys/msg/api-email.php' // Usando um proxy para lidar com o CORS

  axios
    .post(
      postUrl,
      {
        emissor: 'gustavo.ramos@titoonline.com',
        assunto: 'assunto',
        destinatario: 'guhhh25@gmail.com',
        mensagem: 'teste mensagem',
        usuario: 'teste',
      },
      {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
        },
      }
    )
    .then((response) => {
      console.log(response)
    })
    .catch((err) => {
      console.log(err)
    })
}
