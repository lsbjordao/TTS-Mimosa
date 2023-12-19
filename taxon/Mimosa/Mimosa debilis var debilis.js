"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mimosa_debilis_var_debilis = void 0;
// Import genus Mimosa
var _1 = require(".");
// Import characters
var v1_1 = require("../../characters/v1");
var Trichomes_1 = require("../../characters/v1/Trichomes");
var Stipule_1 = require("../../characters/v1/Stipule");
var Leaf_1 = require("../../characters/v1/Leaf");
var Bipinnate_1 = require("../../characters/v1/Leaf/Bipinnate");
var Spicule_1 = require("../../characters/v1/Leaf/Bipinnate/Rachis/Spicule");
var Pinnae_1 = require("../../characters/v1/Leaf/Bipinnate/Pinnae");
var Leaflet_1 = require("../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet");
var Inflorescence_1 = require("../../characters/v1/Inflorescence");
var Flower_1 = require("../../characters/v1/Flower");
var Androecium_1 = require("../../characters/v1/Androecium");
var Ginoecium_1 = require("../../characters/v1/Ginoecium");
var Fruit_1 = require("../../characters/v1/Fruit");
// Import annotation classes
var v1_2 = require("../../characters/v1");
// Description of Mimosa debilis_var_debilis
var Mimosa_debilis_var_debilis = new _1.Mimosa();
exports.Mimosa_debilis_var_debilis = Mimosa_debilis_var_debilis;
Mimosa_debilis_var_debilis.specificEpithet = 'debilis var. debilis';
Mimosa_debilis_var_debilis.stems = new v1_1.Stems();
Mimosa_debilis_var_debilis.stems.trichomes = new v1_1.Trichomes();
Mimosa_debilis_var_debilis.stems.trichomes.filiform = new Trichomes_1.Filiform();
Mimosa_debilis_var_debilis.stems.trichomes.filiform.are = 'present';
Mimosa_debilis_var_debilis.stems.trichomes.setiform = new Trichomes_1.Setiform();
Mimosa_debilis_var_debilis.stems.trichomes.setiform.are = 'present';
Mimosa_debilis_var_debilis.stipule = new v1_1.Stipule();
Mimosa_debilis_var_debilis.stipule.margin = new Stipule_1.MarginStipule();
Mimosa_debilis_var_debilis.stipule.adaxial = new Stipule_1.AdaxialStipule();
Mimosa_debilis_var_debilis.stipule.abaxial = new Stipule_1.AbaxialStipule();
Mimosa_debilis_var_debilis.leaf = new v1_1.Leaf();
Mimosa_debilis_var_debilis.leaf.petiole = new Leaf_1.Petiole();
Mimosa_debilis_var_debilis.leaf.bipinnate = new Leaf_1.Bipinnate();
Mimosa_debilis_var_debilis.leaf.bipinnate.rachis = new Bipinnate_1.Rachis();
Mimosa_debilis_var_debilis.leaf.bipinnate.rachis.spicule = new Spicule_1.Spicule();
Mimosa_debilis_var_debilis.leaf.bipinnate.pinnae = new Bipinnate_1.Pinnae();
Mimosa_debilis_var_debilis.leaf.bipinnate.pinnae.setNumberOfPairs(1);
Mimosa_debilis_var_debilis.leaf.bipinnate.pinnae.paraphillidia = new Pinnae_1.Paraphillidia();
Mimosa_debilis_var_debilis.leaf.bipinnate.pinnae.rachilla = new Pinnae_1.Rachilla();
Mimosa_debilis_var_debilis.leaf.bipinnate.pinnae.leaflet = new Pinnae_1.Leaflet();
Mimosa_debilis_var_debilis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairs(2);
Mimosa_debilis_var_debilis.leaf.bipinnate.pinnae.leaflet.margin = new Leaflet_1.MarginLeaflet();
Mimosa_debilis_var_debilis.leaf.bipinnate.pinnae.leaflet.adaxial = new Leaflet_1.AdaxialLeaflet();
Mimosa_debilis_var_debilis.leaf.bipinnate.pinnae.leaflet.abaxial = new Leaflet_1.AbaxialLeaflet();
Mimosa_debilis_var_debilis.inflorescence = new v1_1.Inflorescence();
Mimosa_debilis_var_debilis.inflorescence.peduncle = new Inflorescence_1.Peduncle();
Mimosa_debilis_var_debilis.inflorescence.capitate = new Inflorescence_1.CapitateInflorescence();
Mimosa_debilis_var_debilis.flower = new v1_1.Flower();
Mimosa_debilis_var_debilis.flower.bracteole = new Flower_1.Bracteole();
Mimosa_debilis_var_debilis.flower.merism = '4-merous';
Mimosa_debilis_var_debilis.flower.numberWhorlsOfStamens = 'isostemonous';
Mimosa_debilis_var_debilis.flower.calyx = new Flower_1.Calyx();
Mimosa_debilis_var_debilis.flower.calyx.shape = 'campanulate';
Mimosa_debilis_var_debilis.flower.corolla = new Flower_1.Corolla();
Mimosa_debilis_var_debilis.flower.corolla.shape = 'campanulate';
Mimosa_debilis_var_debilis.androecium = new v1_1.Androecium();
Mimosa_debilis_var_debilis.androecium.filaments = new Androecium_1.Filaments();
Mimosa_debilis_var_debilis.androecium.filaments.colour = 'pinkish';
Mimosa_debilis_var_debilis.ginoecium = new v1_1.Ginoecium();
Mimosa_debilis_var_debilis.ginoecium.ovary = new Ginoecium_1.Ovary();
Mimosa_debilis_var_debilis.fruit = new v1_1.Fruit();
Mimosa_debilis_var_debilis.fruit.stipe = new Fruit_1.Stipe();
Mimosa_debilis_var_debilis.fruit.replum = new Fruit_1.Replum();
Mimosa_debilis_var_debilis.fruit.epicarp = new Fruit_1.Epicarp();
Mimosa_debilis_var_debilis.seed = new v1_1.Seed();
// Description authorship
Mimosa_debilis_var_debilis.descriptionAuthorship = new v1_2.DescriptionAuthorship();
Mimosa_debilis_var_debilis.descriptionAuthorship.addAuthor({
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
Mimosa_debilis_var_debilis.addSource(source0);
/// Trichomes
var source1 = new v1_2.Source();
source1.sourceType = 'article';
source1.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.';
source1.year = 2020;
source1.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization';
source1.journal = 'Flora';
source1.number = 272;
source1.pages = 151702;
source1.figure = '2A';
source1.obtainingMethod = 'scanningElectronMicroscope';
Mimosa_debilis_var_debilis.stems.trichomes.filiform.addSource(source1);
Mimosa_debilis_var_debilis.stems.trichomes.setiform.addSource(source1);
