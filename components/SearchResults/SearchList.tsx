import React from 'react';
import { Section } from '../../styles/components/utils';
import Pagination from './Pagination';
import SearchListItem from './SearchListItem';

const SearchList = () => {
  return (
    <Section className='md:!p-0 md:col-start-6 xl:col-start-4 xl:!pl-7 md:col-span-full'>
      <div className='grid gap-y-4'>
        <SearchListItem />
        <SearchListItem />
        <SearchListItem />
        <SearchListItem />
        <SearchListItem />
        <SearchListItem />
        <SearchListItem />
        <SearchListItem />
        <SearchListItem />
      </div>
      <Pagination />
    </Section>
  );
};

export default SearchList;
