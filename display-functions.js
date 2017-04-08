var redAndBlue = function(v, n, translate, scale) {
    var red = map(abs(sin(n / 10)), 0, 1, 255, 100);
    var green = map(abs(cos(n / 30)), 0, 1, 200, 40);
    var blue = map(abs(sin(n / 10)), 0, 1, 0, 255);
    blendMode(ADD);
    fill(red, green, blue, 55);
    ellipse(translate.x + v.x * scale.x, translate.y + v.y * scale.y, 0.2);
};
