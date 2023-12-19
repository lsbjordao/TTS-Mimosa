"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mimosa_invisa_var_macrostachya = void 0;
// Import genus Mimosa
var _1 = require(".");
// Import characters
var v1_1 = require("../../characters/v1");
var Trichomes_1 = require("../../characters/v1/Trichomes");
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
// Description of Mimosa invisa_var_macrostachya
var Mimosa_invisa_var_macrostachya = new _1.Mimosa();
exports.Mimosa_invisa_var_macrostachya = Mimosa_invisa_var_macrostachya;
Mimosa_invisa_var_macrostachya.specificEpithet = 'invisa var. macrostachya';
Mimosa_invisa_var_macrostachya.stems = new v1_1.Stems();
Mimosa_invisa_var_macrostachya.stipule = new v1_1.Stipule();
Mimosa_invisa_var_macrostachya.stipule.margin = new Stipule_1.MarginStipule();
Mimosa_invisa_var_macrostachya.stipule.adaxial = new Stipule_1.AdaxialStipule();
Mimosa_invisa_var_macrostachya.stipule.abaxial = new Stipule_1.AbaxialStipule();
Mimosa_invisa_var_macrostachya.leaf = new v1_1.Leaf();
Mimosa_invisa_var_macrostachya.leaf.petiole = new Leaf_1.Petiole();
Mimosa_invisa_var_macrostachya.leaf.bipinnate = new Leaf_1.Bipinnate();
Mimosa_invisa_var_macrostachya.leaf.bipinnate.rachis = new Bipinnate_1.Rachis();
Mimosa_invisa_var_macrostachya.leaf.bipinnate.rachis.spicule = new Spicule_1.Spicule();
Mimosa_invisa_var_macrostachya.leaf.bipinnate.pinnae = new Bipinnate_1.Pinnae();
Mimosa_invisa_var_macrostachya.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(14, 22);
Mimosa_invisa_var_macrostachya.leaf.bipinnate.pinnae.paraphillidia = new Pinnae_1.Paraphillidia();
Mimosa_invisa_var_macrostachya.leaf.bipinnate.pinnae.rachilla = new Pinnae_1.Rachilla();
Mimosa_invisa_var_macrostachya.leaf.bipinnate.pinnae.leaflet = new Pinnae_1.Leaflet();
Mimosa_invisa_var_macrostachya.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(36, 48);
Mimosa_invisa_var_macrostachya.leaf.bipinnate.pinnae.leaflet.margin = new Leaflet_1.MarginLeaflet();
Mimosa_invisa_var_macrostachya.leaf.bipinnate.pinnae.leaflet.margin.trichomes = new v1_1.Trichomes();
Mimosa_invisa_var_macrostachya.leaf.bipinnate.pinnae.leaflet.margin.trichomes.filiform = new Trichomes_1.Filiform();
Mimosa_invisa_var_macrostachya.leaf.bipinnate.pinnae.leaflet.margin.trichomes.filiform.are = 'present';
Mimosa_invisa_var_macrostachya.leaf.bipinnate.pinnae.leaflet.margin.trichomes.filiform.orientation = 'antrorse';
Mimosa_invisa_var_macrostachya.leaf.bipinnate.pinnae.leaflet.margin.trichomes.filiform.numberOfCells = 'unicelullar';
Mimosa_invisa_var_macrostachya.leaf.bipinnate.pinnae.leaflet.adaxial = new Leaflet_1.AdaxialLeaflet();
Mimosa_invisa_var_macrostachya.leaf.bipinnate.pinnae.leaflet.abaxial = new Leaflet_1.AbaxialLeaflet();
Mimosa_invisa_var_macrostachya.inflorescence = new v1_1.Inflorescence();
Mimosa_invisa_var_macrostachya.inflorescence.peduncle = new Inflorescence_1.Peduncle();
Mimosa_invisa_var_macrostachya.inflorescence.spicate = new Inflorescence_1.Spicate();
Mimosa_invisa_var_macrostachya.flower = new v1_1.Flower();
Mimosa_invisa_var_macrostachya.flower.bracteole = new Flower_1.Bracteole();
Mimosa_invisa_var_macrostachya.flower.merism = ['5-merous', '6-merous'];
Mimosa_invisa_var_macrostachya.flower.numberWhorlsOfStamens = 'isostemonous';
Mimosa_invisa_var_macrostachya.flower.calyx = new Flower_1.Calyx();
Mimosa_invisa_var_macrostachya.flower.calyx.shape = 'campanulate';
Mimosa_invisa_var_macrostachya.flower.corolla = new Flower_1.Corolla();
Mimosa_invisa_var_macrostachya.flower.corolla.shape = 'turbinate';
Mimosa_invisa_var_macrostachya.androecium = new v1_1.Androecium();
Mimosa_invisa_var_macrostachya.androecium.filaments = new Androecium_1.Filaments();
Mimosa_invisa_var_macrostachya.androecium.filaments.colour = 'pinkish';
Mimosa_invisa_var_macrostachya.ginoecium = new v1_1.Ginoecium();
Mimosa_invisa_var_macrostachya.ginoecium.ovary = new Ginoecium_1.Ovary();
Mimosa_invisa_var_macrostachya.fruit = new v1_1.Fruit();
Mimosa_invisa_var_macrostachya.fruit.stipe = new Fruit_1.Stipe();
Mimosa_invisa_var_macrostachya.fruit.replum = new Fruit_1.Replum();
Mimosa_invisa_var_macrostachya.fruit.epicarp = new Fruit_1.Epicarp();
Mimosa_invisa_var_macrostachya.seed = new Seed_1.Seed();
// Description authorship
Mimosa_invisa_var_macrostachya.descriptionAuthorship = new v1_2.DescriptionAuthorship();
Mimosa_invisa_var_macrostachya.descriptionAuthorship.addAuthor({
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
Mimosa_invisa_var_macrostachya.addSource(source0);
/// Trichomes
var source1 = new v1_2.Source();
source1.sourceType = 'article';
source1.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.';
source1.year = 2020;
source1.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization';
source1.journal = 'Flora';
source1.number = 272;
source1.pages = 151702;
source1.figure = '1E';
source1.obtainingMethod = 'opticalMicroscope';
Mimosa_invisa_var_macrostachya.leaf.bipinnate.pinnae.leaflet.margin.trichomes.filiform.addSource(source1);
