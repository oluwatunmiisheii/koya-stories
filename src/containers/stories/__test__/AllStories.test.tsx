import React from 'react';
import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import AllStories from '../AllStories';
import { MemoryRouter as Router } from 'react-router-dom';


const queryClient = new QueryClient();



const setup = () => render(
  <QueryClientProvider client={queryClient}>
    <Router>
      <AllStories />
    </Router>
  </QueryClientProvider>
);
 

describe('AllStories',  () => {
  it('should show loading indicator when fetching data', () => {
    setup();
  
    const loadingText =  screen.getByText(/Loading/i);
    expect(loadingText).toBeInTheDocument();

  });

  it('should display data from the backend', async () => {
    setup();

    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i), { timeout: 5000 });
  
    const title =  await screen.findByText(/voluntarily recognize the historic Raven Software QA union/i);
    await waitFor (() => {expect(title).toBeInTheDocument()});

  });
})
