import React from "react";

import "../App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Alert, Container, Row, Col } from "react-bootstrap";
import ReduxStoreComponent from "./ReduxStoreComponent.js";

class FVComponent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      fname: "",
      lname: "",
      mobile: "",
      address: "",
      valid_msg: "",
      valid_msg_variant: "",
      status: {},
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  init() {
    let { status } = this.state;
    status.fname = false;
    status.lname = false;
    status.mobile = false;
    status.address = false;
    this.setState({ status });
  }

  componentDidMount() {
    this.init();
  }

  handleChange(e) {
    let { fname, lname, mobile, address, errors, status } = this.state;
    this.setState({ [e.target.name]: e.target.value });
    let val = e.target.value;
    switch (e.target.name) {
      case "fname":
        if (!val.match(/^[a-zA-Z]*$/) || (val.length < 1 || val.length > 10)) {
          errors.fname =
            "First Name should be min.1 and max.10 alphabetic chars";
        } else {
          errors.fname = "";
          status.fname = true;
        }
        this.setState({ errors, status });
        break;

      case "lname":
        if (!val.match(/^[a-zA-Z]*$/)) {
          errors.lname = " Last Name can contain only alphabets";
        } else {
          errors.lname = "";
          status.lname = true;
        }
        this.setState({ errors, status });
        break;

      case "mobile":
        if (!val.match(/^[0-9]*$/) || val.length !== 10) {
          errors.mobile = " Mobile Number must contain exactly 10 numbers only";
        } else {
          errors.mobile = "";
          status.mobile = true;
        }
        this.setState({ errors, status });
        break;

      case "address":
        if (val.length < 10 || val.length > 200) {
          errors.address = "Address should be min.10 and max.200 characters";
        } else {
          errors.address = "";
          status.address = true;
        }
        this.setState({ errors, status });
        break;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let { status, errors, valid_msg, valid_msg_variant } = this.state;
    if (!status.fname) {
      errors.fname = "First Name should be min.1 and max.10 alphabetic chars";
    }
    // if (!status.lname) {
    //   errors.lname = "Last Name can contain only alphabets";
    // }

    if (!status.mobile) {
      errors.mobile = "Mobile Number must contain exactly 10 numbers only";
    }

    if (!status.address) {
      errors.address = "Address should be min.10 and max.200 characters";
    }

    if (status.fname && status.lname && status.mobile && status.address) {
      valid_msg = " Validation succesful ";
      valid_msg_variant = "success";
      this.props.onAddition(this.state);
    } else {
      valid_msg = " Validation Failed ";
      valid_msg_variant = "danger";
    }

    this.setState({ status, errors, valid_msg, valid_msg_variant });
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col>
              <h5 id="formsub">Form Submission</h5>

              <Alert variant={this.state.valid_msg_variant} size="sm">
                {this.state.valid_msg}
              </Alert>

              <form className="containleft" onSubmit={this.handleSubmit}>
                <Form.Group controlId="FirstName">
                  <Form.Label>FirstName</Form.Label>
                  <span className="required">*</span>
                  <Form.Control
                    type="text"
                    name="fname"
                    placeholder="Enter FirstName"
                    value={this.state.fname}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                {/* <Alert variant="danger">{this.state.errors.fname}</Alert> */}
                <div>
                  <label style={{ color: "red" }}>
                    {this.state.errors.fname}
                  </label>
                </div>

                <Form.Group controlId="LastName">
                  <Form.Label>LastName</Form.Label>
                  <Form.Control
                    type="text"
                    name="lname"
                    placeholder="Enter LastName"
                    value={this.state.lname}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <div>
                  <label style={{ color: "red" }}>
                    {this.state.errors.lname}
                  </label>
                </div>

                <Form.Group controlId="Mobile Number">
                  <Form.Label>Mobile Number</Form.Label>
                  <span className="required">*</span>
                  <Form.Control
                    type="number"
                    name="mobile"
                    placeholder="Enter Mobile Number"
                    value={this.state.mobile}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <div>
                  <label style={{ color: "red" }}>
                    {this.state.errors.mobile}
                  </label>
                </div>

                <Form.Group controlId="Address">
                  <Form.Label>Address</Form.Label>
                  <span className="required">*</span>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    name="address"
                    placeholder="Enter Address"
                    value={this.state.address}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <div>
                  <label style={{ color: "red" }}>
                    {this.state.errors.address}
                  </label>
                </div>

                <div>
                  <Button variant="primary" type="submit" size="lg">
                    SUBMIT
                  </Button>
                </div>
                <p>
                  <span className="required">*</span>Required Field
                </p>
              </form>
            </Col>
            <Col>
              {/* <h3 id="formsub">Application Data</h3> */}
              {/* <ReduxStoreComponent /> */}
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default FVComponent;
