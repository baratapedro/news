import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft } from 'lucide-react'

import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-br'
dayjs.locale(ptBR)

interface NewsComponentProps {
  params: {
    title: string
  }
}

interface NewsContent {
  title: string
  author: string
  description: string
  urlToImage: string
  publishedAt: string
}

export default async function NewsComponent({ params }: NewsComponentProps) {
  const title = params.title

  const response = await axios.get(
    `https://newsapi.org/v2/everything?domains=cnbc.com,ign.com&q=${title}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`,
  )

  const news: NewsContent = response.data.articles[0]

  return (
    <div className="space-y-5 px-5 lg:px-0 mt-5">
      <Link
        href={'/'}
        className="text-gray-500 flex items-center hover:text-purple-900 transition-colors w-16"
      >
        <ChevronLeft width={20} height={20} />
        Voltar
      </Link>
      <div>
        <h1 className="font-semibold text-xl">{news.title}</h1>
        <div className="text-sm font-medium text-gray-500">
          {news.author} (
          {dayjs(news.publishedAt).format('DD [ de ] MMMM [ de ] YYYY')})
        </div>
      </div>
      <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative">
        <Image src={news.urlToImage} fill alt="" />
      </div>
      <div className="text-gray-700 font-medium">{news.description}</div>
    </div>
  )
}
