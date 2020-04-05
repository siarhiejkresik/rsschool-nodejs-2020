const usersRepo = require('./user.memory.repository');
const tasksService = require('../tasks/task.service');

const getAll = async () => await usersRepo.getAll();

const getUserById = async id => await usersRepo.getById(id);

const createUser = async user => await usersRepo.add(user);

const updateUser = async (id, user) => await usersRepo.update(id, user);

const deleteUser = async id => {
  const user = await usersRepo.delete(id);
  if (!user) {
    return;
  }
  const tasks = await tasksService.getAllByUserId(user.id);
  if (tasks.length) {
    Promise.all(
      tasks.map(async task => {
        task.userId = null;
        await tasksService.updateTask(task.id, task);
      })
    );
  }
  return user;
};

module.exports = {
  getAll,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
