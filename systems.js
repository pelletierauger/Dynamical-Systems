var newWaves001 = new System({
    constants: {
        a: 5,
        b: 3,
        c: 2,
        d: 1,
        e: 2,
        f: 1
    },
    scale: { x: 100, y: 100 },
    setup: function() {
        frameRate(30);
        fill(255, 50);
    },
    iteratedFunction: function(x, y, z, c) {
        return {
            x: sin(c.a * x) + cos(c.b * y) - tan(c.c * z),
            y: cos(c.d * y) + cos(c.e * x) + tan(c.f * z),
            z: z + 0.1
        };
    },
    displayFunction: function(v, n, translate, scale) {
        // var red = map(abs(sin(n / 10)), 0, 1, 255, 100);
        // var green = map(abs(cos(n / 30)), 0, 1, 200, 40);
        // var blue = map(abs(sin(n / 10)), 0, 1, 0, 255);
        // blendMode(ADD);
        // fill(red, green, blue, 255);
        // console.log(v);
        // fill(255);
        // ellipse(0, 0, 25);
        ellipse(translate.x + v.x * scale.x, translate.y + v.y * scale.y, 0.2);
    }
});
//------------------------------------------------------------------------------------------------------//
var newWaves002 = new System(newWaves001, {
    a: 1,
    b: 2,
    c: 3,
    d: 1,
    e: 2,
    f: 1
});

//------------------------------------------------------------------------------------------------------//
var newWaves003 = new System(newWaves001, {
    a: 3,
    b: 1,
    c: 1,
    d: 0.1,
    e: 0.1,
    f: 1
});
newWaves003.scale = { x: 300, y: 500 };
newWaves003.translate = { x: -750, y: 300 };
newWaves003.setup = function() {
    frameRate(30);
    fill(255, 50);
};

//------------------------------------------------------------------------------------------------------//
var goyaRecreation001 = new System({
    constants: {
        a: 1,
        b: 1,
        c: 1,
        d: 0.1,
        e: 1,
        f: 3.11
    },
    scale: { x: 100, y: 100 },
    setup: function() {
        frameRate(30);
        fill(255, 50);
    },
    iteratedFunction: goya,
    displayFunction: function(v, n, translate, scale) {
        ellipse((translate.x + v.x) * scale.x, (translate.y + v.y) * scale.y, 0.5);
    }
});

var goyaRecreation002 = new System(goyaRecreation001, {
    a: 1,
    b: 1,
    c: 1,
    d: 1,
    e: 1,
    f: 2
});

var goyaRecreation003 = new System(goyaRecreation001, {
    a: 2,
    b: 1,
    c: 1,
    d: 1,
    e: 1,
    f: 1
});

var goyaRecreation004 = new System(goyaRecreation001, {
    a: -1,
    b: 1,
    c: 1,
    d: 1,
    e: 1,
    f: 1
});

var goyaRecreation005 = new System(goyaRecreation001, {
    a: -2,
    b: 1,
    c: 1,
    d: 1,
    e: 1,
    f: 1
});

var goyaRecreation006 = new System(goyaRecreation001, {
    a: -2,
    b: 1,
    c: 1,
    d: 1,
    e: 1,
    f: 10
});
var goyaRecreation007 = new System(goyaRecreation006);
goyaRecreation007.displayFunction = redAndBlue;

var goyaRecreation008 = new System(goyaRecreation001, {
    a: -0.5,
    b: 1,
    c: 1,
    d: 1,
    e: 1,
    f: 10
});

var goyaRecreation009 = new System(goyaRecreation001, [1, 1, 1, 1, 2, 0.1]);

// goyaRecreation009.densityMapping = true;
// goyaRecreation009.displayFunction = densityMaps01;
// goyaRecreation009.iterationsPerFrame = 200000;

var goyaRecreation009zoom00 = new System(goyaRecreation009);
goyaRecreation009zoom00.scale = { x: 800 * 2, y: 800 * 2 };
goyaRecreation009zoom00.translate = { x: -950 / 800, y: -600 / 800 };
goyaRecreation009zoom00.setup = function() {
    frameRate(30);
    fill(255, 5);
};

var goyaRecreation009zoom01 = new System(goyaRecreation009);
goyaRecreation009zoom01.scale = { x: 800 * 1, y: 800 * 1 };
goyaRecreation009zoom01.translate = { x: -1300 / 800, y: -300 / 800 };
goyaRecreation009zoom01.setup = function() {
    frameRate(30);
    fill(255, 5);
};
goyaRecreation009zoom01.pos = { x: 0.1189223680421723, y: 3.348025374454316, z: 14892449.962903654 };
goyaRecreation009zoom01.n = 152244000;

var goyaRecreation009zoom02 = new System(goyaRecreation009);
goyaRecreation009zoom02.scale = { x: 150, y: 150 };
goyaRecreation009zoom02.translate = { x: 0.25, y: -180 / 800 };
goyaRecreation009zoom02.setup = function() {
    frameRate(30);
    fill(255, 5);
};
goyaRecreation009zoom02.pos = { x: 0.39513654455297703, y: -5.3355301338423, z: 20017650.00416858 };
goyaRecreation009zoom02.n = 200176500;

var goyaRecreation009zoom03 = new System(goyaRecreation009);
goyaRecreation009zoom03.scale = { x: 40, y: 40 };
goyaRecreation009zoom03.translate = { x: 0.25, y: -180 / 800 };
goyaRecreation009zoom03.setup = function() {
    frameRate(30);
    fill(255, 5);
};


var bigHole = new System({
    constants: {
        a: Math.sin(1 / 10),
        b: Math.cos(1 / 10),
        c: 1,
        d: 0.1,
        e: 1,
        f: 1
    },
    scale: { x: 70, y: 200 },
    setup: function() {
        frameRate(30);
        fill(255, 50);
    },
    iteratedFunction: function(x, y, z, c) {
        return {
            x: sin(c.a * x) + tan(c.b * x) - tan(c.c * z),
            y: sin(c.d * y) + cos(c.f * z),
            z: z + 0.1
        };
    },
    displayFunction: function(v, n, translate, scale) {
        // var red = map(abs(sin(n / 10)), 0, 1, 255, 100);
        // var green = map(abs(cos(n / 30)), 0, 1, 200, 40);
        // var blue = map(abs(sin(n / 10)), 0, 1, 0, 255);
        // blendMode(ADD);
        // fill(red, green, blue, 255);
        // console.log(v);
        // fill(255);
        // ellipse(0, 0, 25);
        ellipse(translate.x + v.x * scale.x, translate.y + v.y * scale.y, 0.2);
    }
});

var bigHole02 = new System(bigHole, [1, 0.995, 1, 0.1, 1, 1]);

var bigHole03 = new System(bigHole, [1, 0.995, 1, 1, 1, 3]);

var bigHole04 = new System(bigHole, [1 / 3, 3, 3, 3, 3, 1 / 3]);
bigHole04.scale = { x: 70, y: 190 };
bigHole04.setup = function() {
    frameRate(30);
    fill(255, 50);
};
bigHole04.displayFunction = function(v, n, translate, scale) {
    var red = map(abs(sin(n / 10)), 0, 1, 255, 100);
    var green = map(abs(cos(n / 30)), 0, 1, 200, 40);
    var blue = map(abs(sin(n / 10)), 0, 1, 0, 255);
    // blendMode(ADD);
    fill(red, green, blue, 250);
    // console.log(v);
    // fill(255);
    // ellipse(0, 0, 25);
    ellipse(translate.x + v.x * scale.x, translate.y + v.y * scale.y, 0.2);
};

var bigHole05 = new System(bigHole04, [1 / 3, 1 / 3, 1 / 3, 3, 3, 1 / 3]);
bigHole05.displayFunction = function(v, n, translate, scale) {
    var red = map(abs(sin(n / 10)), 0, 1, 255, 100);
    var green = map(abs(cos(n / 30)), 0, 1, 200, 40);
    var blue = map(abs(sin(n / 10)), 0, 1, 0, 255);
    // blendMode(ADD);
    fill(red, green, blue, 5);
    // console.log(v);
    // fill(255);
    // ellipse(0, 0, 25);
    ellipse(translate.x + v.x * scale.x, translate.y + v.y * scale.y, 0.2);
};

var bigHole06 = new System(bigHole04, [4, 1 / 2, 1, 1 / 4, 1, 1]);
bigHole06.scale = { x: 120, y: 280 };
bigHole06.displayFunction = function(v, n, translate, scale) {
    var red = map(abs(sin(n / 10)), 0, 1, 255, 100);
    var green = map(abs(cos(n / 30)), 0, 1, 200, 40);
    var blue = map(abs(sin(n / 10)), 0, 1, 0, 255);
    // blendMode(ADD);
    fill(red, green, blue, 5);
    // console.log(v);
    // fill(255);
    // ellipse(0, 0, 25);
    ellipse(translate.x + v.x * scale.x, translate.y + v.y * scale.y, 0.2);
};

var system = bigHole05;
