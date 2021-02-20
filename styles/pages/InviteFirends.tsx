import styled from 'styled-components';
import tw from 'twin.macro';

export const HeaderTitle = tw.h1`text-2xl lg:text-3xl lg:leading-10 font-bold text-center text-white`;

export const HeaderText = tw.p`text-white text-base opacity-70 text-center mt-5`;

export const LoginIcon = tw.i`text-themeBlue cursor-pointer text-2xl mx-3`;

export const HowDoesItWorkIcon = tw.i`text-themeBlue md:mr-12 text-5xl`;

export const HowDoesItWorkItem = tw.div`flex flex-col md:flex-row items-center justify-center md:justify-start text-center md:text-left mb-8`;

interface IFAQTitle {
  isActive?: boolean;
}

export const FAQTitle = styled.div.attrs((props: IFAQTitle) => ({
  className: `flex-auto ${props.isActive ? 'font-bold' : 'font-normal'}`,
}))<IFAQTitle>``;
