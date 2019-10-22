import React from "react";
import { connect } from "react-redux";
//import  from "../components/Post";
//import { deletePost } from "../actions";
import ReduxStoreComponent from "../components/ReduxStoreComponent";
import "../App.css";
import { deleteForm } from "../actions";

function NewRS({ forms, onDelete }) {
  return (
    <div className="style2">
      {forms.map(form1 => {
        console.log(onDelete);
        //return <Post post={post} onDelete = {onDeletion} key={post.id} />;
        return (
          <ReduxStoreComponent
            form1={form1}
            key={form1.id}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    forms: state.forms
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deleteForm(id));
      alert(id + "will be deleted");
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewRS);
