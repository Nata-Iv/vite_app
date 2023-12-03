import Posts from "../components/Posts";
import { StyledDiv, StylesH1 } from "../styles/styledComponents";

const PagePostsWithQuery = () => {
  return (
    <StyledDiv>
      <StylesH1>Posts</StylesH1>
      <Posts />
    </StyledDiv>
  );
};

export default PagePostsWithQuery;
