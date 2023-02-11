import reducer from "../reducers/index";
import { legacy_createStore } from "redux";

// second argument in createStore function is initialState obj.
const store = legacy_createStore(reducer);

export default store;
