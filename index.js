class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a, b) => {
      if (a > b) return 1;
      if (b > a) return -1;
      return 0;
    });
  }

  get(pos) {
    if (pos < 0 || pos >= this.items.length) {
      throw new Error('OutOfBounds');
    }

    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    }

    let total = this.items.reduce((a, b) => {
      return a + b;
    }, 0);
    return total;
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    let total = this.items.reduce((a, b) => {
      return a + b;
    }, 0);
    return total / this.items.length;
  }
}

module.exports = SortedList;
