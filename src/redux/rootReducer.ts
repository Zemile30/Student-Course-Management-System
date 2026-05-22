import { combineReducers } from "redux";

import { studentReducer } from "./reducers/studentReducer";

import { uiReducer } from "./reducers/uiReducer";

import { courseReducer } from "./reducers/courseReducer";
export const rootReducer =
  combineReducers({
    students: studentReducer,
    ui: uiReducer,
    course: courseReducer,
  });

export type RootState =
  ReturnType<typeof rootReducer>;