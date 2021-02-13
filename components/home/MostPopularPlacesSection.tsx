import Link from 'next/link';
import React from 'react';
import {
  Badge,
  Paragraph,
  Section,
  SectionTitle,
  TitleLine,
} from '../../styles/components/utils';
import {
  PopularPlacesGrid,
  PopularPlacesGridItem,
  TopRowWrapper,
  BottomRowWrapper,
  Rate,
  BackgroundWrapper,
  Button,
} from '../../styles/pages';

const MostPopularPlacesSection = () => {
  return (
    <>
      <Section className='sm:-mb-16'>
        <SectionTitle>
          Najpopularniejsze miejsca do odwiedzin z ostatnich 7 dni
        </SectionTitle>
        <TitleLine />
        <Paragraph>W swojej ofercie posiadamy niezliczone możliwości</Paragraph>
      </Section>
      <BackgroundWrapper>
        <Section>
          <PopularPlacesGrid>
            <PopularPlacesGridItem imgSrc='/img/landscape.jpg'>
              <TopRowWrapper>
                <Paragraph color='text-white'>Makadamia apartamenty</Paragraph>
                <Badge>Zakopane</Badge>
              </TopRowWrapper>
              <BottomRowWrapper>
                <div>
                  <Paragraph color='text-white'>
                    Ceny zaczynają się od:
                  </Paragraph>
                  <Paragraph
                    color='text-white'
                    weight='font-bold'
                    size='text-2xl'
                    align='text-left'
                  >
                    40 ZŁ
                  </Paragraph>
                </div>
                <Rate>9.7</Rate>
              </BottomRowWrapper>
            </PopularPlacesGridItem>
            <PopularPlacesGridItem imgSrc='/img/landscape.jpg'>
              <TopRowWrapper>
                <Paragraph color='text-white'>Makadamia apartamenty</Paragraph>
                <Badge>Zakopane</Badge>
              </TopRowWrapper>
              <BottomRowWrapper>
                <div>
                  <Paragraph color='text-white'>
                    Ceny zaczynają się od:
                  </Paragraph>
                  <Paragraph
                    color='text-white'
                    weight='font-bold'
                    size='text-2xl'
                    align='text-left'
                  >
                    40 ZŁ
                  </Paragraph>
                </div>
                <Rate>9.7</Rate>
              </BottomRowWrapper>
            </PopularPlacesGridItem>
            <PopularPlacesGridItem imgSrc='/img/landscape.jpg'>
              <TopRowWrapper>
                <Paragraph color='text-white'>Makadamia apartamenty</Paragraph>
                <Badge>Zakopane</Badge>
              </TopRowWrapper>
              <BottomRowWrapper>
                <div>
                  <Paragraph color='text-white'>
                    Ceny zaczynają się od:
                  </Paragraph>
                  <Paragraph
                    color='text-white'
                    weight='font-bold'
                    size='text-2xl'
                    align='text-left'
                  >
                    40 ZŁ
                  </Paragraph>
                </div>
                <Rate>9.7</Rate>
              </BottomRowWrapper>
            </PopularPlacesGridItem>
          </PopularPlacesGrid>
        </Section>
      </BackgroundWrapper>
      <Section className='-mt-6 sm:-mt-16'>
        <Link href='/' passHref>
          <Button>Pokaż więcej</Button>
        </Link>
      </Section>
    </>
  );
};

export default MostPopularPlacesSection;
