import { Search } from "lucide-react"

export default function UserSearch({ value, onChange }) {
  return (
    <div className="relative mb-6">
      
      {/* ÍCONE */}
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      />

      {/* INPUT */}
      <input
        type="text"
        placeholder="Buscar usuário por nome ou email..."
        value={value}
        onChange={onChange}
        className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-100 outline-none focus:ring-2 focus:ring-emerald-500"
      />
    </div>
  )
}