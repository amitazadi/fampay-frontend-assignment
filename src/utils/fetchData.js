import { API_URL } from '../constants'

const fetchData = async () => {
  const response = await fetch(API_URL)
  const jsonResponse = await response.json()
  return jsonResponse
}

export default fetchData
