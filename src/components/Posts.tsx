import { usePosts } from "../hooks/usePosts";
import { StyledLink } from "../styles/styledComponents";
import { Statuses } from "../statuses";

const Posts = () => {
  const { status, data, error, isFetching } = usePosts();

  if (status === Statuses.Loading) {
    return <div> Loading ... </div>;
  }
  if (status === Statuses.Error) {
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
      {data.map((post) => (
        <StyledLink key={post.id} href="#">
          {post.title}
        </StyledLink>
      ))}
    </div>
  );
};

export default Posts;
