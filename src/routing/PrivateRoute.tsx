import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
  auth: {
    isAuthenticated: boolean;
    loading: boolean;
  };
  children: React.ReactNode;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  auth: { isAuthenticated, loading },
  children,
}: PrivateRouteProps) => {
  if (!isAuthenticated && !loading) {
    return <Navigate to="/login" replace />;
  }
  return <div>{children}</div>;
};

const mapStateToProps = (state: {
  auth: { isAuthenticated: boolean; loading: boolean };
}) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(PrivateRoute);
