import {
  GET_STUDENTS_REQUEST,
  GET_STUDENTS_SUCCESS,
  GET_STUDENTS_ERROR,
  ADD_STUDENT_SUCCESS,
  DELETE_STUDENT_SUCCESS,
} from "../types/studentTypes";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const studentReducer = (
  state = initialState,
  action: any
) => {
  switch (action.type) {
    case GET_STUDENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_STUDENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case GET_STUDENTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ADD_STUDENT_SUCCESS:
      return {
        ...state,
        data: [
          ...state.data,
          action.payload,
        ],
      };

    case DELETE_STUDENT_SUCCESS:
      return {
        ...state,
        data: state.data.filter(
          (student: any) =>
            student.id !== action.payload
        ),
      };

    default:
      return state;
  }
};