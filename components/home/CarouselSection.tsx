import React from 'react';
import {
  Paragraph,
  Section,
  SectionTitle,
  TitleLine,
} from '../../styles/components/utils';
import { Button, StyledSlider } from '../../styles/pages';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselSection = () => {
  const carouselSettings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    centerPadding: '80px',
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    speed: 500,
  };

  return (
    <Section>
      <SectionTitle>Wybierz interesujący Cię kierunek</SectionTitle>
      <TitleLine />
      <Paragraph>W swojej ofercie posiadamy niezliczone możliwości</Paragraph>
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
        <Button className='mt-6'>Przejdź do wszystkich</Button>
      </Link>
    </Section>
  );
};

export default CarouselSection;
