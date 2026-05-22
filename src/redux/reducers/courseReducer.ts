import { mockCourses } from "../../mocks/courses";

const initialState = {
  data: mockCourses,
  loading: false,
  error: null,
};

export const courseReducer = (
  state = initialState,
  action: any
) => {
  switch (action.type) {
    default:
      return state;
  }
};