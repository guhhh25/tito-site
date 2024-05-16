import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { EmailTemplate } from '../components/emailTemplate'

const resend = new Resend('re_UtMnJztB_46hArSyvSiwo9aB4wegw2AtC')

export async function POST(req: NextRequest) {
  const { from, to, subject, react, message, name, phone, address, email } =
    await req.json()
  const { data, error } = await resend.emails.send({
    from: from,
    to: to,
    subject: subject,
    react: EmailTemplate({
      message: message,
      name: name,
      phone: phone,
      address: address,
      email: email,
    }) as string,
  })
  return NextResponse.json({
    hello: { data, error },
  })
}
