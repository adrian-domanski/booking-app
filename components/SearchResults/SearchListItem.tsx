import Link from 'next/link';
import React from 'react';
import { Badge } from '../../styles/components/utils';
import { Button } from '../../styles/pages';
import { SearchItem } from '../../styles/pages/SearchResults';

const SearchListItem = () => {
  return (
    <SearchItem className='xl:!p-4'>
      <div className='mb-4 xl:mb-0 xl:w-52 xl:pr-4'>
        <img
          src='/img/landscape.jpg'
          className='w-full xl:h-full h-60 object-cover object-center block rounded-md'
          alt='Last night resort'
        />
      </div>
      <div className='xl:flex-1'>
        <div>
          <div className='flex justify-between items-center -mb-2'>
            <div className='xl:flex items-start'>
              <Badge className='!bg-themeGreen !text-white !table xl:!flex xl:mr-2 xl:text-sm xl:!h-6 xl:leading-10 xl:!py-1'>
                Apartamenty
              </Badge>
              <h1 className='text-2xl my-2 hidden xl:block xl:-mt-1'>
                Last Night Resort
              </h1>
            </div>
            <div className='flex items-center'>
              <div className='text-right'>
                <p className='font-bold'>Doskonałe</p>
                <p>120 opinii</p>
              </div>
              <div className='bg-themeBlue rounded ml-2 text-white p-2'>
                9.3
              </div>
            </div>
          </div>
          <h1 className='text-2xl my-2 xl:hidden'>Last Night Resort</h1>
        </div>
        <span className='underline'>ul. Wrocławska</span>,{' '}
        <span className='underline'>Mielno</span> - 950 m od centrum
        <div className='xl:flex xl:justify-between'>
          <p className='mt-3 w-8/12'>
            Mamy przyjemnośc zaprosić Państwa do Domu Bałtyckiego na wypoczynek
            nad Morzem w zezonie 2019. Oferujemy nocleg blisko Morza w
            apartamentach typu LUX w komfortowej cenie.
            <span className='text-theme mt-3 text-sm hidden xl:block'>
              Ostatnio zarezerwowano 1 godzinę temu na naszej stronie
            </span>
          </p>
          <div className='flex justify-between xl:justify-start items-center xl:items-end xl:flex-col-reverse'>
            <Link href='/strona-obiektu'>
              <Button
                as='a'
                color='success'
                className='mt-4 xl:!text-sm xl:mt-2 !w-auto !table'
              >
                <div className='flex items-center'>
                  <span>Sprawdź dostępność</span>
                  <i className='fas fa-angle-right ml-2'></i>
                </div>
              </Button>
            </Link>
            <p className='mt-4 text-right text-xl'>
              Cena od <b>99zł</b>
            </p>
          </div>
        </div>
        <span className='text-theme mt-3 text-sm block xl:hidden'>
          Ostatnio zarezerwowano 1 godzinę temu na naszej stronie
        </span>
      </div>
    </SearchItem>
  );
};

export default SearchListItem;
