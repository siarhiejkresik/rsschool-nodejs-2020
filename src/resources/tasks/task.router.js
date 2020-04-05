const router = require('express').Router({ mergeParams: true });

const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const { boardId } = req.params;
  const tasks = await tasksService.getAllByBoardId(boardId);
  res.json(tasks);
});

router.route('/').post(async (req, res) => {
  const { boardId } = req.params;
  const task = req.body;
  const createdTask = await tasksService.createTask({ ...task, boardId });
  res.json(createdTask);
});

router.route('/:taskId').get(async (req, res) => {
  const { taskId } = req.params;
  const task = await tasksService.getTaskById(taskId);
  if (task) {
    res.json(task);
  } else {
    res.status(404).send('Task not found');
  }
});

router.route('/:taskId').put(async (req, res) => {
  const { taskId } = req.params;
  const task = req.body;
  const updatedTask = await tasksService.updateTask(taskId, task);
  if (updatedTask) {
    res.json(updatedTask);
  } else {
    res.status(404).send('Task not found');
  }
});

router.route('/:taskId').delete(async (req, res) => {
  const { taskId } = req.params;
  const result = await tasksService.deleteTask(taskId);
  if (result) {
    res.status(204).end();
  } else {
    res.status(404).send('Task not found');
  }
});

module.exports = router;
