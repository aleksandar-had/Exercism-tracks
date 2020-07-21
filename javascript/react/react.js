//
// This is only a SKELETON file for the 'React' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class InputCell {
  constructor(value) {
    this.value = value;
    this.listeners = [];
  }

  setValue(value) {
    this.value = value;
    this.notifyListeners();
  }

  addListener(listener) {
    this.listeners.push(listener);
  }

  notifyListeners() {
    for (let listener of this.listeners) {
      listener.notifyOnChange();
    }
  }
}

export class ComputeCell {
  constructor(inputCells, fn) {
    this.inputCells = inputCells;
    this.fn = fn;
    this.callbacks = [];
    this.value = this.fn(this.inputCells);
    for (let inputCell of this.inputCells) {
      inputCell.addListener(this);
    }
  }

  // since compute cells can depend on other compute cells
  addListener(listener) {
    for (let cell of this.inputCells) {
      cell.addListener(listener);
    }
  }

  notifyOnChange() {
    this.updateValue();
  }

  updateValue() {
    let lastValue = this.value;
    this.value = this.fn(this.inputCells);
    if (lastValue !== this.value) {
      for (let cb of this.callbacks) {
        cb.prompt(this);
      }
    }
  }

  addCallback(cb) {
    this.callbacks.push(cb);
  }

  removeCallback(cb) {
    this.callbacks = this.callbacks.filter((callback) => callback != cb);
  }
}

export class CallbackCell {
  constructor(fn) {
    this.fn = fn;
    this.values = [];
  }

  prompt(cell) {
    this.values.push(this.fn(cell));
  }
}
