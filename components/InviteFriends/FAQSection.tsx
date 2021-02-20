import React, { useState } from 'react';
import { Section, SectionTitle } from '../../styles/components/utils';
import { FAQTitle } from '../../styles/pages/InviteFirends';

const OpenedSVG = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='100%'
    height='100%'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeWidth={2}
    strokeLinecap='round'
    strokeLinejoin='round'
    className='feather feather-chevron-down w-5 h-5'
  >
    <polyline points='6 9 12 15 18 9' />
  </svg>
);

const ClosedSVG = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='100%'
    height='100%'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeWidth={2}
    strokeLinecap='round'
    strokeLinejoin='round'
    className='feather feather-chevron-up w-5 h-5'
  >
    <polyline points='18 15 12 9 6 15' />
  </svg>
);

const FAQSection = () => {
  const [isFAQOpened, setIsFAQOpened] = useState({
    1: false,
    2: false,
    3: false,
  });

  const toggleFAQ = (index) => {
    setIsFAQOpened({
      ...isFAQOpened,
      [index]: !isFAQOpened[index],
    });
  };

  return (
    <Section className='md:!pt-0'>
      <SectionTitle className='mb-12'>Najczęstsze pytania</SectionTitle>
      <div className='mt-4'>
        <div className='mx-auto max-w-xl'>
          <div className='p-4'>
            <div className='mb-2'>
              <div
                onClick={() => toggleFAQ(1)}
                className='font-medium rounded-sm text-lg px-2 py-3 flex flex-row-reverse mt-2 cursor-pointer text-black bg-white hover:bg-white'
              >
                <div className='px-2 mt-1'>
                  <div>{isFAQOpened[1] ? ClosedSVG : OpenedSVG}</div>
                </div>
                <FAQTitle isActive={isFAQOpened[1]}>
                  Ile punktów dostanie mój znajomy, kiedy go zaproszę?
                </FAQTitle>
              </div>
              <div
                className={`p-2 text-justify text-gray-800 mb-5 transform transition-transform origin-top ${
                  isFAQOpened[1] ? 'block' : 'hidden'
                }`}
              >
                Lorem, ipsum dolor sit amet consectetur{' '}
                <span className='font-bold'>adipisicing elit</span>. Mollitia
                temporibus doloremque non eligendi unde ipsam? Voluptatibus,
                suscipit deserunt quidem delectus perferendis velit molestias,
                veritatis officia fugiat cumque quaerat earum adipisci?
              </div>
              <hr />
            </div>
            <div className='mb-2'>
              <div
                onClick={() => toggleFAQ(2)}
                className='font-medium rounded-sm text-lg px-2 py-3 flex flex-row-reverse mt-2 cursor-pointer text-black bg-white hover:bg-white'
              >
                <div className='px-2 mt-1'>
                  <div>{isFAQOpened[2] ? ClosedSVG : OpenedSVG}</div>
                </div>
                <FAQTitle isActive={isFAQOpened[2]}>
                  Mój znajomy nie dostał jeszcze punktów na konto.
                </FAQTitle>
              </div>
              <div
                className={`p-2 text-justify text-gray-800 mb-5 transform transition-transform origin-top ${
                  isFAQOpened[2] ? 'block' : 'hidden'
                }`}
              >
                Lorem, ipsum dolor sit amet consectetur{' '}
                <span className='font-bold'>adipisicing elit</span>. Mollitia
                temporibus doloremque non eligendi unde ipsam? Voluptatibus,
                suscipit deserunt quidem delectus perferendis velit molestias,
                veritatis officia fugiat cumque quaerat earum adipisci?
              </div>
              <hr />
            </div>
            <div className='mb-2'>
              <div
                onClick={() => toggleFAQ(3)}
                className='font-medium rounded-sm text-lg px-2 py-3 flex flex-row-reverse mt-2 cursor-pointer text-black bg-white hover:bg-white'
              >
                <div className='px-2 mt-1'>
                  <div>{isFAQOpened[3] ? ClosedSVG : OpenedSVG}</div>
                </div>
                <FAQTitle isActive={isFAQOpened[3]}>
                  Zaprosiłem znajomego, lecz go wciąż nie orzymał
                </FAQTitle>
              </div>
              <div
                className={`p-2 text-justify text-gray-800 mb-5 transform transition-transform origin-top ${
                  isFAQOpened[3] ? 'block' : 'hidden'
                }`}
              >
                Lorem, ipsum dolor sit amet consectetur{' '}
                <span className='font-bold'>adipisicing elit</span>. Mollitia
                temporibus doloremque non eligendi unde ipsam? Voluptatibus,
                suscipit deserunt quidem delectus perferendis velit molestias,
                veritatis officia fugiat cumque quaerat earum adipisci?
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FAQSection;
