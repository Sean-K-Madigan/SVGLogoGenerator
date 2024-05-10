class Shape {
  constructor(color) {
    this.color = color;
  }

  draw() {
    throw new Error('Method "draw" must be implemented');
  }

  getTextPosition() {
    // This method should be overridden by subclasses
    throw new Error('Method "getTextPosition" must be implemented');
  }
}

class Square extends Shape {
  draw() {
    return `<rect x="50" y="10" width="200" height="200" style="fill:${this.color}"/>`;
  }

  getTextPosition() {
    return { x: "50%", y: "60%" };
  }
}

class Circle extends Shape {
  draw() {
    return `<circle y="10" cx="150" cy="100" r="100" style="fill:${this.color}"/>`;
  }

  getTextPosition() {
    return { x: "50%", y: "58%" };
  }
}

class Triangle extends Shape {
  draw() {
    return `<polygon points="150,0 300,200 0,200" style="fill:${this.color}"/>`;
  }

  getTextPosition() {
    return { x: "50%", y: "75%" };
  }
}

module.exports = { Square, Circle, Triangle };