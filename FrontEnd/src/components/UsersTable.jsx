import { Pencil } from "lucide-react"

export default function UsersTable({ users, onEdit }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden">
      <table className="w-full text-left">
        
        {/* HEADER */}
        <thead className="bg-emerald-500 text-white">
          <tr>
            <th className="px-6 py-3 font-semibold">Nome</th>
            <th className="px-6 py-3 font-semibold">Email</th>
            <th className="px-6 py-3 font-semibold">Data de cadastro</th>
            <th className="px-6 py-3 font-semibold text-center">Ações</th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center py-6 text-gray-400">
                Nenhum usuário cadastrado
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <tr
                key={user.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">
                  {new Date(user.createdAt).toLocaleDateString("pt-BR")}
                </td>

                {/* AÇÕES */}
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => onEdit(user)}
                    className="text-emerald-500 hover:text-emerald-700 transition"
                  >
                    <Pencil size={18} />
                  </button>
                </td>

              </tr>
            ))
          )}
        </tbody>

      </table>
    </div>
  )
}