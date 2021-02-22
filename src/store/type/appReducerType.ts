import rootReducer from "../reducers";

export interface IAction {
  type: string;
  payload: number;
}

export interface IState {
  page: string;
  buildType: number | null;
  floor: number | null;
  material: number | null;
  sizex: number | null;
  sizey: number | null;
  result: string;
  error: string;
}

export type RootState = ReturnType<typeof rootReducer>;
