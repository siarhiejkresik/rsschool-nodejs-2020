function circularAdd(current, value, start, size) {
  if (value > 0) {
    return start + ((current - start + (value % size)) % size);
  }

  if (value < 0) {
    return start + ((current - start + size + (value % size)) % size);
  }

  return current;
}

module.exports = {
  circularAdd
};
