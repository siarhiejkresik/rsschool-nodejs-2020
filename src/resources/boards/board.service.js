const boardsRepo = require('./board.memory.repository');
const tasksService = require('../tasks/task.service');

const getAll = async () => await boardsRepo.getAll();

const getBoardById = async boardId => await boardsRepo.getById(boardId);

const createBoard = async board => await boardsRepo.add(board);

const updateBoard = async (id, board) => await boardsRepo.update(id, board);

const deleteBoard = async id => {
  const board = await boardsRepo.delete(id);
  if (!board) {
    return;
  }
  const tasks = await tasksService.getAllByBoardId(id);
  if (tasks.length) {
    Promise.all(
      tasks.map(async task => await tasksService.deleteTask(task.id))
    );
  }
  return board;
};

module.exports = {
  getAll,
  getBoardById,
  createBoard,
  updateBoard,
  deleteBoard
};
