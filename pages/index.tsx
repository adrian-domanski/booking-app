import React from 'react';
import CarouselSection from '../components/home/CarouselSection';
import CloseToYouSection from '../components/home/CloseToYouSection';
import Header from '../components/home/Header';
import JoinUs from '../components/home/JoinUs';
import MostPopularPlacesSection from '../components/home/MostPopularPlacesSection';
import Layout from '../components/Layout/Layout';
import { Separator } from '../styles/components/utils';

export default function Home() {
  return (
    <Layout>
      <Header />
      <CloseToYouSection />
      <Separator />
      <CarouselSection />
      <MostPopularPlacesSection />
      <JoinUs />
    </Layout>
  );
}
