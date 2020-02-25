const users = require('express').Router();
const { userRequestCheck } = require('../modules/validations');
const {
  getUser,
  createUser,
  getUsers,
} = require('../controllers/users');

users.get('/users/:userId', userRequestCheck, getUser);
users.post('/users', userRequestCheck, createUser);
users.get('/users', getUsers);

module.exports = users;
