const MemoryDb = require('../../repositories/memory');

class Boards extends MemoryDb {}

const data = [
  {
    id: '1',
    title: 'boards1',
    columns: [
      {
        id: '1',
        title: 'column1',
        order: 1
      },
      {
        id: '2',
        title: 'column2',
        order: 0
      }
    ]
  },
  {
    id: '2',
    title: 'board2',
    columns: [
      {
        id: '3',
        title: 'column3',
        order: 0
      },
      {
        id: '4',
        title: 'column4',
        order: 1
      }
    ]
  }
];

const boards = new Boards(data);

module.exports = boards;
