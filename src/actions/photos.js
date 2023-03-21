export const setPhotos = (photos) => {
  return {
    type: "SET_PHOTOS",
    payload: photos,
  };
};

export const setCurrentPhoto = (photo) => {
  return {
    type: "SET_CURRENT_PHOTO",
    payload: photo,
  };
};

export const setAlbums = (albums) => {
  return {
    type: "SET_ALBUMS",
    payload: albums,
  };
};

export const setSelectedAlbum = (selectedAlbum) => {
  return {
    type: "SET_SELECTED_ALBUM",
    payload: selectedAlbum,
  };
};