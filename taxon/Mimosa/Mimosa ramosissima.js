"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mimosa_ramosissima = void 0;
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
// Description of Mimosa ramosissima
var Mimosa_ramosissima = new _1.Mimosa();
exports.Mimosa_ramosissima = Mimosa_ramosissima;
Mimosa_ramosissima.specificEpithet = 'ramosissima';
Mimosa_ramosissima.stems = new v1_1.Stems();
Mimosa_ramosissima.stipule = new v1_1.Stipule();
Mimosa_ramosissima.stipule.margin = new Stipule_1.MarginStipule();
Mimosa_ramosissima.stipule.adaxial = new Stipule_1.AdaxialStipule();
Mimosa_ramosissima.stipule.abaxial = new Stipule_1.AbaxialStipule();
Mimosa_ramosissima.leaf = new v1_1.Leaf();
Mimosa_ramosissima.leaf.petiole = new Leaf_1.Petiole();
Mimosa_ramosissima.leaf.bipinnate = new Leaf_1.Bipinnate();
Mimosa_ramosissima.leaf.bipinnate.rachis = new Bipinnate_1.Rachis();
Mimosa_ramosissima.leaf.bipinnate.rachis.spicule = new Spicule_1.Spicule();
Mimosa_ramosissima.leaf.bipinnate.pinnae = new Bipinnate_1.Pinnae();
Mimosa_ramosissima.leaf.bipinnate.pinnae.paraphillidia = new Pinnae_1.Paraphillidia();
Mimosa_ramosissima.leaf.bipinnate.pinnae.rachilla = new Pinnae_1.Rachilla();
Mimosa_ramosissima.leaf.bipinnate.pinnae.leaflet = new Pinnae_1.Leaflet();
Mimosa_ramosissima.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(4, 6);
Mimosa_ramosissima.leaf.bipinnate.pinnae.leaflet.margin = new Leaflet_1.MarginLeaflet();
Mimosa_ramosissima.leaf.bipinnate.pinnae.leaflet.adaxial = new Leaflet_1.AdaxialLeaflet();
Mimosa_ramosissima.leaf.bipinnate.pinnae.leaflet.abaxial = new Leaflet_1.AbaxialLeaflet();
Mimosa_ramosissima.inflorescence = new v1_1.Inflorescence();
Mimosa_ramosissima.inflorescence.peduncle = new Inflorescence_1.Peduncle();
Mimosa_ramosissima.inflorescence.capitate = new Inflorescence_1.CapitateInflorescence();
Mimosa_ramosissima.flower = new v1_1.Flower();
Mimosa_ramosissima.flower.bracteole = new Flower_1.Bracteole();
Mimosa_ramosissima.flower.merism = '4-merous';
Mimosa_ramosissima.flower.numberWhorlsOfStamens = 'isostemonous';
Mimosa_ramosissima.flower.calyx = new Flower_1.Calyx();
Mimosa_ramosissima.flower.calyx.shape = 'campanulate';
Mimosa_ramosissima.flower.corolla = new Flower_1.Corolla();
Mimosa_ramosissima.flower.corolla.shape = 'campanulate';
Mimosa_ramosissima.androecium = new v1_1.Androecium();
Mimosa_ramosissima.androecium.filaments = new Androecium_1.Filaments();
Mimosa_ramosissima.androecium.filaments.colour = 'pinkish';
Mimosa_ramosissima.ginoecium = new v1_1.Ginoecium();
Mimosa_ramosissima.ginoecium.ovary = new Ginoecium_1.Ovary();
Mimosa_ramosissima.fruit = new v1_1.Fruit();
Mimosa_ramosissima.fruit.stipe = new Fruit_1.Stipe();
Mimosa_ramosissima.fruit.replum = new Fruit_1.Replum();
Mimosa_ramosissima.fruit.epicarp = new Fruit_1.Epicarp();
Mimosa_ramosissima.seed = new Seed_1.Seed();
// Description authorship
Mimosa_ramosissima.descriptionAuthorship = new v1_2.DescriptionAuthorship();
Mimosa_ramosissima.descriptionAuthorship.addAuthor({
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
Mimosa_ramosissima.addSource(source0);
