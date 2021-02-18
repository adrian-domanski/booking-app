import React from 'react';
import FacilityAside from '../components/FacilityDetails/FacilityAside';
import FacilityContent from '../components/FacilityDetails/FacilityContent';
import Header from '../components/FacilityDetails/Header';
import Layout from '../components/Layout/Layout';
import { Section } from '../styles/components/utils';

const DetailsPage = () => {
  return (
    <Layout>
      <Header
        title={'Late Night Resort'}
        address='Piastów 4-6, 76-032 Mielno'
        distanceFromCityCenter={7}
      />
      <Section className='relative z-10 -top-20 sm:!-top-24 !py-0 md:!px-8 !px-4 md:!-top-16 lg:grid lg:grid-cols-12'>
        <FacilityContent />
        <div className='lg:col-span-4'>
          <FacilityAside />
        </div>
      </Section>
    </Layout>
  );
};

export default DetailsPage;
