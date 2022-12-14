let input, button, greeting;

function setup() {
  // create canvas
  createCanvas(710, 400);

  input = createInput();
  input.position(170, 150);

  button = createButton('submit');
  button.position(input.x + input.width, 150);
  button.mousePressed(greet);

  greeting = createElement('h2', 'what should I call you?');
  greeting.position(175, 85);

  textAlign(CENTER);
  textSize(50);
}

function greet() {
  const name = input.value();
  greeting.html('hello ' + name + '!');
  input.value('');

  for (let i = 0; i < 200; i++) {
    push();
    fill(random(254), 152, 58);
    translate(random(width), random(height));
    rotate(random(2 * PI));
    text(name, 0, 0);
    pop();
  }
}
