import axios from "axios";

export const getPosts = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=30"
  );
  return data;
};
