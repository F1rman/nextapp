
import axios from "axios";

const placeholderService = {
  getCommentByPostId: async (id) => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

     
    return data;
  },
  getDataById: async (id) => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

     
    return data;
  },

  getAll: async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");

    return data;
  },

};

export { placeholderService };
