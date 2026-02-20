import { NavLink } from "react-router-dom"

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        <h1 className="text-xl font-bold text-emerald-500">
          CadastrAi
        </h1>

        <nav className="flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium transition ${
                isActive
                  ? "text-emerald-500"
                  : "text-gray-600 hover:text-emerald-500"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/usuarios"
            className={({ isActive }) =>
              `font-medium transition ${
                isActive
                  ? "text-emerald-500"
                  : "text-gray-600 hover:text-emerald-500"
              }`
            }
          >
            Usuários
          </NavLink>
        </nav>

      </div>
    </header>
  )
}