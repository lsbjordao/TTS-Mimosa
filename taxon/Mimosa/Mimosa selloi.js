"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mimosa_selloi = void 0;
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
// Description of Mimosa selloi
var Mimosa_selloi = new _1.Mimosa();
exports.Mimosa_selloi = Mimosa_selloi;
Mimosa_selloi.specificEpithet = 'selloi';
Mimosa_selloi.stems = new v1_1.Stems();
Mimosa_selloi.stipule = new v1_1.Stipule();
Mimosa_selloi.stipule.margin = new Stipule_1.MarginStipule();
Mimosa_selloi.stipule.adaxial = new Stipule_1.AdaxialStipule();
Mimosa_selloi.stipule.abaxial = new Stipule_1.AbaxialStipule();
Mimosa_selloi.leaf = new v1_1.Leaf();
Mimosa_selloi.leaf.petiole = new Leaf_1.Petiole();
Mimosa_selloi.leaf.bipinnate = new Leaf_1.Bipinnate();
Mimosa_selloi.leaf.bipinnate.rachis = new Bipinnate_1.Rachis();
Mimosa_selloi.leaf.bipinnate.rachis.spicule = new Spicule_1.Spicule();
Mimosa_selloi.leaf.bipinnate.pinnae = new Bipinnate_1.Pinnae();
Mimosa_selloi.leaf.bipinnate.pinnae.paraphillidia = new Pinnae_1.Paraphillidia();
Mimosa_selloi.leaf.bipinnate.pinnae.rachilla = new Pinnae_1.Rachilla();
Mimosa_selloi.leaf.bipinnate.pinnae.leaflet = new Pinnae_1.Leaflet();
Mimosa_selloi.leaf.bipinnate.pinnae.leaflet.margin = new Leaflet_1.MarginLeaflet();
Mimosa_selloi.leaf.bipinnate.pinnae.leaflet.adaxial = new Leaflet_1.AdaxialLeaflet();
Mimosa_selloi.leaf.bipinnate.pinnae.leaflet.abaxial = new Leaflet_1.AbaxialLeaflet();
Mimosa_selloi.inflorescence = new v1_1.Inflorescence();
Mimosa_selloi.inflorescence.peduncle = new Inflorescence_1.Peduncle();
Mimosa_selloi.inflorescence.capitate = new Inflorescence_1.CapitateInflorescence();
Mimosa_selloi.flower = new v1_1.Flower();
Mimosa_selloi.flower.bracteole = new Flower_1.Bracteole();
Mimosa_selloi.flower.merism = '4-merous';
Mimosa_selloi.flower.numberWhorlsOfStamens = 'diplostemonous';
Mimosa_selloi.flower.calyx = new Flower_1.Calyx();
Mimosa_selloi.flower.calyx.shape = 'campanulate';
Mimosa_selloi.flower.corolla = new Flower_1.Corolla();
Mimosa_selloi.flower.corolla.shape = 'campanulate';
Mimosa_selloi.androecium = new v1_1.Androecium();
Mimosa_selloi.androecium.filaments = new Androecium_1.Filaments();
Mimosa_selloi.androecium.filaments.colour = 'pinkish';
Mimosa_selloi.ginoecium = new v1_1.Ginoecium();
Mimosa_selloi.ginoecium.ovary = new Ginoecium_1.Ovary();
Mimosa_selloi.fruit = new v1_1.Fruit();
Mimosa_selloi.fruit.stipe = new Fruit_1.Stipe();
Mimosa_selloi.fruit.replum = new Fruit_1.Replum();
Mimosa_selloi.fruit.epicarp = new Fruit_1.Epicarp();
Mimosa_selloi.seed = new Seed_1.Seed();
// Description authorship
Mimosa_selloi.descriptionAuthorship = new v1_2.DescriptionAuthorship();
Mimosa_selloi.descriptionAuthorship.addAuthor({
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
Mimosa_selloi.addSource(source0);
