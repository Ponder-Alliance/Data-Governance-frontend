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
      <section className="p-5">
        <form>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <select className="form-control">
                  <option>Select Business Domain</option>
                  <option>Business Domain 1</option>
                  <option>Business Domain 2</option>
                  <option>Business Domain 3</option>
                </select>
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <select className="form-control">
                  <option>Select Entity Domain</option>
                  <option>Entity Domain 1</option>
                  <option>Entity Domain 2</option>
                  <option>Entity Domain 3</option>
                </select>
              </div>
            </div>
          </div>
          <br />
          <button className="btn btn-dark w-100">Save</button>
        </form>
      </section>
    </Layout>
  );
};

export default CatalogMapping;
