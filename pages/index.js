import Head from "next/head"
import ContactUs from "../components/ContactUs"

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>EG Contact Form</title>
        <meta
          name="description"
          content="A working contact form with Nodemailer integration and form validations."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <ContactUs />
      </main>
    </div>
  )
}
