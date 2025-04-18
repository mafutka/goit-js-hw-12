import axios from "axios";

const API_KEY = "49679717-f5eb164bef18f43bdb971e28c";
const BASE_URL = "https://pixabay.com/api/";

export function getImagesByQuery(query, page = 1) {
    const params = new URLSearchParams({
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: 12,
    });
  
    return axios.get(`${BASE_URL}?${params}`)
      .then(response => response.data)
      .catch(error => {
        console.error("Fetch error:", error);
        throw error;
      });
  }