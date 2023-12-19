"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mimosa_bocainae = void 0;
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
var Trichomes_1 = require("../../characters/v1/Trichomes");
var Setiform_1 = require("../../characters/v1/Trichomes/Setiform");
// Description of Mimosa bocainae
var Mimosa_bocainae = new _1.Mimosa();
exports.Mimosa_bocainae = Mimosa_bocainae;
Mimosa_bocainae.specificEpithet = 'bocainae';
Mimosa_bocainae.stems = new v1_1.Stems();
Mimosa_bocainae.stems.trichomes = new v1_1.Trichomes();
Mimosa_bocainae.stems.trichomes.setiform = new Trichomes_1.Setiform();
Mimosa_bocainae.stems.trichomes.setiform.barbellate = new Setiform_1.SetiformBarbellate();
Mimosa_bocainae.stems.trichomes.setiform.barbellate.are = 'present';
Mimosa_bocainae.stems.trichomes.setiform.barbellate.density = 'densely';
Mimosa_bocainae.stipule = new v1_1.Stipule();
Mimosa_bocainae.stipule.margin = new Stipule_1.MarginStipule();
Mimosa_bocainae.stipule.adaxial = new Stipule_1.AdaxialStipule();
Mimosa_bocainae.stipule.abaxial = new Stipule_1.AbaxialStipule();
Mimosa_bocainae.leaf = new v1_1.Leaf();
Mimosa_bocainae.leaf.petiole = new Leaf_1.Petiole();
Mimosa_bocainae.leaf.bipinnate = new Leaf_1.Bipinnate();
Mimosa_bocainae.leaf.bipinnate.rachis = new Bipinnate_1.Rachis();
Mimosa_bocainae.leaf.bipinnate.rachis.spicule = new Spicule_1.Spicule();
Mimosa_bocainae.leaf.bipinnate.pinnae = new Bipinnate_1.Pinnae();
Mimosa_bocainae.leaf.bipinnate.pinnae.setNumberOfPairs(1);
Mimosa_bocainae.leaf.bipinnate.pinnae.paraphillidia = new Pinnae_1.Paraphillidia();
Mimosa_bocainae.leaf.bipinnate.pinnae.rachilla = new Pinnae_1.Rachilla();
Mimosa_bocainae.leaf.bipinnate.pinnae.leaflet = new Pinnae_1.Leaflet();
Mimosa_bocainae.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(26, 32);
Mimosa_bocainae.leaf.bipinnate.pinnae.leaflet.margin = new Leaflet_1.MarginLeaflet();
Mimosa_bocainae.leaf.bipinnate.pinnae.leaflet.adaxial = new Leaflet_1.AdaxialLeaflet();
Mimosa_bocainae.leaf.bipinnate.pinnae.leaflet.abaxial = new Leaflet_1.AbaxialLeaflet();
Mimosa_bocainae.inflorescence = new v1_1.Inflorescence();
Mimosa_bocainae.inflorescence.peduncle = new Inflorescence_1.Peduncle();
Mimosa_bocainae.inflorescence.capitate = new Inflorescence_1.CapitateInflorescence();
Mimosa_bocainae.flower = new v1_1.Flower();
Mimosa_bocainae.flower.bracteole = new Flower_1.Bracteole();
Mimosa_bocainae.flower.merism = '4-merous';
Mimosa_bocainae.flower.numberWhorlsOfStamens = 'isostemonous';
Mimosa_bocainae.flower.calyx = new Flower_1.Calyx();
Mimosa_bocainae.flower.calyx.shape = 'pappiform';
Mimosa_bocainae.flower.corolla = new Flower_1.Corolla();
Mimosa_bocainae.flower.corolla.shape = 'turbinate';
Mimosa_bocainae.androecium = new v1_1.Androecium();
Mimosa_bocainae.androecium.filaments = new Androecium_1.Filaments();
Mimosa_bocainae.androecium.filaments.colour = 'pinkish';
Mimosa_bocainae.ginoecium = new v1_1.Ginoecium();
Mimosa_bocainae.ginoecium.ovary = new Ginoecium_1.Ovary();
Mimosa_bocainae.fruit = new v1_1.Fruit();
Mimosa_bocainae.fruit.stipe = new Fruit_1.Stipe();
Mimosa_bocainae.fruit.replum = new Fruit_1.Replum();
Mimosa_bocainae.fruit.epicarp = new Fruit_1.Epicarp();
Mimosa_bocainae.seed = new Seed_1.Seed();
// Description authorship
Mimosa_bocainae.descriptionAuthorship = new v1_2.DescriptionAuthorship();
Mimosa_bocainae.descriptionAuthorship.addAuthor({
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
Mimosa_bocainae.addSource(source0);
