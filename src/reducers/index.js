import user from "./user";
import contacts from "./contacts";
import activeUserId from "./activeUserId";
import messages from "./messages";
import typing from "./typing";
import editing from "./editing";
import { combineReducers } from "redux";

export default combineReducers({
	user,
	messages,
	contacts,
	activeUserId,
	typing,
	editing,
});
