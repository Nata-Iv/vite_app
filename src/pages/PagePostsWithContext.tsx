import { usePostContext } from "../store/hooks";
import { StyledDiv, StylesH1 } from "../styles/styledComponents";
import { ContextComponent } from "../components/ContextComponent";
import { someActions } from "../store/actions";

const PagePostsWithContext = () => {
  const { state, dispatch } = usePostContext();

  return (
    <StyledDiv>
      <StylesH1>Posts with Query</StylesH1>
      <h2>this text from page with context</h2>
      <div>{state?.posts?.length && state.posts[0].title}</div>
      <div>
        increment Btn <b>{state.count}</b>
      </div>
      <button onClick={() => dispatch(someActions.changeCountAction(0))}>
        +
      </button>
      <div>
        decrement Btn <b>{state.decr}</b>
      </div>
      <button onClick={() => dispatch(someActions.changeDecrAction(0))}>
        -
      </button>
      <ContextComponent />
    </StyledDiv>
  );
};

export default PagePostsWithContext;
