import React from 'react';
import {
  Paragraph,
  Section,
  SectionTitle,
  TitleLine,
} from '../../styles/components/utils';
import { Button, SliderWrapper, StyledSlider } from '../../styles/pages';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselSection = () => {
  const carouselSettings = {
    className: 'center',
    slidesToShow: 4,
    infinite: true,
    slidesToScroll: 1,
    centerPadding: '80px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    speed: 500,
  };

  return (
    <div className='overflow-hidden'>
      <Section className=' lg:!relative lg:mb-48'>
        <div className='lg:flex'>
          <div className='lg:w-72'>
            <SectionTitle className='lg:!text-left'>
              Wybierz interesujący Cię kierunek
            </SectionTitle>
            <TitleLine className='lg:!ml-0' />
            <Paragraph className='lg:!text-left'>
              W swojej ofercie posiadamy niezliczone możliwości
            </Paragraph>
            <Link href='/' passHref>
              <Button className='mt-6 !hidden lg:!block'>
                Przejdź do wszystkich
              </Button>
            </Link>
          </div>
          <SliderWrapper className='lg:absolute'>
            <StyledSlider {...carouselSettings}>
              <div>
                <img src='/img/place.jpg' alt='lorem' />
              </div>
              <div>
                <img src='/img/place.jpg' alt='lorem' />
              </div>
              <div>
                <img src='/img/place.jpg' alt='lorem' />
              </div>
              <div>
                <img src='/img/place.jpg' alt='lorem' />
              </div>
              <div>
                <img src='/img/place.jpg' alt='lorem' />
              </div>
              <div>
                <img src='/img/place.jpg' alt='lorem' />
              </div>
              <div>
                <img src='/img/place.jpg' alt='lorem' />
              </div>
            </StyledSlider>
            <Link href='/' passHref>
              <Button className='mt-6 lg:!hidden'>Przejdź do wszystkich</Button>
            </Link>
          </SliderWrapper>
        </div>
      </Section>
    </div>
  );
};

export default CarouselSection;
