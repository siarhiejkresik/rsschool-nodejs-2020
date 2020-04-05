const router = require('express').Router();

const boardsService = require('./board.service');
const taskRouter = require('../tasks/task.router');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards);
});

router.route('/').post(async (req, res) => {
  const board = req.body;
  const createdBoard = await boardsService.createBoard(board);
  res.json(createdBoard);
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const board = await boardsService.getBoardById(id);
  if (board) {
    res.json(board);
  } else {
    res.status(404).send('Board not found');
  }
});

router.route('/:borderId').put(async (req, res) => {
  const { borderId } = req.params;
  const board = req.body;
  const updatedBoard = await boardsService.updateBoard(borderId, board);
  if (updatedBoard) {
    res.json(updatedBoard);
  } else {
    res.status(404).send('Board not found');
  }
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  const result = await boardsService.deleteBoard(id);
  if (result) {
    res.status(204).end();
  } else {
    res.status(404).send('Board not found');
  }
});

router.use('/:boardId/tasks', taskRouter);

module.exports = router;
