import { Leaf, Mail, MapPin, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Leaf className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Rare Flora</h3>
                <p className="text-sm text-gray-400">South Africa</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Dedicated to preserving and sharing knowledge about South Africa's 
              extraordinary plant heritage through expert cultivation guides.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'Plant Guides', href: '/plants' },
                { name: 'Care Tips', href: '/care' },
                { name: 'Plant Categories', href: '/categories' },
                { name: 'Seasonal Guides', href: '/seasonal' },
                { name: 'Beginner\'s Guide', href: '/beginners' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Plant Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              {[
                'Indigenous Plants',
                'Succulents',
                'Cycads',
                'Flowering Plants',
                'Trees & Shrubs'
              ].map((category) => (
                <li key={category}>
                  <a 
                    href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary-400" />
                <span className="text-gray-300">Cape Town, South Africa</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary-400" />
                <a 
                  href="mailto:hello@rareflora.co.za" 
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  hello@rareflora.co.za
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <p className="text-sm text-gray-300 mb-3">Get plant care tips weekly</p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded text-sm focus:ring-1 focus:ring-primary-500 focus:border-transparent"
                />
                <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded text-sm font-medium transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} Rare Flora South Africa. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="/terms" className="hover:text-primary-400 transition-colors">
                Terms of Use
              </a>
              <span>•</span>
              <div className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="w-3 h-3 text-red-500" />
                <span>in Cape Town</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}