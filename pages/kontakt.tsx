import Link from 'next/link';
import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import { PageHeader, Section, SectionTitle } from '../styles/components/utils';
import { Button } from '../styles/pages';
import { Input, Label, TextArea } from '../styles/pages/Contact';
import { HeaderTitle, HeaderText } from '../styles/pages/InviteFirends';

const ContactPage = () => {
  const [notRobot, setNotRobot] = useState(false);

  const [name, setName] = useState('Andrzej Andrzejewski');
  const [email, setEmail] = useState('andrzej@andrzejewski.pl');
  const [message, setMessage] = useState('');

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'message':
        return setMessage(value);
      default:
        break;
    }
  };

  const handleChackboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNotRobot(e.target.checked);
  };

  return (
    <Layout>
      <PageHeader bgUrl='/img/SearchResults/header-bg.jpg'>
        <Section id='g-header'>
          <HeaderTitle>
            Skkontaktuj się z Nami,
            <br />
            aby usyskać więcej informacji
          </HeaderTitle>
          <HeaderText>
            W dobie wciąż pojawiających się nowych pytań względem rezerwacji,
            <br />
            udzielimy Ci konkretnych odpowiedzi.
          </HeaderText>
          <Link href='/'>
            <a className='text-white text-base opacity-90 text-center font-bold block mx-auto mt-4'>
              Przeczytaj regulamin
            </a>
          </Link>
        </Section>
      </PageHeader>
      <Section>
        <SectionTitle underline className='lg:!ml-0'>
          Porozmawiajmy
        </SectionTitle>
        <div className='mt-16 lg:grid grid-cols-2 gap-8'>
          <div>
            <div className='flex'>
              <i className='fas fa-headphones-alt text-themeBlue text-3xl mr-4' />
              <div>
                <h3 className='font-bold mb-3'>Live CHAT</h3>
                <p>Wejdź na czat ONLINE i poproś operatora o wsparcie.</p>
              </div>
            </div>
            <div className='flex mt-8'>
              <i className='fab fa-telegram-plane text-themeBlue text-3xl mr-4' />
              <div>
                <h3 className='font-bold mb-3'>Napisz do Nas maila</h3>
                <p>
                  Jeśli operator nie pomógł Ci z zapytaniem, odezwij się do nas
                  mailowo!
                </p>
              </div>
            </div>
          </div>
          <div className='mt-12 lg:mt-0'>
            <img src='/img/landscape.jpg' alt='' />
          </div>
        </div>
      </Section>
      <Section className=''>
        <hr className='mb-12 lg:mb-24' />
        <SectionTitle underline className='lg:ml-0'>
          Formularz kontaktowy
        </SectionTitle>
        <form className='mt-12 lg:mt-20 w-full lg:grid grid-cols-2 gap-8'>
          <div>
            <Label>
              Imię
              <Input
                type='text'
                name='name'
                value={name}
                onChange={handleChange}
              />
            </Label>
            <Label className='mt-8 block'>
              Email
              <Input
                type='Email'
                name='email'
                value={email}
                onChange={handleChange}
              />
            </Label>
            <label className='hidden lg:flex cursor-pointer justify-start items-start mt-8'>
              <div className='bg-white border-2 rounded-lg border-themeBlue w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500'>
                <input
                  type='checkbox'
                  checked={notRobot}
                  onChange={handleChackboxChange}
                  className='opacity-0 absolute cursor-pointer'
                />
                <svg
                  className={`fill-current ${
                    notRobot ? 'block' : 'hidden'
                  } w-4 h-4 text-themeBlue pointer-events-none`}
                  viewBox='0 0 20 20'
                >
                  <path d='M0 11l2-2 5 5L18 3l2 2L7 18z' />
                </svg>
              </div>
              <div className='select-none'>Nie jestem robotem</div>
            </label>
          </div>
          <div className='lg:border-l lg:pl-8'>
            <Label className='mt-8 block'>
              Treść wiadomości
              <TextArea
                placeholder='Napisz wiadomość tutaj...'
                className='lg:!border-0'
                value={message}
                name='message'
                onChange={handleChange}
              />
            </Label>
            <label className='flex lg:hidden cursor-pointer justify-start items-start mt-8'>
              <div className='bg-white border-2 rounded-lg border-themeBlue w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500'>
                <input
                  type='checkbox'
                  checked={notRobot}
                  onChange={handleChackboxChange}
                  className='opacity-0 absolute cursor-pointer'
                />
                <svg
                  className={`fill-current ${
                    notRobot ? 'block' : 'hidden'
                  } w-4 h-4 text-themeBlue pointer-events-none`}
                  viewBox='0 0 20 20'
                >
                  <path d='M0 11l2-2 5 5L18 3l2 2L7 18z' />
                </svg>
              </div>
              <div className='select-none'>Nie jestem robotem</div>
            </label>
            <Button color='blue' className='mt-8'>
              Wyślij wiadomość
            </Button>
          </div>
        </form>
      </Section>
    </Layout>
  );
};

export default ContactPage;
