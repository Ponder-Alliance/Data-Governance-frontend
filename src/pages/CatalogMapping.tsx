import React from "react";
import Layout from "../components/Layout";

const CatalogMapping = () => {
  return (
    <Layout activeLink={"catalog"}>
      <div className="row">
        <div className="col-9">
          <h1>Catalog Mapping </h1>
        </div>
        <div className="col-3 d-flex justify-content-end align-items-center"></div>
        <hr />
      </div>
      <br />
    </Layout>
  );
};

export default CatalogMapping;
