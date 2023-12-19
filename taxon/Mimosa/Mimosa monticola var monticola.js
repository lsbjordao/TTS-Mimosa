"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mimosa_monticola_var_monticola = void 0;
// Import genus Mimosa
var _1 = require(".");
// Import characters
var v1_1 = require("../../characters/v1");
var Leaf_1 = require("../../characters/v1/Leaf");
var Bipinnate_1 = require("../../characters/v1/Leaf/Bipinnate");
var Spicule_1 = require("../../characters/v1/Leaf/Bipinnate/Rachis/Spicule");
var Pinnae_1 = require("../../characters/v1/Leaf/Bipinnate/Pinnae");
var Leaflet_1 = require("../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet");
var Stipule_1 = require("../../characters/v1/Stipule");
var Inflorescence_1 = require("../../characters/v1/Inflorescence");
var Flower_1 = require("../../characters/v1/Flower");
var Fruit_1 = require("../../characters/v1/Fruit");
var Androecium_1 = require("../../characters/v1/Androecium");
var Ginoecium_1 = require("../../characters/v1/Ginoecium");
var Seed_1 = require("../../characters/v1/Seed");
// Import annotation classes
var v1_2 = require("../../characters/v1");
// Description of Mimosa monticola var monticola
var Mimosa_monticola_var_monticola = new _1.Mimosa();
exports.Mimosa_monticola_var_monticola = Mimosa_monticola_var_monticola;
Mimosa_monticola_var_monticola.specificEpithet = 'monticola var monticola';
Mimosa_monticola_var_monticola.stems = new v1_1.Stems();
Mimosa_monticola_var_monticola.stipule = new v1_1.Stipule();
Mimosa_monticola_var_monticola.stipule.margin = new Stipule_1.MarginStipule();
Mimosa_monticola_var_monticola.stipule.adaxial = new Stipule_1.AdaxialStipule();
Mimosa_monticola_var_monticola.stipule.abaxial = new Stipule_1.AbaxialStipule();
Mimosa_monticola_var_monticola.leaf = new v1_1.Leaf();
Mimosa_monticola_var_monticola.leaf.petiole = new Leaf_1.Petiole();
Mimosa_monticola_var_monticola.leaf.bipinnate = new Leaf_1.Bipinnate();
Mimosa_monticola_var_monticola.leaf.bipinnate.rachis = new Bipinnate_1.Rachis();
Mimosa_monticola_var_monticola.leaf.bipinnate.rachis.spicule = new Spicule_1.Spicule();
Mimosa_monticola_var_monticola.leaf.bipinnate.pinnae = new Bipinnate_1.Pinnae();
Mimosa_monticola_var_monticola.leaf.bipinnate.pinnae.setNumberOfPairs(1);
Mimosa_monticola_var_monticola.leaf.bipinnate.pinnae.paraphillidia = new Pinnae_1.Paraphillidia();
Mimosa_monticola_var_monticola.leaf.bipinnate.pinnae.rachilla = new Pinnae_1.Rachilla();
Mimosa_monticola_var_monticola.leaf.bipinnate.pinnae.leaflet = new Pinnae_1.Leaflet();
Mimosa_monticola_var_monticola.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(11, 15);
Mimosa_monticola_var_monticola.leaf.bipinnate.pinnae.leaflet.margin = new Leaflet_1.MarginLeaflet();
Mimosa_monticola_var_monticola.leaf.bipinnate.pinnae.leaflet.adaxial = new Leaflet_1.AdaxialLeaflet();
Mimosa_monticola_var_monticola.leaf.bipinnate.pinnae.leaflet.abaxial = new Leaflet_1.AbaxialLeaflet();
Mimosa_monticola_var_monticola.inflorescence = new v1_1.Inflorescence();
Mimosa_monticola_var_monticola.inflorescence.peduncle = new Inflorescence_1.Peduncle();
Mimosa_monticola_var_monticola.inflorescence.capitate = new Inflorescence_1.CapitateInflorescence();
Mimosa_monticola_var_monticola.flower = new v1_1.Flower();
Mimosa_monticola_var_monticola.flower.bracteole = new Flower_1.Bracteole();
Mimosa_monticola_var_monticola.flower.merism = '4-merous';
Mimosa_monticola_var_monticola.flower.numberWhorlsOfStamens = 'isostemonous';
Mimosa_monticola_var_monticola.flower.calyx = new Flower_1.Calyx();
Mimosa_monticola_var_monticola.flower.calyx.shape = 'campanulate';
Mimosa_monticola_var_monticola.flower.corolla = new Flower_1.Corolla();
Mimosa_monticola_var_monticola.flower.corolla.shape = 'campanulate';
Mimosa_monticola_var_monticola.androecium = new v1_1.Androecium();
Mimosa_monticola_var_monticola.androecium.filaments = new Androecium_1.Filaments();
Mimosa_monticola_var_monticola.androecium.filaments.colour = 'pinkish';
Mimosa_monticola_var_monticola.ginoecium = new v1_1.Ginoecium();
Mimosa_monticola_var_monticola.ginoecium.ovary = new Ginoecium_1.Ovary();
Mimosa_monticola_var_monticola.fruit = new v1_1.Fruit();
Mimosa_monticola_var_monticola.fruit.stipe = new Fruit_1.Stipe();
Mimosa_monticola_var_monticola.fruit.replum = new Fruit_1.Replum();
Mimosa_monticola_var_monticola.fruit.epicarp = new Fruit_1.Epicarp();
Mimosa_monticola_var_monticola.seed = new Seed_1.Seed();
// Description authorship
Mimosa_monticola_var_monticola.descriptionAuthorship = new v1_2.DescriptionAuthorship();
Mimosa_monticola_var_monticola.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 1692107172
});
// Sources
var source0 = new v1_2.Source();
source0.sourceType = 'article';
source0.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.';
source0.year = 2018;
source0.title = 'Toward a Census of *Mimosa* (Leguminosae) in the Atlantic Domain, Southeastern Brazil';
source0.journal = 'Systematic Botany';
source0.volume = 43;
source0.number = 1;
source0.pages = 162 - 197;
Mimosa_monticola_var_monticola.addSource(source0);
