import { ADD_FORM, DELETE_FORM } from "../actions/types";

function formReducer(state = [], action) {
  switch (action.type) {
    case ADD_FORM:
      alert(action.payload.id);
      return [...state, action.payload];
    case DELETE_FORM:
      alert("i'm in case delete");
      alert(action.payload.id);
      return state.filter(form => form.id !== action.payload.id);
    default:
      return state;
  }
}

export default formReducer;
