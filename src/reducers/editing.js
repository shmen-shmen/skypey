import { SET_EDITING_VALUE } from "../constants/action-types";

export default function typing(state = false, action) {
	switch (action.type) {
		case SET_EDITING_VALUE:
			console.log("EDITING_SET_TO:", action.payload);
			return action.payload;
		default:
			return state;
	}
}
