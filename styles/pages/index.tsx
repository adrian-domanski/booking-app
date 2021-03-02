import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import Slider from 'react-slick';
import tw from 'twin.macro';

export const StyledHeader = styled.header`
  background: url('/img/home-header.jpg') no-repeat;
  background-size: cover;
  background-position: bottom;
  min-height: 500px;

  @media screen and (min-width: 1024px) {
    height: 900px;
  }

  .input {
    transition: border 0.2s ease-in-out;
  }

  .input:focus + .label,
  .input:active + .label,
  .input.filled + .label,
  .not-selected-date {
    transition: all 0.2s ease-out;
    top: -0.6rem !important;
    color: #aaaaaa;
    font-size: 16px;

    @media screen and (max-width: 1023px) {
      top: -0.1rem !important;
    }
  }

  .selected-date {
    transition: all 0.2s ease-out;
    top: -0.6rem !important;
    color: #aaaaaa;
    font-size: 16px !important;

    @media screen and (max-width: 1023px) {
      top: -0.1rem !important;
    }
  }

  .label {
    transition: all 0.2s ease-out;
    top: 0.6rem;
    left: 0.8rem;
    font-size: 1.1rem;

    @media screen and (max-width: 1023px) {
      width: 200px;
      text-align: center;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .react-datepicker-wrapper {
    width: 100%;
  }
`;

export const FormGroup = tw.div`mb-4 relative lg:mb-0 lg:w-40 lg:mt-2`;

export const FormGroupImg = tw.img`absolute -left-7 top-2 hidden lg:block`;

interface IInput {
  className?: string;
}

export const Input = styled.input.attrs<IInput>({
  className:
    'input relative z-index-10 flex text-center lg:text-left lg:font-bold lg:text-2xl border border-gray-300 lg:border-0 appearance-none rounded w-full px-3 py-3 pt-5 lg:pt-3 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600',
})<IInput>``;

export const StyledDatePicker = styled(DatePicker).attrs({
  className:
    'input flex text-center lg:text-left lg:font-bold lg:text-2xl border border-gray-300 lg:border-0 appearance-none rounded w-full px-3 py-3 pt-5 lg:pt-3 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600',
})`
  width: 100% !important;
`;

interface LabelProps {
  className?: string;
}

export const Label = styled.label.attrs<LabelProps>(({ className }) => ({
  className: `${
    className ? className : ''
  } label absolute mb-0 -mt-3 pt-4 leading-tighter text-gray-400 lg:text-sm cursor-text`,
}))``;

interface IButton {
  as?: string;
  color?: 'success' | 'blue' | 'light';
}

export const Button = styled.button.attrs((props: IButton) => ({
  as: props.as ? props.as : 'a',
  className: `${
    props.color === 'success'
      ? 'bg-themeGreen hover:bg-themeGreenDarker'
      : props.color === 'blue'
      ? 'bg-themeBlue hover:bg-themeBlueDarker'
      : props.color === 'light'
      ? 'bg-gray-100 hover:bg-gray-200 !text-black'
      : 'bg-theme hover:bg-themeDarker'
  } text-white p-3 w-full cursor-pointer block text-center rounded transition-colors`,
}))<IButton>``;

export const CloseToYouGrid = tw.div`grid-cols-3 grid gap-3 md:gap-5`;

export const CloseToYouGridItem = tw.div`cursor-pointer justify-center items-center flex flex-col md:flex-row`;

export const CloseToYouImg = tw.img`rounded-xl lg:mr-4 h-20 w-20 md:h-14 md:w-14 md:mr-3 lg:w-20 lg:h-20 object-cover sm:h-40 sm:w-40`;

export const ContentGroup = styled.div.attrs({
  className: 'flex flex-col text-center',
})``;

export const CloseToYouItemTitle = styled.h3.attrs({
  className: 'font-bold mt-1 lg:text-xl',
})``;

export const CloseToYouItemSubTitle = tw.h3`opacity-80 md:text-left lg:text-lg`;

export const SliderWrapper = styled.div`
  @media screen and (min-width: 1024px) {
    width: 1200px;
    left: 40%;
    top: 0%;

    &:before {
      ${tw`bg-theme`}
      content: "";
      top: 50%;
      left: 20px;
      transform: translateY(-50%);
      position: absolute;
      width: 100%;
      height: 70px;
    }
  }
`;

export const StyledSlider = styled(Slider)`
  ${tw`mt-10 mb-12`}

  .slick-current + .slick-slide {
    transform: scale(1.1);
    transition: transform 0.15s ease-in-out;
  }

  .slick-slide {
    padding: 15px;
  }

  .slick-prev:before {
    content: '\f053';
    font-family: 'Font Awesome 5 Free';
    font-weight: 700;
  }

  .slick-next:before {
    content: '\f054';
    font-family: 'Font Awesome 5 Free';
    font-weight: 700;
  }

  .slick-next {
    @media screen and (min-width: 1024px) {
      display: none !important;
    }
  }

  .slick-arrow {
    &:hover:before {
      background-color: #f8f8f8 !important;
    }

    :before {
      ${tw`text-theme shadow-lg`}
      background-color: #fff;
      width: 50px;
      height: 50px;
      display: flex;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      font-size: 1.9rem;
      transition: background-color 0.15s ease-in-out;

      @media screen and (min-width: 1024px) {
        opacity: 1 !important;
        width: 70px;
        font-size: 2.2rem;
        height: 70px;
      }
    }
  }

  .slick-arrow.slick-prev {
    left: 5px;
    z-index: 10;
    position: absolute;
    top: 50%;
    transform: translateY(-75%);

    @media screen and (min-width: 1024px) {
      left: -10px;
      transform: translateY(-175%);
    }
  }

  .slick-arrow.slick-next {
    right: 35px;
    z-index: 10;
    position: absolute;
    top: 50%;
    transform: translateY(-75%);
  }

  img {
    display: block;
    object-fit: cover;
    border-radius: 10px;
  }
`;

// Most Popular places section
export const PopularPlacesGrid = tw.div`grid gap-5 lg:grid-rows-2 lg:grid-cols-12 lg:h-96`;

export const PopularPlacesGridItem = styled.div<{ imgSrc: string }>`
  cursor: pointer;
  position: relative;
  background-image: url(${(props) => props.imgSrc});
  background-size: cover;
  background-position: center;
  border-radius: 10px;

  @media screen and (max-width: 1023px) {
    height: 275px;
  }

  :before {
    content: '';
    position: absolute;
    background: black;
    opacity: 0.15;
    width: 100%;
    height: 100%;
  }
`;

export const TopRowWrapper = tw.div`p-4 flex absolute text-white justify-between w-full`;

export const BottomRowWrapper = tw.div`p-4 items-center flex absolute bottom-0 text-white justify-between w-full`;

export const Rate = tw.div`border border-white p-3 bg-white bg-opacity-10 flex items-center justify-center`;

export const BackgroundWrapper = styled.div`
  position: relative;

  :before {
    ${tw`bg-theme`}
    content: "";
    position: absolute;
    width: 100%;
    height: 80%;
    top: 50%;
    transform: translateY(-50%);

    @media screen and (min-width: 1024px) {
      height: 60%;
    }
  }
`;

// Join us section
interface IJoinUsButton {
  darker?: boolean;
}

export const JoinUsButton = styled.a.attrs<IJoinUsButton>(({ darker }) => ({
  className: `flex lg:text-xl px-8 ${
    darker
      ? 'bg-themeBlue hover:bg-themeBlueDarker'
      : 'bg-theme hover:bg-themeDarker'
  } py-4 text-center transition justify-center cursor-pointer h-20 lg:h-24 items-center font-bold text-lg text-white rounded-lg`,
}))<IJoinUsButton>``;
