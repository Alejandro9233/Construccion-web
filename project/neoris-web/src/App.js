import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import Private from "./views/private";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Private />
      </div>
    </QueryClientProvider>
  );
}

export default App;
