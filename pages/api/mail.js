// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import enviarMail from "../../helpers/sendMail"

export default function helper(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, message } = req.body
      enviarMail(name, email, message)
      res.status(200).json({
        msg: "Correo enviado",
      })
    } catch (error) {
      res.status(403).json({
        message: "There was an error",
      })
      console.log(error)
    }
  }
}
