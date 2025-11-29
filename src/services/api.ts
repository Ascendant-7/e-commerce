import axios from 'axios'
import type Category from '../interfaces/Category'
import type Promotion from '@/interfaces/Promotion'

// api url
const API_BASE = 'http://localhost:3000/api'

export const fetchCategories = async (): Promise<Category[]> => {
  const response = await axios.get<Category[]>(`${API_BASE}/categories`)
  return response.data
}

export const fetchPromotions = async (): Promise<Promotion[]> => {
  const response = await axios.get<Category[]>(`${API_BASE}/promotions`)
  return response.data
}
