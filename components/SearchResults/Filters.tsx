import React, { useState } from 'react';
import { Section } from '../../styles/components/utils';
import { Button } from '../../styles/pages';
import {
  Card,
  CheckBoxInput,
  CheckBoxLabel,
  CheckBoxSpan,
  RangeInput,
} from '../../styles/pages/SearchResults';
import GoogleMap from '../GoogleMap';

const Filters = () => {
  const [maxPrice, setMaxPrice] = useState(2300);

  const priceRangeChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMaxPrice(+e.target.value);

  return (
    <Section className='!py-0 md:!p-0 md:!mt-8'>
      <Card>
        <GoogleMap />
        <h2 className='text-2xl mb-4 mt-8'>
          Filtrowanie <i className='ml-3 fas fa-filter text-theme'></i>
        </h2>
        <hr className='mt-2 mb-4' />

        <h2 className='text-2xl mb-4'>Cena za nocleg</h2>
        <RangeInput className='range-slider mt-10'>
          <input
            className='range-slider__range'
            type='range'
            defaultValue={2300}
            min={0}
            value={maxPrice}
            onChange={priceRangeChange}
            max={2300}
          />
          <span className='start_value'>0zł</span>
          <span className='end_value'>{maxPrice}zł</span>
        </RangeInput>

        <hr className='my-6' />
        <h2 className='text-xl mb-4'>Dystans od Centrum</h2>
        <CheckBoxLabel>
          <CheckBoxInput type='checkbox' />
          <CheckBoxSpan>Mniej niż 1km</CheckBoxSpan>
        </CheckBoxLabel>
        <CheckBoxLabel>
          <CheckBoxInput type='checkbox' />
          <CheckBoxSpan>Mniej niż 3km</CheckBoxSpan>
        </CheckBoxLabel>
        <CheckBoxLabel>
          <CheckBoxInput type='checkbox' />
          <CheckBoxSpan>Mniej niż 5km</CheckBoxSpan>
        </CheckBoxLabel>
        <hr className='my-6' />
        <h2 className='text-xl mb-4'>Atrakcje</h2>
        <CheckBoxLabel>
          <CheckBoxInput type='checkbox' />
          <CheckBoxSpan>Wynajem rowerów</CheckBoxSpan>
        </CheckBoxLabel>
        <CheckBoxLabel>
          <CheckBoxInput type='checkbox' />
          <CheckBoxSpan>Bosika</CheckBoxSpan>
        </CheckBoxLabel>
        <CheckBoxLabel>
          <CheckBoxInput type='checkbox' />
          <CheckBoxSpan>Basen na terenie obiektu</CheckBoxSpan>
        </CheckBoxLabel>
        <CheckBoxLabel>
          <CheckBoxInput type='checkbox' />
          <CheckBoxSpan>Kręgle</CheckBoxSpan>
        </CheckBoxLabel>
        <CheckBoxLabel>
          <CheckBoxInput type='checkbox' />
          <CheckBoxSpan>Wędrówki</CheckBoxSpan>
        </CheckBoxLabel>
        <hr className='my-6' />
        <h2 className='text-xl mb-4'>Typ obiektu</h2>
        <CheckBoxLabel>
          <CheckBoxInput type='checkbox' />
          <CheckBoxSpan>Apartamenty</CheckBoxSpan>
        </CheckBoxLabel>
        <CheckBoxLabel>
          <CheckBoxInput type='checkbox' />
          <CheckBoxSpan>Hotele</CheckBoxSpan>
        </CheckBoxLabel>
        <CheckBoxLabel>
          <CheckBoxInput type='checkbox' />
          <CheckBoxSpan>Hostele</CheckBoxSpan>
        </CheckBoxLabel>
        <CheckBoxLabel>
          <CheckBoxInput type='checkbox' />
          <CheckBoxSpan>Domy gościnne</CheckBoxSpan>
        </CheckBoxLabel>
        <CheckBoxLabel>
          <CheckBoxInput type='checkbox' />
          <CheckBoxSpan>Domki letniskowe</CheckBoxSpan>
        </CheckBoxLabel>
        <hr className='my-6' />
        <h2 className='text-xl mb-4'>Udogodnienia</h2>
        <CheckBoxLabel>
          <CheckBoxInput type='checkbox' />
          <CheckBoxSpan>Parking</CheckBoxSpan>
        </CheckBoxLabel>
        <CheckBoxLabel>
          <CheckBoxInput type='checkbox' />
          <CheckBoxSpan>Restauracja</CheckBoxSpan>
        </CheckBoxLabel>
        <CheckBoxLabel>
          <CheckBoxInput type='checkbox' />
          <CheckBoxSpan>Zwierzęta dozwolone</CheckBoxSpan>
        </CheckBoxLabel>
        <CheckBoxLabel>
          <CheckBoxInput type='checkbox' />
          <CheckBoxSpan>Darmowe WiFi</CheckBoxSpan>
        </CheckBoxLabel>
        <CheckBoxLabel>
          <CheckBoxInput type='checkbox' />
          <CheckBoxSpan>Pokoje dla niepalących</CheckBoxSpan>
        </CheckBoxLabel>
        <hr className='my-6' />
        <h2 className='text-xl mb-4'>Udogodnienia w pokoju</h2>
        <CheckBoxLabel>
          <CheckBoxInput type='checkbox' />
          <CheckBoxSpan>Kuchnia/Aneks kuchenny</CheckBoxSpan>
        </CheckBoxLabel>
        <CheckBoxLabel>
          <CheckBoxInput type='checkbox' />
          <CheckBoxSpan>Prywatna łazienka</CheckBoxSpan>
        </CheckBoxLabel>
        <CheckBoxLabel>
          <CheckBoxInput type='checkbox' />
          <CheckBoxSpan>Klimatyzacja</CheckBoxSpan>
        </CheckBoxLabel>
        <CheckBoxLabel>
          <CheckBoxInput type='checkbox' />
          <CheckBoxSpan>Wanna w pokoju</CheckBoxSpan>
        </CheckBoxLabel>
        <CheckBoxLabel>
          <CheckBoxInput type='checkbox' />
          <CheckBoxSpan>Balkon</CheckBoxSpan>
        </CheckBoxLabel>
        <CheckBoxLabel>
          <CheckBoxInput type='checkbox' />
          <CheckBoxSpan>Wyposażenie plażowe</CheckBoxSpan>
        </CheckBoxLabel>
        <form>
          <Button className='mt-6 uppercase' type='submit'>
            Zaakceptuj filtry
          </Button>
        </form>
      </Card>
    </Section>
  );
};

export default Filters;
