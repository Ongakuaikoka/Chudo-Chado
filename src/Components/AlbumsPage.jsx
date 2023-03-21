import React from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { set_photos, set_current_photo, set_albums, set_selected_album } from '../reducers/photosSlice';
import { AlbumList, Album, Cell, PhotoGrid, Photo, AlbumsPageContent } from '../css/GalleryElements';
import PhotoCarousel from './PhotoCarousel';
import { useStickyState } from '../scripts/helpers.js'

const AlbumsPage = ({ albums, handleAlbumClick, selectedAlbum, photos }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCurrentPhoto = (photo) => {
    dispatch(set_current_photo(photo.id)); 
    navigate(`/gallery/${photo.id}`);
  };

  return (
    <AlbumsPageContent>
      <AlbumList>
        {albums.map((album) => (
                  <Album key={album.id} onClick={() => handleAlbumClick(album)}>
                      {album.name}
                  </Album>
          ))}
      </AlbumList>
      <PhotoGrid>
      {selectedAlbum.photos.map((photo) => {
          return (
            <Cell>
              <Photo key={photo.id} src={photo.src} onClick={() => handleCurrentPhoto(photo)} />
            </Cell>
          )}
      )}
      </PhotoGrid>
    </AlbumsPageContent>
  );
};
  
export default AlbumsPage;