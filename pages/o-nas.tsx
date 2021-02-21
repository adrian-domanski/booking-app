import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout/Layout';
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
import {
  AboutUsGrid,
  AboutUsGridIcon,
  AboutUsGridItem,
  AboutUsGridItemText,
  WhyUsListIcon,
} from '../styles/pages/AboutUs';
import { HeaderTitle, HeaderText } from '../styles/pages/InviteFirends';

const AboutUsPage = () => {
  return (
    <Layout>
      <PageHeader bgUrl='/img/SearchResults/header-bg.jpg'>
        <Section id='g-header'>
          <HeaderTitle>
            Wysoka jakośc usług,
            <br />
            poznaj Gościnni.pl
          </HeaderTitle>
          <HeaderText>
            Naszą największą siłą są ludzie, którzy specjalizują się w wdrażaniu
            <br />
            nowych rozwiązań, tak aby Gościnni.pl było jak najlepszym portalem.
          </HeaderText>
        </Section>
      </PageHeader>
      <Section className='md:!pb-0'>
        <Button className='!w-auto !table mx-auto px-8 '>
          Skontaktuj się z Nami
        </Button>
        <hr className='mt-14 mb-16' />
        <SectionTitle className='mb-12'>O nas</SectionTitle>

        <HowDoesItWorkGrid>
          <HowDoesItWorkCardItem>
            <HowDoesItWorkCardIcon className='fas fa-user-tie' />
            <HowDoesItWorkSeparatorSmall />
            <HowDoesItWorkCardTitle>
              Certyfikowani specjaliści
            </HowDoesItWorkCardTitle>
            <HowDoesItWorkCardParagraph>
              Specjalnie dla Was, zatrudniamy tylko najlepszych
            </HowDoesItWorkCardParagraph>
            <HowDoesItWorkCardSeparatorWide />
          </HowDoesItWorkCardItem>
          <HowDoesItWorkCardItem>
            <HowDoesItWorkCardIcon className='far fa-check-circle' />
            <HowDoesItWorkSeparatorSmall />
            <HowDoesItWorkCardTitle>
              Gwarancja jakości usług
            </HowDoesItWorkCardTitle>
            <HowDoesItWorkCardParagraph>
              Oferujemy usługi na najwyższym poziomie, jakość to Nasze drugie
              imię.
            </HowDoesItWorkCardParagraph>
            <HowDoesItWorkCardSeparatorWide />
          </HowDoesItWorkCardItem>
          <HowDoesItWorkCardItem>
            <HowDoesItWorkCardIcon className='far fa-handshake' />
            <HowDoesItWorkSeparatorSmall />
            <HowDoesItWorkCardTitle>
              Pomocny team, do Twoich usług
            </HowDoesItWorkCardTitle>
            <HowDoesItWorkCardParagraph>
              Staramy się wychodzić naprzeciw problemom, które spotykają naszych
              klientów.
            </HowDoesItWorkCardParagraph>
            <HowDoesItWorkCardSeparatorWide />
          </HowDoesItWorkCardItem>
        </HowDoesItWorkGrid>
      </Section>
      <Section className='!pb-4'>
        <hr />
      </Section>
      <Section className='!pb-0'>
        <SectionTitle>Dlaczego My?</SectionTitle>
      </Section>
      <div className='relative text-black text-center mt-8'>
        <div className='absolute bg-blue-50 h-full md:h-4/6 top-1/2 transform -translate-y-1/2 left-0 w-full z-0'></div>
        <Section className='grid md:grid-cols-2 relative z-10'>
          <img src='/img/place.jpg' alt='' className='h-96 mx-auto mb-4' />
          <div className='flex flex-col items-center justify-center py-16'>
            <p>
              Doradzamy w wyborze najlepszych rozwiązań, Do tej pory
              zapracowaliśmy na zaufanie setek klientów, a ich liczba ciągle
              rośnie.
            </p>
            <Link href='/'>
              <a className='font-bold mt-4 block'>
                Zobacz, dlaczego wybrali właśnie Gościnni.pl
              </a>
            </Link>
            <hr className='my-10 w-full' />
            <ul className='grid gap-y-4 md:text-left'>
              <li>
                <WhyUsListIcon className='fas fa-check' />
                <b>Twoja satysfakcja jest najważniejsza</b>
              </li>
              <li>
                <WhyUsListIcon className='fas fa-check' />
                <b>Stawiamy na wiedzę i pasję</b>
              </li>
              <li>
                <WhyUsListIcon className='fas fa-check' />
                <b>Oferujuemy szeroki wybór i najlepsze ceny</b>
              </li>
            </ul>
          </div>
        </Section>
      </div>

      <Section className='!pt-0 text-center'>
        <hr className='my-12' />
        <SectionTitle className='mb-16'>O grupie Gościnni.pl</SectionTitle>
        <p className='mb-12'>
          Kiedy rozpoczynaliśmy naszą działalność, nie mieliśmy pojęcia, jaki
          drzemie w niej potencjał. Zawsze jednak mierzyliśmy wysoko, stawiając
          na nieustanny rozwój.
        </p>
        <AboutUsGrid>
          <AboutUsGridItem>
            <AboutUsGridItemText>Pozytywne opinie</AboutUsGridItemText>
            <AboutUsGridIcon className='far fa-smile-beam' />
          </AboutUsGridItem>
          <AboutUsGridItem>
            <AboutUsGridItemText>Ekspresowa pomoc</AboutUsGridItemText>
            <AboutUsGridIcon className='far fa-life-ring' />
          </AboutUsGridItem>
          <AboutUsGridItem>
            <AboutUsGridItemText>Profesjonalni doradcy</AboutUsGridItemText>
            <AboutUsGridIcon className='fas fa-user-tie' />
          </AboutUsGridItem>
          <AboutUsGridItem>
            <AboutUsGridItemText>Intuicyjny portal</AboutUsGridItemText>
            <AboutUsGridIcon className='fas fa-pager' />
          </AboutUsGridItem>
        </AboutUsGrid>
      </Section>
      <Section>
        <h3 className='font-bold text-lg mb-4'>Dane firmy</h3>
        <p>Gościnni sp. z o.o.</p>
        <p>ul. Gościnna 1</p>
        <p>00-000 Gościnowo</p>
        <p>NIP: 00000000000, REGON: 00000000</p>
        <p>KRS 00000000000, Sąd Rejonowy w Gościnowie</p>
        <p>X Wydział Gospodarczy Krajowego Rejestru Sądowego</p>
        <br />
        <p>Konto bankowe:</p>
        <p>00 0000 0000 0000 0000 0000</p>
        <p>Gościnni BANK ŚLĄSKI S.A. O.Gościnowo</p>
      </Section>
    </Layout>
  );
};

export default AboutUsPage;
