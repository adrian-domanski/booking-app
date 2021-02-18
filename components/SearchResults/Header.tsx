import React from 'react';
import { Section, Separator } from '../../styles/components/utils';
import { StyledHeader } from '../../styles/pages/SearchResults';
import Breadcrumbs from '../Breadcrumbs';

const Header = () => {
  return (
    <StyledHeader>
      <Section className='!my-0 !py-5 !pt-0'>
        <Separator className='!m-0 md:!mt-2 !border-white ' />
        <Breadcrumbs
          list={['Morze Bałtyckie', 'Mielno', 'Wyniki wyszukiwania']}
        />
      </Section>
    </StyledHeader>
  );
};

export default Header;
