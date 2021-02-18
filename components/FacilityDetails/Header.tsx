import React from 'react';
import { Section, Separator } from '../../styles/components/utils';
import { StyledHeader } from '../../styles/pages/FacilityDetails';
import Breadcrumbs from '../Breadcrumbs';

interface IHeader {
  title: string;
  address: string;
  distanceFromCityCenter: number;
}

const Header: React.FC<IHeader> = ({
  title,
  address,
  distanceFromCityCenter,
}) => {
  return (
    <StyledHeader>
      <Section className='!my-0 !py-5 !pt-0'>
        <Separator className='!m-0 md:!mt-2 !border-white ' />
        <Breadcrumbs
          list={['Morze Bałtyckie', 'Zachodniopomorskie', 'Late Night Resort']}
        />
        <h1 className='text-3xl text-white mt-4'>{title}</h1>
        <div className='text-gray-200 mt-2 md:flex items-center'>
          <i className='fas fa-map-marker-alt mr-2'></i> {address}{' '}
          <hr className='w-24 mx-4 hidden md:block' />
          <br className='md:hidden' />
          <span>
            Tylko <b>{distanceFromCityCenter}km</b> od centrum
          </span>
        </div>
      </Section>
    </StyledHeader>
  );
};

export default Header;
