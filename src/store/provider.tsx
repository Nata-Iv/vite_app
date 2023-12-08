import { useReducer } from "react";
import { postsReducer } from "./reducer";
import { initialState } from "./constants";
import { PostsContext } from "./context";

export const PostsProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(postsReducer, initialState);

  const value = { state, dispatch };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};
