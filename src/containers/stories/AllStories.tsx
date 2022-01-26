import React from 'react';
import StoriesCard from '../../components/stories/StoriesCard';
import { useQuery } from 'react-query'
import StoryService from '../../services/stories.service';
import { IStory } from '../../models/Stories.models';
import StoriesLayout from '../../layouts/Stories';
import Header from '../../components/shared/Header';
interface IAllStoriesProps {
  
}
 
const AllStories: React.FC<IAllStoriesProps> = () => {
  const { data, isLoading } = useQuery('fetchStories', StoryService.getAllStories, {
    refetchOnWindowFocus: false,
  });

  if(isLoading) {
    return <div>Loading...</div>
  }
  
  return ( 
    <>
      <Header>
        <p className='capitalize text-blue-800'>our story</p>
        <h1 className="text-3xl font-semibold mb-8 text-gray-700">Share ideas that drive success</h1>
        <p className='text-gray-500'>Koya is more than a technology. We share ideas that drive <br /> success in your institution</p>
      </Header>
      {data && data?.length > 0 ? (
        <StoriesLayout>
          <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-8'>
            {data.map((story: IStory) => (
              <StoriesCard key={story.id} story={story} />
            ))}
          </div>
        </StoriesLayout>
      ): <>No Content</>}
    </>
  );
}
 
export default AllStories;
