const router = require('../utils/router');

const getUserById = (users) => {
	router.get('/users/:id', (req, res) => {
	const { id } = req.params;
	const user = users.find(u => u.id === id);
	if (!user) {
			return res.status(404).json({ error: 'User not found' });
	}

	res.status(200).json(user);
	})

	return router;
}

module.exports = getUserById;
