var newX = sin(vals[0] * x) + sin(vals[1] * y) - tan(vals[2] * z);
var newY = sin(vals[3] * x) - tan(vals[5] * z);




// Première zone mathématiques mystérieuse :
var vals = [1, 1, 1.1, 1, 2, 1];
var newX = sin(vals[0] * x) + tan(vals[1] * y) - tan(vals[2] * z);
var newY = sin(vals[3] * x) - tan(vals[5] * z);
ellipse(v.x * 120, v.y * 120, 1, 1);


// Deuxième zone :
var vals = [0.9, -0.8, 1, 1, 0.5, 0.1];
var newX = sin(vals[0] * x) + tan(vals[1] * x) - tan(vals[2] * z);
var newY = sin(vals[3] * x) + sin(vals[5] * z);
ellipse(v.x * 120, v.y * 160, 0.5, 0.5);

//Dessin fou
var vals = [-0.1, 0.411, 1, 1, 0.5, 0.1];
vals[0] = sin(40 / 60);
vals[1] = cos(40 / 60);
var newX = sin(vals[0] * x) + tan(vals[1] * y) - cos(vals[2] * z);
var newY = sin(vals[3] * x) + sin(vals[5] * z);
var newZ = z + 0.1;
ellipse(v.x * 120, v.y * 160, 0.5, 0.5);

//Dunes
var vals = [-0.1, 1, 1, 0.1, 0.5, 1];
var newX = sin(vals[0] * x) + tan(vals[1] * x) - tan(vals[2] * z);
var newY = sin(vals[3] * x) + sin(vals[5] * z);
var newZ = z + 0.1;
ellipse(v.x * 70, v.y * 200, 0.5, 0.5);

//Dunes, variations
var vals = [-0.1, -1, 1, 0.1, 5, 3];

//Très belle dune.
var vals = [-0.6, 1, 1, 0.1, 0.5, 1];

//Dune presque perdue
var vals = [-0.5, 1, 1, 0.1, 0.5, 1];

//Le grand trou
var vals = [1, 1, 1, 0.1, 1, 1];
vals[0] = sin(1 / 10);
vals[1] = cos(1 / 10);
var newX = sin(vals[0] * x) + tan(vals[1] * x) - tan(vals[2] * z);
var newY = sin(vals[3] * y) + cos(vals[5] * z);
var newZ = z + 0.1;
ellipse(v.x * 70, v.y * 200, 0.5, 0.5);

//Grand trou sans ré-attribution des valeurs vals[0] et vals[1] : 
var vals = [0.099, 0.995, 1, 0.1, 1, 1];

//Grand trou délirant, texture de bois
var vals = [1, 0.995, 1, 0.1, 1, 1];

//Grand trou, branches éparpillées
var vals = [1, 0.995, 1, 1, 1, 3];

//Grand trou, autre texture du bois
var vals = [1, 0.995, 1, 0.1, 1, 1];

//Goya
var vals = [1, 1, 1, 0.1, 1, 3.11];
var newX = sin(vals[0] * x) + cos(vals[1] * y) - tan(vals[2] * z);
var newY = cos(vals[3] * y) + cos(vals[4] * x) + tan(vals[5] * z);
var newZ = z + 0.1;
ellipse(v.x * 100, v.y * 100, 0.5, 0.5);

//Goya, ailleurs
var vals = [1, 1, 1, 1, 1, 2];

//Goya, pure folie
var vals = [2, 1, 1, 1, 1, 1];
//Goya, pures folies
var vals = [-1, 1, 1, 1, 1, 1];
var vals = [-2, 1, 1, 1, 1, 1];
var vals = [-2, 1, 1, 1, 1, 10];
var vals = [-0.5, 1, 1, 1, 1, 10];
var vals = [1, 1, 1, 1, 2, 0.1];
var vals = [1, 1, 1, 1, 1, 0.1];
var vals = [0.1, 1, 1, 1, 0.5, 0.1];
var vals = [0.01, 1, 20, 2, 0.5, 1];

//Goya, folle spirale venue de nulle part
var vals = [1.331, 1, 0.001, 1, 1.113, 0.01];
ellipse(v.x * 200 + 300, v.y * 200 - 600, 0.5, 0.5);

//Goya,
var vals = [1.331, 1, 1, 1, 1.113, 0.1];
ellipse(v.x * 80, v.y * 80, 0.5, 0.5);

//Pour Goya aussi.
var vals = [0.1, 1, 1.035, 0.1, 1.5, 3.11];
ellipse(v.x * 100, v.y * 100, 0.5, 0.5);

//Goya, Les petites plantes
var vals = [2, 0, 0.001, 1, 1, 0];
ellipse(v.x * 100, v.y * 100, 0.5, 0.5);

//Les nouvelles Dunes
var vals = [-0.1, 1, 1, 0.1, 0.5, 1];
var newX = pow(sin(vals[0] * x), 31) + tan(vals[1] * x) - tan(vals[2] * z);
var newY = pow(sin(vals[3] * x) + sin(vals[5] * z), 3);
var newZ = z + 0.1;
ellipse(v.x * 70, v.y * 200, 0.5, 0.5);

//-----------Lueurs des nouvelles dunes bleutées, après la pluie
var vals = [-0.1, 1, 1, 0.1, 0.5, 1];
var newX = pow(sin(vals[0] * x), 31) + tan(vals[1] * x) - tan(vals[2] * z);
var newY = pow(sin(vals[3] * x) + sin(vals[5] * z), 3);
var newZ = z + 0.001;
ellipse(v.x * 70, v.y * 200, 0.5, 0.5);

var vals = [-0.1, 1, 1, 0.1, 0.5, 3];

//--------La grande toile d'araignée, après la pluie
var vals = [1, 1, 1, 1, 1, 1];
var newX = pow(sin(vals[0] * x), 1) + tan(vals[1] * x) - tan(vals[2] * z);
var newY = pow(sin(vals[3] * y) + sin(vals[5] * z), 1);
var newZ = z + 0.001;
ellipse(v.x * 70, v.y * 200, 0.5, 0.5);

//Le Retour de Goya
var vals = [-1, 1, 1, 1, 1, 0.1];
var vals = [1, 1, 1, 1, 1, -0.1];