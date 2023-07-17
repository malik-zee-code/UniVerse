import { AppDispatch } from "@/redux/store";
import api from "../../../utils/api";
import { toast } from "react-toastify";
import { login } from "@/redux/features/AuthSlice";
import jwtDecode from "jwt-decode";

export const Login = (email: string, password: string) => async (dispatch: AppDispatch) => {
  try {
    var res = await api.post("/auth/login", { email, password });

    dispatch(login({ token: res.data.token, user: jwtDecode(res.data.token) }));

    console.log(res.data, jwtDecode(res.data.token));

    toast.success("Successfuly Logged In!", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } catch (error: any) {
    toast.error(error.response.data.error, {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
};
