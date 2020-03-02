import { axiosWithAuth } from "../util/axiosWithAuth";

export const DATA_START = "DATA_START";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_FAILURE = "DATA_FAILURE";

export const getData = () => dispatch => {
  dispatch({ type: DATA_START });
  axiosWithAuth()
    .get(" /api/weddings")
    .then(res => {
      console.log(res);
      dispatch({ type: DATA_SUCCESS, payload: res });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: DATA_FAILURE, payload: "something went wrong" });
    });
};
