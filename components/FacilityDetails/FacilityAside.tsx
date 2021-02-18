import React, { useEffect, useState } from 'react';
import { Section } from '../../styles/components/utils';
import { Button } from '../../styles/pages';
import {
  SendQuestionFormWrapper,
  StarIcon,
} from '../../styles/pages/FacilityDetails';
import GoogleMap from '../GoogleMap';
import DatePicker from 'react-datepicker';

const FacilityAside = () => {
  const [departureDate, setDepartureDate] = useState<string | number | Date>(
    ''
  );
  const [arrivalDate, setArrivalDate] = useState<string | number | Date>('');
  const [notRobot, setNotRobot] = useState(false);
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  const handleChackboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNotRobot(e.target.checked);
  };

  useEffect(() => {
    (document.getElementById(
      'departureDate2'
    ) as HTMLInputElement).placeholder = 'Wybierz datę przyjazdu';
    (document.getElementById('arrivalDate2') as HTMLInputElement).placeholder =
      'Wybierz datę odjazdu';
  }, []);
  return (
    <Section className='relative z-10 -top-20 sm:!-top-24 mt-8 !px-0 lg:!pl-4 xl:!pl-8'>
      <SendQuestionFormWrapper className='bg-white shadow-md rounded px-8 pt-6 pb-8 flex flex-col mb-8'>
        <h1 className='text-2xl font-semibold mb-4'>Zapytaj o nocleg</h1>
        {/* 1 row */}
        <div className='w-full'>
          <div className='relative'>
            <DatePicker
              id='departureDate2'
              type='text'
              locale='pl'
              placeholder='xx'
              dateFormat='E, dd.MM'
              className='appearance-none mb-3 block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4'
              value={departureDate}
              selected={departureDate}
              onChange={(date) => setDepartureDate(date)}
            />
            <i className='fas fa-calendar-day absolute top-4 right-3 text-gray-200 block'></i>
          </div>
          <div className='relative'>
            <DatePicker
              id='arrivalDate2'
              type='text'
              locale='pl'
              placeholder='xx'
              dateFormat='E, dd.MM'
              className='appearance-none block w-full mb-3 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4'
              value={arrivalDate}
              selected={arrivalDate}
              onChange={(date) => setArrivalDate(date)}
            />
            <i className='fas fa-calendar-day absolute top-4 right-3 text-gray-200 block'></i>
          </div>
        </div>
        <Button color='blue' className='uppercase tracking-wider'>
          Zapytaj o nocleg
        </Button>
      </SendQuestionFormWrapper>
      <GoogleMap />
      <div className='bg-white shadow-md rounded px-8 py-5 flex flex-col my-8'>
        <h3>
          Ten <b>ośrodek</b> poleca 4 na 5 osób
        </h3>
        <div className='flex justify-between w-64 mx-auto mt-3'>
          <StarIcon isActive />
          <StarIcon isActive />
          <StarIcon isActive />
          <StarIcon isActive />
          <StarIcon />
        </div>
        <div>
          <a
            href='/'
            className='ml-auto table mt-2 text-sm text-gray-400 hover:text-gray-700'
          >
            Przejdź do opinii
          </a>
        </div>
      </div>

      <div className='flex justify-between items-center h-24'>
        {showPhoneNumber ? (
          <div className='flex items-center justify-center w-full'>
            <i className='fas fa-mobile-alt text-themeBlue text-4xl mr-4'></i>
            <p className='font-semibold text-3xl text-gray-700'>
              (+48) 600 202 202
            </p>
          </div>
        ) : (
          <>
            <label className='flex justify-start items-start'>
              <div className='bg-white border-2 rounded-lg border-themeBlue w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500'>
                <input
                  type='checkbox'
                  checked={notRobot}
                  onChange={handleChackboxChange}
                  className='opacity-0 absolute'
                />
                <svg
                  className={`fill-current ${
                    notRobot ? 'block' : 'hidden'
                  } w-4 h-4 text-themeBlue pointer-events-none`}
                  viewBox='0 0 20 20'
                >
                  <path d='M0 11l2-2 5 5L18 3l2 2L7 18z' />
                </svg>
              </div>
              <div className='select-none'>Nie jestem robotem</div>
            </label>
            <Button
              color='blue'
              onClick={() => notRobot && setShowPhoneNumber(true)}
              className='!w-40 !block'
            >
              Pokaż numer
            </Button>
          </>
        )}
      </div>

      <Section className='bg-white shadow-md rounded px-8 pt-6 pb-8 flex flex-col mb-8'>
        <h1 className='text-xl font-semibold mb-5'>
          <b>Goście</b> uwielbiają...
        </h1>
        <div className='flex flex-row mb-3'>
          <StarIcon className='text-themeBlue !text-lg mr-2' />
          <div>
            <p>"Miły właściciel, czysto, przyjemnie :)"</p>
            <p className='text-gray-400 italic'>Michalina D.</p>
          </div>
        </div>
        <div className='flex flex-row mb-3'>
          <StarIcon className='text-themeBlue !text-lg mr-2' />
          <div>
            <p>"Miły właściciel, czysto, przyjemnie :)"</p>
            <p className='text-gray-400 italic'>Michalina D.</p>
          </div>
        </div>
        <div className='flex flex-row mb-3'>
          <StarIcon className='text-themeBlue !text-lg mr-2' />
          <div>
            <p>"Miły właściciel, czysto, przyjemnie :)"</p>
            <p className='text-gray-400 italic'>Michalina D.</p>
          </div>
        </div>
        <p className='text-gray-500 font-semibold mb-2'>Idealny na 4 noce!</p>
        <div className='flex flex-row mb-3'>
          <i className='fas fa-hear text-themeBlue !text-lg mr-2 fa-heart' />
          <div>
            <p>
              Ta nieruchomość leżąca w samym centrum Mielna ma idealną ocenę
              9.2!
            </p>
          </div>
        </div>
        <div className='flex flex-row mb-3'>
          <i className='fas fa-parking text-themeBlue !text-lg mr-2 fa-heart' />
          <div>
            <p>Parking na terenie obiektu</p>
          </div>
        </div>
        <Button color='light'>Rezerwuj teraz</Button>
      </Section>
      <div className='bg-themeDarker h-52 rounded-xl flex items-center justify-center relative'>
        <img src='/img/logo.png' alt='Gościnni.pl' className='w-48' />
        <p className='absolute bottom-12 right-20 text-2xl text-white font-semibold tracking-wider'>
          ADSY
        </p>
      </div>
    </Section>
  );
};

export default FacilityAside;
