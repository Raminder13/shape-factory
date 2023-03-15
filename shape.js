class Shape {
  constructor(name, color) {
    this._name = name;
    this._color = color;
  }

  get name() {
    return this._name;
  }

  get color() {
    return this._color;
  }

  getInfo() {
    return {
      name: this._name,
      color: this._color,
    };
  }
}

export { Shape };
