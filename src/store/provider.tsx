import { ReactElement, useCallback, useReducer } from "react";

import { IPost } from "shared/interfaces";
import { PostsContext } from "./PostsContext";
import { reducer } from "./reducer";
import { REDUCER_ACTION_TYPE } from "./enums";
import { ChildrenType, StateType } from "./types";

export const usePostsContext = (initState: StateType) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const setPosts = useCallback((posts: Array<IPost>) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.SET_POSTS,
      payload: posts,
    });
  }, []);
  return {
    state,
    setPosts,
  };
};

export const PostsProvider = ({
  children,
  ...initState
}: ChildrenType & StateType): ReactElement => {
  return (
    <PostsContext.Provider value={usePostsContext(initState)}>
      {children}
    </PostsContext.Provider>
  );
};
