import styled from 'styled-components';
import tw from 'twin.macro';

export const SectionTitle = styled.h1.attrs({
  className: 'text-3xl font-bold text-center',
})``;

export const Section = tw.section`mx-4 my-8`;

export const Separator = styled.hr.attrs({
  className: 'border-theme border-2 mt-5 mb-6 rounded-3xl',
})``;
