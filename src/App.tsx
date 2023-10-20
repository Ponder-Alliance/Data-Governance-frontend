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
import DbConfig from "./pages/DbConfig";
import MetaData from "./pages/MetaData";
import DbConfigForm from "./pages/DbConfigForm";
import BusinessDomain from "./pages/BusinessDomain";
import BusinessDomainForm from "./pages/BusinessDomainForm";
import CatalogMapping from "./pages/CatalogMapping";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

type Props = {
  children: React.ReactNode;
};

const Wrapper: React.FC<Props> = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const App = () => {
  useEffect(() => {
    if (localStorage.token) {
      store.dispatch<any>(loadUser());
    }
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Wrapper>
          <Routes>
            <Route path="/*">
              <Route path="" element={<Home />} />
              <Route index path="business" element={<BusinessDomain />} />
              <Route
                path="business/:businessID/:viewOnly"
                element={<BusinessDomainForm />}
              />
              <Route
                path="business/edit/:businessID"
                element={<BusinessDomainForm />}
              />
              <Route path="business/add" element={<BusinessDomainForm />} />
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
              <Route path="catalog" element={<CatalogMapping />} />
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
