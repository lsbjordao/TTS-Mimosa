"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mimosa_velloziana_var_velloziana = void 0;
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
// Description of Mimosa velloziana var. velloziana
var Mimosa_velloziana_var_velloziana = new _1.Mimosa();
exports.Mimosa_velloziana_var_velloziana = Mimosa_velloziana_var_velloziana;
Mimosa_velloziana_var_velloziana.specificEpithet = 'velloziana var. velloziana';
Mimosa_velloziana_var_velloziana.stems = new v1_1.Stems();
Mimosa_velloziana_var_velloziana.stipule = new v1_1.Stipule();
Mimosa_velloziana_var_velloziana.stipule.margin = new Stipule_1.MarginStipule();
Mimosa_velloziana_var_velloziana.stipule.adaxial = new Stipule_1.AdaxialStipule();
Mimosa_velloziana_var_velloziana.stipule.abaxial = new Stipule_1.AbaxialStipule();
Mimosa_velloziana_var_velloziana.leaf = new v1_1.Leaf();
Mimosa_velloziana_var_velloziana.leaf.petiole = new Leaf_1.Petiole();
Mimosa_velloziana_var_velloziana.leaf.bipinnate = new Leaf_1.Bipinnate();
Mimosa_velloziana_var_velloziana.leaf.bipinnate.rachis = new Bipinnate_1.Rachis();
Mimosa_velloziana_var_velloziana.leaf.bipinnate.rachis.spicule = new Spicule_1.Spicule();
Mimosa_velloziana_var_velloziana.leaf.bipinnate.pinnae = new Bipinnate_1.Pinnae();
Mimosa_velloziana_var_velloziana.leaf.bipinnate.pinnae.paraphillidia = new Pinnae_1.Paraphillidia();
Mimosa_velloziana_var_velloziana.leaf.bipinnate.pinnae.rachilla = new Pinnae_1.Rachilla();
Mimosa_velloziana_var_velloziana.leaf.bipinnate.pinnae.leaflet = new Pinnae_1.Leaflet();
Mimosa_velloziana_var_velloziana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairs(1);
Mimosa_velloziana_var_velloziana.leaf.bipinnate.pinnae.leaflet.margin = new Leaflet_1.MarginLeaflet();
Mimosa_velloziana_var_velloziana.leaf.bipinnate.pinnae.leaflet.adaxial = new Leaflet_1.AdaxialLeaflet();
Mimosa_velloziana_var_velloziana.leaf.bipinnate.pinnae.leaflet.abaxial = new Leaflet_1.AbaxialLeaflet();
Mimosa_velloziana_var_velloziana.inflorescence = new v1_1.Inflorescence();
Mimosa_velloziana_var_velloziana.inflorescence.peduncle = new Inflorescence_1.Peduncle();
Mimosa_velloziana_var_velloziana.inflorescence.capitate = new Inflorescence_1.CapitateInflorescence();
Mimosa_velloziana_var_velloziana.flower = new v1_1.Flower();
Mimosa_velloziana_var_velloziana.flower.bracteole = new Flower_1.Bracteole();
Mimosa_velloziana_var_velloziana.flower.merism = '4-merous';
Mimosa_velloziana_var_velloziana.flower.numberWhorlsOfStamens = 'isostemonous';
Mimosa_velloziana_var_velloziana.flower.calyx = new Flower_1.Calyx();
Mimosa_velloziana_var_velloziana.flower.calyx.shape = 'campanulate';
Mimosa_velloziana_var_velloziana.flower.corolla = new Flower_1.Corolla();
Mimosa_velloziana_var_velloziana.flower.corolla.shape = ['tubulose', 'campanulate'];
Mimosa_velloziana_var_velloziana.androecium = new v1_1.Androecium();
Mimosa_velloziana_var_velloziana.androecium.filaments = new Androecium_1.Filaments();
Mimosa_velloziana_var_velloziana.androecium.filaments.colour = 'pinkish';
Mimosa_velloziana_var_velloziana.ginoecium = new v1_1.Ginoecium();
Mimosa_velloziana_var_velloziana.ginoecium.ovary = new Ginoecium_1.Ovary();
Mimosa_velloziana_var_velloziana.fruit = new v1_1.Fruit();
Mimosa_velloziana_var_velloziana.fruit.stipe = new Fruit_1.Stipe();
Mimosa_velloziana_var_velloziana.fruit.replum = new Fruit_1.Replum();
Mimosa_velloziana_var_velloziana.fruit.epicarp = new Fruit_1.Epicarp();
Mimosa_velloziana_var_velloziana.seed = new Seed_1.Seed();
// Description authorship
Mimosa_velloziana_var_velloziana.descriptionAuthorship = new v1_2.DescriptionAuthorship();
Mimosa_velloziana_var_velloziana.descriptionAuthorship.addAuthor({
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
Mimosa_velloziana_var_velloziana.addSource(source0);
