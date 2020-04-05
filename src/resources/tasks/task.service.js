const tasksRepo = require('./task.memory.repository');

const getAllByBoardId = async id => await tasksRepo.getAllByBoardId(id);

const getAllByUserId = async id => await tasksRepo.getAllByUserId(id);

const getTaskById = async id => await tasksRepo.getById(id);

const createTask = async task => await tasksRepo.add(task);

const updateTask = async (id, task) => await tasksRepo.update(id, task);

const deleteTask = async id => await tasksRepo.delete(id);

module.exports = {
  getAllByBoardId,
  getAllByUserId,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
