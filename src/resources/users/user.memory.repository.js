const MemoryDb = require('../../repositories/memory');

class Users extends MemoryDb {}

const data = [
  {
    id: '1',
    name: 'user',
    login: 'login1',
    password: 'password1'
  },
  {
    id: '2',
    name: 'user',
    login: 'login2',
    password: 'password2'
  }
];

const users = new Users(data);

module.exports = users;
