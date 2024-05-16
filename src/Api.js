import axios from "axios";

axios.defaults.baseURL =
  "https://api.unsplash.com/search/photos?client_id=E5ABb0U9uZIG-WiJXhb3ZD8kkLohYHcuGEKhpPQZUBg&query=22&page=1";
export const getImages = async (topic, currentPage) => {
  const response = await axios.get("/search", {
    params: {
      query: topic,
      page: currentPage,
      per_page: 12,
    },
  });

  return response.data.hits;
};
