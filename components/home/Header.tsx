import React, { useEffect, useState } from 'react';
import {
  FormGroup,
  Input,
  Label,
  StyledDatePicker,
  StyledHeader,
} from '../../styles/pages';

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
        console.log('looped');
        inputs[i].addEventListener('keyup', function () {
          toggleInputContainer(this);
        });
        toggleInputContainer(inputs[i]);
      }
    });
  }, []);
  return (
    <StyledHeader className='py-28 px-10'>
      <div className='text-center text-white'>
        <h1 className='text-4xl font-bold'>Serdecznie witamy</h1>
        <h2 className='font-bold text-2xl'>na portalu Gościnni.pl</h2>
        <h3 className='text-center mt-8 opacity-90'>
          Pozwól nam pomóc Ci w znalezieniu idealnego noclegu, z Nami to proste!
        </h3>
      </div>
      <div
        className='bg-white mt-8 rounded-lg shadow-2xl py-8 px-10'
        id='searchBar'
      >
        <form>
          <FormGroup>
            <Input id='city' type='text' autoFocus={true} />
            <Label htmlFor='city'>Miejscowość</Label>
          </FormGroup>
          <FormGroup>
            <StyledDatePicker
              id='departureDate'
              type='text'
              autoFocus={true}
              selected={arrivalDate}
              onChange={(date) => setArrivalDate(date)}
            />
            <Label htmlFor='departureDate'>Data wyjazdu</Label>
          </FormGroup>
          <FormGroup>
            <Input id='arrivalDate' type='text' autoFocus={true} />
            <Label htmlFor='arrivalDate'>Data przyjazdu</Label>
          </FormGroup>
          <FormGroup>
            <Input id='guestCount' type='number' autoFocus={true} />
            <Label htmlFor='departureDate'>Liczba gości</Label>
          </FormGroup>
        </form>
      </div>
    </StyledHeader>
  );
};

export default Header;
