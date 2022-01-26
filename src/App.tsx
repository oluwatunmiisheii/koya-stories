import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from "react-query/devtools";



// Create a client
const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <main>
        <h1>Hello world</h1>
      </main>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
