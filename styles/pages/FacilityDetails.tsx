import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledHeader = styled.header`
  ${tw`relative`}
  background-image: url('/img/SearchResults/header-bg.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  min-height: 320px;
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

export const StyledWrapper = styled.div`
  .image-gallery-slides {
    ${tw`rounded`}
    object-fit: cover;
  }

  .image-gallery-icon {
    ${tw`transition-transform`}
    :hover {
      color: #fff;
    }
  }

  .image-gallery-thumbnails-container {
    ${tw`flex justify-start`}
  }

  .image-gallery-thumbnail.active,
  .image-gallery-thumbnail:hover,
  .image-gallery-thumbnail:focus {
    outline: none;
    border: 4px solid #337ab7;
    ${tw`border-theme rounded`}
  }

  .image-gallery-left-nav .image-gallery-svg,
  .image-gallery-right-nav .image-gallery-svg {
    ${tw`transition-transform`}
    ${tw`rounded-full border border-white flex items-center justify-center h-8 w-8`}
  }
`;

export const AccessoriesList = tw.ul`grid grid-cols-2 md:grid-cols-4 gap-4 mt-6`;

export const AccessoriesIcon = tw.i`text-themeBlue text-3xl`;

export const AccessoriesListItem = tw.li`flex flex-col justify-center items-center`;

export const AccessoriesName = tw.p`text-lg text-gray-500`;

export const AddonsList = tw.ul`grid md:grid-cols-3 grid-cols-2 gap-8 lg:gap-2 my-12`;

export const AddonsItem = tw.li`flex flex-col lg:flex-row lg:justify-start justify-center items-center lg:text-left text-center`;

export const AddonsIcon = tw.i`mr-2 text-2xl lg:text-lg`;

export const AddonsName = tw.p`text-gray-600`;

export const SendQuestionFormWrapper = styled.div`
  .react-datepicker-wrapper {
    width: 100% !important;
  }
`;

interface IStarIcon {
  isActive?: boolean;
}

export const StarIcon = styled.i.attrs(({ isActive }: IStarIcon) => ({
  className: `text-4xl fas fa-star ${
    isActive ? 'text-yellow-400' : 'text-gray-400'
  }`,
}))<IStarIcon>``;
