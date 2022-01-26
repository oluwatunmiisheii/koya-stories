import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from "react-query";
import storiesService from '../../services/stories.service';
import Header from '../../components/shared/Header';

const StoryDetails: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery(["comments", id], () => storiesService.getStoryDetails(id));

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      {data ? (
        <>
          <Header>
            <div className='w-full flex justify-center py-8'>
              <div className='text-center sm:w-11/12 lg:w-1/2'>
                <p className='mb-8 text-blue-800'>
                  {data.date_gmt ? new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(new Date(data.date_gmt)) : ''}
                </p>
                <h1 className="text-4xl font-semibold text-center"dangerouslySetInnerHTML={{ __html: data.title.rendered }}></h1>
              </div>
            </div>
          </Header>
          
          <div className="inline-grid grid-cols-1 items-center justify-items-center mt-8">
            <div className='sm:w-5/6 lg:w-4/6'>
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
        </>
      ) : null}
    </>
  );
}

export default StoryDetails;