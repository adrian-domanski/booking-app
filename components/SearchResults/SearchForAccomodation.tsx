import React from 'react';
import { Section } from '../../styles/components/utils';
import { Button } from '../../styles/pages';
import { Card, Label, SimpleInput } from '../../styles/pages/SearchResults';

const SearchForAccomodation = () => {
  return (
    <Section className='md:!p-0'>
      <Card>
        <h2 className='text-2xl mb-4'>Szukaj noclegu</h2>
        <form>
          <Label htmlFor='destinationPlace'>Miejsce docelowe</Label>
          <SimpleInput type='text' id='destinationPlace' />
          <Label htmlFor='destinationPlace'>Data przyjazdu</Label>
          <SimpleInput type='text' id='destinationPlace' />
          <Label htmlFor='destinationPlace'>Data wyjazdu</Label>
          <SimpleInput type='text' id='destinationPlace' />
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
    </Section>
  );
};

export default SearchForAccomodation;
