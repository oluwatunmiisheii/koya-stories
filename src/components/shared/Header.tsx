import * as React from 'react';


interface IHeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<IHeaderProps> = ({ children }) => {
  return (
    <div className='bg-blue-100 p-12 mb-8'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {children}
      </div>
    </div>
  );
}

export default Header;