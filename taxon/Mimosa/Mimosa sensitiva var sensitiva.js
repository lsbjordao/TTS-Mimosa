"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mimosa_sensitiva_var_sensitiva = void 0;
// Import characters
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
// Description of Mimosa sensitiva_var_sensitiva
var Mimosa_sensitiva_var_sensitiva = new _1.Mimosa();
exports.Mimosa_sensitiva_var_sensitiva = Mimosa_sensitiva_var_sensitiva;
Mimosa_sensitiva_var_sensitiva.specificEpithet = 'sensitiva var. sensitiva';
Mimosa_sensitiva_var_sensitiva.stems = new v1_1.Stems();
Mimosa_sensitiva_var_sensitiva.stipule = new v1_1.Stipule();
Mimosa_sensitiva_var_sensitiva.stipule.margin = new Stipule_1.MarginStipule();
Mimosa_sensitiva_var_sensitiva.stipule.adaxial = new Stipule_1.AdaxialStipule();
Mimosa_sensitiva_var_sensitiva.stipule.abaxial = new Stipule_1.AbaxialStipule();
Mimosa_sensitiva_var_sensitiva.leaf = new v1_1.Leaf();
Mimosa_sensitiva_var_sensitiva.leaf.petiole = new Leaf_1.Petiole();
Mimosa_sensitiva_var_sensitiva.leaf.bipinnate = new Leaf_1.Bipinnate();
Mimosa_sensitiva_var_sensitiva.leaf.bipinnate.rachis = new Bipinnate_1.Rachis();
Mimosa_sensitiva_var_sensitiva.leaf.bipinnate.rachis.spicule = new Spicule_1.Spicule();
Mimosa_sensitiva_var_sensitiva.leaf.bipinnate.pinnae = new Bipinnate_1.Pinnae();
Mimosa_sensitiva_var_sensitiva.leaf.bipinnate.pinnae.paraphillidia = new Pinnae_1.Paraphillidia();
Mimosa_sensitiva_var_sensitiva.leaf.bipinnate.pinnae.rachilla = new Pinnae_1.Rachilla();
Mimosa_sensitiva_var_sensitiva.leaf.bipinnate.pinnae.leaflet = new Pinnae_1.Leaflet();
Mimosa_sensitiva_var_sensitiva.leaf.bipinnate.pinnae.leaflet.setNumberOfPairs(1);
Mimosa_sensitiva_var_sensitiva.leaf.bipinnate.pinnae.leaflet.margin = new Leaflet_1.MarginLeaflet();
Mimosa_sensitiva_var_sensitiva.leaf.bipinnate.pinnae.leaflet.adaxial = new Leaflet_1.AdaxialLeaflet();
Mimosa_sensitiva_var_sensitiva.leaf.bipinnate.pinnae.leaflet.abaxial = new Leaflet_1.AbaxialLeaflet();
Mimosa_sensitiva_var_sensitiva.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes = new v1_1.Trichomes();
Mimosa_sensitiva_var_sensitiva.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.setiform = new Trichomes_1.Setiform();
Mimosa_sensitiva_var_sensitiva.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.setiform.are = 'present';
Mimosa_sensitiva_var_sensitiva.inflorescence = new v1_1.Inflorescence();
Mimosa_sensitiva_var_sensitiva.inflorescence.peduncle = new Inflorescence_1.Peduncle();
Mimosa_sensitiva_var_sensitiva.inflorescence.capitate = new Inflorescence_1.CapitateInflorescence();
Mimosa_sensitiva_var_sensitiva.flower = new v1_1.Flower();
Mimosa_sensitiva_var_sensitiva.flower.bracteole = new Flower_1.Bracteole();
Mimosa_sensitiva_var_sensitiva.flower.merism = '4-merous';
Mimosa_sensitiva_var_sensitiva.flower.numberWhorlsOfStamens = 'isostemonous';
Mimosa_sensitiva_var_sensitiva.flower.calyx = new Flower_1.Calyx();
Mimosa_sensitiva_var_sensitiva.flower.calyx.shape = 'pappiform';
Mimosa_sensitiva_var_sensitiva.flower.corolla = new Flower_1.Corolla();
Mimosa_sensitiva_var_sensitiva.flower.corolla.shape = ['tubulose', 'campanulate'];
Mimosa_sensitiva_var_sensitiva.androecium = new v1_1.Androecium();
Mimosa_sensitiva_var_sensitiva.androecium.filaments = new Androecium_1.Filaments();
Mimosa_sensitiva_var_sensitiva.androecium.filaments.colour = 'pinkish';
Mimosa_sensitiva_var_sensitiva.ginoecium = new v1_1.Ginoecium();
Mimosa_sensitiva_var_sensitiva.ginoecium.ovary = new Ginoecium_1.Ovary();
Mimosa_sensitiva_var_sensitiva.fruit = new v1_1.Fruit();
Mimosa_sensitiva_var_sensitiva.fruit.stipe = new Fruit_1.Stipe();
Mimosa_sensitiva_var_sensitiva.fruit.replum = new Fruit_1.Replum();
Mimosa_sensitiva_var_sensitiva.fruit.epicarp = new Fruit_1.Epicarp();
Mimosa_sensitiva_var_sensitiva.seed = new Seed_1.Seed();
// Description authorship
Mimosa_sensitiva_var_sensitiva.descriptionAuthorship = new v1_2.DescriptionAuthorship();
Mimosa_sensitiva_var_sensitiva.descriptionAuthorship.addAuthor({
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
Mimosa_sensitiva_var_sensitiva.addSource(source0);
/// Trichomes
var source1 = new v1_2.Source();
source1.sourceType = 'article';
source1.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.';
source1.year = 2020;
source1.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization';
source1.journal = 'Flora';
source1.number = 272;
source1.pages = 151702;
source1.figure = '2G';
source1.obtainingMethod = 'scanningElectronMicroscope';
Mimosa_sensitiva_var_sensitiva.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.setiform.addSource(source1);
