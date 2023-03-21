import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { Container, AlbumGrid, AlbumCard, Cover} from '../css/GalleryElements';
import AlbumsPage from './AlbumsPage';
import { useStickyState } from '../scripts/helpers.js';
import { set_photos, set_current_photo, set_albums, set_selected_album } from '../reducers/photosSlice';


const GalleryPage = () => {
  const [selectedAlbum, setSelectedAlbum] = useStickyState(null, 'selectedAlbum');
  const [albumView, setAlbumView] = useStickyState(true, 'albumView');
  const [albums, setAlbums] = useStickyState([], 'albums');
  //const [photos, setPhotos] = useStickyState([], 'photos');

  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos.photos);
  

  useEffect(() => {
    const fetchImageFiles = async () => {
      function importAll(r) {
        let images = [];
         r.keys().forEach((item, index) => { images.push({id: index, name: item.replace('./', ''), src: r(item)})});
        return images
       }
      const files = importAll(require.context('../img/', true, /\.(png|jpe?g)$/));
      const albums = [];
      files.forEach((file) => {
        if (albums.length == 0) {
          let { id,name,src } = file;
          id = 1;
          const new_file = { id,name,src };
          albums.push({id: 1,
            name: file.name.split('/')[0],
            photos: [
              new_file
            ],})
        } else if ( albums.find(o => o.name === file.name.split('/')[0])) {
          let target = albums[albums.findIndex((o => o.name === file.name.split('/')[0]))];
          let { id,name,src } = file;
          id = target.photos.length+1;
          const new_file = { id,name,src };
          target.photos.push(new_file);
        } else {
          let { id,name,src } = file;
          id = 1;
          const new_file = { id,name,src };
          albums.push({id: albums.length + 1,
            name: file.name.split('/')[0],
            photos: [
              new_file
            ],})
        }
      })
      setAlbums(albums);
    };

    fetchImageFiles();
  }, []);

  const handleAlbumClick = (album) => {
    if (albumView) {setAlbumView(false)};
    setSelectedAlbum(album);
    const photos = album.photos.map(photo => photo.src);
    console.log(photos);
    console.log(albums);
    console.log(album);
    dispatch(set_photos(photos)); 
    dispatch(set_albums(albums)); 
    dispatch(set_selected_album(album)); 
  };

  return (
    <Container>
      {albumView && (
      <AlbumGrid>
        {albums.map((album) => {
          return (
          <AlbumCard key={album.id} onClick={() => handleAlbumClick(album)}>
            <Cover key={album.id} src={album.photos[0].src}></Cover>
            <p>{album.name}</p>
          </AlbumCard>
        )})}
      </AlbumGrid>
      )}
      {!albumView && ( <AlbumsPage albums={albums} handleAlbumClick={handleAlbumClick} selectedAlbum={selectedAlbum} photos={photos}/>)}
    </Container>
  );
};

export default GalleryPage;