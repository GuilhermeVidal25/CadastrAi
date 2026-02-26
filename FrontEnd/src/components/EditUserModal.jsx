import { useState, useEffect } from "react"

export default function EditUserModal({ isOpen, onClose, user }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })

  // Sempre que mudar o usuário selecionado, ele preenche o formulário
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
      })
    }
  }, [user])

  if (!isOpen) return null

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log("Dados editados:", formData)

    // Aqui depois entra PUT na API
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-full max-w-md relative">
        
        {/* FECHAR */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4 text-emerald-500">
          Editar usuário
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          <input
            type="text"
            name="name"
            placeholder="Nome"
            value={formData.name}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2"
            required
          />

          <button
            type="submit"
            className="bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition"
          >
            Salvar alterações
          </button>

        </form>
      </div>
    </div>
  )
}