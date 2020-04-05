class Task {
  static toResponse(task) {
    const { id, title, order, description, userId } = task;
    return { id, title, order, description, userId };
  }
}

module.exports = Task;
