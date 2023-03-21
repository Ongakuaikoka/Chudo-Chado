import React from "react";
import { Wrapper, Content, CloseButton, Image, RightArrow, LeftArrow, BlurredBackground } from '../css/CarouselElements';
import AlbumsPage from "./AlbumsPage";
import { useStickyValue } from '../scripts/helpers.js';
import { useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import {ReactComponent as LeftArrowSVG} from '../logos/arrow_left.svg';
import {ReactComponent as RightArrowSVG} from '../logos/arrow_right.svg';
import {ReactComponent as CloseXSVG} from '../logos/close_X.svg';


const PhotoCarousel = () => {
  const savedPhotos =  useStickyValue('photos');
  const currentPhoto = parseInt(useParams().id);
  let photos = useSelector((state) => state.photos.photos);
  const navigate = useNavigate();

  const albums = useSelector((state) => state.photos.albums);
  const selectedAlbum = useSelector((state) => state.photos.selectedAlbum);
  console.log(albums);
  console.log(selectedAlbum);


  if (photos.length>0) {
    window.localStorage.setItem('photos', JSON.stringify(photos));
  } else {
    photos =  savedPhotos[0];
  };

  console.log(photos);

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
    <>
    <AlbumsPage albums={albums} selectedAlbum={selectedAlbum} photos={photos}/>
    <Wrapper>
      <LeftArrow onClick={handlePrevious}>
        <LeftArrowSVG />
      </LeftArrow>
      <Content>
        <Image src={photos[currentPhoto-1]} alt={`Photo ${currentPhoto}`} />
      </Content>
      <CloseButton onClick={handleCloseModal}>
        <CloseXSVG />
      </CloseButton>
      <RightArrow onClick={handleNext}>
        <RightArrowSVG />
      </RightArrow>
      <BlurredBackground onClick={handleCloseModal} />
    </Wrapper>
    </>
  );
};
  
export default PhotoCarousel;