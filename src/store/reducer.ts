import { REDUCER_ACTION_TYPE } from "./enums";
import { StateType } from "./types";
import { ReducerAction } from "./types";

export const reducer = (state: StateType, action: ReducerAction): StateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.SET_POSTS:
      return { ...state, posts: action.payload };
    default:
      throw new Error();
  }
};
