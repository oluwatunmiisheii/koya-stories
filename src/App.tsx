import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from "react-query/devtools";
import StoriesLayout from './layouts/Stories';
import RootRouter from './config/RootRouter.routes';


// Create a client
const queryClient = new QueryClient()

const App = () => {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <main>
        <StoriesLayout>
          <RootRouter />
        </StoriesLayout>
      </main>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
