import React, { useEffect, useState } from 'react';
import {
  FormGroup,
  Input,
  Label,
  Button,
  StyledDatePicker,
  StyledHeader,
  FormGroupImg,
} from '../../styles/pages';
import { registerLocale } from 'react-datepicker';
import pl from 'date-fns/locale/pl';
registerLocale('pl', pl);

import 'react-datepicker/dist/react-datepicker.css';
import { Section } from '../../styles/components/utils';

const Header = () => {
  const [departureDate, setDepartureDate] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [city, setCity] = useState('');
  const [guestCount, setGuestCount] = useState('');

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

  const handleChange = ({
    target: { value, id },
  }: React.ChangeEvent<HTMLInputElement>) => {
    switch (id) {
      case 'city':
        return setCity(value);
      case 'departureDate':
        return setDepartureDate(value);
      case 'arrivalDate':
        return setArrivalDate(value);
      case 'guestCount':
        return setGuestCount(value);
      default:
        break;
    }
  };

  return (
    <StyledHeader className='py-28 relative mb-10'>
      <Section>
        <div className='text-center text-white'>
          <h1 className='text-4xl font-bold'>Serdecznie witamy</h1>
          <h2 className='font-bold text-2xl'>na portalu Gościnni.pl</h2>
          <h3 className='text-center mt-8 opacity-90'>
            Pozwól nam pomóc Ci w znalezieniu idealnego noclegu, z Nami to
            proste!
          </h3>
        </div>
        <div
          className='bg-white mt-8 rounded-lg shadow-2xl lg:py-4 py-8 px-10 flex flex-col mb-12'
          id='searchBar'
        >
          <img
            src='/img/icons/pin.png'
            alt='znacznik'
            className='block w-8 mx-auto md:hidden'
          />
          <h1 className='text-center mt-2 mb-5 text-2xl lg:hidden'>
            Gdzie chesz jechać?
          </h1>
          <form className='lg:flex lg:justify-between lg:items-center'>
            <FormGroup>
              <FormGroupImg
                src='/img/icons/pin.png'
                className='absolute'
                alt='Znacznik'
              />
              <Input
                id='city'
                type='text'
                value={city}
                className={`${city ? 'filled' : ''}`}
                onChange={handleChange}
              />
              <Label htmlFor='city'>Miejscowość</Label>
            </FormGroup>
            <FormGroup>
              <StyledDatePicker
                id='departureDate'
                type='text'
                locale='pl'
                className={`${departureDate ? 'filled' : ''}`}
                value={departureDate}
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
                className={`${arrivalDate ? 'filled' : ''}`}
                value={arrivalDate}
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
              <Input
                id='guestCount'
                className={`${guestCount ? 'filled' : ''}`}
                onChange={handleChange}
                value={guestCount}
                type='number'
              />
              <Label htmlFor='guestCount'>Liczba gości</Label>
            </FormGroup>
            <Button
              type='submit'
              className='lg:!w-14 lg:!h-14 lg:!flex md:items-center lg:justify-center !rounded-full'
            >
              <span className='lg:hidden'>Szukaj</span>
              <i className='fas fa-search hidden lg:flex text-3xl'></i>
            </Button>
          </form>
        </div>
        <a href='#closeToYouSection'>
          <i className='fas fa-chevron-down absolute bottom-0 left-1/2 text-6xl text-gray-300 hover:text-theme transition-colors transform -translate-x-1/2'></i>
        </a>
      </Section>
    </StyledHeader>
  );
};

export default Header;
