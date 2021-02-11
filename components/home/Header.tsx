import React, { useEffect, useState } from 'react';
import {
  FormGroup,
  Input,
  Label,
  Button,
  StyledDatePicker,
  StyledHeader,
} from '../../styles/pages';
import { registerLocale } from 'react-datepicker';
import pl from 'date-fns/locale/pl';
registerLocale('pl', pl);

import 'react-datepicker/dist/react-datepicker.css';

const Header = () => {
  const [departureDate, setDepartureDate] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');

  useEffect(() => {
    var toggleInputContainer = function (input) {
      if (input.value != '') {
        input.classList.add('filled');
      } else {
        input.classList.remove('filled');
      }
    };

    var labels = document.querySelectorAll('.label');
    for (var i = 0; i < labels.length; i++) {
      labels[i].addEventListener('click', function () {
        this.previousElementSibling.focus();
      });
    }

    window.addEventListener('load', function () {
      var inputs = document.getElementsByClassName('input');
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('keyup', function () {
          toggleInputContainer(this);
        });
        toggleInputContainer(inputs[i]);
      }
    });
  }, []);

  return (
    <StyledHeader className='py-28 px-10 relative mb-10'>
      <div className='text-center text-white'>
        <h1 className='text-4xl font-bold'>Serdecznie witamy</h1>
        <h2 className='font-bold text-2xl'>na portalu Gościnni.pl</h2>
        <h3 className='text-center mt-8 opacity-90'>
          Pozwól nam pomóc Ci w znalezieniu idealnego noclegu, z Nami to proste!
        </h3>
      </div>
      <div
        className='bg-white mt-8 rounded-lg shadow-2xl py-8 px-10 flex flex-col mb-12'
        id='searchBar'
      >
        <img
          src='/img/icons/pin.png'
          alt='znacznik'
          className='block w-8 mx-auto'
        />
        <h1 className='text-center mt-2 mb-5 text-2xl'>Gdzie chesz jechać?</h1>
        <form>
          <FormGroup>
            <Input id='city' type='text' autoFocus={true} />
            <Label htmlFor='city'>Miejscowość</Label>
          </FormGroup>
          <FormGroup>
            <StyledDatePicker
              id='departureDate'
              type='text'
              locale='pl'
              autoFocus={true}
              selected={departureDate}
              onChange={(date) => setDepartureDate(date)}
            />
            <Label
              htmlFor='departureDate'
              className={`${departureDate ? 'selected-date' : ''}`}
            >
              Data wyjazdu
            </Label>
          </FormGroup>
          <FormGroup>
            <StyledDatePicker
              id='arrivalDate'
              type='text'
              locale='pl'
              autoFocus={true}
              selected={arrivalDate}
              onChange={(date) => setArrivalDate(date)}
            />
            <Label
              htmlFor='arrivalDate'
              className={`${arrivalDate ? 'selected-date' : ''}`}
            >
              Data przyjazdu
            </Label>
          </FormGroup>
          <FormGroup>
            <Input id='guestCount' type='number' autoFocus={true} />
            <Label htmlFor='guestCount'>Liczba gości</Label>
          </FormGroup>
          <Button type='submit'>
            Szukaj
            {/* <i className='fas fa-search'></i> */}
          </Button>
        </form>
      </div>
      <i className='fas fa-chevron-down absolute bottom-0 left-1/2 text-6xl text-gray-300 hover:text-gray-800 transition-colors transform -translate-x-1/2'></i>
    </StyledHeader>
  );
};

export default Header;
