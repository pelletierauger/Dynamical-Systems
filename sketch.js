var looping = true;

function setup() {
    createCanvas(windowWidth, windowHeight);
    translate(width / 2, height / 2);
    background(system.backgroundColor);
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
    if (system.densityMapping) {
        loadPixels();
        for (var i = 0; i < system.iterationsPerFrame; i++) {
            system.runIteratedFunction();
            system.runDisplayFunction();
        }
        updatePixels();
    } else {
        for (var i = 0; i < system.iterationsPerFrame; i++) {
            system.runIteratedFunction();
            system.runDisplayFunction();
            // console.log(system.pos.x * system.scale.x);
        }
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
