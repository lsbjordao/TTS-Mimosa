"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mimosa_pudica_var_hispida = void 0;
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
// Description of Mimosa pudica_var_hispida
var Mimosa_pudica_var_hispida = new _1.Mimosa();
exports.Mimosa_pudica_var_hispida = Mimosa_pudica_var_hispida;
Mimosa_pudica_var_hispida.specificEpithet = 'pudica var. hispida';
Mimosa_pudica_var_hispida.stems = new v1_1.Stems();
Mimosa_pudica_var_hispida.stems.trichomes = new v1_1.Trichomes();
Mimosa_pudica_var_hispida.stems.trichomes.filiform = new Trichomes_1.Filiform();
Mimosa_pudica_var_hispida.stems.trichomes.filiform.are = 'present';
Mimosa_pudica_var_hispida.stems.trichomes.setiform = new Trichomes_1.Setiform();
Mimosa_pudica_var_hispida.stems.trichomes.setiform.are = 'present';
Mimosa_pudica_var_hispida.stipule = new v1_1.Stipule();
Mimosa_pudica_var_hispida.stipule.margin = new Stipule_1.MarginStipule();
Mimosa_pudica_var_hispida.stipule.adaxial = new Stipule_1.AdaxialStipule();
Mimosa_pudica_var_hispida.stipule.abaxial = new Stipule_1.AbaxialStipule();
Mimosa_pudica_var_hispida.leaf = new v1_1.Leaf();
Mimosa_pudica_var_hispida.leaf.petiole = new Leaf_1.Petiole();
Mimosa_pudica_var_hispida.leaf.bipinnate = new Leaf_1.Bipinnate();
Mimosa_pudica_var_hispida.leaf.bipinnate.rachis = new Bipinnate_1.Rachis();
Mimosa_pudica_var_hispida.leaf.bipinnate.rachis.spicule = new Spicule_1.Spicule();
Mimosa_pudica_var_hispida.leaf.bipinnate.pinnae = new Bipinnate_1.Pinnae();
Mimosa_pudica_var_hispida.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(1);
Mimosa_pudica_var_hispida.leaf.bipinnate.pinnae.setNumberOfPairs(2);
Mimosa_pudica_var_hispida.leaf.bipinnate.pinnae.paraphillidia = new Pinnae_1.Paraphillidia();
Mimosa_pudica_var_hispida.leaf.bipinnate.pinnae.rachilla = new Pinnae_1.Rachilla();
Mimosa_pudica_var_hispida.leaf.bipinnate.pinnae.leaflet = new Pinnae_1.Leaflet();
Mimosa_pudica_var_hispida.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(1);
Mimosa_pudica_var_hispida.leaf.bipinnate.pinnae.leaflet.setNumberOfPairs(2);
Mimosa_pudica_var_hispida.leaf.bipinnate.pinnae.leaflet.margin = new Leaflet_1.MarginLeaflet();
Mimosa_pudica_var_hispida.leaf.bipinnate.pinnae.leaflet.adaxial = new Leaflet_1.AdaxialLeaflet();
Mimosa_pudica_var_hispida.leaf.bipinnate.pinnae.leaflet.abaxial = new Leaflet_1.AbaxialLeaflet();
Mimosa_pudica_var_hispida.inflorescence = new v1_1.Inflorescence();
Mimosa_pudica_var_hispida.inflorescence.peduncle = new Inflorescence_1.Peduncle();
Mimosa_pudica_var_hispida.inflorescence.capitate = new Inflorescence_1.CapitateInflorescence();
Mimosa_pudica_var_hispida.flower = new v1_1.Flower();
Mimosa_pudica_var_hispida.flower.bracteole = new Flower_1.Bracteole();
Mimosa_pudica_var_hispida.flower.merism = '4-merous';
Mimosa_pudica_var_hispida.flower.numberWhorlsOfStamens = 'isostemonous';
Mimosa_pudica_var_hispida.flower.calyx = new Flower_1.Calyx();
Mimosa_pudica_var_hispida.flower.calyx.shape = 'campanulate';
Mimosa_pudica_var_hispida.flower.corolla = new Flower_1.Corolla();
Mimosa_pudica_var_hispida.flower.corolla.shape = 'campanulate';
Mimosa_pudica_var_hispida.androecium = new v1_1.Androecium();
Mimosa_pudica_var_hispida.androecium.filaments = new Androecium_1.Filaments();
Mimosa_pudica_var_hispida.androecium.filaments.colour = 'pinkish';
Mimosa_pudica_var_hispida.ginoecium = new v1_1.Ginoecium();
Mimosa_pudica_var_hispida.ginoecium.ovary = new Ginoecium_1.Ovary();
Mimosa_pudica_var_hispida.fruit = new v1_1.Fruit();
Mimosa_pudica_var_hispida.fruit.stipe = new Fruit_1.Stipe();
Mimosa_pudica_var_hispida.fruit.replum = new Fruit_1.Replum();
Mimosa_pudica_var_hispida.fruit.epicarp = new Fruit_1.Epicarp();
Mimosa_pudica_var_hispida.seed = new Seed_1.Seed();
// Description authorship
Mimosa_pudica_var_hispida.descriptionAuthorship = new v1_2.DescriptionAuthorship();
Mimosa_pudica_var_hispida.descriptionAuthorship.addAuthor({
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
Mimosa_pudica_var_hispida.addSource(source0);
/// Trichomes
var source1 = new v1_2.Source();
source1.sourceType = 'article';
source1.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.';
source1.year = 2020;
source1.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization';
source1.journal = 'Flora';
source1.number = 272;
source1.pages = 151702;
source1.figure = '2F';
source1.obtainingMethod = 'scanningElectronMicroscope';
Mimosa_pudica_var_hispida.stems.trichomes.filiform.addSource(source1);
