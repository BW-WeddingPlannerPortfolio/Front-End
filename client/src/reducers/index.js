import { DATA_START, DATA_SUCCESS, DATA_FAILURE } from "../actions";

const initialState = {
  loggedin: false,
  wedding: {
    wedding_name: "",
    wedding_photo: "",
    theme: "",
    wedding_location: "",
    description: ""
  },
  isloading: false,
  data: [],
  error: {}
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_START:
      return {
        ...state,
        loading: true
      };
    case DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case DATA_FAILURE:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    default:
      return state;
  }
};
