import { StateType, UsePostsContextType } from "./types";

export const initState: StateType = {
  posts: [],
};

export const initContextState: UsePostsContextType = {
  state: initState,
  setPosts: () => {},
};
