import { useEffect, useLayoutEffect } from "react";

import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import setAuthToken from "./utils/setAuthToken";

import store from "./store";
import { Provider } from "react-redux";
import { loadUser } from "./actions/auth";
import PrivateRoute from "./routing/PrivateRoute";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const App = () => {
  useEffect(() => {
    if (localStorage.token) {
      store.dispatch(loadUser());
    }
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Wrapper>
          <Routes>
            <Route path="/*">
              <Route index element={<Home />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </Wrapper>
      </Router>
    </Provider>
  );
};

export default App;
