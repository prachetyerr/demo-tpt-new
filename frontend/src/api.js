import axios from "axios";

//const API_URL = "http://localhost:8000/analyze";
const API_URL = "https://demo-tpt-new.onrender.com/analyze";

export const analyzeArticle = async (article, keyword) => {
  const formData = new FormData();
  formData.append("article", article);
  formData.append("keyword", keyword);

  const response = await axios.post(API_URL, formData);
  return response.data;
};
