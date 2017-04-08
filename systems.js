var dune001 = new System({
    pos: { x: 0, y: 0, z: 0 },
    n: 0,
    constants: {
        a: 5,
        b: 3,
        c: 2,
        d: 1,
        e: 2,
        f: 1
    },
    scale: { x: 100, y: 100 },
    animate: false,
    iterationsPerFrame: 1500,
    backgroundColor: 0,
    setup: function() {
        frameRate(30);
        background(0);
        // fill(255, 5);
        noStroke();
    },
    iteratedFunction: function(x, y, z, c) {
        //c is a set of constants.
        // console.log(c);
        var v = {
            x: sin(c.a * x) + cos(c.b * y) - tan(c.c * z),
            y: cos(c.d * y) + cos(c.e * x) + tan(c.f * z),
            z: z + 0.1
        };
        return v;
    },
    displayFunction: function(v, n, translate, scale) {
        // var red = map(abs(sin(n / 10)), 0, 1, 255, 100);
        // var green = map(abs(cos(n / 30)), 0, 1, 200, 40);
        // var blue = map(abs(sin(n / 10)), 0, 1, 0, 255);
        // blendMode(ADD);
        // fill(red, green, blue, 255);
        // console.log(v);
        fill(255);
        // ellipse(0, 0, 25);
        ellipse(translate.x + v.x * scale.x, translate.y + v.y * scale.y, 0.2);
    }
});

var system = dune001;
