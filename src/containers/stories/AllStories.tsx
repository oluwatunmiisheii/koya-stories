import React from 'react';
import StoriesCard from '../../components/stories/StoriesCard';
import { useQuery } from 'react-query'
import StoryService from '../../services/stories.service';
import { IStory } from '../../models/Stories.models';

interface IAllStoriesProps {
  
}
 
const AllStories: React.FC<IAllStoriesProps> = () => {
  const { data, isLoading } = useQuery('fetchStories', StoryService.getAllStories);

  if(isLoading) {
    return <div>Loading...</div>
  }
  
  return ( 
    <>
    {data && data?.length > 0 ? (
      <div className='grid grid-cols-3 gap-8'>
        {data.map((story: IStory) => (
          <StoriesCard key={story.id} story={story} />
        ))}
      </div>
    ): <>Hiiii</>}
    </>
  );
}
 
export default AllStories;
