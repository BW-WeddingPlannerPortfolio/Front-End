import { DATA_START, DATA_SUCCESS, DATA_FAILURE } from "../actions";
// const uuidv4 = require("uuid/v4");

const setid = window.localStorage.getItem("CURRENTUSER");

const initialState = {
  currentuser: JSON.parse(setid) ?? { id: 3 },
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
    case "LOGGED_STATUS":
      return {
        ...state,
        loggedin: action.payload
      };
    case "CURRENT_USER":
      return {
        ...state,
        currentuser: action.payload
      };
    default:
      return state;
  }
};
