import emailjs from 'emailjs-com'

const SERVICE_ID = 'service_zx7m347'
const TEMPLATE_ID = 'template_glyp8mr'
const PUBLIC_KEY = 'dkD2TG1kmeM6aQKO0sf9v'

export const sendEmail = (formData: {
  nom: string
  email: string
  message: string
}) => {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      name: formData.nom,
      email: formData.email,
      message: formData.message
    },
    PUBLIC_KEY
  )
}