import { useContext } from "react";
import { PostsContext } from "./PostsContext";
import { IPost } from "shared/interfaces";

export type UsePostsHookType = {
  posts: Array<IPost>;
  setPosts: (posts: Array<IPost>) => void;
};

export const usePosts = (): UsePostsHookType => {
  const {
    state: { posts },
    setPosts,
  } = useContext(PostsContext);
  return { setPosts, posts };
};
