function setup() {
    createCanvas(640, 240);

    walker = new Walker();
    background(255);
}

function draw() {
    // draw loops forever and ever (until you stop it)
    walker.step();
    walker.show();
}