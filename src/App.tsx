import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import PagePostsWithQuery from "./pages/PagePostsWithQuery";
import PagePostsWithContext from "./pages/PagePostsWithContext";
import { PostsProvider } from "./store/provider";
import { initState } from "./store/constants";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsProvider posts={initState.posts}>
        <Routes>
          <Route path="/" element={<PagePostsWithQuery />} />
          <Route path="/context" element={<PagePostsWithContext />} />
        </Routes>
      </PostsProvider>
    </QueryClientProvider>
  );
}

export default App;
