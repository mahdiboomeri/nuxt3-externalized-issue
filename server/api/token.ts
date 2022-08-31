import jwt from 'jsonwebtoken';

export default defineEventHandler(() => {
	return {
		token: jwt.sign({ user: 1 }, 'secret'),
	};
});
