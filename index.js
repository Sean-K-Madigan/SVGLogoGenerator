const inquirer = require('inquirer');
const fs = require('fs');
const { Square, Circle, Triangle } = require('./lib/shapes');
const Text = require('./lib/text');

// Shape classes mapping
const shapes = {
  'Square': Square,
  'Circle': Circle,
  'Triangle': Triangle
};

// Questions array
const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Please enter up to 3 characters to be displayed on your logo.',
    validate: function (value) {
      if (value.length <= 3) {
        return true;
      }
      return 'Invalid input, please only enter up to 3 characters of text.';
    }
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Please enter a color for the text of your logo:',
    validate: isValidColor,
  },
  {
    type: 'list',
    name: 'shape',
    message: 'What shape would you like your logo to be?',
    choices: ['Square', 'Circle', 'Triangle'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Please enter a color for the shape of your logo:',
    validate: isValidColor,
  },
]

// Validate color input to accept hexadecimals and colors
function isValidColor(color) {
  // Check if color is a valid hex color code
  if (/^#([0-9A-F]{3}){1,2}$/i.test(color)) return true;

  // Check if color is a valid color name (this is a simplified check and won't cover all valid CSS color names)
  if (/^[a-z]+$/i.test(color)) return true;

  return 'Invalid color. Please enter a valid color name or a hex color code.';
}

// Run inquirer and write svg
inquirer
  .prompt(questions)
  .then((answers) => {
    // Create an instance of the selected shape class
    const shape = new shapes[answers.shape](answers.shapeColor);

    // Draw the shape
    let svg = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">';

    svg += shape.draw();

    // Create an instance of the Text class
    const textPosition = shape.getTextPosition();
    const text = new Text(answers.text, answers.textColor, textPosition);

    // Draw the text
    svg += text.draw();

    // Close the SVG tag
    svg += '</svg>';

    // Write the SVG to a file
    fs.writeFile('logo.svg', svg, (err) => {
      if (err) throw err;
      console.log('Generated logo.svg');
    });
  });