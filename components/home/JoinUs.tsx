import Link from 'next/link';
import React from 'react';
import {
  Paragraph,
  Section,
  SectionTitle,
  TitleLine,
} from '../../styles/components/utils';
import { JoinUsButton } from '../../styles/pages';

const JoinUs = () => {
  return (
    <Section className='lg:mt-36'>
      <SectionTitle className='lg:!ml-0'>
        Dołącz do tysięcy gospodarzy dzięki Gościnni.pl
      </SectionTitle>
      <TitleLine className='lg:!ml-0' />
      <Paragraph className='lg:!text-left lg:mb-24'>
        Nasza społeczność każdego dnia się powiększa, teraz rejestracja obiektu
        przebiega jeszcze szybciej!
      </Paragraph>
      <div className='mt-6 grid gap-4 md:mt-12 lg:grid-cols-3'>
        <Link href='/'>
          <JoinUsButton>Zostań gospodarzem apartamentu</JoinUsButton>
        </Link>
        <Link href='/'>
          <JoinUsButton darker className='lg:!mt-12'>
            Zostań gospodarzem nieruchomości
          </JoinUsButton>
        </Link>
        <Link href='/'>
          <JoinUsButton>Zostań gospodarzem ośrodka wypoczynkowego</JoinUsButton>
        </Link>
      </div>
    </Section>
  );
};

export default JoinUs;
