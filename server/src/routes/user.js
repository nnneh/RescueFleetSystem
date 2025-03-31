const { Router } = require('express');
const { getUser , registerNewUser , loginUser} = require("../controllers/user");

const app = Router();
app.get('/users', getUser)
app.post('/login', loginUser)
app.post('/register', registerNewUser)

module.exports = app;



