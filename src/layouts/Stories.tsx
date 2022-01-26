import React from 'react';

interface IStoriesLayoutProps {
  children: React.ReactNode; 
}
 
const StoriesLayout: React.FC<IStoriesLayoutProps> = ({ children }) => {
  return ( 
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      {children}
    </div>
  );
}
 
export default StoriesLayout;