import axios from 'axios'
import { Card } from './components/Card'
import { SearchBar } from './components/SearchBar'

interface NewsContent {
  title: string
  author: string
  description: string
  urlToImage: string
  publishedAt: string
}

interface HomeProps {
  searchParams?: { q: string; p: number }
}

export default async function Home({ searchParams }: HomeProps) {
  const q = searchParams?.q || ''

  const response = await axios.get(
    `https://newsapi.org/v2/everything?domains=cnbc.com,ign.com&q=${q}&searchIn=title&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`,
  )

  const news: NewsContent[] = response.data.articles

  return (
    <div className="space-y-10 px-5 lg:px-0 mb-10">
      <SearchBar />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 lg:grid-cols-3">
        {news.map((item) => {
          return <Card news={item} key={item.title} />
        })}
      </div>
    </div>
  )
}
