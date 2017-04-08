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
        ellipse(translate.x + v.x * scale.x, translate.y + v.y * scale.y, 0.5);
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

var system = goyaRecreation009;
