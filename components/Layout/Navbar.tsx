import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { MenuLink, StyledNav } from '../../styles/components/Navbar';

const Navbar = () => {
  const [isMobileActive, setIsMobileActive] = useState(false);
  const [isScrolledTop, setIsScrolledTop] = useState(true);

  const checkIfScrolledTop = () => {
    if (window.pageYOffset === 0 && !isScrolledTop) {
      setIsScrolledTop(true);
    } else if (window.pageYOffset !== 0 && isScrolledTop) {
      setIsScrolledTop(false);
    }
  };

  useEffect(checkIfScrolledTop, []);

  useEffect(() => {
    if (isMobileActive) {
      document.addEventListener('click', toggleMobileMenu);

      return () => document.removeEventListener('click', toggleMobileMenu);
    }
  }, [isMobileActive]);

  useEffect(() => {
    window.addEventListener('scroll', checkIfScrolledTop);

    return () => window.removeEventListener('scroll', checkIfScrolledTop);
  });

  const toggleMobileMenu = () => setIsMobileActive(!isMobileActive);

  return (
    <StyledNav
      className={`${
        isScrolledTop && !isMobileActive ? 'bg-transparent' : 'bg-themeDarker'
      } fixed top-0 left-0 w-full transition z-50`}
    >
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'></div>
          <div className='flex-1 flex items-start sm:items-stretch sm:justify-start md:justify-between'>
            <div className='flex-shrink-0 flex items-center'>
              <img
                className='block h-7 w-auto ml-2'
                src='/img/logo.png'
                alt='gościnni.pl'
              />
            </div>
            <div className='hidden lg:block sm:ml-6'>
              <div className='flex space-x-4'>
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <MenuLink isActive isScrolledTop={isScrolledTop}>
                  Strona główna
                </MenuLink>
                <MenuLink>Dla właścicieli</MenuLink>
                <MenuLink>Kontakt</MenuLink>
                <MenuLink as='div' className='mr-0' id='admin-menu-trigger'>
                  <i className='far fa-user pr-2' />
                  Admin
                  <i className='fas fa-sort-down relative -top-1 left-2' />
                  <div
                    className='hidden text-left origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5'
                    role='menu'
                    aria-orientation='vertical'
                    aria-labelledby='admin-menu'
                    id='admin-menu-dropdown'
                  >
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                      role='menuitem'
                    >
                      Twój profil
                    </a>
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                      role='menuitem'
                    >
                      Ustawienia
                    </a>
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                      role='menuitem'
                    >
                      Wyloguj
                    </a>
                  </div>
                </MenuLink>
              </div>
            </div>
          </div>
          <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            <div className='ml-3 relative'>
              <div>
                {/* Mobile menu button*/}
                <button
                  className='lg:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white'
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
          isMobileActive ? 'scale-y-100 shadow-md' : 'scale-y-0'
        } lg:hidden bg-themeDarker transform transition-transform origin-top`}
      >
        <div className='px-2 pt-2 pb-3 space-y-1'>
          <Link href='/'>
            <MenuLink isActive>Strona główna</MenuLink>
          </Link>
          <Link href='/'>
            <MenuLink>Kontakt</MenuLink>
          </Link>
          <Link href='/'>
            <MenuLink>O nas</MenuLink>
          </Link>
          {/* Admin dropdown */}
          <Link href='/'>
            <MenuLink>Twój profil</MenuLink>
          </Link>
          <Link href='/'>
            <MenuLink>Ustawienia</MenuLink>
          </Link>
          <Link href='/'>
            <MenuLink>Wyloguj</MenuLink>
          </Link>
        </div>
      </div>
    </StyledNav>
  );
};

export default Navbar;
