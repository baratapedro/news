'use client'

import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState, FormEvent } from 'react'

export function SearchBar() {
  const router = useRouter()

  const [title, setTitle] = useState('')

  function handlerSearchNews(event: FormEvent) {
    event.preventDefault()
    router.push(title === '' ? '/' : `/?q=${title}`)
  }

  return (
    <form onSubmit={handlerSearchNews} className="flex mt-10 gap-5">
      <Search width={30} height={30} className="text-gray-500" />
      <input
        type="text"
        placeholder="Buscar..."
        className="focus:outline-none text-gray-500 w-full"
        onChange={(event) => setTitle(event.target.value)}
        onSubmit={handlerSearchNews}
      />
    </form>
  )
}
