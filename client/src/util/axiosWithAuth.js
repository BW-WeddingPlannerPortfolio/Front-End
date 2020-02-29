import Axios from "axios";

export const axiosWithAuth = () => {
  return Axios.create({
    baseURL: {
      /*NEED URL*/
    },
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};
