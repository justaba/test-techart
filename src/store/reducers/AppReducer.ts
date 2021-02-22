import {
  CANCEL,
  SET_ERROR,
  SET_FLOOR,
  SET_MATERIAL,
  SET_RESULT,
  SET_TYPE_BUILD,
} from "../../actions/type/appType";
import { IAction, IState } from "../type/appReducerType";

const initialState: IState = {
  page: "step1",
  buildType: null,
  floor: null,
  material: null,
  sizex: null,
  sizey: null,
  result: "",
  error: "",
};

export default function appReducer(state = initialState, action: IAction) {
  switch (action.type) {
    case SET_TYPE_BUILD:
      return {
        ...state,
        page: action.payload == 2 ? "step3" : "step2",
        buildType: action.payload,
      };
    case SET_FLOOR:
      return {
        ...state,
        page: "step3",
        floor: action.payload,
      };
    case SET_MATERIAL:
      return {
        ...state,
        page: "step4",
        material: action.payload,
      };
    case SET_RESULT:
      return {
        ...state,
        page: "result",
        result: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        page: "error",
        error: action.payload,
      };
    case CANCEL:
      return {
        page: "step1",
        buildType: null,
        floor: null,
        material: null,
        sizex: null,
        sizey: null,
      };
    default:
      return state;
  }
}
