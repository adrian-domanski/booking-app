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
import Link from 'next/link';
import gsap from 'gsap';

const Header = () => {
  const [departureDate, setDepartureDate] = useState<string | number | Date>(
    new Date()
  );
  const [arrivalDate, setArrivalDate] = useState<string | number | Date>(
    new Date().setDate(new Date().getDate() + 1)
  );
  const [city, setCity] = useState('Bieszczady');
  const [guestCount, setGuestCount] = useState('3');

  // Gsap animation
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: 'power3.out' },
    });

    tl.from('#searchBar', {
      opacity: 0,
      y: 75,
      delay: 1.6,
    });
  }, []);

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
    <StyledHeader className='py-28 lg:py-40 relative mb-10'>
      <Section>
        <div className='text-center text-white' id='g-header'>
          <h1 className='text-4xl md:text-5xl font-bold tracking-wide'>
            Serdecznie witamy
          </h1>
          <h2 className='font-bold text-3xl md:text-4xl'>
            na portalu Gościnni.pl
          </h2>
          <h3 className='text-center mt-8 opacity-90 md:text-xl lg:my-10'>
            Pozwól nam pomóc Ci w znalezieniu idealnego noclegu,
            <br />z Nami to proste!
          </h3>
        </div>
        <div
          className='bg-white max-w-lg lg:max-w-5xl mx-auto mt-8 lg:mt-12 rounded-lg shadow-2xl lg:py-4 lg:px-14 py-8 px-10 flex flex-col mb-12'
          id='searchBar'
        >
          <form
            className='lg:flex lg:justify-between lg:items-center lg:pl-4'
            autoComplete='off'
          >
            <FormGroup>
              <label htmlFor='city'>
                <FormGroupImg
                  src='/img/icons/pin.png'
                  className='absolute'
                  alt='Znacznik'
                />
              </label>
              <Input
                id='city'
                type='text'
                value={city}
                className={`${city ? 'filled' : ''}`}
                onChange={handleChange}
              />
              <Label htmlFor='city'>Gdzie chcesz jechać</Label>
            </FormGroup>
            <FormGroup>
              <label htmlFor='departureDate'>
                <FormGroupImg
                  src='/img/icons/calendar.png'
                  className='absolute !-left-9'
                  alt='Kalendarz'
                />
              </label>
              <StyledDatePicker
                id='departureDate'
                type='text'
                locale='pl'
                dateFormat='E, dd.MM'
                autoComplete='off'
                className={`capitalize ${departureDate ? 'filled' : ''}`}
                value={departureDate}
                selected={departureDate}
                onChange={(date) => setDepartureDate(date)}
              />
              <Label
                htmlFor='departureDate'
                className={`${
                  departureDate ? 'selected-date' : 'not-selected-date'
                }`}
              >
                Data wyjazdu
              </Label>
            </FormGroup>
            <FormGroup>
              <label htmlFor='arrivalDate'>
                <FormGroupImg
                  src='/img/icons/arrow-left.png'
                  className='absolute !-left-9'
                  alt='Strzałka'
                />
              </label>
              <StyledDatePicker
                id='arrivalDate'
                type='text'
                locale='pl'
                dateFormat='E, dd.MM'
                autoComplete='off'
                className={`capitalize ${arrivalDate ? 'filled' : ''}`}
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
            <FormGroup className='lg:!w-28'>
              <label htmlFor='guestCount'>
                <FormGroupImg
                  src='/img/icons/group.png'
                  className='absolute !-left-14'
                  alt='Grupa ludzi'
                />
              </label>
              <Input
                id='guestCount'
                className={`${guestCount ? 'filled' : ''}`}
                onChange={handleChange}
                autoComplete='off'
                value={guestCount}
                type='number'
              />
              <Label htmlFor='guestCount'>Liczba gości</Label>
            </FormGroup>
            <Link href='/wyniki-wyszukiwania'>
              <Button
                as='button'
                type='submit'
                className='lg:!w-14 lg:!h-14 lg:!flex cursor-pointer lg:items-center lg:justify-center lg:!rounded-full'
              >
                <span className='lg:hidden'>Szukaj</span>
                <i className='fas fa-search hidden lg:flex text-3xl'></i>
              </Button>
            </Link>
          </form>
        </div>
        <a href='#closeToYouSection'>
          <i className='fas fa-chevron-down absolute lg:-bottom-8 bottom-0 left-1/2 text-6xl text-gray-200 hover:text-theme transition-colors transform -translate-x-1/2'></i>
        </a>
      </Section>
    </StyledHeader>
  );
};

export default Header;
