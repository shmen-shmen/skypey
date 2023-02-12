import { generateUser } from "../static-data";

export default (state = generateUser(0), action) => {
	return state;
};
