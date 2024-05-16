import * as yup from 'yup'

export const schema = yup
  .object({
    name: yup.string().required('O campo nome é obrigatório!'),
    email: yup
      .string()
      .required('O campo email é obrigatório!')
      .email('Email Invalído'),
    address: yup.string(),
    phone: yup.string(),
    message: yup
      .string()
      .required('O campo mensagem é obrigatório!')
      .min(10, 'Minimo 10 caracteres.'),
  })
  .required()
