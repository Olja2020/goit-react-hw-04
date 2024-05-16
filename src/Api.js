import axios from "axios";

axios.defaults.baseURL =
  "https://api.unsplash.com/photos/?client_id=E5ABb0U9uZIG-WiJXhb3ZD8kkLohYHcuGEKhpPQZUBg";
export const getImages = async (topic) => {
  const response = await axios.get(`search?query=${topic}`);
  return response.data.hits;
};
