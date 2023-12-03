import { ReactElement } from "react";
import { IPost } from "../shared/interfaces";
import { usePostsContext } from "./provider";
import { REDUCER_ACTION_TYPE } from "./enums";

export type StateType = {
  posts: Array<IPost>;
};

export type UsePostsContextType = ReturnType<typeof usePostsContext>;

export type ChildrenType = {
  children?: ReactElement | undefined;
};

export type ReducerAction = {
  type: REDUCER_ACTION_TYPE.SET_POSTS;
  payload: Array<IPost>;
};
