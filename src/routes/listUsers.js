const express = require("express");

const router = express.Router()

const listUsers = (users) => {
	router.get('/users', (_req, res) => {

		res.status(200).json(users);
	});

	return router;
}

module.exports = listUsers;
