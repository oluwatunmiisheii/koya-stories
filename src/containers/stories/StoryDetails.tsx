import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from "react-query";
import storiesService from '../../services/stories.service';

const StoryDetails: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery(["comments", id], () => storiesService.getStoryDetails(id));

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      {data ? (
        <div className="inline-grid grid-cols-1 items-center justify-items-center">
          <div className="w-3/4">
            <div className='text-center'>
              <p className='mb-12'>
                {data.date_gmt ? new Intl.DateTimeFormat('en-GB', { dateStyle: 'full'}).format(new Date(data.date_gmt)) : ''}
              </p>
              <h1 className="text-3xl font-bold mb-16 text-center">{data.title.rendered}</h1>
            </div>

            <img src={data.jetpack_featured_media_url} alt="avatar" className='max-w-full mb-16' />

            {/* excerpt */}
            <blockquote>
              <p className="text-lg fo bg-gray-200 p-4 border-l-2 border-blue-600" dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }}></p>
            </blockquote>
            {/* content */}
            <>
              {data.content && <div className="mt-12 text-lg text-gray-600 leading-8" dangerouslySetInnerHTML={{ __html: data.content.rendered }}></div>}
            </>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default StoryDetails;