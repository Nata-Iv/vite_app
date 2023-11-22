import { usePosts } from "../hooks/usePosts";
import { StyledLink, StyledDiv, StylesH1 } from "../styles/styledComponents";

const Posts = () => {
  const { status, data, error, isFetching } = usePosts();

  if (status === "loading") {
    return <div> Loading ... </div>;
  }
  if (error) {
    return <div> {error.message}</div>;
  }
  if (isFetching) {
    return <div> Updating data ... </div>;
  }

  return (
    <StyledDiv>
      <StylesH1>Posts</StylesH1>
      <div>
        {data?.map((post) => (
          <StyledLink key={post.id} href="#">
            {post.title}
          </StyledLink>
        ))}
      </div>
    </StyledDiv>
  );
};

export default Posts;
