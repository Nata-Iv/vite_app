import axios from "axios";
import { IPost } from "interfaces/posts";
import { createContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
// export type ThemeContextType = "light" | "dark";

// export const ThemeContext = createContext<ThemeContextType>("light");

// export interface CurrentUserContextType {
//   username: string;
// }
// export const CurrentUserContext = createContext<CurrentUserContextType>({
//   username: "My name",
// });

export const PostContextType = createContext<IPost>({
  id: 0,
  title: "title",
  body: "body",
  color: "#DE5645",
  isBold: true,
});

export const fetchPosts = () => {
  return useQuery<[IPost], Error>({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      return data;
    },
  });
};
