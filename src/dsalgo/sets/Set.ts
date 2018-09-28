export default class Set {
  private items = {};

  has(value) {
    return this.items.hasOwnProperty(value);
  }

  add(value) {
    if (!this.has(value)) {
      this.items[value] = value;
      return true;
    }
    return false;
  }

  delete(value) {
    if (this.has(value)) {
      delete this.items[value];
      return true;
    }
    return false;
  }

  clear() {
    this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }

  values() {
    let values = [];
    for (let i = 0, keys = Object.keys(this.items); i < keys.length; i++) {
      values.push(this.items[keys[i]]);
    }
    return values;
  }

  union(otherSet) {
      let resultSet = new Set();
      let values = this.values();
      for(let i = 0; i < values.length; i++) {
          resultSet.add(values[i]);
      }
      values = otherSet.values();
      for(let i = 0; i < values.length; i++) {
        resultSet.add(values[i]);
      }
      return resultSet;
  }

  intersection(otherSet) {
    let intersectionSet = new Set();
    let values = this.values();
    for(let i = 0; i < values.length; i++) {
        if(otherSet.has(values[i])) {
            intersectionSet.add(values[i]);
        }
    }
    return intersectionSet;
  }
}
