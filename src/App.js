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
import DbConfig from "./pages/DbConfig";
import MetaData from "./pages/MetaData";
import DbConfigForm from "./pages/DbConfigForm";

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
              <Route path="" element={<Home />} />
              <Route index path="dbconfig" element={<DbConfig />} />
              <Route path="dbconfig/add" element={<DbConfigForm />} />
              <Route
                path="dbconfig/:configID/:viewOnly"
                element={<DbConfigForm />}
              />
              <Route
                path="dbconfig/edit/:configID"
                element={<DbConfigForm />}
              />
              <Route path="metadata" element={<MetaData />} />
              <Route path="metadata/:id" element={<MetaData />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </Wrapper>
      </Router>
    </Provider>
  );
};

export default App;
