import axios from "axios";

const API_KEY = "49679717-f5eb164bef18f43bdb971e28c";
const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(query, page) {
    const params = new URLSearchParams({
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: 15,
    });
  
    try {
        const response = await axios.get(`${BASE_URL}?${params}`);
        return response.data;
      } catch (error) {
        console.error("Fetch error:", error);
        throw error;
      }
    }