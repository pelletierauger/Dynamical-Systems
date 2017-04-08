var goya = function(x, y, z, c) {
    return {
        x: sin(c.a * x) + cos(c.b * y) - tan(c.c * z),
        y: cos(c.d * y) + cos(c.e * x) + tan(c.f * z),
        z: z + 0.1
    };
};
