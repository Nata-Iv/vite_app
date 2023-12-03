import { createContext } from "react";
import { initContextState } from "./constants";
import { UsePostsContextType } from "./types";

export const PostsContext =
  createContext<UsePostsContextType>(initContextState);
