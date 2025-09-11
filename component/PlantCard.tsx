import { Article } from '@/lib/types'
import { formatDate, getReadingTime, truncateText } from '@/lib/utils'
import { Calendar, Clock, ChevronRight } from 'lucide-react'

interface PlantCardProps {
  article: Article
}

export default function PlantCard({ article }: PlantCardProps) {
  const readingTime = getReadingTime(article.content)

  return (
    <article className="card p-0 overflow-hidden hover:scale-105 transition-all duration-300 group">
      {/* Image placeholder - would be actual plant images in production */}
      <div className="h-48 bg-gradient-to-br from-green-400 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-block px-3 py-1 bg-white bg-opacity-90 text-gray-800 text-sm font-medium rounded-full">
            {article.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        {/* Article meta */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {formatDate(article.created_at)}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {readingTime} min
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
          <a href={`/plants/${article.slug}`} className="hover:underline">
            {article.title}
          </a>
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6">
          {truncateText(article.content, 150)}
        </p>

        {/* Read more link */}
        <a
          href={`/plants/${article.slug}`}
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors group/link"
        >
          Read Complete Guide
          <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </article>
  )
}