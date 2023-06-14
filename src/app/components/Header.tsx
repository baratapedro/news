import { Newspaper } from 'lucide-react'

export function Header() {
  return (
    <header className="shadow-md fixed top-0 w-full bg-white z-10">
      <div className="mx-auto flex items-center justify-center gap-2 text-purple-900">
        <h1 className="py-5 text-xl font-semibold ">Portal de Notícias</h1>
        <Newspaper width={30} height={30} />
      </div>
    </header>
  )
}
