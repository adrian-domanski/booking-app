import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import {
  LoginModalContent,
  ModalFormGroup,
  ModalInput,
  ModalInputIcon,
  ModalTitle,
} from '../styles/components/AuthModal';
import { Button } from '../styles/pages';
import { AuthContext } from './context/AuthContext';
import gsap from 'gsap';

const LoginModal = () => {
  const { ctx, dispatch } = useContext(AuthContext);
  const [rememberPassword, setRememberPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    gsap.from('#g-modal', {
      y: 100,
      opacity: 0.5,
      duration: 0.5,
    });
  }, []);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'rememberPassword':
        return setRememberPassword(!rememberPassword);
      case 'showPassword':
        return setShowPassword(!showPassword);
      default:
        break;
    }
  };

  return (
    <div
      className={`${
        ctx.isLoginOpened ? 'block' : 'hidden'
      } fixed w-screen h-screen overflow-auto z-50`}
    >
      <div className='bg-black w-full min-h-screen p-8 top-0 flex items-center justify-center left-0 z-40 bg-opacity-20'>
        {/* Content */}
        <LoginModalContent
          id='g-modal'
          className='bg-white lg:grid grid-cols-2 rounded-md relative z-50 w-full max-w-5xl p-8 lg:px-12 shadow-lg'
        >
          <div className='lg:border-r lg:pr-8'>
            <i
              className='fas fa-times block absolute right-8 top-6 lg:top-4 text-4xl hover:text-gray-400 transition-colors cursor-pointer text-gray-300'
              onClick={() => dispatch({ type: 'TOGGLE_LOGIN_MODAL' })}
            ></i>
            <ModalTitle>
              <b>Zaloguj</b> się do portalu
            </ModalTitle>
            <ModalFormGroup>
              <ModalInput type='text' placeholder='Wpisz adres email' />
              <ModalInputIcon className='fas fa-envelope absolute left-4 opacity-20 top-1/2 transform -translate-y-1/2' />
            </ModalFormGroup>

            <ModalFormGroup>
              <ModalInput
                type={showPassword ? 'text' : 'password'}
                placeholder='Wpisz hasło'
              />
              <ModalInputIcon className='fas fa-fingerprint' />
            </ModalFormGroup>

            <div className='lg:flex'>
              <label className='flex cursor-pointer justify-start items-start mt-8'>
                <div className='bg-white border-2 rounded-lg border-gray-300 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500'>
                  <input
                    type='checkbox'
                    checked={rememberPassword}
                    onChange={handleCheckboxChange}
                    name='rememberPassword'
                    className='opacity-0 absolute cursor-pointer'
                  />
                  <svg
                    className={`fill-current ${
                      rememberPassword ? 'block' : 'hidden'
                    } w-4 h-4 text-gray-500 pointer-events-none`}
                    viewBox='0 0 20 20'
                  >
                    <path d='M0 11l2-2 5 5L18 3l2 2L7 18z' />
                  </svg>
                </div>
                <div className='select-none text-gray-500'>
                  Zapamiętaj hasło
                </div>
              </label>
              <label className='flex cursor-pointer lg:ml-8 justify-start items-start mt-8'>
                <div className='bg-white border-2 rounded-lg border-gray-300 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500'>
                  <input
                    type='checkbox'
                    checked={showPassword}
                    onChange={handleCheckboxChange}
                    name='showPassword'
                    className='opacity-0 absolute cursor-pointer'
                  />
                  <svg
                    className={`fill-current ${
                      showPassword ? 'block' : 'hidden'
                    } w-4 h-4 text-gray-500 pointer-events-none`}
                    viewBox='0 0 20 20'
                  >
                    <path d='M0 11l2-2 5 5L18 3l2 2L7 18z' />
                  </svg>
                </div>
                <div className='select-none text-gray-500'>Pokaż znaki</div>
              </label>
            </div>
            <Button
              className='mt-8'
              onClick={() => dispatch({ type: 'TOGGLE_LOGIN_MODAL' })}
            >
              ZALOGUJ
            </Button>
            <Link href='/'>
              <a className='font-semibold text-center mx-auto mt-4 block text-gray-500'>
                Zapomniałem hasła
              </a>
            </Link>
          </div>

          {/* Second column */}
          <div className='text-center lg:pl-2 lg:max-w-xs lg:mx-auto'>
            <hr className='my-8 lg:hidden' />
            <h3 className='font-bold text-2xl lg:mt-12'>Nie masz konta?</h3>
            <p className='my-4'>Rejestracja potrwa mniej niż minutę!</p>
            <Button
              color='success'
              className='mt-6 font-bold tracking-widest'
              onClick={() => {
                dispatch({ type: 'TOGGLE_LOGIN_MODAL' });
                dispatch({ type: 'TOGGLE_REGISTER_MODAL' });
              }}
            >
              REJESTRACJA
            </Button>
            <p className='uppercase mt-12 text-sm'>
              Możesz również zarejestrować się dzięki
            </p>
            <div className='flex justify-center mt-6'>
              <a
                href='/'
                className='w-12 h-12 hover:scale-110 transition-transform transform mr-4 flex justify-center shadow-lg items-center text-white rounded-lg bg-facebookBlue'
              >
                <i className='fab fa-facebook-f text-2xl'></i>
              </a>
              <a
                href='/'
                className='w-12 h-12 flex ml-4 hover:scale-110 transition-transform transform justify-center shadow-lg items-center text-white rounded-lg bg-googlePlusRed'
              >
                <i className='fab fa-google-plus-g text-2xl'></i>
              </a>
            </div>
          </div>
        </LoginModalContent>
      </div>
    </div>
  );
};

export default LoginModal;
