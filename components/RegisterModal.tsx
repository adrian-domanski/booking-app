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

const RegisterModal = () => {
  const { ctx, dispatch } = useContext(AuthContext);
  const [rememberPassword, setRememberPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    gsap.from('#g-modal-register', {
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
        ctx.isRegisterOpened ? 'block' : 'hidden'
      } fixed w-screen h-screen overflow-auto z-50`}
    >
      <div className='bg-black w-full min-h-screen p-8 top-0 flex items-center justify-center left-0 z-40 bg-opacity-20'>
        {/* Content */}
        <LoginModalContent
          id='g-modal-register'
          className='bg-white lg:grid grid-cols-2 rounded-md relative z-50 w-full max-w-5xl p-8 lg:px-12 shadow-lg'
        >
          <div className='lg:border-r lg:pr-6'>
            <i
              className='fas fa-times block absolute right-8 text-4xl hover:text-gray-400 transition-colors cursor-pointer text-gray-300'
              onClick={() => dispatch({ type: 'TOGGLE_REGISTER_MODAL' })}
            ></i>
            <ModalTitle>
              <b>Rejestracja</b> nowego konta
            </ModalTitle>
            <ModalFormGroup>
              <ModalInput type='text' placeholder='Twoje imię' />
              <ModalInputIcon className='far fa-user-circle absolute left-4 opacity-20 top-1/2 transform -translate-y-1/2' />
            </ModalFormGroup>

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
          </div>

          {/* Second column */}
          <div className='text-center lg:pl-6'>
            <hr className='my-8 lg:hidden' />
            <h3 className='font-bold text-2xl lg:mt-12'>
              Teraz to proste!
              <i className='fas fa-check text-themeDarker ml-4'></i>
            </h3>
            <ul className='mt-8 leading-10'>
              <li>
                1. Załóż <b>DARMOWE</b> konto
              </li>
              <li>
                2. <b>Dodaj</b> swój obiekt
              </li>
              <li>
                3. Reklamuj się i <b>zystkuj</b>!
              </li>
            </ul>
            <Button
              className='mt-6 font-bold tracking-widest !w-full'
              onClick={() => dispatch({ type: 'TOGGLE_REGISTER_MODAL' })}
            >
              ZAREJESTRUJ
            </Button>
          </div>
        </LoginModalContent>
      </div>
    </div>
  );
};

export default RegisterModal;
