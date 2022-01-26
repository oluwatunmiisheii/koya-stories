import React from 'react';
import { render, screen, waitForElementToBeRemoved, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter as Router } from 'react-router-dom';
import StoryDetails from '../StoryDetails';



const queryClient = new QueryClient();

const setup = () => render(
  <QueryClientProvider client={queryClient}>
    <Router>
      <StoryDetails />
    </Router>
  </QueryClientProvider>
);

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    id: '2262332',
  }),
}));
 

describe('StoryDetails',  () => {
  it('should show loading indicator when fetching data', () => {
    setup();
  
    const loadingText =  screen.queryByText(/Loading/i);
    expect(loadingText).toBeInTheDocument();

  });

  it('should display data from the backend', async () => {
    setup();

    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i), { timeout: 5000 });
  
    const title =  await screen.findByText(/voluntarily recognize the historic Raven Software QA union/i);
    await waitFor (() => {expect(title).toBeInTheDocument()});

  });
})
