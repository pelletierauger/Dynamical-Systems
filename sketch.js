var looping = true;

function setup() {
    createCanvas(windowWidth, windowHeight);
    system.setup();
    // noLoop();
}

function draw() {

    translate(width / 2, height / 2);
    if (system.animate) {
        background(system.backgroundColor);
    }
    for (var i = 0; i < system.iterationsPerFrame; i++) {
        system.runIteratedFunction();
        system.runDisplayFunction();
    }
}
