import PlantCard from '@/components/PlantCard'
import SearchFilters from '@/components/SearchFilters'
import { mockArticles } from '@/lib/data'
import { Leaf, Users, BookOpen, Award } from 'lucide-react'

export default function HomePage() {
  const featuredArticles = mockArticles.slice(0, 6)

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-green-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Discover South Africa's
              <span className="block text-yellow-300">Rare Flora</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-green-100 leading-relaxed">
              Expert guides to cultivating and caring for the most extraordinary plants 
              from the Cape Floral Kingdom and beyond
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary bg-white text-primary-600 hover:bg-gray-50">
                Explore Plant Guides
              </button>
              <button className="btn-primary bg-yellow-500 hover:bg-yellow-600 text-green-900">
                Start Your Garden
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { icon: Leaf, number: '500+', label: 'Plant Species' },
            { icon: BookOpen, number: '200+', label: 'Care Guides' },
            { icon: Users, number: '10k+', label: 'Gardeners' },
            { icon: Award, number: '95%', label: 'Success Rate' }
          ].map((stat, index) => (
            <div key={index} className="card p-6 text-center animate-slide-up">
              <stat.icon className="w-8 h-8 text-primary-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Find Your Perfect Plant
            </h2>
            <p className="text-lg text-gray-600">
              Search through our comprehensive database of South African flora
            </p>
          </div>
          <SearchFilters />
        </div>
      </section>

      {/* Featured Articles */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured Plant Guides
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular and comprehensive guides to South Africa's 
            most fascinating plants
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {featuredArticles.map((article, index) => (
            <div key={article.id} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <PlantCard article={article} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            View All Plant Guides
          </button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary-50 border-y border-primary-100">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get the latest plant care tips, seasonal guides, and botanical discoveries 
              delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}