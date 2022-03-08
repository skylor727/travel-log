import axios from "axios";

const apiPostImage = async (formData) =>
  axios.post("/api/photos", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export default apiPostImage;
