// import { useState } from "react";
import { useState } from "react";
import ContextPage from "../components/ContextPages";
import { IPost } from "interfaces/posts";
import { PostContextType } from "../context";
// import { ThemeContext, ThemeContextType } from "../context";
// import { CurrentUserContextType, CurrentUserContext } from "../context";

const ContextProvider = () => {
  // const [theme] = useState<ThemeContextType>("dark");
  // const [currentUser] = useState<CurrentUserContextType>({
  //   username: "Just a name",
  // });
  const [currentPost] = useState<IPost>({
    id: 0,
    title: "title",
    body: "body",
    color: "#FA8834",
    isBold: true,
  });
  return (
    <PostContextType.Provider value={currentPost}>
      <ContextPage />
    </PostContextType.Provider>
  );
};

export default ContextProvider;
