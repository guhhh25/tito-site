import Image from 'next/image'
import * as React from 'react'
import ae from '../../../public/logosTito/logo-tito-transparente.png'
import Footer from '../footer'

interface EmailReportTemplateProps {
  message: string
  name: string
  email: string
  data: string
  phone: string
  reasons: []
  titoitems: []
}

export const EmailReportTemplate: React.FC<
  Readonly<EmailReportTemplateProps>
> = ({ message, name, email, data, phone, reasons, titoitems }) => (
  <div style={{ maxWidth: '600px' }}>
    <div style={{ marginBottom: '10px' }}>
      <strong>Nome:</strong> <span>{name}</span>
    </div>
    <div style={{ marginBottom: '10px' }}>
      <strong>Email:</strong> <span>{email}</span>
    </div>
    <div style={{ marginBottom: '10px' }}>
      <strong>Data:</strong> <span>{data}</span>
    </div>
    <div style={{ marginBottom: '10px' }}>
      <strong>Telefone:</strong> <span>{phone}</span>
    </div>
    <div style={{ marginBottom: '10px' }}>
      <strong>Mensagem:</strong>
      <p>{message}</p>
    </div>
    <div style={{ marginBottom: '10px' }}>
      <strong>Razões:</strong>
      <ul>
        {reasons.map((reason: any, index) => (
          <li key={index}>{reason.label}</li>
        ))}
      </ul>
    </div>
    <div style={{ marginBottom: '10px' }}>
      <strong>Empresa:</strong>
      <ul>
        {titoitems.map((item: any, index) => (
          <li key={index}>{item.label}</li>
        ))}
      </ul>
    </div>
  </div>
)
