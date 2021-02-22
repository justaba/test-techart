import axios from "axios";
import { Dispatch } from "redux";
import { CANCEL, SET_ERROR, SET_RESULT } from "./type/appType";

export const setValue = (type: string, value: number) => (
  dispatch: Dispatch
) => {
  dispatch({
    type,
    payload: value,
  });
};

export const setValueSize = (type: string, valuex: number, valuey: number) => (
  dispatch: Dispatch
) => {
  dispatch({
    type,
    payload: {
      x: valuex,
      y: valuey,
    },
  });
};

export const Cancel = () => (dispatch: Dispatch) => {
  dispatch({
    type: CANCEL,
  });
};

export const Calculate = (
  building: number,
  height: number,
  material: number,
  sizex: number,
  sizey: number
) => (dispatch: Dispatch) => {
  const param =
    building == 1
      ? { building, height, material, sizex, sizey }
      : { building, material, sizex, sizey };
  axios
    .get("https://data.techart.ru/lab/json/", {
      params: param,
    })
    .then((res) => {
      dispatch({
        type: SET_RESULT,
        payload: res.data.message,
      });
    })
    .catch((res) => {
      dispatch({
        type: SET_ERROR,
        payload: res.data.message,
      });
    });
};
