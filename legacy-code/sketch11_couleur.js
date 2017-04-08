var looping = true;
var exporting = false;
var x, y, z;
var n = 0;
var vals = [1, 1, 1, 1, 1, -0.1];
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
    // vals[1] = cos(1 / 10);

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
        n++;
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
    var newX = sin(vals[0] * x) + cos(vals[1] * y) - tan(vals[2] * z);
    var newY = cos(vals[3] * y) + cos(vals[4] * x) + tan(vals[5] * z);
    var newZ = z + 0.1;

    // x1 = (1 + abs(a * y + z - c)) % d
    // y1 = (1 + abs(b * x - y - c)) % d
    // z1 = (1 + abs(-x - c)) % d

    var v = createVector(newX, newY, newZ);
    return v;
}

function drawPoint(v) {
    var red = map(abs(sin(n / 10)), 0, 1, 255, 100);
    var green = map(abs(cos(n / 10)), 0, 1, 200, 40);
    var blue = map(abs(sin(n / 10)), 0, 1, 0, 255);

    fill(red, green, blue, 55);

    ellipse(v.x * 100, v.y * 100, 0.5, 0.5);
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