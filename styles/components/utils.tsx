import tw from 'twin.macro';
import styled from 'styled-components';

interface ISectionTitle {
  underline?: boolean;
  className?: string;
}

export const SectionTitle = styled.h1.attrs<ISectionTitle>({
  className:
    'text-3xl lg:text-4xl font-bold table mx-auto text-center opacity-90 g-sectionTitle',
})<ISectionTitle>`
  position: relative;

  &:after {
    display: ${({ underline }) => (underline ? 'block' : 'none')};
    ${tw`bg-themeBlue`}
    content: '';
    left: 0;
    bottom: -12px;
    position: absolute;
    height: 4px;
    width: 100%;
  }
`;

export const Section = tw.section`px-4 py-8 sm:px-16 sm:py-16 max-w-7xl mx-auto`;

export const TitleLine = styled.hr.attrs<{ className?: string }>({
  className:
    'g-titleLine border-theme border mt-5 mb-6 md:mt-8 md:mb-8 rounded-3xl bg-themeDarker mx-auto w-64',
})``;

export const Separator = tw.hr`border-theme border my-8 rounded-3xl bg-themeDarker opacity-10 mx-auto max-w-6xl`;

interface IParagraph {
  align?: string;
  color?: string;
  size?: string;
  weight?: string;
}

export const Paragraph = styled.p.attrs(
  ({
    color = 'text-gray-500',
    align = 'text-center',
    size = 'text-xl lg:text-2xl',
    weight = `font-normal`,
  }: IParagraph) => ({
    className: `${size} ${align} ${color} ${weight}`,
  })
)<IParagraph>``;

export const Badge = tw.div`text-black bg-white h-7 rounded-lg font-bold px-2 flex justify-center items-center`;

interface IPageHeader {
  bgUrl: string;
}

export const PageHeader = styled.header<IPageHeader>`
  ${tw`relative flex items-center flex-col justify-center`}
  background-image: url(${({ bgUrl }) => bgUrl});
  background-size: cover;
  background-position: center;
  position: relative;
  height: 450px;
  padding-top: 2rem;
  z-index: 1;

  :after {
    ${tw`bg-themeBlue`}
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    opacity: 0.9;
    width: 100%;
    height: 100%;
  }
`;

export const HowDoesItWorkGrid = tw.div`lg:grid grid-cols-3 gap-4 lg:gap-8`;

export const HowDoesItWorkCardItem = tw.div`mb-12 max-w-lg mx-auto flex shadow-lg rounded-lg p-8 flex-col items-center text-center justify-center`;

export const HowDoesItWorkCardIcon = tw.i`text-themeBlue text-6xl`;

export const HowDoesItWorkSeparatorSmall = tw.hr`bg-themeBlue border-themeBlue border-2 rounded w-10 my-8`;

export const HowDoesItWorkCardTitle = tw.h3`font-bold mb-4`;

export const HowDoesItWorkCardParagraph = tw.p``;

export const HowDoesItWorkCardSeparatorWide = tw.hr`bg-themeBlue border-themeBlue opacity-30 rounded w-full mt-12`;
