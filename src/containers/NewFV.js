import { connect } from "react-redux";
import FVComponent from "../components/FVComponent";
import { createForm } from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    onAddition: form => {
      dispatch(createForm(form));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(FVComponent);
