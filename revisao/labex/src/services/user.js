import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToAreaAdmin } from "../routes/coordinator";

export const login = (body, clear, history, setRightButtonText) => {
  axios
    .post(`${BASE_URL}felipe/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      goToAreaAdmin(history);
      setRightButtonText("Logout")
    })
    .catch((err) => alert(err.response.data.message));
};
