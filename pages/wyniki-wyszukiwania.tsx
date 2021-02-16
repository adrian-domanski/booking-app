import React from 'react';
import Layout from '../components/Layout/Layout';
import Filters from '../components/SearchResults/Filters';
import Header from '../components/SearchResults/Header';
import SearchForAccomodation from '../components/SearchResults/SearchForAccomodation';
import SearchList from '../components/SearchResults/SearchList';
import { Section } from '../styles/components/utils';

const SearchResults = () => {
  return (
    <Layout>
      <Header />
      <Section className='relative z-10 -top-20 sm:!-top-24 !py-0 !px-2 md:!-top-16 md:grid md:grid-cols-12 md:gap-4 xl:gap-0'>
        <div className='md:col-span-5 xl:col-span-3'>
          <SearchForAccomodation />
          <Filters />
        </div>
        <SearchList />
      </Section>
    </Layout>
  );
};

export default SearchResults;
