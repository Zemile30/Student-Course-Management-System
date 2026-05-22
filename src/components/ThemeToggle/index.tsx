import {
  useDispatch,
  useSelector,
} from "react-redux";

import type { RootState } from "../../redux/rootReducer";

const ThemeToggle = () => {
  const dispatch = useDispatch();

  const theme = useSelector(
    (state: RootState) =>
      state.ui.theme
  );

  return (
    <button
      onClick={() =>
        dispatch({
          type: "TOGGLE_THEME",
        })
      }
    >
      {theme === "light"
        ? "Dark Mode"
        : "Light Mode"}
    </button>
  );
};

export default ThemeToggle;