"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mimosa_candollei = void 0;
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
// Description of Mimosa candollei
var Mimosa_candollei = new _1.Mimosa();
exports.Mimosa_candollei = Mimosa_candollei;
Mimosa_candollei.specificEpithet = 'candollei';
Mimosa_candollei.stems = new v1_1.Stems();
Mimosa_candollei.stipule = new v1_1.Stipule();
Mimosa_candollei.stipule.margin = new Stipule_1.MarginStipule();
Mimosa_candollei.stipule.adaxial = new Stipule_1.AdaxialStipule();
Mimosa_candollei.stipule.abaxial = new Stipule_1.AbaxialStipule();
Mimosa_candollei.leaf = new v1_1.Leaf();
Mimosa_candollei.leaf.petiole = new Leaf_1.Petiole();
Mimosa_candollei.leaf.bipinnate = new Leaf_1.Bipinnate();
Mimosa_candollei.leaf.bipinnate.rachis = new Bipinnate_1.Rachis();
Mimosa_candollei.leaf.bipinnate.rachis.spicule = new Spicule_1.Spicule();
Mimosa_candollei.leaf.bipinnate.pinnae = new Bipinnate_1.Pinnae();
Mimosa_candollei.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 3);
Mimosa_candollei.leaf.bipinnate.pinnae.paraphillidia = new Pinnae_1.Paraphillidia();
Mimosa_candollei.leaf.bipinnate.pinnae.rachilla = new Pinnae_1.Rachilla();
Mimosa_candollei.leaf.bipinnate.pinnae.leaflet = new Pinnae_1.Leaflet();
Mimosa_candollei.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(13, 20);
Mimosa_candollei.leaf.bipinnate.pinnae.leaflet.margin = new Leaflet_1.MarginLeaflet();
Mimosa_candollei.leaf.bipinnate.pinnae.leaflet.adaxial = new Leaflet_1.AdaxialLeaflet();
Mimosa_candollei.leaf.bipinnate.pinnae.leaflet.abaxial = new Leaflet_1.AbaxialLeaflet();
Mimosa_candollei.inflorescence = new v1_1.Inflorescence();
Mimosa_candollei.inflorescence.peduncle = new Inflorescence_1.Peduncle();
Mimosa_candollei.inflorescence.capitate = new Inflorescence_1.CapitateInflorescence();
Mimosa_candollei.flower = new v1_1.Flower();
Mimosa_candollei.flower.bracteole = new Flower_1.Bracteole();
Mimosa_candollei.flower.merism = '5-merous';
Mimosa_candollei.flower.numberWhorlsOfStamens = 'diplostemonous';
Mimosa_candollei.flower.calyx = new Flower_1.Calyx();
Mimosa_candollei.flower.calyx.shape = 'campanulate';
Mimosa_candollei.flower.corolla = new Flower_1.Corolla();
Mimosa_candollei.flower.corolla.shape = 'turbinate';
Mimosa_candollei.androecium = new v1_1.Androecium();
Mimosa_candollei.androecium.filaments = new Androecium_1.Filaments();
Mimosa_candollei.androecium.filaments.colour = 'pinkish';
Mimosa_candollei.ginoecium = new v1_1.Ginoecium();
Mimosa_candollei.ginoecium.ovary = new Ginoecium_1.Ovary();
Mimosa_candollei.fruit = new v1_1.Fruit();
Mimosa_candollei.fruit.stipe = new Fruit_1.Stipe();
Mimosa_candollei.fruit.replum = new Fruit_1.Replum();
Mimosa_candollei.fruit.epicarp = new Fruit_1.Epicarp();
Mimosa_candollei.seed = new Seed_1.Seed();
// Description authorship
Mimosa_candollei.descriptionAuthorship = new v1_2.DescriptionAuthorship();
Mimosa_candollei.descriptionAuthorship.addAuthor({
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
Mimosa_candollei.addSource(source0);
