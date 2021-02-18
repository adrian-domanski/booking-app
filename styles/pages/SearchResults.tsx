import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledHeader = styled.header`
  ${tw`relative`}
  background-image: url('/img/SearchResults/header-bg.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  min-height: 220px;
  padding-top: 80px;
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

export const SimpleInput = tw.input`border w-full rounded p-2 border-gray-300`;

export const Label = tw.label`text-lg mb-2 block mt-4`;

interface ISearchItem {
  className?: string;
}

export const SearchItem = styled.div.attrs(({ className }: ISearchItem) => ({
  className: `${className} bg-white p-4 md:p-8 rounded-md xl:flex`,
}))<ISearchItem>`
  box-shadow: 0 0 10px -2px #c7c7c7;
`;
export const RangeInput = styled.div`
  position: relative;

  input {
    width: 100%;
  }

  .start_value,
  .end_value {
    position: absolute;
    display: block;
    top: -20px;
    color: #adadad;
    font-size: 16px;
  }

  .start_value {
  }

  .end_value {
    right: 35px;
  }

  input[type='range'] {
    -webkit-appearance: none;
  }

  input[type='range']::-webkit-slider-runnable-track {
    width: 300px;
    height: 5px;
    background: #7e7e7e;
    border: none;
    border-radius: 3px;
  }

  input[type='range']::-webkit-slider-thumb {
    ${tw`bg-theme`}
    -webkit-appearance: none;
    border: none;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    margin-top: -9px;
  }

  input[type='range']:focus {
    outline: none;
  }

  input[type='range']:focus::-webkit-slider-runnable-track {
    background: #ccc;
  }
`;

export const Card = tw.div`bg-white shadow-lg p-4 md:p-8 rounded-md`;

export const CheckBoxLabel = tw.label`cursor-pointer flex items-center mt-3`;

export const CheckBoxInput = tw.input`h-5 w-5 text-gray-600`;

export const CheckBoxSpan = tw.span`ml-2 text-gray-700`;
