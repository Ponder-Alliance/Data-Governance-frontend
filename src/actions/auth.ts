// import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import {
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  USER_LOADED,
} from "./types";
import { setAlert } from "./alert";

// Load User
export const loadUser = () => async (dispatch: Function) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    // req here

    dispatch({
      type: USER_LOADED,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Login User
export const login =
  (email: String, password: String) => async (dispatch: Function) => {
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };

    // const body = JSON.stringify({ email, password });

    try {
      // request here

      dispatch({
        type: LOGIN_SUCCESS,
      });
      dispatch(loadUser());
    } catch (error: any) {
      const errors = error.response.data.errors;

      if (errors) {
        errors.forEach((error: any) => dispatch(setAlert(error.msg, "danger")));
      }

      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };

// Logout User
export const logout = () => (dispatch: Function) => {
  dispatch({
    type: LOGOUT,
  });
};
