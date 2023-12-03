import { useQuery } from "react-query";
import { QueryKey } from "../shared/enums";
import { IPost } from "../shared/interfaces";
import { getPosts } from "./posts";

export const usePosts = () => {
  return useQuery<[IPost], Error>({
    queryKey: [QueryKey.POSTS],
    queryFn: getPosts,
  });
};
