class Text {
  constructor(content, color, position) {
    this.content = content;
    this.color = color;
    this.position = position;
  }

  draw() {
    return `<text x="${this.position.x}" y="${this.position.y}" text-anchor="middle" fill="${this.color}" font-size="66">${this.content}</text>`;
  }
}

module.exports = Text;