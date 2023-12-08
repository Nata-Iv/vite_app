import { ActionsNamesEnum } from "./enums";

export type ChangePostsActionType = {
  type: ActionsNamesEnum;
  payload: string;
};
const changePostsAction = (key: string): ChangePostsActionType => ({
  type: ActionsNamesEnum.CHANGE_POSTS,
  payload: key,
});
export type ChangeCountActionType = {
  type: ActionsNamesEnum;
  payload: number;
};
const changeCountAction = (key: number): ChangeCountActionType => ({
  type: ActionsNamesEnum.CHANGE_COUNT,
  payload: key,
});

export type ChangeDecrActionType = {
  type: ActionsNamesEnum;
  payload: number;
};
const changeDecrAction = (key: number): ChangeDecrActionType => ({
  type: ActionsNamesEnum.CHANGE_DECR,
  payload: key,
});
export const someActions = {
  changePostsAction,
  changeCountAction,
  changeDecrAction,
};
