import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { Container, AlbumGrid, AlbumCard, Cover} from '../css/GalleryElements';
import AlbumsPage from './AlbumsPage';
import { useStickyState } from '../scripts/helpers.js';
import { setPhotos } from "../actions/photos";


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
    dispatch(setPhotos(photos)); 
  };

  return (
    <Container>
      {albumView && (
      <AlbumGrid>
        {albums.map((album) => {
          return (
          <AlbumCard key={album.id}>
            <Cover key={album.id} src={album.photos[0].src} onClick={() => handleAlbumClick(album)}></Cover>
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