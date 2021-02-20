import Link from 'next/link';
import React from 'react';
import FAQSection from '../components/InviteFriends/FAQSection';
import Layout from '../components/Layout/Layout';
import { PageHeader, Section, SectionTitle } from '../styles/components/utils';
import { Button } from '../styles/pages';
import {
  HeaderTitle,
  HeaderText,
  LoginIcon,
  HowDoesItWorkIcon,
  HowDoesItWorkItem,
} from '../styles/pages/InviteFirends';

const InviteFriends = () => {
  return (
    <Layout>
      <PageHeader bgUrl='/img/SearchResults/header-bg.jpg'>
        <Section>
          <HeaderTitle>
            Zaproś znajomych, by dołączyli
            <br />
            do społeczności Gościnni.pl
          </HeaderTitle>
          <HeaderText>
            Znajomi, którzy nie korzystali wcześniej z portalu, otrzymają bonus
            w postaci punktów na Naszym serwisie!
          </HeaderText>
          <Link href='/'>
            <a className='text-white text-base opacity-90 text-center font-bold block mx-auto mt-4'>
              Przeczytaj warunki
            </a>
          </Link>
        </Section>
      </PageHeader>
      <Section className='md:!pb-0'>
        <Button className='!w-auto !table mx-auto px-8 '>
          Zaloguj się, by zaprosić znajomych
        </Button>
        <p className='text-center mt-12 text-gray-700'>
          Nie masz jeszcze konta?{' '}
          <Link href='/'>
            <a className='font-bold'>Zarejestruj się</a>
          </Link>
        </p>
        <p className='text-gray-700 text-center mt-8'>
          lub skorzystaj z szybkiej rejestracji
        </p>
        <div className='flex justify-center mt-2'>
          <LoginIcon className='fab fa-google-plus-g'></LoginIcon>
          <LoginIcon className='fab fa-facebook-f'></LoginIcon>
        </div>
      </Section>
      <Section className='!max-w-4xl mx-auto'>
        <hr className='mb-16' />
        <SectionTitle className='mb-12'>
          Jak działają zaproszenia<span className='text-themeBlue'>?</span>
        </SectionTitle>

        <HowDoesItWorkItem>
          <HowDoesItWorkIcon className='far fa-paper-plane' />
          <div>
            <h2 className='font-bold text-xl mt-4 mb-2'>
              Zaproś znajomych, którzy jeszcze nie korzystają z Gościnni.pl
            </h2>
            <p>
              Zaproś osoby, które jeszcze nie mają konta na Gościnnych, aby
              zarejestrowały się, korzystając z Twojego linku.
            </p>
          </div>
        </HowDoesItWorkItem>
        <HowDoesItWorkItem>
          <HowDoesItWorkIcon className='fas fa-percent' />
          <div>
            <h2 className='font-bold text-xl mt-4 mb-2'>
              Znajomy otrzyma punkty
            </h2>
            <p>
              Znajomi, którzy zarejestrują się na Gościnni.pl z Twojego linka,
              dostaną x punktów, które wpłyną na cenę rezerwacji pierwszego
              pobytu.
            </p>
          </div>
        </HowDoesItWorkItem>
        <HowDoesItWorkItem>
          <HowDoesItWorkIcon className='far fa-bell' />
          <div>
            <h2 className='font-bold text-xl mt-4 mb-2'>
              Przypomnij znajomemu, by zrobili rezerwację
            </h2>
            <p>
              Gdy się zarejestrują, będą mogli wykorzystać swój kupon na
              kwalifikującą się rejestrację.
            </p>
          </div>
        </HowDoesItWorkItem>
        <hr className='mb-0 md:mb-0 mt-16 md:mt-20' />
      </Section>

      <FAQSection />
    </Layout>
  );
};

export default InviteFriends;
