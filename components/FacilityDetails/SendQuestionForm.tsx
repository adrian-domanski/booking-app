import React, { useEffect, useState } from 'react';
import { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import pl from 'date-fns/locale/pl';
import DatePicker from 'react-datepicker';
import { SendQuestionFormWrapper } from '../../styles/pages/FacilityDetails';
import { Button } from '../../styles/pages';
registerLocale('pl', pl);

const SendQuestionForm = () => {
  const [departureDate, setDepartureDate] = useState<string | number | Date>(
    ''
  );
  const [arrivalDate, setArrivalDate] = useState<string | number | Date>('');

  useEffect(() => {
    (document.getElementById('departureDate') as HTMLInputElement).placeholder =
      'Przyjazd';
    (document.getElementById('arrivalDate') as HTMLInputElement).placeholder =
      'Wyjazd';
  }, []);

  return (
    <SendQuestionFormWrapper className='bg-white rounded pt-6 pb-8 mb-4 flex flex-col my-2'>
      <h1 className='text-2xl font-semibold mb-4'>Zapytaj o nocleg</h1>
      <div className='md:flex mb-2'>
        {/* 1 row */}
        <div className='w-full md:grid md:grid-cols-4 md:gap-x-4 mb-2'>
          <div className='relative'>
            <DatePicker
              id='departureDate'
              type='text'
              locale='pl'
              placeholder='xx'
              dateFormat='E, dd.MM'
              className='appearance-none mb-3 md:mb-0 block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4'
              value={departureDate}
              selected={departureDate}
              onChange={(date) => setDepartureDate(date)}
            />
            <i className='fas fa-calendar-day absolute top-4 right-3 text-gray-200 block'></i>
          </div>
          <div className='relative'>
            <DatePicker
              id='arrivalDate'
              type='text'
              locale='pl'
              placeholder='xx'
              dateFormat='E, dd.MM'
              className='appearance-none block w-full mb-3 md:mb-0 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4'
              value={arrivalDate}
              selected={arrivalDate}
              onChange={(date) => setArrivalDate(date)}
            />
            <i className='fas fa-calendar-day absolute top-4 right-3 text-gray-200 block'></i>
          </div>
          <div>
            <div className='relative mb-3 md:mb-0'>
              <select className='cursor-pointer text-gray-400 block appearance-none w-full bg-grey-lighter border py-3 px-4 pr-8 rounded'>
                <option>Dorośli</option>
                <option>Dzieci</option>
                <option>Inne</option>
              </select>
              <div className='absolute top-4 right-0 flex items-center px-2 text-grey-darker'>
                <svg
                  className='h-4 w-4'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <div className='relative'>
              <select className='cursor-pointer text-gray-400 block appearance-none w-full bg-grey-lighter border py-3 px-4 pr-8 rounded'>
                <option>Dzieci</option>
                <option>Dorośli</option>
                <option>Inne</option>
              </select>
              <div className='absolute top-4 right-0 flex items-center px-2 text-grey-darker'>
                <svg
                  className='h-4 w-4'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 2 row */}
      <div className='-mx-3 md:flex mb-2'>
        <div className='md:w-1/2 px-3 md:pr-2 md:pl-3 mb-3 -mt-1 md:mb-0'>
          <input
            className='appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4'
            type='text'
            placeholder='Imię i nazwisko'
          />
        </div>
        <div className='md:w-1/2 px-3 md:px-2 mb-3 md:mb-0'>
          <input
            className='appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4'
            type='email'
            placeholder='Adres e-mail'
          />
        </div>
        <div className='md:w-1/2 px-3 md:px-3 md:pl-2'>
          <input
            className='appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4'
            id='grid-zip'
            type='text'
            placeholder='Numer telefonu'
          />
        </div>
      </div>

      <div className='-mx-3 md:flex mb-2'>
        <div className='md:w-full px-3'>
          <textarea
            className='appearance-none mt-2 h-32 block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3'
            id='grid-password'
            placeholder='Treść wiadomości'
          />
        </div>
      </div>
      <Button color='blue' className='uppercase tracking-wider'>
        <i className='fas fa-paper-plane mr-2'></i>Wyślij zapytanie
      </Button>
    </SendQuestionFormWrapper>
  );
};

export default SendQuestionForm;
