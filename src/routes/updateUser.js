const router = require('../utils/router');
const userSchema = require('../schemas/userSchema')

const updateUser = (users) => {
	router.put('/users/:id', (req, res) => {
		const { id } = req.params;
		const userIndex = users.findIndex(u => u.id === id);

		if (userIndex === -1) {
				return res.status(404).json({ error: 'User not found' });
		}

		const updatedUser = { ...users[userIndex], ...req.body };

		const { error } = userSchema.validate(updatedUser);
		if (error) {
			return res.status(400).json({ message: error.details[0].message });
		}

		users[userIndex] = updatedUser;
		res.status(200).json(updatedUser);
	})

	return router;
}

module.exports = updateUser;
