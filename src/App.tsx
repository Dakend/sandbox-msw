import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Content } from "./components/Content";

export const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Content />
    </QueryClientProvider>
  );
};
