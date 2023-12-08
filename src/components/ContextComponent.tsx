import { usePostContext } from "../store/hooks";
import { useEffect } from "react";
import axios from "axios";
import { ActionsNamesEnum } from "../store/enums";

export const ContextComponent = () => {
  const { dispatch, state } = usePostContext();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=15")
      .then((response) => {
        dispatch({
          type: ActionsNamesEnum.CHANGE_POSTS,
          payload: response.data,
        });
      });
  }, [dispatch]);
  return (
    <div>
      <h2>component title</h2>
      <div>
        {state.posts.map((post) => (
          <p key={post.id}>
            <a href="#">{post.title}</a>
          </p>
        ))}
      </div>
    </div>
  );
};
