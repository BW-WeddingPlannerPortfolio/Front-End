import {
  DATA_START,
  DATA_SUCCESS,
  DATA_FAILURE,
  DATA_SUCCESS_WED,
  EDIT_CHANGE,
  PLANNER_FORM,
  EDIT_DATA_SUCCESS,
  PLANNER_DATA_SUCCESS,
  DELETE_SUCCESS,
  ALL_DATA_SUCCESS,
  PLANNERS_INFO_DATA
} from "../actions";
// const uuidv4 = require("uuid/v4");

const setid = window.localStorage.getItem("CURRENTUSER");
const user = JSON.parse(setid);
const initialState = {
  currentuser: user ?? { id: 0 },
  loggedin: false,
  planners: [],
  plannersInfo: [],
  plannersData: [],
  weddings: [],
  loading: true,
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
      //return all data at home
      return {
        ...state,
        loading: false,
        planners: action.payload
      };
    case PLANNER_DATA_SUCCESS:
      //single wedding from home
      return {
        ...state,
        loading: false,
        plannersData: action.payload
      };
    case DELETE_SUCCESS:
      //data
      return {
        ...state,
        loading: false
        // weddings: action.payload
      };
    case EDIT_DATA_SUCCESS:
      return {
        ...state,
        loading: false
        // planners: action.payload
      };
    case ALL_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case PLANNERS_INFO_DATA:
      return {
        ...state,
        loading: false,
        plannersInfo: action.payload
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
    case EDIT_CHANGE:
      return {
        ...state,
        planners: action.payload
      };
    default:
      return state;
  }
};
