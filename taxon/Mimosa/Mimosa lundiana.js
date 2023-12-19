"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mimosa_lundiana = void 0;
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
// Description of Mimosa lundiana
var Mimosa_lundiana = new _1.Mimosa();
exports.Mimosa_lundiana = Mimosa_lundiana;
Mimosa_lundiana.specificEpithet = 'lundiana';
Mimosa_lundiana.stems = new v1_1.Stems();
Mimosa_lundiana.stipule = new v1_1.Stipule();
Mimosa_lundiana.stipule.margin = new Stipule_1.MarginStipule();
Mimosa_lundiana.stipule.adaxial = new Stipule_1.AdaxialStipule();
Mimosa_lundiana.stipule.abaxial = new Stipule_1.AbaxialStipule();
Mimosa_lundiana.leaf = new v1_1.Leaf();
Mimosa_lundiana.leaf.petiole = new Leaf_1.Petiole();
Mimosa_lundiana.leaf.bipinnate = new Leaf_1.Bipinnate();
Mimosa_lundiana.leaf.bipinnate.rachis = new Bipinnate_1.Rachis();
Mimosa_lundiana.leaf.bipinnate.rachis.spicule = new Spicule_1.Spicule();
Mimosa_lundiana.leaf.bipinnate.pinnae = new Bipinnate_1.Pinnae();
Mimosa_lundiana.leaf.bipinnate.pinnae.setNumberOfPairs(1);
Mimosa_lundiana.leaf.bipinnate.pinnae.paraphillidia = new Pinnae_1.Paraphillidia();
Mimosa_lundiana.leaf.bipinnate.pinnae.rachilla = new Pinnae_1.Rachilla();
Mimosa_lundiana.leaf.bipinnate.pinnae.leaflet = new Pinnae_1.Leaflet();
Mimosa_lundiana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(12, 13);
Mimosa_lundiana.leaf.bipinnate.pinnae.leaflet.margin = new Leaflet_1.MarginLeaflet();
Mimosa_lundiana.leaf.bipinnate.pinnae.leaflet.adaxial = new Leaflet_1.AdaxialLeaflet();
Mimosa_lundiana.leaf.bipinnate.pinnae.leaflet.abaxial = new Leaflet_1.AbaxialLeaflet();
Mimosa_lundiana.inflorescence = new v1_1.Inflorescence();
Mimosa_lundiana.inflorescence.peduncle = new Inflorescence_1.Peduncle();
Mimosa_lundiana.inflorescence.capitate = new Inflorescence_1.CapitateInflorescence();
Mimosa_lundiana.flower = new v1_1.Flower();
Mimosa_lundiana.flower.bracteole = new Flower_1.Bracteole();
Mimosa_lundiana.flower.merism = '4-merous';
Mimosa_lundiana.flower.numberWhorlsOfStamens = 'isostemonous';
Mimosa_lundiana.flower.calyx = new Flower_1.Calyx();
Mimosa_lundiana.flower.calyx.shape = 'campanulate';
Mimosa_lundiana.flower.corolla = new Flower_1.Corolla();
Mimosa_lundiana.flower.corolla.shape = ['campanulate', 'turbinate'];
Mimosa_lundiana.androecium = new v1_1.Androecium();
Mimosa_lundiana.androecium.filaments = new Androecium_1.Filaments();
Mimosa_lundiana.androecium.filaments.colour = 'pinkish';
Mimosa_lundiana.ginoecium = new v1_1.Ginoecium();
Mimosa_lundiana.ginoecium.ovary = new Ginoecium_1.Ovary();
Mimosa_lundiana.fruit = new v1_1.Fruit();
Mimosa_lundiana.fruit.stipe = new Fruit_1.Stipe();
Mimosa_lundiana.fruit.replum = new Fruit_1.Replum();
Mimosa_lundiana.fruit.epicarp = new Fruit_1.Epicarp();
Mimosa_lundiana.seed = new Seed_1.Seed();
// Description authorship
Mimosa_lundiana.descriptionAuthorship = new v1_2.DescriptionAuthorship();
Mimosa_lundiana.descriptionAuthorship.addAuthor({
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
Mimosa_lundiana.addSource(source0);
