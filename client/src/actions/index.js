import { axiosWithAuth } from "../util/axiosWithAuth";
export const DATA_START = "DATA_START";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_FAILURE = "DATA_FAILURE";
export const FORM_CHANGE = "FORM_CHANGE";
export const DATA_SUCCESS_WED = "DATA_SUCCESS_WED";
export const EDIT_CHANGE = "EDIT_CHANGE";
export const USER_FORM = "USER_FORM";
export const EDIT_DATA_SUCCESS = "EDIT_DATA_SUCCESS";
export const PLANNER_DATA_SUCCESS = "PLANNER_DATA_SUCCESS";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const ALL_DATA_SUCCESS = "ALL_DATA_SUCCESS";
export const PLANNERS_INFO_DATA = "PLANNERS_INFO_DATA";
//
export const getData = url => dispatch => {
  dispatch({ type: DATA_START });
  //this is for all wedding data at home compo
  axiosWithAuth()
    .get(url)
    .then(res => {
      // console.log(res, "all weddinh data at home component");
      dispatch({ type: ALL_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      // console.log(err);
      dispatch({ type: DATA_FAILURE, payload: "something went wrong" });
    });
};
export const getWeddingData = (url, id) => dispatch => {
  //this is for single wedding from home component
  dispatch({ type: DATA_START });
  axiosWithAuth()
    .get(url, id)
    .then(res => {
      // console.log(res, "planners data");
      setTimeout(() => {
        dispatch({ type: PLANNER_DATA_SUCCESS, payload: res.data });
      }, 500);
    })
    .catch(err => {
      // console.log(err);
      dispatch({ type: DATA_FAILURE, payload: "something went wrong" });
    });
};

export const FetchUser = (url, id) => dispatch => {
  //this is a logged in user
  dispatch({ type: DATA_START });
  axiosWithAuth()
    .get(url, id)
    .then(res => {
      // console.log(res, "Sent data");
      setTimeout(() => {
        dispatch({ type: DATA_SUCCESS, payload: res.data.planner });
      }, 500);
    })
    .catch(err => {
      dispatch({ type: DATA_FAILURE, payload: err.response });
    });
};
export const sendForm = (url, data) => dispatch => {
  //addding wedding for logged user
  dispatch({ type: DATA_START });
  axiosWithAuth()
    .post(url, data)
    .then(res => {
      // console.log(res, "Sent data");
      setTimeout(() => {
        dispatch({ type: DATA_SUCCESS, payload: res.data });
      }, 2500);
    })
    .catch(err => {
      dispatch({ type: DATA_FAILURE, payload: err.response });
    });
};
export const editData = (url, data) => dispatch => {
  //this is t oedit lgged user data
  dispatch({ type: DATA_START });
  axiosWithAuth()
    .put(url, data)
    .then(res => {
      // console.log(res, "edited data");
      dispatch({ type: EDIT_DATA_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: DATA_FAILURE, payload: err.response });
    });
};

export const PlannersInfo = (url, id) => dispatch => {
  dispatch({ type: DATA_START });
  axiosWithAuth()
    .get(url, id)
    .then(res => {
      console.log(res, "Sent data");
      setTimeout(() => {
        dispatch({ type: PLANNERS_INFO_DATA, payload: res.data });
      }, 2500);
    })
    .catch(err => {
      dispatch({ type: DATA_FAILURE, payload: err.response });
    });
};

export const Delete = (url, id) => dispatch => {
  dispatch({ type: DATA_START });
  axiosWithAuth()
    .delete(url, id)
    .then(res => {
      // console.log(res, "Deleted data");
      setTimeout(() => {
        dispatch({ type: DELETE_SUCCESS, payload: res.data });
      }, 2500);
    })
    .catch(err => {
      dispatch({ type: DATA_FAILURE, payload: err.response });
    });
};
