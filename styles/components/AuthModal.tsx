import styled from '@emotion/styled';
import tw from 'twin.macro';

export const ModalInput = tw.input`rounded-md active:shadow-theme shadow-lg transition-all focus:border-theme border-transparent border focus:shadow-theme w-full p-3 pl-12`;

export const ModalFormGroup = tw.div`relative mb-4`;

export const ModalTitle = tw.h1`mb-8 text-xl pr-10`;

export const ModalInputIcon = tw.i`absolute left-4 opacity-20 top-1/2 transform -translate-y-1/2`;

export const LoginModalContent = styled.div`
  @media screen and (min-width: 1024px) {
    background-image: url('/img/logowanie-bg.png');
    background-size: cover;
  }
`;
