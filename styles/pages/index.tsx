import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import tw from 'twin.macro';

export const StyledHeader = styled.header`
  background: url('/img/home-header.png');
  background-size: cover;
  background-position: center;
  min-height: 500px;

  .input {
    transition: border 0.2s ease-in-out;
  }

  .input:focus + .label,
  .input:active + .label,
  .input.filled + .label {
    font-size: 0.75rem;
    transition: all 0.2s ease-out;
    top: -0.1rem;
    color: #667eea;
  }

  .selected-date {
    font-size: 0.75rem;
    transition: all 0.2s ease-out;
    top: -0.1rem !important;
    color: #667eea;
  }

  .label {
    transition: all 0.2s ease-out;
    top: 0.6rem;
    left: 50%;
    transform: translateX(-50%);
  }

  .react-datepicker-wrapper {
    width: 100%;
  }
`;

export const FormGroup = styled.div.attrs({
  className: 'mb-4 relative ',
})``;

export const Input = styled.input.attrs({
  className:
    'input text-center border border-gray-300 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600',
})``;

export const StyledDatePicker = styled(DatePicker).attrs({
  className:
    'input w-full text-center border border-gray-300 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600',
})`
  width: 100% !important;
`;

export const Label = styled.label.attrs({
  className:
    'label absolute mb-0 -mt-3 pt-4 leading-tighter text-gray-400 text-base cursor-text',
})``;

export const Button = styled.button.attrs({
  className:
    'bg-theme text-white p-3 w-full rounded transition-colors hover:bg-themeDarker',
})`
  &:hover {
    background-color: #9487cf;
  }
`;

export const CloseToYouGrid = tw.div`grid-cols-3 grid gap-3`;

export const CloseToYouGridItem = styled.div.attrs({
  className: 'justify-center items-center flex flex-col',
})``;

export const CloseToYouImg = styled.img.attrs({
  className: 'rounded-xl h-20 w-20 object-cover',
})``;

export const ContentGroup = styled.div.attrs({
  className: 'flex flex-col text-center',
})``;

export const CloseToYouItemTitle = styled.h3.attrs({
  className: 'font-bold mt-1',
})``;

export const CloseToYouItemSubTitle = tw.h3`opacity-80`;
