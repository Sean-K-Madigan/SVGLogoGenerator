const Text = require('./text');

describe('Text', () => {
  test('constructor should set properties correctly', () => {
    const content = 'Hello';
    const color = '#000000';
    const position = { x: 100, y: 200 };

    const text = new Text(content, color, position);

    expect(text.content).toBe(content);
    expect(text.color).toBe(color);
    expect(text.position).toEqual(position);
  });

  test('draw method should return SVG text element', () => {
    const content = 'Hello';
    const color = '#000000';
    const position = { x: 100, y: 200 };
    const text = new Text(content, color, position);

    const svgText = text.draw();

    expect(svgText).toContain(`<text x="${position.x}" y="${position.y}" text-anchor="middle" fill="${color}" font-size="66">${content}</text>`);
  });
});