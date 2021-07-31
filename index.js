class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  };

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  };

  get(pos) {
    if (pos > this.items.length) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  };

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      this.items.sort((a, b) => a - b);
      return this.items[this.items.length-1]
    }
  };

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      this.items.sort((a, b) => a - b);
      return this.items[0]
    }
  };

  sum() {
    return this.items.reduce((acc, curr) => acc + curr ,0);
  };

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } 
      return this.sum() / this.items.length;
  }
};

module.exports = SortedList