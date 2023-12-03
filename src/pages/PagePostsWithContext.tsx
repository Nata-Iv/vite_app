import { useEffect } from "react";
import axios from "axios";
import { usePosts } from "../store/hooks";

const PagePostsWithContext = () => {
  const { posts, setPosts } = usePosts();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=15")
      .then((response) => setPosts(response.data));
  }, [setPosts]);
  return (
    <>
      <h1>Posts</h1>
      {posts.map((post) => (
        <p key={post.id}>
          <a href="#">{post.title}</a>
        </p>
      ))}
    </>
  );
};

export default PagePostsWithContext;
