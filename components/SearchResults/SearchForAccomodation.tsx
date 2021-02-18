import React, { useState } from 'react';
import { Button } from '../../styles/pages';
import {
  Card,
  Label,
  SearchForAccomodationSection,
  SimpleInput,
} from '../../styles/pages/SearchResults';
import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import pl from 'date-fns/locale/pl';
import 'react-datepicker/dist/react-datepicker.css';
registerLocale('pl', pl);

const SearchForAccomodation = () => {
  const [departureDate, setDepartureDate] = useState<string | number | Date>(
    ''
  );
  const [arrivalDate, setArrivalDate] = useState<string | number | Date>('');

  return (
    <SearchForAccomodationSection className='md:!p-0'>
      <Card>
        <h2 className='text-2xl mb-4'>Szukaj noclegu</h2>
        <form>
          <Label htmlFor='destinationPlace'>Miejsce docelowe</Label>
          <SimpleInput type='text' id='destinationPlace' />
          <Label htmlFor='destinationPlace'>Data przyjazdu</Label>
          <DatePicker
            id='arrivalDate3'
            type='text'
            locale='pl'
            placeholder='xx'
            dateFormat='E, dd.MM'
            className='appearance-none cursor-pointer block w-full mb-3 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4'
            value={arrivalDate}
            selected={arrivalDate}
            onChange={(date) => setArrivalDate(date)}
          />
          <Label htmlFor='destinationPlace'>Data wyjazdu</Label>
          <DatePicker
            id='departureDate3'
            type='text'
            locale='pl'
            placeholder='xx'
            dateFormat='E, dd.MM'
            className='appearance-none mb-3 cursor-pointer block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4'
            value={departureDate}
            selected={departureDate}
            onChange={(date) => setDepartureDate(date)}
          />
          <div className='grid grid-cols-2 gap-x-10'>
            <div>
              <Label>Dorośli</Label>
              <SimpleInput type='number' />
            </div>
            <div>
              <Label>Dzieci</Label>
              <SimpleInput type='number' />
            </div>
          </div>
          <Button className='mt-6 uppercase' type='submit'>
            Szukaj
          </Button>
        </form>
      </Card>
    </SearchForAccomodationSection>
  );
};

export default SearchForAccomodation;
