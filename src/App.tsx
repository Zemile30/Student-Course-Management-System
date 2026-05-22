import {
  useSelector,
} from "react-redux";

import type { RootState } from "./redux/rootReducer";

import AppRoutes from "./routes/AppRoutes";

function App() {
  const theme = useSelector(
    (state: RootState) =>
      state.ui.theme
  );

  return (
    <div className={theme}>
      <AppRoutes />
    </div>
  );
}

export default App;