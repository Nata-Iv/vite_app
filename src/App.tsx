import { useQuery } from "react-query";
import {
  StyledH4,
  StyledP,
  StyledOl,
  StylesH3,
  StyledLi,
} from "./styledComponents";

function App() {
  interface Item {
    id: number;
    body: string;
    title: string;
  }
  const fetchData = async (): Promise<Item[]> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=30"
    );
    const data: Item[] = await response.json();
    return data;
  };
  const { data: posts, isLoading } = useQuery<Item[], Error>(
    "posts",
    fetchData
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {posts ? (
        <StyledOl>
          <StylesH3>Home page</StylesH3>
          {posts.map((post) => (
            <StyledLi key={post.id}>
              <StyledH4>{post.title}</StyledH4>
              <StyledP>{post.body}</StyledP>
            </StyledLi>
          ))}
        </StyledOl>
      ) : null}
    </>
  );
}

export default App;
