import { GET_IMAGES, UPLOAD_IMAGE } from "../actions/types";

const initialState = {
  images: [],
  newImage: []
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case GET_IMAGES:
      return { ...state, images: payload };
    case UPLOAD_IMAGE:
      return { ...state, newImage: payload };
    default:
      return state;
  }
}
