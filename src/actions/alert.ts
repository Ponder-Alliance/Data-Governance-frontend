import { REMOVE_ALERT, SET_ALERT } from "./types";
import { v4 as uuidv4 } from "uuid";

export const setAlert =
  (msg: String, alertType: String, timeout: Number = 5000) =>
  (dispatch: any) => {
    const id = uuidv4();
    dispatch({
      type: SET_ALERT,
      payload: { id, msg, alertType },
    });

    setTimeout(
      () =>
        dispatch({
          type: REMOVE_ALERT,
          payload: id,
        }),
      timeout.valueOf()
    );
  };
