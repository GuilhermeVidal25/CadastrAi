import Header from "../components/Header"

export default function Home() {
  return (
    <>
      <Header />

      <main className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-bold text-emerald-500 mb-2">
          Bem-vindo ao CadastrAi 👋
        </h2>

        <p className="text-gray-600">
          Utilize o menu acima para listar os usuários cadastrados.
        </p>
      </main>
    </>
  )
}