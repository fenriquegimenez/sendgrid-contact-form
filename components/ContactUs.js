import React, { useState } from "react"

export default function ContactUs() {
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  //   Form validation
  const [errors, setErrors] = useState({})

  //   Setting button text
  const [buttonText, setButtonText] = useState("Enviar")

  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showFailureMessage, setShowFailureMessage] = useState(false)

  const handleValidation = () => {
    let tempErrors = {}
    let isValid = true

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true
      isValid = false
    }
    if (email.length <= 0) {
      tempErrors["email"] = true
      isValid = false
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true
      isValid = false
    }
    if (message.length <= 0) {
      tempErrors["message"] = true
      isValid = false
    }

    setErrors({ ...tempErrors })
    console.log("errors", errors)
    return isValid
  }

  const handleSubmit = async e => {
    e.preventDefault()

    let isValidForm = handleValidation()

    if (isValidForm) {
      setButtonText("Enviando")
      const res = await fetch("/api/mail", {
        body: JSON.stringify({
          email: email,
          name: fullname,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      })

      const { error } = await res.json()
      if (error) {
        console.log(error)
        setShowSuccessMessage(false)
        setShowFailureMessage(true)
        setButtonText("Enviar")

        // Reset form fields
        setFullname("")
        setEmail("")
        setMessage("")
        setSubject("")
        return
      }
      setShowSuccessMessage(true)
      setShowFailureMessage(false)
      setButtonText("Enviar")
      // Reset form fields
      setFullname("")
      setEmail("")
      setMessage("")
      setSubject("")
    }
    console.log(fullname, email, subject, message)
  }
  return (
    <main>
      <nav className="flex flex-row justify-between items-center p-8 bg-blue-50 dark:bg-blue-900">
        <div className="relative flex flex-row space-x-2 items-center">
          <div className="absolute h-6 w-4 bg-blue-500 z-10"></div>
          <div className="absolute top-0 left-1 h-6 w-4 bg-green-500"></div>
          <h1 className="pl-8 text-2xl font-bold italic text-gray-700 dark:text-gray-50">
            EG Software Factory
          </h1>
        </div>
        <div className="flex flex-row items-center space-x-8">
          <a
            href="#"
            className="hidden lg:block font-light text-base text-gray-600 dark:text-gray-50"
          >
            Inicio
          </a>
          <a
            href="#"
            className="hidden lg:block font-light text-base text-gray-600 dark:text-gray-50"
          >
            Nosotros
          </a>
          <a
            href="#"
            className="hidden lg:block font-light text-base text-gray-600 dark:text-gray-50"
          >
            Blog
          </a>
          <a
            href="#"
            className="hidden lg:block font-light text-base text-gray-600 dark:text-gray-50"
          >
            Contacto
          </a>
        </div>
        <div className="flex flex-row items-center space-x-8">
          <a
            href="https://twitter.com/fenriquegvera"
            className="hidden lg:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-twitter text-blue-500 dark:text-gray-50"
              viewBox="0 0 16 16"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/fenriquegimenez"
            className="hidden lg:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-linkedin text-blue-500 dark:text-gray-50"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </a>
          <a
            href="https://egsoftwarefactory.online"
            className="hidden lg:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-globe text-blue-500 dark:text-gray-50"
              viewBox="0 0 16 16"
            >
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
            </svg>
          </a>
        </div>
      </nav>
      <header className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4 pt-10 lg:px-40 bg-blue-50 dark:bg-blue-900 md:h-96">
        <div className="mx-auto mb-10 md:mt-20">
          <div className="badge bg-green-500 inline-block rounded-xl">
            <p className="font-light text-base px-4 py-1 text-gray-50">
              Hablemos
            </p>
          </div>
          <h1 className="text-4xl font-bold mt-4 dark:text-gray-50 text-gray-700">
            Hablemos sobre tus proyectos.
          </h1>
          <p className="text-sm text-gray-700 mt-4 font-light dark:text-gray-200">
            Completa el formulario y envía tus consultas. Te responderé lo antes
            posible. Opcionalmente, puedes enviarme un mail.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500"
        >
          <h1 className="text-2xl font-bold dark:text-gray-50">
            Envía un mensaje
          </h1>

          <label
            htmlFor="fullname"
            className="text-gray-500 font-light mt-8 dark:text-gray-50"
          >
            Nombre Completo
            <span className="text-red-500 dark:text-gray-50">*</span>
          </label>
          <input
            type="text"
            value={fullname}
            onChange={e => {
              setFullname(e.target.value)
            }}
            name="fullname"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />
          {errors?.fullname && (
            <p className="text-red-500">El nombre es obligatorio.</p>
          )}

          <label
            htmlFor="email"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            E-mail<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => {
              setEmail(e.target.value)
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />
          {errors?.email && (
            <p className="text-red-500">El email es obligatorio.</p>
          )}

          <label
            htmlFor="subject"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            Motivo<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={e => {
              setSubject(e.target.value)
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />
          {errors?.subject && (
            <p className="text-red-500">El motivo es obligatorio.</p>
          )}
          <label
            htmlFor="message"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            Mensaje<span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={message}
            onChange={e => {
              setMessage(e.target.value)
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          ></textarea>
          {errors?.message && (
            <p className="text-red-500">El mensaje es obligatorio.</p>
          )}
          <div className="flex flex-row items-center justify-start">
            <button
              type="submit"
              className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
            >
              {buttonText}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-cyan-500 ml-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <div className="text-left">
            {showSuccessMessage && (
              <p className="text-green-500 font-semibold text-sm my-2">
                Gracias! Tu mensaje ha sido enviado.
              </p>
            )}
            {showFailureMessage && (
              <p className="text-red-500">
                Oops! Algo salió mal, por favor vuelve a intentarlo.
              </p>
            )}
          </div>
        </form>
      </header>
      <section className="">
        <h1
          className={`text-4xl font-bold text-center md:mt-60 my-10 gradient-text text-gray-700 ${
            errors ? "md:mt-80" : "md:mt-60"
          }`}
        >
          Contacto
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 mx-2 md:grid-cols-3 gap-6 max-w-6xl md:mx-auto my-20">
          <div className="card p-8 shadow rounded-md flex flex-row items-center space-x-4 hover:cursor-pointer hover:shadow-lg transition duration-200">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-cyan-500 h-4 w-4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 12C22 10.6868 21.7413 9.38647 21.2388 8.1731C20.7362 6.95996 19.9997 5.85742 19.0711 4.92896C18.1425 4.00024 17.0401 3.26367 15.8268 2.76123C14.6136 2.25854 13.3132 2 12 2V4C13.0506 4 14.0909 4.20703 15.0615 4.60889C16.0321 5.01099 16.914 5.60034 17.6569 6.34326C18.3997 7.08594 18.989 7.96802 19.391 8.93848C19.7931 9.90918 20 10.9495 20 12H22Z"
                fill="currentColor"
              />
              <path
                d="M2 10V5C2 4.44775 2.44772 4 3 4H8C8.55228 4 9 4.44775 9 5V9C9 9.55225 8.55228 10 8 10H6C6 14.4182 9.58173 18 14 18V16C14 15.4478 14.4477 15 15 15H19C19.5523 15 20 15.4478 20 16V21C20 21.5522 19.5523 22 19 22H14C7.37259 22 2 16.6274 2 10Z"
                fill="currentColor"
              />
              <path
                d="M17.5433 9.70386C17.8448 10.4319 18 11.2122 18 12H16.2C16.2 11.4485 16.0914 10.9023 15.8803 10.3928C15.6692 9.88306 15.3599 9.42017 14.9698 9.03027C14.5798 8.64014 14.1169 8.33081 13.6073 8.11963C13.0977 7.90869 12.5515 7.80005 12 7.80005V6C12.7879 6 13.5681 6.15527 14.2961 6.45679C15.024 6.7583 15.6855 7.2002 16.2426 7.75732C16.7998 8.31445 17.2418 8.97583 17.5433 9.70386Z"
                fill="currentColor"
              />
            </svg>
            <p className="text-gray-500 font-light">+595 991297525</p>
          </div>
          <div className="card p-8 shadow rounded-md flex flex-row items-center space-x-4 hover:shadow-lg cursor-pointer transition duration-200">
            <svg
              width="24"
              height="24"
              className="text-cyan-500 h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
                fill="currentColor"
              />
            </svg>
            <p className="text-gray-500 font-light">
              enrique@egsoftwarefactory.online
            </p>
          </div>
          <div className="card p-8 shadow rounded-md flex flex-row items-center space-x-4 hover:shadow-lg cursor-pointer transition duration-200">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-cyan-500 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z"
                fill="currentColor"
              />
            </svg>
            <p className="text-gray-500 font-light">egsoftwarefactory.online</p>
          </div>
        </div>
      </section>
    </main>
  )
}
