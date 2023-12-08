import { PostsActions, PostsState } from "./types";
import { ActionsNamesEnum } from "./enums";

export const postsReducer = (
  state: PostsState,
  action: PostsActions
): PostsState => {
  const { type, payload } = action;

  switch (type) {
    case ActionsNamesEnum.CHANGE_POSTS:
      return { ...state, posts: payload as [] };
    case ActionsNamesEnum.CHANGE_COUNT:
      return { ...state, count: state.count + 1 };
    case ActionsNamesEnum.CHANGE_DECR:
      return { ...state, decr: state.decr - 1 };
    default:
      return state;
  }
};
