import { axiosWithAuth } from "../util/axiosWithAuth";
export const DATA_START = "DATA_START";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_FAILURE = "DATA_FAILURE";
export const FORM_CHANGE = "FORM_CHANGE";
export const DATA_SUCCESS_WED = "DATA_SUCCESS_WED";
export const EDIT_CHANGE = "EDIT_CHANGE";
export const PLANNER_FORM = "PLANNER_FORM";
export const EDIT_DATA_SUCCESS = "EDIT_DATA_SUCCESS";
export const PLANNER_DATA_SUCCESS = "PLANNER_DATA_SUCCESS";
export const getData = () => dispatch => {
  dispatch({ type: DATA_START });
  axiosWithAuth()
    .get("/api/weddings")
    .then(res => {
      // console.log(res);
      dispatch({ type: DATA_SUCCESS_WED, payload: res.data });
    })
    .catch(err => {
      // console.log(err);
      dispatch({ type: DATA_FAILURE, payload: "something went wrong" });
    });
};
export const getWeddingData = id => dispatch => {
  dispatch({ type: DATA_START });
  axiosWithAuth()
    .get(`/api/planner/${id}/weddings`)
    .then(res => {
      // console.log(res, "planners data");
      dispatch({ type: PLANNER_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      // console.log(err);
      dispatch({ type: DATA_FAILURE, payload: "something went wrong" });
    });
};
export const FetchUsers = () => dispatch => {
  dispatch({ type: DATA_START });

  axiosWithAuth()
    .get("/api/planners")
    .then(res =>
      // console.log(res, "res data") &
      dispatch({ type: DATA_SUCCESS, payload: res.data })
    )
    .catch(
      err =>
        console.log(err, "ERROR") &
        dispatch({ type: DATA_FAILURE, payload: err })
    );
};

export const FetchUser = (url, data) => dispatch => {
  dispatch({ type: DATA_START });
  axiosWithAuth()
    .get(url, data)
    .then(res => {
      console.log(res, "Sent data");
      setTimeout(() => {
        dispatch({ type: DATA_SUCCESS, payload: res.data });
      }, 2500);
    })
    .catch(err => {
      dispatch({ type: DATA_FAILURE, payload: err.response });
    });
};

export const sendData = (url, data) => dispatch => {
  dispatch({ type: DATA_START });
  axiosWithAuth()
    .post(url, data)
    .then(res => {
      console.log(res, "Sent data");
      setTimeout(() => {
        dispatch({ type: DATA_SUCCESS, payload: res.data });
      }, 2500);
    })
    .catch(err => {
      dispatch({ type: DATA_FAILURE, payload: err.response });
    });
};
export const sendForm = (url, data) => dispatch => {
  dispatch({ type: DATA_START });
  axiosWithAuth()
    .post(url, data)
    .then(res => {
      console.log(res, "Sent data");
      setTimeout(() => {
        dispatch({ type: PLANNER_FORM, payload: res.data });
      }, 2500);
    })
    .catch(err => {
      dispatch({ type: DATA_FAILURE, payload: err.response });
    });
};

export const editData = (url, data) => dispatch => {
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
