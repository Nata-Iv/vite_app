import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "react-query";
import ContextPage from "./components/ContextPages";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/context" element={<ContextPage />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
