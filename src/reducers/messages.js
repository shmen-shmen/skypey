import { getMessages } from "../static-data";
import { SEND_MESSAGE } from "../constants/action-types";

const numberOfMessages = Math.round(Math.random() * 20);

export default function messages(
	state = getMessages(numberOfMessages),
	action
) {
	switch (action.type) {
		case SEND_MESSAGE:
			const { activeUserId, msgText } = action.payload;
			const activeDialogue = state[activeUserId];
			const number = Object.keys(activeDialogue).length;
			const newActiveDialogue = {
				...activeDialogue,
				[number]: { number: number, text: msgText, is_user_msg: true },
			};
			console.log(state);
			console.log(activeUserId);
			console.log({ ...state, [activeUserId]: newActiveDialogue });
			return { ...state, [activeUserId]: newActiveDialogue };
		default:
			return state;
	}
}
