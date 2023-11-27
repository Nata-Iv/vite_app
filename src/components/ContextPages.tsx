import { useContext } from "react";
import // ThemeContext,
"../context";
import { PostContextType, fetchPosts } from "../context";
// import { CurrentUserContext } from "../context";

const ContextPage = () => {
  // const theme = useContext(ThemeContext);
  // const currentUser = useContext(CurrentUserContext);

  // const { fetchPosts } = useContext(PostContextType);
  const { status, data, error, isFetching } = fetchPosts();

  if (status === "loading") {
    return <div> Loading ... </div>;
  }
  if (status === "error") {
    return <div> {error.message}</div>;
  }
  if (isFetching) {
    return <div> Updating data ... </div>;
  }
  if (!data) {
    return <div>No data</div>;
  }

  return (
    <div>
      <h1>Context Page</h1>
      {/* <p>The current theme is {theme}.</p>
      <p>Name: {currentUser?.username}</p> */}
      {data.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};

export default ContextPage;
