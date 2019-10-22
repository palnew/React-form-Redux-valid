import React, { Component } from "react";
import "../App.css";

function ReduxStoreComponent(props) {
  //console.log(props.form1.fname);
  const { fname, lname, mobile, address, id } = props.form1;
  const { onDelete } = props;

  return (
    <React.Fragment>
      <div className="style22">
        <h2>This is {id}</h2>
        <h2>{fname + " " + lname}</h2>
        <h3>{mobile}</h3>
        <p>{address}</p>
        <button
          className="btn btn-danger"
          type="button"
          onClick={() => onDelete(id)}
        >
          Remove
        </button>
      </div>
    </React.Fragment>
  );
}

// const ReduxStoreComponent = (form1, key) => {
//   <div>
//     <h4>{form1.fname}</h4>
//   </div>;
// };

export default ReduxStoreComponent;

// export default ({ form1: { fname, lname, mobile, address, id } }) => {
//   <React.Fragment>
//     <h3 id="formsub"> Application Data </h3>
//     <div className="style2">
//       <h2>{fname + lname}</h2>
//       <h3>{mobile}</h3>
//       <p>{address}</p>
//     </div>
//   </React.Fragment>;
// };
