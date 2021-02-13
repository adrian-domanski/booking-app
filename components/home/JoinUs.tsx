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
    <Section>
      <SectionTitle>
        Dołącz do tysięcy gospodarzy dzięki Gościnni.pl
      </SectionTitle>
      <TitleLine />
      <Paragraph>
        Nasza społeczność każdego dnia się powiększa, teraz rejestracja obiektu
        przebiega jeszcze szybciej!
      </Paragraph>
      <div className='mt-6 grid gap-4 md:mt-12'>
        <Link href='/'>
          <JoinUsButton>Zostań gospodarzem apartamentu</JoinUsButton>
        </Link>
        <Link href='/'>
          <JoinUsButton bgColor='bg-themeBlue hover:bg-themeBlueDarker'>
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
