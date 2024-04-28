const API_DOMAIN = "https://gnews.io/api/v4/top-headlines?country=";
const API_KEY = "4f0f7f1a3a0caff854f130bb42d8c74a";
export const endpointPath = (country,) =>
  `${API_DOMAIN}${country}&lang=en&category=${category}&apikey=${API_KEY}`;
