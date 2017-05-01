var redAndBlue = function(v, n, translate, scale) {
    var red = map(abs(sin(n / 10)), 0, 1, 255, 100);
    var green = map(abs(cos(n / 30)), 0, 1, 200, 40);
    var blue = map(abs(sin(n / 10)), 0, 1, 0, 255);
    blendMode(ADD);
    fill(red, green, blue, 55);
    ellipse(translate.x + v.x * scale.x, translate.y + v.y * scale.y, 0.2);
};

var densityMaps01 = function(v, n, translate, scale) {
    // var red = map(abs(sin(n / 10)), 0, 1, 255, 100);
    // var green = map(abs(cos(n / 30)), 0, 1, 200, 40);
    // var blue = map(abs(sin(n / 10)), 0, 1, 0, 255);
    // blendMode(ADD);
    // fill(red, green, blue, 55);
    // ellipse(translate.x + v.x * scale.x, translate.y + v.y * scale.y, 0.2);

    //I have to write a much better algorithm that takes into consideration pixelDensity(2)

    //What if my algorithm would be..
    var x = Math.round((width / 2 + translate.x + v.x * scale.x) * 2) / 2;
    var y = Math.round((height / 2 + translate.y + v.y * scale.y) * 2) / 2;
    var pixelToChange = (x + (y * width)) * 8;
    // console.log("x : " + x + ", y : " + y + ", pixelToChange : " + pixelToChange);
    // console.log(pixels);
    if (pixels[pixelToChange] != null) {
        pixels[pixelToChange] = min(pixels[pixelToChange] + 1, 255);
        // console.log(pixels[pixelToChange]);
        pixels[pixelToChange + 1] = min(pixels[pixelToChange + 1] + 1, 255);
        pixels[pixelToChange + 2] = min(pixels[pixelToChange + 2] + 1, 255);
    }
};
