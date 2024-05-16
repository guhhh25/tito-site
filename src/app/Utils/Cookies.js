export function VerifyCookies() {
  const cookies = document.cookie.split(';')
  const cookieExists = cookies.some((cookie) =>
    cookie.trim().startsWith('cookies=true')
  )

  return cookieExists
}

export function setCookie() {
  // Calcula a data de expiração para o próximo dia
  const expirationDate = new Date()
  expirationDate.setDate(expirationDate.getDate() + 1)

  // Formata a data de expiração para o formato de cookie
  const expires = expirationDate.toUTCString()

  // Define o cookie com a data de expiração calculada
  document.cookie = `cookies=true; expires=${expires}; path=/`
}
