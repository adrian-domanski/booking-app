import React from 'react';
import tw from 'twin.macro';

const NavLink = tw.li`cursor-pointer m-1 rounded transition-colors relative text-sm flex items-center py-2 px-3 leading-tight  ml-0 hover:bg-gray-200`;

const Pagination = () => {
  return (
    <div className='flex flex-wrap items-center justify-between mt-8'>
      <ul className='flex pl-0 list-none rounded my-2 text-gray-700'>
        <NavLink>
          <a className='page-link' href='#'>
            <i className='fas fa-angle-double-left'></i>
          </a>
        </NavLink>
        <NavLink className='bg-gray-100'>
          <a className='page-link' href='#'>
            1
          </a>
        </NavLink>
        <NavLink>
          <a className='page-link' href='#'>
            2
          </a>
        </NavLink>
        <NavLink>
          <a className='page-link' href='#'>
            3
          </a>
        </NavLink>
        <NavLink>
          <a className='page-link' href='#'>
            <i className='fas fa-angle-double-right'></i>
          </a>
        </NavLink>
      </ul>
      <p>Pokazano 1 - 25</p>
    </div>
  );
};

export default Pagination;
