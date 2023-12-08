import { useContext } from "react";

import { PostsContext } from "./context";

export const usePostContext = () => {
  const context = useContext(PostsContext);

  if (context === undefined) {
    throw new Error("useSomeContext must be used within an SomeProvider");
  }

  return context;
};
