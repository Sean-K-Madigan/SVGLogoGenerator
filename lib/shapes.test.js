const { Square, Circle, Triangle } = require('./shapes');

describe('Square', () => {
  test('draw method should return SVG for a square', () => {
    const color = 'red';
    const square = new Square(color);
    const expectedSvg = `<rect x="50" width="200" height="200" style="fill:red"/>`;

    expect(square.draw()).toBe(expectedSvg);
  });

  test('getTextPosition method should return correct position for text in a square', () => {
    const color = 'red';
    const square = new Square(color);
    const expectedPosition = { x: '50%', y: '60%' };

    expect(square.getTextPosition()).toEqual(expectedPosition);
  });
});

describe('Circle', () => {
  test('draw method should return SVG for a circle', () => {
    const color = 'blue';
    const circle = new Circle(color);
    const expectedSvg = `<circle cx="150" cy="100" r="100" style="fill:blue"/>`;

    expect(circle.draw()).toBe(expectedSvg);
  });

  test('getTextPosition method should return correct position for text in a circle', () => {
    const color = 'blue';
    const circle = new Circle(color);
    const expectedPosition = { x: '50%', y: '58%' };

    expect(circle.getTextPosition()).toEqual(expectedPosition);
  });
});

describe('Triangle', () => {
  test('draw method should return SVG for a triangle', () => {
    const color = 'green';
    const triangle = new Triangle(color);
    const expectedSvg = `<polygon points="150,0 300,200 0,200" style="fill:green"/>`;

    expect(triangle.draw()).toBe(expectedSvg);
  });

  test('getTextPosition method should return correct position for text in a triangle', () => {
    const color = 'green';
    const triangle = new Triangle(color);
    const expectedPosition = { x: '50%', y: '75%' };

    expect(triangle.getTextPosition()).toEqual(expectedPosition);
  });
});