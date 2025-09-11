export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-ZA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

export function getReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

export function filterArticles(articles: any[], filters: any) {
  let filtered = [...articles]
  
  if (filters.query) {
    const query = filters.query.toLowerCase()
    filtered = filtered.filter(article => 
      article.title.toLowerCase().includes(query) ||
      article.content.toLowerCase().includes(query)
    )
  }
  
  if (filters.category) {
    filtered = filtered.filter(article => 
      article.category === filters.category
    )
  }
  
  return filtered
}

export function getUniqueCategories(articles: any[]): string[] {
  const categories = articles.map(article => article.category)
  return [...new Set(categories)].sort()
}