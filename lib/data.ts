import { Article, PlantData } from './types'

export const mockArticles: Article[] = [
  {
    id: 1,
    title: "Complete Guide to Cycas revoluta (Sago Palm)",
    slug: "cycas-revoluta-sago-palm-guide",
    content: "The Cycas revoluta, commonly known as the Sago Palm, is one of South Africa's most ancient and fascinating plants. Despite its name, it's not actually a palm but a cycad that has remained virtually unchanged for millions of years.\n\nNative to southern Japan, this living fossil has adapted beautifully to South African gardens, particularly in coastal regions. The plant features a distinctive crown of glossy, dark green feather-like fronds that emerge from a thick, woody trunk.\n\nCare Requirements:\nLight: Bright, indirect sunlight to partial shade\nWater: Allow soil to dry between waterings\nSoil: Well-draining, slightly acidic to neutral\nTemperature: Hardy in zones 8-11\n\nThe Sago Palm is slow-growing, adding only 1-2 inches per year, making it an excellent choice for patient gardeners who want a statement piece that will last for generations.",
    category: "Cycads",
    created_at: "2024-01-15T10:00:00Z"
  },
  {
    id: 2,
    title: "Growing Strelitzia reginae: Bird of Paradise Care",
    slug: "strelitzia-reginae-bird-of-paradise",
    content: "Strelitzia reginae, South Africa's iconic Bird of Paradise, is a stunning flowering plant that brings tropical elegance to any garden. This remarkable plant, which graces our national coat of arms, produces spectacular orange and blue flowers that resemble exotic birds in flight.\n\nNative to the coastal regions of KwaZulu-Natal and Eastern Cape, this plant thrives in warm, humid conditions but has adapted to various South African climates with proper care.\n\nOptimal Growing Conditions:\nSunlight: Full sun to partial shade (minimum 4-6 hours direct sun)\nWater: Regular watering, keep soil consistently moist but not waterlogged\nSoil: Rich, well-draining soil with organic matter\nFertilizer: Monthly feeding during growing season\n\nBlooming typically occurs after 3-5 years, and the spectacular flowers can last several weeks. Regular division every 3-4 years helps maintain vigorous growth and flowering.",
    category: "Flowering Plants",
    created_at: "2024-01-14T09:30:00Z"
  },
  {
    id: 3,
    title: "Aloe ferox: Cape Aloe Cultivation Secrets",
    slug: "aloe-ferox-cape-aloe-cultivation",
    content: "Aloe ferox, commonly known as Cape Aloe or Bitter Aloe, is one of South Africa's most valuable indigenous succulents. This remarkable plant, endemic to the Western and Eastern Cape, has been used for centuries for its medicinal properties and striking architectural presence in xerophytic gardens.\n\nRecognized by its single stem that can reach up to 3 meters in height and its impressive rosette of thick, spiny leaves, Aloe ferox is both drought-tolerant and visually spectacular when it produces its towering spikes of bright orange-red flowers.\n\nCultivation Tips:\nClimate: Thrives in Mediterranean climates, hardy to light frost\nWatering: Deep, infrequent watering; drought tolerant once established\nSoil: Sandy, well-draining soil with good drainage essential\nPropagation: From seed or offshoots at the base\n\nThis slow-growing giant can live for decades and requires minimal maintenance once established, making it perfect for water-wise gardens and xerophytic landscaping projects.",
    category: "Succulents",
    created_at: "2024-01-13T14:15:00Z"
  }
]

export const mockPlants: PlantData[] = [
  {
    id: "cycas-revoluta",
    name: "Sago Palm",
    scientificName: "Cycas revoluta",
    category: "Cycads",
    description: "Ancient cycad with feathery fronds, perfect for statement plantings",
    careLevel: "Medium",
    waterFrequency: "Weekly",
    sunlight: "Medium"
  },
  {
    id: "strelitzia-reginae",
    name: "Bird of Paradise",
    scientificName: "Strelitzia reginae",
    category: "Flowering Plants",
    description: "Iconic South African plant with spectacular orange and blue flowers",
    careLevel: "Easy",
    waterFrequency: "Twice weekly",
    sunlight: "High"
  },
  {
    id: "aloe-ferox",
    name: "Cape Aloe",
    scientificName: "Aloe ferox",
    category: "Succulents",
    description: "Towering succulent with medicinal properties and striking orange flowers",
    careLevel: "Easy",
    waterFrequency: "Bi-weekly",
    sunlight: "High"
  }
]