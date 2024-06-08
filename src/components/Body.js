import React from 'react';
import Sidebar from './Sidebar';

const Body = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <div>Body</div>
    </div>
  );
}

export default Body;
