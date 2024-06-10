const express = require('express');
const createUsersRoute = require('./routes/createUsers');
const listUsers = require('./routes/listUsers');

const app = express();
app.use(express.json());

let users = [];

app.use('/', createUsersRoute(users));
app.use('/', listUsers(users));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
