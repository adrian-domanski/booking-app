import tw from 'twin.macro';
import styled from 'styled-components';

export const SectionTitle = tw.h1`text-3xl lg:text-4xl font-bold text-center opacity-90`;

export const Section = tw.section`px-4 py-8 sm:px-16 sm:py-16 max-w-7xl mx-auto`;

export const TitleLine = tw.hr`border-theme border mt-5 mb-6 md:mt-8 md:mb-8 rounded-3xl bg-themeDarker mx-auto w-64`;

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

export const Badge = tw.div`text-black bg-white h-7 rounded-lg font-bold px-2 flex items-center`;
