var looping = true;
var exporting = false;
var x, y, z;
var vals = [1.331, 1, 0.001, 1, 1.113, 0.01];
var drawCount = 0;
var finalFrameCount = 1;

function setup() {
    // createCanvas(windowWidth, 9 * windowWidth / 16);
    createCanvas(windowWidth, windowHeight);
    // createCanvas(windowHeight, windowWidth);
    background(0);
    fill(255, 55);
    strokeWeight(1);
    stroke(255, 1);
    frameRate(30);
    // noStroke();
    // noLoop();
    x = 0;
    y = 0;
    z = 0;
}

function draw() {
    // background(0);
    translate(width / 2, height / 2);
    // rotate(PI / 2 * 3);
    // translate(100, -height / 2.5);
    // vals[0] = sin(frameCount / 60) * 5;
    // vals[1] = cos(frameCount / 60);
    // vals[0] = sin(1 / 10);
    // vals[3] = sin(frameCount / 30) * 3;

    for (var i = 0; i < 1500; i++) {
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
        // if (drawCount > 10000) {
        //     // noLoop();
        //     frameExport(finalFrameCount);
        //     finalFrameCount++;
        //     drawCount = 0;
        //     background(0);
        //     // noLoop();
        //     // draw();
        // }
    }
    drawCount++;
}

function iterative(x, y, z) {
    // var newX = sin(vals[0] * x) - cos(vals[2] * x) - tan(vals[2] * z);
    // var newY = cos(vals[3] * y) + sin(vals[5] * z);
    // var vals = [1, 1, 1.1, 0.771, 71.33, 3 / 5.2];
    // var newX = sin(vals[0] * x) + sin(vals[1] * y) - tan(vals[2] * z);
    // var newY = sin(vals[3] * x) - tan(vals[5] * z);

    // var newXX = sin(vals[0] * x) + tan(vals[1] * x) - tan(vals[2] * z);
    // var newYY = sin(vals[3] * x) + sin(vals[5] * y);
    // // var newX = sin(vals[0] * x) + sin(vals[1] * y) - cos(vals[2] * z);
    // // var newY = sin(vals[3] * x) + sin(vals[4] * y) - cos(vals[5] * z);
    // newX = lerp(newX, newXX, 0.3);
    // newY = lerp(newY, newYY, 0.3);

    var newX = sin(vals[0] * x) + cos(vals[1] * y) - tan(vals[2] * z);
    var newY = cos(vals[3] * y) + cos(vals[4] * x) + tan(vals[5] * z);
    var newZ = z + 0.1;
    // var newX = sin(vals[0] * x) + tan(vals[1] * x) - tan(vals[2] * z);
    // var newY = sin(vals[3] * x) + sin(vals[5] * z);
    // var newZ = z + 0.1;
    var v = createVector(newX, newY, newZ);
    return v;
}

function drawPoint(v) {
    // v.mult(50);
    // var red = map(abs(sin(v.x / 5)), -1, 1, 0, 255);
    // var green = map(abs(cos(v.y / 10)), -1, 1, 0, 255);
    // var blue = map(abs(sin(v.z / 1)), -1, 1, 0, 255);
    // fill(red, green, blue, 55);

    ellipse(v.x * 600 + 800, v.y * 600 - 800, 0.5, 0.5);
    // ellipse(v.x * 200, v.y * 200, 0.5, 0.5);
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

function frameExport(draw) {
    var formattedFrameCount = "" + draw;
    while (formattedFrameCount.length < 5) {
        formattedFrameCount = "0" + formattedFrameCount;
    }
    save("iterative_007_" + formattedFrameCount + ".png");
}