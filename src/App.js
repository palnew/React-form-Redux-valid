import React, { Component } from "react";
import NewFV from "./containers/NewFV";
import NewRS from "./containers/NewRS";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const style1 = {
  marginTop: 40
};

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row" style={style1}>
          <div className="col-md-6">
            <NewFV />
          </div>

          <div className="col-md-6">
            <h3 id="formsub"> Application Data </h3>
            <NewRS />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
