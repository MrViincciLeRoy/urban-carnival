export interface Article {
  id: number
  title: string
  slug: string
  content: string
  category: string
  created_at: string
}

export interface PlantData {
  id: string
  name: string
  scientificName: string
  category: string
  description: string
  careLevel: 'Easy' | 'Medium' | 'Hard'
  waterFrequency: string
  sunlight: 'Low' | 'Medium' | 'High'
  image?: string
}

export interface SearchFilters {
  category?: string
  careLevel?: string
  sunlight?: string
  query?: string
}