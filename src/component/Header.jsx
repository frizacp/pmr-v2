import React from 'react';

function Header({ data, race }) {
  return (
    <div>
      <div className='bg-white p-3 flex place-content-between shadow shadow-gray-800 '>
        <img src='/logopmr_putih.webp' alt='' className='w-auto h-14 my-auto' />
        <div className='my-auto'>
          <h1 className='my-auto text-left font-bold text-4xl'>
            Preview Result {race}
          </h1>
          <h1 className='text-l text-left'>{data.date}</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
