const { v4: uuidv4 } = require('uuid');
const router = require('../utils/router');
const userSchema = require('../schemas/userSchema')

const createUsersRoute = (users) => {
	router.post('/users', (req, res) => {
		const { name, email, age } = req.body;
		const user = { id: uuidv4(), name, email, age };

		const { error } = userSchema.validate(user);
		if (error) {
			return res.status(400).json({ message: error.details[0].message });
		}

		users.push(user);
		res.status(201).json(user);
	})

	return router;
};

module.exports = createUsersRoute;
