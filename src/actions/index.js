import {
	SEND_MESSAGE,
	SET_ACTIVE_USER_ID,
	SET_TYPING_VALUE,
	SET_EDITING_VALUE,
	REMOVE_MESSAGE,
	EDIT_MESSAGE,
} from "../constants/action-types";

export const setActiveUserId = (id) => {
	return {
		type: SET_ACTIVE_USER_ID,
		payload: id,
	};
};

export const setTypingValue = (value) => ({
	type: SET_TYPING_VALUE,
	payload: value,
});
export const setEditingValue = (value) => ({
	type: SET_EDITING_VALUE,
	payload: value,
});

export const sendMessage = (activeUserId, msgText) => ({
	type: SEND_MESSAGE,
	payload: { activeUserId, msgText },
});

//
//I CRETAINLY DON'T LIKE HOW I SHOULD CALL THE SAME THING "activeUserId" and "id" IN THE SAME REDUCER !!!!s
//

export const removeMessage = (activeUserId, msgNumber) => ({
	type: REMOVE_MESSAGE,
	payload: { activeUserId, msgNumber },
});

export const editMessage = (activeUserId, editing, msgText) => ({
	type: EDIT_MESSAGE,
	payload: { activeUserId, msgNumber: editing, msgText },
});
