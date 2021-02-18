import Link from 'next/link';
import React from 'react';
import { Section } from '../../styles/components/utils';
import { Button } from '../../styles/pages';
import {
  AccessoriesList,
  AccessoriesListItem,
  AccessoriesIcon,
  AccessoriesName,
  AddonsIcon,
  AddonsItem,
  AddonsName,
  AddonsList,
} from '../../styles/pages/FacilityDetails';
import Gallery from './ImageGallery';
import SendQuestionForm from './SendQuestionForm';

const FacilityContent = () => {
  return (
    <Section className='md:!p-0 !px-2 md:col-start-1 md:col-span-8 xl:!pl-7'>
      <div className='grid gap-y-4'>
        <Gallery />
        <AccessoriesList>
          <AccessoriesListItem>
            <AccessoriesIcon className='fas fa-home' />
            <AccessoriesName>Apartamenty</AccessoriesName>
          </AccessoriesListItem>
          <AccessoriesListItem>
            <AccessoriesIcon className='fas fa-utensils' />
            <AccessoriesName>Kuchnia</AccessoriesName>
          </AccessoriesListItem>
          <AccessoriesListItem>
            <AccessoriesIcon className='fas fa-wifi' />
            <AccessoriesName>Darmowe WiFi</AccessoriesName>
          </AccessoriesListItem>
          <AccessoriesListItem>
            <AccessoriesIcon className='fas fa-bath' />
            <AccessoriesName>Lazienka</AccessoriesName>
          </AccessoriesListItem>
        </AccessoriesList>
      </div>
      <div className='grid gap-y-4 p-4 lg:p-6 bg-gray-100 rounded mt-12'>
        <p>2020 WICIE. Noclegi. Apartamenty nad Morzem. Wczasy. Wakacje.</p>
        <p>OFERTY SPECJALNE !</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
          dignissimos asperiores tempore suscipit odit ea, illum voluptatibus
          neque unde rem.
        </p>
        <p>
          Reiciendis beatae, similique aspernatur eos. Suscipit dolor veritatis
          ratione repudiandae sunt, impedit, numquam vitae distinctio
          perferendis placeat, saepe doloribus quas voluptate nam magni unde.
          Provident veritatis voluptates omnis eveniet quae, tempore corporis
          expedita inventore facilis!
        </p>
        <p>
          Hic saepe eos similique eius quas magni, atque perferendis
          consequuntur quis repudiandae dolore tempora cumque molestias iste
          libero! Eaque necessitatibus iure saepe esse maiores quibusdam
          perferendis sunt, dolores quisquam nemo aspernatur voluptatum!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
          distinctio at deserunt nobis voluptate fugiat.
        </p>
        <Link href='/'>
          <Button
            as='a'
            color='blue'
            className='!px-2 !w-auto lg:!table lg:!ml-auto lg:!px-8 lg:!py-1'
          >
            <b>Regulamin</b> obiektu
          </Button>
        </Link>
      </div>
      <AddonsList>
        <AddonsItem>
          <AddonsIcon className='fa fa-wifi' />
          <AddonsName>Darmowe WiFi</AddonsName>
        </AddonsItem>
        <AddonsItem>
          <AddonsIcon className='fa fa-utensils' />
          <AddonsName>Kuchnia w obiekcie</AddonsName>
        </AddonsItem>
        <AddonsItem>
          <AddonsIcon className='fa fa-parking' />
          <AddonsName>Parking na terenie obiektu</AddonsName>
        </AddonsItem>
        <AddonsItem>
          <AddonsIcon className='fa fa-futbol' />
          <AddonsName>Plac zabaw</AddonsName>
        </AddonsItem>
        <AddonsItem>
          <AddonsIcon className='fa fa-swimming-pool' />
          <AddonsName>Basen</AddonsName>
        </AddonsItem>
        <AddonsItem>
          <AddonsIcon className='fa fa-dog' />
          <AddonsName>Akceptujemy zwierzęta</AddonsName>
        </AddonsItem>
        <AddonsItem>
          <AddonsIcon className='fa fa-fire-alt' />
          <AddonsName>Miejsce na grilla</AddonsName>
        </AddonsItem>
        <AddonsItem>
          <AddonsIcon className='fa fa-shield-alt' />
          <AddonsName>Obiekt monitorowany</AddonsName>
        </AddonsItem>
        <AddonsItem>
          <AddonsIcon className='fa fa-volleyball-ball' />
          <AddonsName>Boisko sportowe</AddonsName>
        </AddonsItem>
      </AddonsList>
      <SendQuestionForm />
    </Section>
  );
};

export default FacilityContent;
