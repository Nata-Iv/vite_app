import { useQuery } from "react-query";
import { QueryKey } from "./enums";
import { IPost } from "../interfaces/posts";
import { getPosts } from "./posts";

export const usePosts = () => {
  return useQuery<[IPost], Error>({
    queryKey: [QueryKey.POSTS],
    queryFn: getPosts,
  });
};
