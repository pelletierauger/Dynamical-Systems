var System = function(system) {
    this.pos = system.pos || { x: 0, y: 0, z: 0 };
    this.n = system.n || 0;
    this.constants = system.constants;
    this.animate = system.animate || false;
    this.backgroundColor = system.backgroundColor || 0;
    this.iterationsPerFrame = system.iterationsPerFrame;
    this.translate = system.translate || { x: 0, y: 0 };
    this.scale = system.scale || { x: 1, y: 1 };
    this.setup = system.setup;
    this.iteratedFunction = system.iteratedFunction;
    this.displayFunction = system.displayFunction;
    this.animation = system.animation ||  false;

};

System.prototype.runIteratedFunction = function() {
    // console.log(this.constants);
    this.pos = this.iteratedFunction(this.pos.x, this.pos.y, this.pos.z, this.constants);
    this.n++;
};

System.prototype.runDisplayFunction = function() {
    this.displayFunction(this.pos, this.n, this.translate, this.scale);
};
