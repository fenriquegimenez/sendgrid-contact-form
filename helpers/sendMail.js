import nodemailer from "nodemailer"

const usuario = process.env.NEXT_PUBLIC_MAIL_ACCOUNT
const password = process.env.NEXT_PUBLIC_MAIL_PASS
const adminMail = process.env.NEXT_PUBLIC_USER1

const today = new Date()

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: usuario,
    pass: password,
  },
})

export default function enviarMail(name, email, message) {
  const mailOptions = {
    from: usuario,
    to: adminMail,
    subject: "Contacto web",
    text: `Nuevo contacto web \n====================\nEmail: ${email}\n==================== \n\n ${today} \nNombre: ${name} \n Mensaje: ${message}.`,
  }
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err)
      return {
        status: 1,
        msg: "Hubo un error",
      }
    } else {
      console.log(info)
      return {
        status: 0,
        msg: "Mensaje enviado a " + to + " correctamente.",
      }
    }
  })
}
