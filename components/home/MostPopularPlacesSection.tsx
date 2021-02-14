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
          Najpopularniejsze miejsca do
          <br />
          odwiedzin z ostatnich 7 dni
        </SectionTitle>
        <TitleLine />
        <Paragraph>
          W swojej ofercie posiadamy
          <br /> niezliczone możliwości
        </Paragraph>
      </Section>
      <BackgroundWrapper>
        <Section>
          <PopularPlacesGrid>
            <PopularPlacesGridItem
              className='lg:row-start-1 lg:col-span-4'
              imgSrc='/img/landscape.jpg'
            >
              <TopRowWrapper>
                <Paragraph color='text-white lg:!text-left lg:!text-xl'>
                  Makadamia apartamenty
                </Paragraph>
                <Badge>Zakopane</Badge>
              </TopRowWrapper>
              <BottomRowWrapper>
                <div>
                  <Paragraph color='text-white lg:!text-xl'>
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
            <PopularPlacesGridItem
              className='lg:row-start-2 lg:col-span-4'
              imgSrc='/img/landscape.jpg'
            >
              <TopRowWrapper>
                <Paragraph color='text-white lg:!text-left lg:!text-xl'>
                  Makadamia apartamenty
                </Paragraph>
                <Badge>Zakopane</Badge>
              </TopRowWrapper>
              <BottomRowWrapper>
                <div>
                  <Paragraph color='text-white lg:!text-xl'>
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
            <PopularPlacesGridItem
              className='lg:col-start-5 lg:col-span-8 lg:row-span-full'
              imgSrc='/img/landscape.jpg'
            >
              <TopRowWrapper>
                <Paragraph color='text-white lg:!text-left'>
                  Makadamia apartamenty
                </Paragraph>
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
                <Rate className='lg:w-16 lg:h-16 lg:text-2xl'>9.7</Rate>
              </BottomRowWrapper>
            </PopularPlacesGridItem>
          </PopularPlacesGrid>
        </Section>
      </BackgroundWrapper>
      <Section className='-mt-6 sm:-mt-16'>
        <Link href='/' passHref>
          <Button className='lg:!block lg:!w-60 lg:!px-16 lg:!ml-auto'>
            Pokaż więcej
          </Button>
        </Link>
      </Section>
    </>
  );
};

export default MostPopularPlacesSection;
