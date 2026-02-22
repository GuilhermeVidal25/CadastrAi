import { useState } from "react"
import { Link } from "react-router-dom"

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  function handleChange(e) {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log("Login:", formData)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[900px] h-[520px] bg-white rounded-2xl shadow-lg overflow-hidden flex">
        
        {/* LADO ESQUERDO */}
        <div className="w-1/2 bg-emerald-500 flex flex-col items-center justify-center text-white p-10">
          <h2 className="text-3xl font-bold mb-3">Bem-vindo novamente!</h2>
          <p className="text-center text-sm opacity-80 mb-6">
            Efetua o login para entrar no sistema.
          </p>

          <Link
          to="/cadastro"
          className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-emerald-500 transition">
          Criar conta
          </Link>
        </div>

        {/* FORM */}
        <div className="w-1/2 flex flex-col items-center justify-center p-10">
          <h2 className="text-2xl font-bold text-emerald-500 mb-6">
            Entre na sua conta
          </h2>

          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-4"
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-100 p-3 rounded outline-none focus:ring-2 focus:ring-emerald-400"
            />

            <input
              type="password"
              name="password"
              placeholder="Senha"
              value={formData.password}
              onChange={handleChange}
              className="bg-gray-100 p-3 rounded outline-none focus:ring-2 focus:ring-emerald-400"
            />

            <button
              type="submit"
              className="bg-emerald-500 text-white py-3 rounded-full font-semibold hover:bg-emerald-600 transition"
            >
              Entrar
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}