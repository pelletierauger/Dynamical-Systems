var looping = true;

function setup() {
    createCanvas(windowWidth, windowHeight);
    system.setup();
    if (!looping) {
        noLoop();
    }
    noStroke();
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

function keyPressed() {
    if (keyCode === 32) {
        if (looping) {
            noLoop();
            looping = false;
        } else {
            loop();
            looping = true;
        }
    }
}
