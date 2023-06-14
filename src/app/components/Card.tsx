import Link from 'next/link'

import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-br'
dayjs.locale(ptBR)

export function Card() {
  return (
    <Link
      href={`/`}
      className="w-full md:w-[300px] space-y-2 flex flex-col group"
    >
      <div className="h-[250px] md:h-[168px] w-full md:w-[300px] relative bg-gray-100"></div>
      <div className="flex-1 flex gap-2">
        <div className="w-2 h-full bg-purple-900 rounded-full group-hover:bg-purple-700 transition-colors"></div>
        <div className="flex-1 flex flex-col justify-between gap-4">
          <div className="font-semibold">titulo</div>
          <div className="text-xs text-gray-500">
            {dayjs('01/01/2000').format('DD [ de ] MMMM [ de ] YYYY')}
          </div>
        </div>
      </div>
    </Link>
  )
}
