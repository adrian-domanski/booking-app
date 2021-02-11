import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isMobileActive, setIsMobileActive] = useState(false);
  const [isScrolledTop, setIsScrolledTop] = useState(true);

  useEffect(() => {
    const checkIfScrolledTop = () => {
      let isTop = isScrolledTop;
      if (window.pageYOffset === 0 && !isTop) isTop = true;
      else if (window.pageYOffset !== 0 && isTop) isTop = false;
      setIsScrolledTop(isTop);
    };

    window.addEventListener('scroll', checkIfScrolledTop);

    return () => window.removeEventListener('scroll', checkIfScrolledTop);
  }, []);

  const toggleMobileMenu = () => setIsMobileActive(!isMobileActive);

  return (
    <nav
      className={`${
        isScrolledTop ? 'bg-transparent' : 'bg-themeDarker'
      } fixed top-0 left-0 w-full transition-colors z-50`}
    >
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'></div>
          <div className='flex-1 flex items-start justify-start sm:items-stretch sm:justify-start'>
            <div className='flex-shrink-0 flex items-center'>
              <img
                className='block h-7 w-auto ml-2'
                src='/img/logo.png'
                alt='gościnni.pl'
              />
            </div>
            <div className='hidden sm:block sm:ml-6'>
              <div className='flex space-x-4'>
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <a
                  href='#'
                  className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  Dashboard
                </a>
                <a
                  href='#'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  Team
                </a>
                <a
                  href='#'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  Projects
                </a>
                <a
                  href='#'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  Calendar
                </a>
              </div>
            </div>
          </div>
          <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            <div className='ml-3 relative'>
              <div>
                {/* Mobile menu button*/}
                <button
                  className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white'
                  aria-expanded='false'
                  onClick={toggleMobileMenu}
                >
                  <span className='sr-only'>Otwórz główne menu</span>
                  {/* Icon when menu is closed. */}
                  <svg
                    className={`${isMobileActive ? 'hidden' : 'block'} h-6 w-6`}
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                  {/* Icon when menu is open. */}
                  <svg
                    className={`${isMobileActive ? 'block' : 'hidden'} h-6 w-6`}
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          isMobileActive ? 'block' : 'hidden'
        } sm:hidden bg-themeDarker`}
      >
        <div className='px-2 pt-2 pb-3 space-y-1'>
          <a
            href='#'
            className='bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
          >
            Dashboard
          </a>
          <a
            href='#'
            className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
          >
            Team
          </a>
          <a
            href='#'
            className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
          >
            Projects
          </a>
          <a
            href='#'
            className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
          >
            Calendar
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
