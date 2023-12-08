import { ActionsNamesEnum } from "./enums";

export type PostsState = {
  posts: { id: number; title: string }[];
  count: number;
  decr: number;
};

export type PostsActions =
  | { type: ActionsNamesEnum; payload: number }
  | { type: ActionsNamesEnum; payload: string }
  | { type: ActionsNamesEnum; payload: [] };

export type PostsDispatch = (action: PostsActions) => void;

export type PostsStore = {
  state: PostsState;
  dispatch: PostsDispatch;
};
