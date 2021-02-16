import React from 'react';

const Pagination = () => {
  return (
    <div className='flex flex-wrap items-center justify-between mt-8'>
      <ul className='flex pl-0 list-none rounded my-2 text-gray-700'>
        <li className='relative text-sm flex items-center py-2 px-3 leading-tight  ml-0 hover:bg-gray-200'>
          <a className='page-link' href='#'>
            <i className='fas fa-angle-double-left'></i>
          </a>
        </li>
        <li className='relative bg-gray-200 rounded block py-2 px-3 leading-tight hver:bg-gray-200'>
          <a className='page-link' href='#'>
            1
          </a>
        </li>
        <li className='relative block py-2 px-3 leading-tight bg-white hover:bg-gray-200'>
          <a className='page-link' href='#'>
            2
          </a>
        </li>
        <li className='relative block py-2 px-3 leading-tight bg-white hover:bg-gray-200'>
          <a className='page-link' href='#'>
            3
          </a>
        </li>
        <li className='relative text-sm flex items-center py-2 px-3 leading-tight  ml-0 hover:bg-gray-200'>
          <a className='page-link' href='#'>
            <i className='fas fa-angle-double-right'></i>
          </a>
        </li>
      </ul>
      <p>Pokazano 1 - 25</p>
    </div>
  );
};

export default Pagination;
