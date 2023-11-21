import { useQuery } from "react-query";
import { StyledLink, StyledDiv, StylesH1 } from "./styledComponents";
import axios from "axios";

function App() {
  interface Post {
    id: number;
    title: string;
    body: string;
  }
  interface Error {
    message: string;
  }
  enum Status {
    loading = "loading",
    error = "error",
  }
  // function usePosts() {
  const { status, data, error, isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=30"
      );
      return data;
    },
  });
  if (status === Status.loading) {
    return <div> Loading ... </div>;
  }
  if (status === Status.error) {
    return <div> {(error as Error).message}</div>;
  }
  if (isFetching) {
    return <div> Updating data ... </div>;
  }
  // }
  // const { status, data, error, isFetching } = usePosts();

  return (
    <StyledDiv>
      <StylesH1>Posts</StylesH1>
      <div>
        {data?.map((post: Post) => (
          <StyledLink key={post.id} href="#">
            {post.title}
          </StyledLink>
        ))}
      </div>
    </StyledDiv>
    // <StyledDiv>
    //   <StylesH1>Posts</StylesH1>
    //   <div>
    //     {status === "loading" ? (
    //       "Loading..."
    //     ) : status === "error" ? (
    //       <span>Error: {error.message}</span>
    //     ) : (
    //       <div>
    //         {data?.map((post) => (
    //           <StyledLink key={post.id} href="#">
    //             {post.title}
    //           </StyledLink>
    //         ))}
    //         <div>{isFetching ? "Background Updating..." : " "}</div>
    //       </div>
    //     )}
    //   </div>
    // </StyledDiv>
  );
}

export default App;
