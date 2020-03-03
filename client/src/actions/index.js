import { axiosWithAuth } from "../util/axiosWithAuth";
export const DATA_START = "DATA_START";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_FAILURE = "DATA_FAILURE";
export const FORM_CHANGE = "FORM_CHANGE";

export const getData = () => dispatch => {
  dispatch({ type: DATA_START });
  axiosWithAuth()
    .get("/api/weddings")
    .then(res => {
      // console.log(res);
      dispatch({ type: DATA_SUCCESS, payload: res.data });
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
    .then(
      res =>
        console.log(res, "res data") &
        dispatch({ type: DATA_SUCCESS, payload: res.data })
    )
    .catch(
      err =>
        console.log(err, "ERROR") &
        dispatch({ type: DATA_FAILURE, payload: err })
    );
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
