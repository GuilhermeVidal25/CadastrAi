import { useState } from "react"

import Header from "../components/Header"
import UsersTable from "../components/UsersTable"
import UserSearch from "../components/UserSearch"
import EditUserModal from "../components/EditUserModal"

export default function Usuarios() {
  const users = [
    {
      name: "Guilherme Vidal",
      email: "gui@email.com",
      password: "123456",
      createdAt: "19/02/2026"
    }
  ]

  const [search, setSearch] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  )

  function handleEditUser(user) {
    setSelectedUser(user)
    setIsModalOpen(true)
  }

  return (
    <>
      <Header />

      <main className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-bold text-emerald-500 mb-6">
          Lista de usuários cadastrados
        </h2>

        <UserSearch
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <UsersTable
          users={filteredUsers}
          onEdit={handleEditUser}
        />

        <EditUserModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          user={selectedUser}
        />
      </main>
    </>
  )
}