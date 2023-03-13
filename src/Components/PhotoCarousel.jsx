import React from "react";
import { Wrapper, Content, CloseButton, Image, RightArrow, LeftArrow, BlurredBackground } from '../css/CarouselElements';
import { useStickyValue } from '../scripts/helpers.js';
import { useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom'


const PhotoCarousel = () => {
  const savedPhotos =  useStickyValue('photos');
  const currentPhoto = parseInt(useParams().id);
  let photos = useSelector((state) => state.photos.photos);
  const navigate = useNavigate();

  if (photos.length>0) {
    window.localStorage.setItem('photos', JSON.stringify(photos));
  } else {
    photos =  savedPhotos[0];
  };

  const handlePrevious = () => {
    const newPhoto = currentPhoto-1 < 1 ? photos.length : currentPhoto-1;
    navigate(`/gallery/${newPhoto}`);
  };

  const handleNext = () => {
    const newPhoto = currentPhoto+1 > photos.length ? 1 : currentPhoto+1;
    navigate(`/gallery/${newPhoto}`);
  };

  const handleCloseModal = () => {
    navigate(`/gallery/`);
  };

  return (
    <Wrapper>
      <Content>
        <LeftArrow onClick={handlePrevious}>{`<`}</LeftArrow>
        <Image src={photos[currentPhoto-1]} alt={`Photo ${currentPhoto}`} />
        <CloseButton onClick={handleCloseModal}>X</CloseButton>
        <RightArrow onClick={handleNext}>{`>`}</RightArrow>
      </Content>
      <BlurredBackground onClick={handleCloseModal} />
    </Wrapper>
  );
};
  
export default PhotoCarousel;