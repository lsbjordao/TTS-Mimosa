"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mimosa_ernestii = void 0;
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
// Description of Mimosa ernestii
var Mimosa_ernestii = new _1.Mimosa();
exports.Mimosa_ernestii = Mimosa_ernestii;
Mimosa_ernestii.specificEpithet = 'ernestii';
Mimosa_ernestii.stems = new v1_1.Stems();
Mimosa_ernestii.stems.trichomes = new v1_1.Trichomes();
Mimosa_ernestii.stems.trichomes.setiform = new Trichomes_1.Setiform();
Mimosa_ernestii.stems.trichomes.setiform.are = 'present';
Mimosa_ernestii.stipule = new v1_1.Stipule();
Mimosa_ernestii.stipule.margin = new Stipule_1.MarginStipule();
Mimosa_ernestii.stipule.adaxial = new Stipule_1.AdaxialStipule();
Mimosa_ernestii.stipule.abaxial = new Stipule_1.AbaxialStipule();
Mimosa_ernestii.leaf = new v1_1.Leaf();
Mimosa_ernestii.leaf.petiole = new Leaf_1.Petiole();
Mimosa_ernestii.leaf.bipinnate = new Leaf_1.Bipinnate();
Mimosa_ernestii.leaf.bipinnate.rachis = new Bipinnate_1.Rachis();
Mimosa_ernestii.leaf.bipinnate.rachis.spicule = new Spicule_1.Spicule();
Mimosa_ernestii.leaf.bipinnate.pinnae = new Bipinnate_1.Pinnae();
Mimosa_ernestii.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(1, 2);
Mimosa_ernestii.leaf.bipinnate.pinnae.paraphillidia = new Pinnae_1.Paraphillidia();
Mimosa_ernestii.leaf.bipinnate.pinnae.rachilla = new Pinnae_1.Rachilla();
Mimosa_ernestii.leaf.bipinnate.pinnae.leaflet = new Pinnae_1.Leaflet();
Mimosa_ernestii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(12, 17);
Mimosa_ernestii.leaf.bipinnate.pinnae.leaflet.margin = new Leaflet_1.MarginLeaflet();
Mimosa_ernestii.leaf.bipinnate.pinnae.leaflet.adaxial = new Leaflet_1.AdaxialLeaflet();
Mimosa_ernestii.leaf.bipinnate.pinnae.leaflet.abaxial = new Leaflet_1.AbaxialLeaflet();
Mimosa_ernestii.inflorescence = new v1_1.Inflorescence();
Mimosa_ernestii.inflorescence.peduncle = new Inflorescence_1.Peduncle();
Mimosa_ernestii.inflorescence.capitate = new Inflorescence_1.CapitateInflorescence();
Mimosa_ernestii.flower = new v1_1.Flower();
Mimosa_ernestii.flower.bracteole = new Flower_1.Bracteole();
Mimosa_ernestii.flower.merism = ['4-merous', '5-merous'];
Mimosa_ernestii.flower.numberWhorlsOfStamens = 'isostemonous';
Mimosa_ernestii.flower.calyx = new Flower_1.Calyx();
Mimosa_ernestii.flower.calyx.shape = 'campanulate';
Mimosa_ernestii.flower.corolla = new Flower_1.Corolla();
Mimosa_ernestii.flower.corolla.shape = 'campanulate';
Mimosa_ernestii.androecium = new v1_1.Androecium();
Mimosa_ernestii.androecium.filaments = new Androecium_1.Filaments();
Mimosa_ernestii.androecium.filaments.colour = 'whitenish';
Mimosa_ernestii.ginoecium = new v1_1.Ginoecium();
Mimosa_ernestii.ginoecium.ovary = new Ginoecium_1.Ovary();
Mimosa_ernestii.fruit = new v1_1.Fruit();
Mimosa_ernestii.fruit.stipe = new Fruit_1.Stipe();
Mimosa_ernestii.fruit.replum = new Fruit_1.Replum();
Mimosa_ernestii.fruit.epicarp = new Fruit_1.Epicarp();
Mimosa_ernestii.seed = new Seed_1.Seed();
// Description authorship
Mimosa_ernestii.descriptionAuthorship = new v1_2.DescriptionAuthorship();
Mimosa_ernestii.descriptionAuthorship.addAuthor({
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
Mimosa_ernestii.addSource(source0);
/// Trichomes
var source1 = new v1_2.Source();
source1.sourceType = 'article';
source1.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.';
source1.year = 2020;
source1.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization';
source1.journal = 'Flora';
source1.number = 272;
source1.pages = 151702;
source1.figure = '2K';
source1.obtainingMethod = 'scanningElectronMicroscope';
Mimosa_ernestii.stems.trichomes.setiform.addSource(source1);
