import uuidv4 from "uuid/v4";
import { ADD_FORM, DELETE_FORM } from "./types";

export const createForm = ({ fname, lname, mobile, address }) => ({
  type: ADD_FORM,
  payload: {
    id: uuidv4(),
    fname,
    lname,
    mobile,
    address
  }
});

export const deleteForm = id => ({
  type: DELETE_FORM,
  payload: {
    id
  }
});
