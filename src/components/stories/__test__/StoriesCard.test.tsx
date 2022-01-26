import React from 'react';
import { render, screen } from '@testing-library/react';
import StoriesCard from '../StoriesCard';
import { IStory } from '../../../models/Stories.models';
import { MemoryRouter as Router } from 'react-router-dom';

const storiesMock: IStory = {
  id: 1,
  status: 'publish',
  title: {
    rendered: 'Test Story'
  },
  excerpt: {
    rendered: 'Test Excerpt'
  },
  jetpack_featured_media_url: 'https://via.placeholder.com/150'
}

const setup = () => render(
  <Router>
    <StoriesCard story={storiesMock} />
  </Router>
);
 

describe('StoriesCard', () => {
  it('should render title', async () => {
    const { container } = setup();
  
    const title = screen.getByText(/^Test story$/i); // full string match, ignore case
  
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Test Story');
  
    expect(container).toMatchSnapshot();
  });
})
