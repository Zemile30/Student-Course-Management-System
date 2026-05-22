const savedTheme =
  localStorage.getItem(
    "theme"
  ) || "light";

const initialState = {
  theme: savedTheme,
};

export const uiReducer = (
  state = initialState,
  action: any
) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      const newTheme =
        state.theme === "light"
          ? "dark"
          : "light";

      localStorage.setItem(
        "theme",
        newTheme
      );

      return {
        ...state,

        theme: newTheme,
      };

    default:
      return state;
  }
};