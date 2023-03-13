const initialState = {
photos: [],
currentPhoto: 0,
};

const photosReducer = (state = initialState, action) => {
switch (action.type) {
    case "SET_PHOTOS":
    return {
        ...state,
        photos: action.payload,
    };
    case "SET_CURRENT_PHOTO":
    return {
        ...state,
        currentPhoto: action.payload,
    };
    default:
    return state;
}
};

export default photosReducer;