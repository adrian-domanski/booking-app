import Link from 'next/link';
import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import PricingFAQ from '../components/Pricing/PricingFAQ';
import {
  HowDoesItWorkCardIcon,
  HowDoesItWorkCardItem,
  HowDoesItWorkCardParagraph,
  HowDoesItWorkCardSeparatorWide,
  HowDoesItWorkCardTitle,
  HowDoesItWorkGrid,
  HowDoesItWorkSeparatorSmall,
  PageHeader,
  Section,
  SectionTitle,
} from '../styles/components/utils';
import { Button } from '../styles/pages';
import { HeaderTitle, HeaderText } from '../styles/pages/InviteFirends';
import {
  PricingCard,
  PricingDolarIcon,
  PricingHRTop,
  PricingPageStyles,
  PricingCloud,
  PricingContentWrapper,
  PricingTitle,
  PricingCardsGrid,
} from '../styles/pages/Pricing';

const PricingPage = () => {
  const [planType, setPlanType] = useState<'MONTHS' | 'YEARS'>('MONTHS');

  const handlePlanTypeChange = () => {
    if (planType === 'MONTHS') setPlanType('YEARS');
    else setPlanType('MONTHS');
  };

  return (
    <Layout>
      <PricingPageStyles>
        <PageHeader bgUrl='/img/SearchResults/header-bg.jpg'>
          <Section id='g-header'>
            <HeaderTitle>
              Wydobądź więcej ze swojego obiektu
              <br />
              nie zwlekaj!
            </HeaderTitle>
            <HeaderText>
              Nasz serwis oferuje płatne usługi reklamowe, które pomogą Ci
              <br />
              zdobyć większą ilośc klientów
            </HeaderText>
            <Link href='/'>
              <a className='text-white text-base opacity-90 text-center font-bold block mx-auto mt-4'>
                Przeczytaj regulamin
              </a>
            </Link>
          </Section>
        </PageHeader>
        <Section className='md:!pb-0'>
          <Button className='!w-auto !table mx-auto px-8 '>
            Zaloguj się, by ustawić reklamy
          </Button>
          <hr className='mt-14 mb-16' />
          <SectionTitle className='mb-12'>
            Jak działają płatne reklamy<span className='text-themeBlue'>?</span>
          </SectionTitle>

          <HowDoesItWorkGrid>
            <HowDoesItWorkCardItem>
              <HowDoesItWorkCardIcon className='fas fa-sliders-h' />
              <HowDoesItWorkSeparatorSmall />
              <HowDoesItWorkCardTitle>
                Ustaw interesujące Cię filtry sprzedażowe
              </HowDoesItWorkCardTitle>
              <HowDoesItWorkCardParagraph>
                Zasięg reklam zależny jest od filtrów, które ustawisz
              </HowDoesItWorkCardParagraph>
              <HowDoesItWorkCardSeparatorWide />
            </HowDoesItWorkCardItem>
            <HowDoesItWorkCardItem>
              <HowDoesItWorkCardIcon className='fas fa-hand-holding-usd' />
              <HowDoesItWorkSeparatorSmall />
              <HowDoesItWorkCardTitle>
                Ustaw interesujące Cię filtry sprzedażowe
              </HowDoesItWorkCardTitle>
              <HowDoesItWorkCardParagraph>
                Zasięg reklam zależny jest od filtrów, które ustawisz
              </HowDoesItWorkCardParagraph>
              <HowDoesItWorkCardSeparatorWide />
            </HowDoesItWorkCardItem>
            <HowDoesItWorkCardItem>
              <HowDoesItWorkCardIcon className='far fa-grin-beam' />
              <HowDoesItWorkSeparatorSmall />
              <HowDoesItWorkCardTitle>
                Czerp satysfakcję z większego obłożenia obiektów
              </HowDoesItWorkCardTitle>
              <HowDoesItWorkCardParagraph>
                Reklamy Twojego obiektu zaczynają działać po sfinalizowaniu
                płatności.
              </HowDoesItWorkCardParagraph>
              <HowDoesItWorkCardSeparatorWide />
            </HowDoesItWorkCardItem>
          </HowDoesItWorkGrid>
        </Section>
        <Section className='!pb-4'>
          <hr />
        </Section>
        <Section>
          <SectionTitle>Pakiety</SectionTitle>
          <div className='flex mt-12 justify-center'>
            <span
              className={`mr-4 font-bold ${
                planType === 'MONTHS' ? 'text-gray-700' : 'text-gray-300'
              }`}
              onClick={() => setPlanType('MONTHS')}
            >
              Miesięcznie
            </span>
            <div className='relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in'>
              <input
                type='checkbox'
                name='toggle'
                id='toggle'
                checked={planType === 'MONTHS'}
                onChange={handlePlanTypeChange}
                className='toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer'
              />
              <label
                htmlFor='toggle'
                className='toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer'
              />
            </div>
            <span
              className={`mr-4 font-bold ${
                planType === 'YEARS' ? 'text-gray-700' : 'text-gray-300'
              }`}
              onClick={() => setPlanType('YEARS')}
            >
              Rocznie{' '}
              <span className='ml-2'>
                <span className='text-black'>(</span>
                <span className='text-theme'>Oszczędź 10%</span>
                <span className='text-black'>)</span>
              </span>
            </span>
          </div>
        </Section>
        {/* Packages */}
        <div className='relative text-white !mb-32'>
          <div className='absolute bg-blue-100 h-4/6 top-1/2 transform -translate-y-1/2 left-0 w-full z-0'></div>
          <Section>
            <PricingCardsGrid>
              <PricingCard>
                <PricingCloud />
                <PricingHRTop />
                <PricingContentWrapper>
                  <PricingTitle>
                    Pakiet Gościnni
                    <br />
                    MINI
                  </PricingTitle>
                  <PricingDolarIcon />
                </PricingContentWrapper>
                <Button
                  color='light'
                  className='!bg-white hover:!bg-gray-100 !text-themeBlue font-bold text-3xl lg:text-2xl'
                >
                  Więcej
                </Button>
              </PricingCard>
              <PricingCard bigger>
                <PricingCloud />
                <PricingHRTop />
                <PricingContentWrapper>
                  <PricingTitle>
                    Pakiet Gościnni
                    <br />
                    MEDIUM
                  </PricingTitle>
                  <PricingDolarIcon />
                </PricingContentWrapper>
                <Button
                  color='light'
                  className='!bg-white hover:!bg-gray-100 !text-themeBlue font-bold text-3xl lg:text-2xl'
                >
                  Więcej
                </Button>
              </PricingCard>
              <PricingCard>
                <PricingCloud />
                <PricingHRTop />
                <PricingContentWrapper>
                  <PricingTitle>
                    Pakiet Gościnni
                    <br />
                    MAX
                  </PricingTitle>
                  <PricingDolarIcon />
                </PricingContentWrapper>
                <Button
                  color='light'
                  className='!bg-white hover:!bg-gray-100 !text-themeBlue font-bold text-3xl lg:text-2xl'
                >
                  Więcej
                </Button>
              </PricingCard>
            </PricingCardsGrid>
          </Section>
        </div>
        <Section className='!pt-0'>
          <hr />
        </Section>
        <PricingFAQ />
      </PricingPageStyles>
    </Layout>
  );
};

export default PricingPage;
