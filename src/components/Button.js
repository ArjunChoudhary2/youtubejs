import React from 'react';

const Button = ({name}) => {
  return (
    <div>
      <button className='bg-slate-200 px-3 m-2 rounded-md shadow-2xl'>{name}</button>
    </div>
  );
}

export default Button;
