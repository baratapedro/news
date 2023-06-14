import Link from 'next/link'
import Image from 'next/image'

import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-br'
dayjs.locale(ptBR)

interface NewsProps {
  news: {
    title: string
    author: string
    description: string
    urlToImage: string
    publishedAt: string
  }
}

export function Card({ news }: NewsProps) {
  return (
    <Link
      href={`/news/${news.title}`}
      className="w-full md:w-[300px] space-y-2 flex flex-col group"
    >
      <div className="h-[250px] md:h-[168px] w-full md:w-[300px] relative">
        <Image src={news.urlToImage} alt="" fill />
      </div>
      <div className="flex-1 flex gap-2">
        <div className="w-2 h-full bg-purple-900 rounded-full group-hover:bg-purple-700 transition-colors"></div>
        <div className="flex-1 flex flex-col justify-between gap-4">
          <div className="font-semibold">{news.title}</div>
          <div className="text-xs text-gray-500">
            {dayjs(news.publishedAt).format('DD [ de ] MMMM [ de ] YYYY')}
          </div>
        </div>
      </div>
    </Link>
  )
}
