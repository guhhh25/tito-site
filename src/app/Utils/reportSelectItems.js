export const titoItems = [
  'SUDEX TITO COMISSARIA DE DESPACHOS ADUANEIROS LTDA',
  'SUDEX  TITO LOGISTICA LTDA'
]

export const reasons = [
  'Assédio Moral, agressão física ou discriminação',
  'Assédio Sexual',
  'Comportamento Inadequado',
  'Conflito de interesses',
  'Corrupção com órgão público',
  'Destruição ou danos de bens da empresa',
  'Favorecimento de fornecedores ou clientes',
  'Fraude ou roubo de dinheiro',
  'Irregularidade nas demonstrações financeiras e/ou relatórios',
  'Não cumprimento de políticas de procedimentos internos',
  'Roubo, furto ou desvio de materiais',
  'Contaminação da cadeia logística internacionao',
  'Uso indevido de recursos da empresa',
  'Vazamento ou uso inadequado de informações',
  'Violação de Leis Ambientais',
  'Violação de Leis Trabalhistas',
  'Violação de Leis Tributárias'
]

export const reasonsObjects = titoItems.map(items => ({
  value: items,
  label: items
}))

export const titoItemsObjects = reasons.map(reason => ({
  value: reason,
  label: reason
}))
