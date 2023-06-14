import { Card } from './components/Card'
import { SearchBar } from './components/SearchBar'

export default function Home() {
  return (
    <div className="space-y-5 px-5 lg:px-0 mb-10">
      <SearchBar />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 lg:grid-cols-3">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
