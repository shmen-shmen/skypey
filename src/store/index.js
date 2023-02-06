import { reducer } from "../reducers/index";
import { contacts } from "../static-data";
import { legacy_createStore } from "redux";

// second argument in createStore function is initialState obj.
// Here it is set to be contacts obj

const store = legacy_createStore(reducer, { contacts });

export default store;
