import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import Slider from 'react-slick';
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
    transition: all 0.2s ease-out;
    top: -0.1rem;
    color: #9f91d8;
  }

  .selected-date {
    transition: all 0.2s ease-out;
    top: -0.1rem !important;
    color: #9f91d8;
  }

  .label {
    transition: all 0.2s ease-out;
    top: 0.6rem;
    left: 0.67rem;

    @media screen and (max-width: 1024px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .react-datepicker-wrapper {
    width: 100%;
  }
`;

export const FormGroup = styled.div.attrs({
  className: 'mb-4 relative lg:mb-0',
})``;

export const FormGroupImg = tw.img`absolute -left-5 top-1`;

interface IInput {
  className?: string;
}

export const Input = styled.input.attrs<IInput>({
  className:
    'input flex text-center lg:text-left border border-gray-300 lg:border-0 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600',
})<IInput>``;

export const StyledDatePicker = styled(DatePicker).attrs({
  className:
    'input w-full text-center lg:text-left lg:border-0 border border-gray-300 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600',
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

export const Button = styled.button.attrs((props: { as?: string }) => ({
  as: props.as ? props.as : 'a',
}))`
  ${tw`bg-theme text-white p-3 w-full block text-center rounded transition-colors hover:bg-themeDarker`}

  &:hover {
    background-color: #9487cf;
  }
`;

export const CloseToYouGrid = tw.div`grid-cols-3 grid gap-3 md:gap-5`;

export const CloseToYouGridItem = tw.div`justify-center items-center flex flex-col md:flex-row`;

export const CloseToYouImg = tw.img`rounded-xl h-20 w-20 md:h-14 md:w-14 md:mr-3 object-cover sm:h-40 sm:w-40`;

export const ContentGroup = styled.div.attrs({
  className: 'flex flex-col text-center',
})``;

export const CloseToYouItemTitle = styled.h3.attrs({
  className: 'font-bold mt-1',
})``;

export const CloseToYouItemSubTitle = tw.h3`opacity-80 md:text-left`;

export const StyledSlider = styled(Slider)`
  ${tw`mt-10 mb-12`}

  .slick-active {
    transform: scale(1.1);
    transition: transform 0.15s ease-in-out;
  }

  .slick-active ~ .slick-active {
    transform: scale(1);
  }

  .slick-slide {
    padding: 10px;
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

  .slick-arrow:before {
    ${tw`text-theme shadow-lg`}
    background-color: #fff;
    width: 50px;
    height: 50px;
    display: flex;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    font-size: 1.9rem;
  }

  .slick-arrow.slick-prev {
    left: 5px;
    z-index: 10;
    position: absolute;
    top: 50%;
    transform: translateY(-75%);
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
    border-radius: 12px;
  }
`;

// Most Popular places section
export const PopularPlacesGrid = tw.div`grid gap-5 `;

export const PopularPlacesGridItem = styled.div<{ imgSrc: string }>`
  position: relative;
  background-image: url(${(props) => props.imgSrc});
  height: 275px;
  border-radius: 10px;

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

export const Rate = tw.div`border border-white p-3 bg-white bg-opacity-10`;

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
  }
`;

// Join us section

export const JoinUsButton: React.FC<{ bgColor?: string }> = styled.a.attrs(
  ({ bgColor = 'bg-theme hover:bg-themeDarker' }) => ({
    className: `block px-8  py-4 text-center transition justify-center cursor-pointer h-20 flex items-center ${bgColor} font-bold text-lg text-white rounded-lg`,
  })
)``;
