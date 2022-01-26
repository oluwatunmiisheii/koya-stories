import * as React from 'react';
import { IStory } from '../../models/Stories.models';
import { truncate } from '../../util/TruncateText';
import { Link } from 'react-router-dom'
 
interface IStoriesCardProps {
  story: IStory;
}

const StoriesCard: React.FC<IStoriesCardProps> = ({story}) => {
  return (  
    <div className="flex flex-col bg-white shadow-sm rounded border border-gray-200 relative pb-12">
      <div className="flex-shrink-0">
        <img className="h-64 w-full object-cover" src={story.jetpack_featured_media_url} alt="avatar" />
      </div>
      <div className='mt-3 p-5 relative'>
        <Link to={`stories/${story.id}`} className="text-lg font-bold cursor-pointer underline" dangerouslySetInnerHTML={{__html: truncate(story.title.rendered, 200)}}></Link>
        <div className="mt-1 mb-5" dangerouslySetInnerHTML={{__html: truncate(story.excerpt.rendered, 200)}}></div>
      </div>
      <Link
        to={`stories/${story.id}`}
        className="absolute bottom-0 mb-6 ml-5 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        See More
      </Link>
    </div>
  );
}
 
export default StoriesCard;