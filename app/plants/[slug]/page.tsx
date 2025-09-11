import { mockArticles } from '@/lib/data'
import { formatDate, getReadingTime } from '@/lib/utils'
import { notFound } from 'next/navigation'
import { Clock, Calendar, Tag, Share2 } from 'lucide-react'
import type { Metadata } from 'next'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = mockArticles.find(a => a.slug === params.slug)
  
  if (!article) {
    return {
      title: 'Article Not Found'
    }
  }

  return {
    title: `${article.title} | Rare Flora South Africa`,
    description: article.content.substring(0, 160) + '...',
    keywords: `${article.title}, ${article.category}, South African plants, plant care`,
    openGraph: {
      title: article.title,
      description: article.content.substring(0, 160) + '...',
      type: 'article',
      publishedTime: article.created_at,
    }
  }
}

export async function generateStaticParams() {
  return mockArticles.map((article) => ({
    slug: article.slug,
  }))
}

export default function PlantPage({ params }: Props) {
  const article = mockArticles.find(a => a.slug === params.slug)

  if (!article) {
    notFound()
  }

  const readingTime = getReadingTime(article.content)
  const relatedArticles = mockArticles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3)

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
        <a href="/" className="hover:text-primary-600">Home</a>
        <span>/</span>
        <a href="/plants" className="hover:text-primary-600">Plants</a>
        <span>/</span>
        <span className="text-gray-900">{article.category}</span>
      </nav>

      {/* Article Header */}
      <header className="mb-12">
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
            <Tag className="w-3 h-3 mr-1" />
            {article.category}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            {formatDate(article.created_at)}
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="w-4 h-4 mr-1" />
            {readingTime} min read
          </div>
        </div>

        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {article.title}
        </h1>

        {/* Share Buttons */}
        <div className="flex items-center gap-4 pb-8 border-b border-gray-200">
          <span className="text-gray-600 font-medium">Share:</span>
          <button className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors">
            <Share2 className="w-4 h-4" />
            Share Article
          </button>
        </div>
      </header>

      {/* Article Content */}
      <article className="prose max-w-none">
        {article.content.split('\n\n').map((paragraph, index) => {
          if (paragraph.trim() === '') return null
          
          // Handle headings
          if (paragraph.includes(':') && paragraph.split(':')[1].trim() !== '') {
            const [heading, content] = paragraph.split(':')
            if (heading.length < 50) {
              return (
                <div key={index} className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{heading.trim()}</h2>
                  <p className="text-gray-700 leading-relaxed">{content.trim()}</p>
                </div>
              )
            }
          }
          
          return (
            <p key={index} className="mb-6 text-gray-700 leading-relaxed text-lg">
              {paragraph}
            </p>
          )
        })}
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            More {article.category} Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((related) => (
              <a
                key={related.id}
                href={`/plants/${related.slug}`}
                className="card p-6 hover:shadow-lg transition-shadow group"
              >
                <h3 className="font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {related.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {related.content.substring(0, 100)}...
                </p>
                <div className="text-sm text-gray-500">
                  {formatDate(related.created_at)}
                </div>
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}