import Image from 'next/image'
import * as React from 'react'
import ae from '../../../public/logosTito/logo-tito-transparente.png'
import Footer from '../footer'

interface EmailTemplateProps {
  message: string
  name: string
  email: string
  address: string
  phone: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message,
  name,
  email,
  address,
  phone,
}) => (
  <div style={{ maxWidth: '600px' }}>
  <div style={{ marginBottom: '10px' }}>
    <strong>Nome:</strong> <span>{name}</span>
  </div>
  <div style={{ marginBottom: '10px' }}>
    <strong>Email:</strong> <span>{email}</span>
  </div>
  <div style={{ marginBottom: '10px' }}>
    <strong>Endereço:</strong> <span>{address}</span>
  </div>
  <div style={{ marginBottom: '10px' }}>
    <strong>Telefone:</strong> <span>{phone}</span>
  </div>
  <div style={{ marginBottom: '10px' }}>
    <strong>Mensagem:</strong>
    <p>{message}</p>
  </div>
</div>
)
