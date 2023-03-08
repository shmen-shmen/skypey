import { getMessages } from "../static-data";
import {
	SEND_MESSAGE,
	REMOVE_MESSAGE,
	EDIT_MESSAGE,
} from "../constants/action-types";

const numberOfMessages = Math.round(Math.random() * 20);

export default function messages(
	state = getMessages(numberOfMessages),
	action
) {
	switch (action.type) {
		case SEND_MESSAGE: {
			const { msgText, activeUserId } = action.payload;
			const activeDialogue = state[activeUserId];
			const number = Object.keys(activeDialogue).length;
			const newActiveDialogue = {
				...activeDialogue,
				[number]: { number: number, text: msgText, is_user_msg: true },
			};
			return { ...state, [activeUserId]: newActiveDialogue };
		}
		case REMOVE_MESSAGE: {
			const { msgNumber, activeUserId } = action.payload;
			const activeDialogue = state[activeUserId];
			delete activeDialogue[msgNumber];
			return { ...state, [activeUserId]: activeDialogue };
		}
		case EDIT_MESSAGE: {
			const { activeUserId, msgNumber, msgText } = action.payload;
			const activeDialogue = state[activeUserId];
			activeDialogue[msgNumber]["text"] = msgText;
			activeDialogue[msgNumber]["edited"] = true;
			return { ...state, [activeUserId]: activeDialogue };
		}

		default:
			return state;
	}
}
