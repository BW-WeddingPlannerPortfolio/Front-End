import Axios from "axios";

export const axiosWithAuth = () => {
  return Axios.create({
    baseURL: "https://wedding-planner-portfolio.herokuapp.com",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};
