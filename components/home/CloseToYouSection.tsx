import React from 'react';
import {
  Section,
  SectionTitle,
  TitleLine,
} from '../../styles/components/utils';
import {
  CloseToYouGrid,
  CloseToYouGridItem,
  CloseToYouImg,
  ContentGroup,
  CloseToYouItemTitle,
  CloseToYouItemSubTitle,
} from '../../styles/pages';

const CloseToYouSection = () => {
  return (
    <Section id='closeToYouSection'>
      <SectionTitle>Najlepsze rozwiązania blisko Ciebie</SectionTitle>
      <TitleLine />
      <CloseToYouGrid className='mt-12'>
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
  );
};

export default CloseToYouSection;
