import { createSlice } from '@reduxjs/toolkit';


export const photosSlice = createSlice({
    name: 'photos',
    initialState: {
        photos: [],
        currentPhoto: 0,
        albums: [],
        selectedAlbum: {},
    },
    reducers: {
      set_photos(state, action) {
        state.photos = action.payload;
      },
      set_current_photo(state, action) {
        state.currentPhoto = action.payload;
      },
      set_albums(state, action) {
        state.albums = action.payload;
      },
      set_selected_album(state, action) {
        state.selectedAlbum = action.payload;
      },
    },
  })
  
  export const { set_photos, set_current_photo, set_albums, set_selected_album } = photosSlice.actions
  
  export default photosSlice.reducer