import { Search } from 'lucide-react'

export function SearchBar() {
  return (
    <form className="flex mt-10 gap-5">
      <Search width={30} height={30} className="text-gray-500" />
      <input
        type="text"
        placeholder="Buscar..."
        className="focus:outline-none text-gray-500 w-full"
      />
    </form>
  )
}
