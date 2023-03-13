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