var looping = true;
var exporting = false;
var x, y, z;
var vals = [1, 1, 1.1, 1, 2, 1];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    fill(255, 25);
    strokeWeight(1);
    stroke(255, 125);
    // frameRate(10);
    // noStroke();
    // noLoop();
    x = 0;
    y = 0;
    z = 0;
}

function draw() {
    background(0);
    translate(width / 2, height / 2);
    vals[0] = sin(frameCount / 60);
    vals[1] = cos(frameCount / 60);
    for (var i = 0; i < 15000; i++) {
        var point = iterative(x, y, z);
        // var red = map(sin(i), -1, 1, 255, 5);
        // var green = map(sin(x), -1, 1, 255, 0);
        // var blue = map(cos(y), -1, 1, 0, 255);
        // fill(red, green, blue, 100);
        drawPoint(point);
        x = point.x;
        y = point.y;
        z = point.z;
        // if (i === 149999 && frameCount < 400) {
        //     frameExport();
        //     // noLoop();
        //     // draw();
        // }
        // if (frameCount > 400) {
        //     // frameExport();
        //     noLoop();
        //     // draw();
        // }
    }
}

function iterative(x, y, z) {
    var newX = sin(vals[0] * x) + tan(vals[1] * y) - tan(vals[2] * z);
    var newY = sin(vals[3] * x) - tan(vals[5] * z);
    // var newX = sin(vals[0] * x) + sin(vals[1] * y) - cos(vals[2] * z);
    // var newY = sin(vals[3] * x) + sin(vals[4] * y) - cos(vals[5] * z);
    var newZ = z + 0.1;
    var v = createVector(newX, newY, newZ);
    return v;
}

function drawPoint(v) {
    // v.mult(50);
    ellipse(v.x * 120, v.y * 120, 1, 1);
    // stroke(255);
    // point(v.x * 170, v.y * 120);
    // console.log(v.x);
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

function frameExport() {
    var formattedFrameCount = "" + frameCount;
    while (formattedFrameCount.length < 5) {
        formattedFrameCount = "0" + formattedFrameCount;
    }
    save("iterative_005_" + formattedFrameCount + ".png");
}