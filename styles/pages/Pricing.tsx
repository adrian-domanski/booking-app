import styled from 'styled-components';
import tw from 'twin.macro';

export const PricingPageStyles = styled.div`
  .toggle-checkbox:checked {
    ${tw`right-0 border-themeBlue bg-themeBlue`}
    left: 0;
  }
  .toggle-checkbox {
    ${tw`right-0 border-themeBlue bg-themeBlue`}
    right: 0;
  }

  .toggle-checkbox:checked + .toggle-label {
    ${tw`bg-gray-300`}
  }
`;

export const PricingCardsGrid = tw.div`lg:grid gap-8 grid-cols-3`;

interface IPricingCard {
  bigger?: boolean;
}
export const PricingCard = styled.div.attrs((props: IPricingCard) => ({
  className: `${
    props.bigger ? 'transform xl:scale-125' : ''
  } bg-themeBlue max-w-sm mx-auto mb-8 lg:mb-0 rounded-lg p-4 xl:px-8 relative z-10 flex text-center items-center justify-between flex-col`,
}))<IPricingCard>`
  height: 500px;
`;

export const PricingCloud = styled.i.attrs(() => ({
  className: `fas fa-cloud absolute text-8xl left-0 transform -translate-x-1/4 top-14`,
}))``;

export const PricingHRTop = tw.hr`bg-white border-white border-4 rounded-lg w-11/12`;

export const PricingTitle = tw.h2`mt-14 text-4xl xl:text-3xl font-bold leading-tight`;

export const PricingContentWrapper = tw.div`flex flex-col items-center`;

export const PricingDolarIcon = styled.i.attrs(() => ({
  className: `fas fa-dollar-sign text-5xl mt-6 flex items-center justify-center border-4 rounded-full w-20 h-20`,
}))``;
