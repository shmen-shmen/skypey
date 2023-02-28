import { getMessages } from "../static-data";

const numberOfMessages = Math.round(Math.random() * 20);

export default function messages(
	state = getMessages(numberOfMessages),
	action
) {
	switch (action.type) {
		default:
			return state;
	}
}
