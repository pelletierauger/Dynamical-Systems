var System = function(system, constants) {
    this.pos = system.pos || { x: 0, y: 0, z: 0 };
    this.n = system.n || 0;
    this.constants = constants || system.constants;
    if (!this.constants.a) {
        this.constants = {
            a: constants[0],
            b: constants[1],
            c: constants[2],
            d: constants[3],
            e: constants[4],
            f: constants[5]
        };
    }

    this.animate = system.animate || false;
    this.backgroundColor = system.backgroundColor || 0;
    this.iterationsPerFrame = system.iterationsPerFrame || 1500;
    this.translate = system.translate || { x: 0, y: 0 };
    this.scale = system.scale || { x: 1, y: 1 };
    this.setup = system.setup;
    this.iteratedFunction = system.iteratedFunction;
    this.displayFunction = system.displayFunction;
};

System.prototype.runIteratedFunction = function() {
    this.pos = this.iteratedFunction(this.pos.x, this.pos.y, this.pos.z, this.constants);
    this.n++;
};

System.prototype.runDisplayFunction = function() {
    this.displayFunction(this.pos, this.n, this.translate, this.scale);
};
