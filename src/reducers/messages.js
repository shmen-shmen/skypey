import { SEND_MESSAGE } from "../constants/action-types";
import { getMessages } from "../static-data";

const numberOfMessages = Math.round(Math.random() * 10);

export default function messages(
	state = getMessages(numberOfMessages),
	action
) {
	switch (action.type) {
		// case SEND_MESSAGE:
		// 	return action.payload;

		default:
			return state;
	}
}
