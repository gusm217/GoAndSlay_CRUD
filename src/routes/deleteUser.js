const express = require("express");

const router = express.Router()

const deleteUser = (users) => {
	router.delete('/users/:id', (req, res) => {
		const { id } = req.params;
		const userIndex = users.findIndex(u => u.id === id);
		if (userIndex === -1) {
				return res.status(404).json({ error: 'User not found' });
		}
		users.splice(userIndex, 1);
		res.status(204).send();
	})

	return router;
}

module.exports = deleteUser;
