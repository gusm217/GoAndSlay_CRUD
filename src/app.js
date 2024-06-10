const express = require('express');
const createUsersRoute = require('./routes/createUser');
const listUsers = require('./routes/listUsers');
const getUserById = require('./routes/getUserById');
const updateUser = require('./routes/updateUser');
const deleteUser = require('./routes/deleteUser');

const app = express();
app.use(express.json());

let users = [];

app.use('/', createUsersRoute(users));
app.use('/', listUsers(users));
app.use('/', getUserById(users));
app.use('/', updateUser(users));
app.use('/', deleteUser(users));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
