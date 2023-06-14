import Link from 'next/link'

export function Empty() {
  return (
    <div className="flex text-gray-500 flex-col flex-1 justify-center items-center">
      <p>Nenhuma notícia encontrada</p>
      <p>
        <Link href={'/'} className="text-purple-900">
          Clique aqui{' '}
        </Link>{' '}
        para retornar
      </p>
    </div>
  )
}
