import React, { useState } from 'react';
import { Section, SectionTitle } from '../../styles/components/utils';

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
    <Section>
      <SectionTitle className='mb-12'>Najczęstsze pytania</SectionTitle>
      <div className='mt-4'>
        <div className='mx-auto max-w-6xl'>
          <div className='md:w-2/3'>
            <div className='p-4'>
              <div className='mb-2'>
                <div className='font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer text-black bg-white hover:bg-white'>
                  <div className='px-2 mt-1'>
                    <div>{isFAQOpened[1] ? OpenedSVG : ClosedSVG}</div>
                  </div>
                  <div className='flex-auto' onClick={() => toggleFAQ(1)}>
                    How to install it with windows server ?
                  </div>
                </div>
                <div
                  className={`p-2 text-justify text-gray-800 mb-5 transform transition-transform origin-top ${
                    isFAQOpened[1] ? 'scale-y-0 hidden' : 'scale-y-100'
                  }`}
                  style={{}}
                >
                  Lorem, ipsum dolor sit amet consectetur{' '}
                  <span className='font-bold'>adipisicing elit</span>. Mollitia
                  temporibus doloremque non eligendi unde ipsam? Voluptatibus,
                  suscipit deserunt quidem delectus perferendis velit molestias,
                  veritatis officia fugiat cumque quaerat earum adipisci?
                </div>
              </div>
              <div className='mb-2'>
                <div className='font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer text-black bg-white hover:bg-white'>
                  <div className='px-2 mt-1'>
                    <div style={{}}>{ClosedSVG}</div>
                  </div>
                  <div className='flex-auto'>How to build an app ?</div>
                </div>
                <div
                  className='p-2 text-justify text-gray-800 mb-5 bg-white '
                  style={{}}
                >
                  Lorem, ipsum dolor sit amet consectetur{' '}
                  <span className='font-bold'>adipisicing elit</span>. Mollitia
                  temporibus doloremque non eligendi unde ipsam? Voluptatibus,
                  suscipit deserunt quidem delectus perferendis velit molestias,
                  veritatis officia fugiat cumque quaerat earum adipisci?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FAQSection;
