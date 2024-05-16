// Importa o componente correto de template de e-mail
import { EmailReportTemplate } from '@//components/emailReportTemplate'
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend('re_UtMnJztB_46hArSyvSiwo9aB4wegw2AtC')

export async function POST(req: NextRequest) {
  const {
    from,
    to,
    subject,
    message,
    name,
    phone,
    email,
    data,
    reasons,
    titoitems,
  } = await req.json()
  const { data: responseData, error } = await resend.emails.send({
    from: from,
    to: to,
    subject: subject,
    react: EmailReportTemplate({
      message: message,
      name: name,
      email: email,
      data: data,
      phone: phone,
      reasons: reasons,
      titoitems: titoitems,
    }) as string,
  })
  return NextResponse.json({
    hello: { data: responseData, error: error },
  })
}
