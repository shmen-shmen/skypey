import reducer from "../reducers/index";
import { legacy_createStore } from "redux";

// second argument in createStore function is initialState obj.
// here state is managed by reducers, thus only one argument
const store = legacy_createStore(reducer);

export default store;
