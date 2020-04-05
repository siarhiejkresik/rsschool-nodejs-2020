const MemoryDb = require('../../repositories/memory');

class Tasks extends MemoryDb {
  getAllByBoardId(id) {
    return Object.values(this.objects).filter(task => task.boardId === id);
  }
  getAllByUserId(id) {
    return Object.values(this.objects).filter(task => task.userId === id);
  }
}

const data = [
  {
    id: '1',
    title: 'title1',
    order: 0,
    description: 'description1',
    userId: '1',
    boardId: '1',
    columnId: '1'
  },
  {
    id: '2',
    title: 'title2',
    order: 1,
    description: 'description2',
    userId: '2',
    boardId: '2',
    columnId: '2'
  }
];

const tasks = new Tasks(data);

module.exports = tasks;
