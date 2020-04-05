const router = require('express').Router();

const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/').post(async (req, res) => {
  const user = req.body;
  const createdUser = await usersService.createUser(user);
  res.json(User.toResponse(createdUser));
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const user = await usersService.getUserById(id);
  if (user) {
    res.json(User.toResponse(user));
  } else {
    res.status(404).send('User not found');
  }
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const user = req.body;
  const updatedUser = await usersService.updateUser(id, user);
  if (updatedUser) {
    res.json(User.toResponse(updatedUser));
  } else {
    res.status(404).send('User not found');
  }
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  const result = await usersService.deleteUser(id);
  if (result) {
    res.status(204).end();
  } else {
    res.status(404).send('User not found');
  }
});

module.exports = router;
