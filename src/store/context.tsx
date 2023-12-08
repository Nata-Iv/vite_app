import { createContext } from "react";
import { PostsStore } from "./types";

export const PostsContext = createContext<PostsStore | undefined>(undefined);
