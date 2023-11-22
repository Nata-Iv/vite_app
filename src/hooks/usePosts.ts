import { useQuery } from "react-query";
import { QueryKey } from "../utils/enums";
import { IPost } from "../utils/interfaces";
import { getPosts } from "../queryFunctions/posts";

export const usePosts = () => {
  return useQuery<[IPost], Error>({
    queryKey: [QueryKey.POSTS],
    queryFn: getPosts,
  });
};
