import React from 'react';
import Header from '../components/home/Header';
import Layout from '../components/Layout/Layout';
import { Section, SectionTitle, Separator } from '../styles/components/utils';
import {
  CloseToYouGrid,
  CloseToYouGridItem,
  CloseToYouImg,
  CloseToYouItemSubTitle,
  CloseToYouItemTitle,
  ContentGroup,
} from '../styles/pages';

export default function Home() {
  return (
    <Layout>
      <Header />
      <Section>
        <SectionTitle>Najlepsze rozwiązania blisko Ciebie</SectionTitle>
        <Separator />
        <CloseToYouGrid>
          <CloseToYouGridItem>
            <CloseToYouImg src='/img/place.jpg' alt='Zakopane' />
            <ContentGroup>
              <CloseToYouItemTitle>Zakopane</CloseToYouItemTitle>
              <CloseToYouItemSubTitle>3h jazdy</CloseToYouItemSubTitle>
            </ContentGroup>
          </CloseToYouGridItem>
          <CloseToYouGridItem>
            <CloseToYouImg src='/img/place.jpg' alt='Zakopane' />
            <ContentGroup>
              <CloseToYouItemTitle>Zakopane</CloseToYouItemTitle>
              <CloseToYouItemSubTitle>3h jazdy</CloseToYouItemSubTitle>
            </ContentGroup>
          </CloseToYouGridItem>
          <CloseToYouGridItem>
            <CloseToYouImg src='/img/place.jpg' alt='Zakopane' />
            <ContentGroup>
              <CloseToYouItemTitle>Zakopane</CloseToYouItemTitle>
              <CloseToYouItemSubTitle>3h jazdy</CloseToYouItemSubTitle>
            </ContentGroup>
          </CloseToYouGridItem>
          <CloseToYouGridItem>
            <CloseToYouImg src='/img/place.jpg' alt='Zakopane' />
            <ContentGroup>
              <CloseToYouItemTitle>Zakopane</CloseToYouItemTitle>
              <CloseToYouItemSubTitle>3h jazdy</CloseToYouItemSubTitle>
            </ContentGroup>
          </CloseToYouGridItem>
          <CloseToYouGridItem>
            <CloseToYouImg src='/img/place.jpg' alt='Zakopane' />
            <ContentGroup>
              <CloseToYouItemTitle>Zakopane</CloseToYouItemTitle>
              <CloseToYouItemSubTitle>3h jazdy</CloseToYouItemSubTitle>
            </ContentGroup>
          </CloseToYouGridItem>
          <CloseToYouGridItem>
            <CloseToYouImg src='/img/place.jpg' alt='Zakopane' />
            <ContentGroup>
              <CloseToYouItemTitle>Zakopane</CloseToYouItemTitle>
              <CloseToYouItemSubTitle>3h jazdy</CloseToYouItemSubTitle>
            </ContentGroup>
          </CloseToYouGridItem>
        </CloseToYouGrid>
      </Section>
    </Layout>
  );
}
