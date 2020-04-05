const uuid = require('uuid');

class Db {
  constructor(objects) {
    this.objects = objects.reduce((acc, obj) => {
      const { id } = obj;
      if (id === undefined) {
        throw Error('id must be defined');
      }
      acc[id] = obj;
      return acc;
    }, {});
  }
  getAll() {
    return Object.values(this.objects);
  }
  getById(id) {
    return this.objects[id];
  }
  add(obj) {
    const id = uuid();
    const newObj = { id, ...obj };
    this.objects[id] = newObj;
    return newObj;
  }
  update(id, obj) {
    if (!Object.prototype.hasOwnProperty.call(this.objects, id)) {
      return;
    }
    this.objects[id] = obj;
    return this.objects[id];
  }
  delete(id) {
    const obj = this.objects[id];
    if (obj === undefined) {
      return;
    }
    delete this.objects[id];
    return obj;
  }
}

module.exports = Db;
