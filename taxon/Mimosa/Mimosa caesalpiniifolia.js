"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mimosa_caesalpiniifolia = void 0;
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
// Description of Mimosa caesalpiniifolia
var Mimosa_caesalpiniifolia = new _1.Mimosa();
exports.Mimosa_caesalpiniifolia = Mimosa_caesalpiniifolia;
Mimosa_caesalpiniifolia.specificEpithet = 'caesalpiniifolia';
Mimosa_caesalpiniifolia.stems = new v1_1.Stems();
Mimosa_caesalpiniifolia.stems.trichomes = new v1_1.Trichomes();
Mimosa_caesalpiniifolia.stems.trichomes.filiform = new Trichomes_1.Filiform();
Mimosa_caesalpiniifolia.stems.trichomes.filiform.are = 'present';
Mimosa_caesalpiniifolia.stipule = new v1_1.Stipule();
Mimosa_caesalpiniifolia.stipule.margin = new Stipule_1.MarginStipule();
Mimosa_caesalpiniifolia.stipule.adaxial = new Stipule_1.AdaxialStipule();
Mimosa_caesalpiniifolia.stipule.abaxial = new Stipule_1.AbaxialStipule();
Mimosa_caesalpiniifolia.leaf = new v1_1.Leaf();
Mimosa_caesalpiniifolia.leaf.petiole = new Leaf_1.Petiole();
Mimosa_caesalpiniifolia.leaf.bipinnate = new Leaf_1.Bipinnate();
Mimosa_caesalpiniifolia.leaf.bipinnate.rachis = new Bipinnate_1.Rachis();
Mimosa_caesalpiniifolia.leaf.bipinnate.rachis.spicule = new Spicule_1.Spicule();
Mimosa_caesalpiniifolia.leaf.bipinnate.pinnae = new Bipinnate_1.Pinnae();
Mimosa_caesalpiniifolia.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 4);
Mimosa_caesalpiniifolia.leaf.bipinnate.pinnae.paraphillidia = new Pinnae_1.Paraphillidia();
Mimosa_caesalpiniifolia.leaf.bipinnate.pinnae.rachilla = new Pinnae_1.Rachilla();
Mimosa_caesalpiniifolia.leaf.bipinnate.pinnae.leaflet = new Pinnae_1.Leaflet();
Mimosa_caesalpiniifolia.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(1, 4);
Mimosa_caesalpiniifolia.leaf.bipinnate.pinnae.leaflet.margin = new Leaflet_1.MarginLeaflet();
Mimosa_caesalpiniifolia.leaf.bipinnate.pinnae.leaflet.adaxial = new Leaflet_1.AdaxialLeaflet();
Mimosa_caesalpiniifolia.leaf.bipinnate.pinnae.leaflet.abaxial = new Leaflet_1.AbaxialLeaflet();
Mimosa_caesalpiniifolia.inflorescence = new v1_1.Inflorescence();
Mimosa_caesalpiniifolia.inflorescence.peduncle = new Inflorescence_1.Peduncle();
Mimosa_caesalpiniifolia.inflorescence.spicate = new Inflorescence_1.Spicate();
Mimosa_caesalpiniifolia.flower = new v1_1.Flower();
Mimosa_caesalpiniifolia.flower.bracteole = new Flower_1.Bracteole();
Mimosa_caesalpiniifolia.flower.merism = '3-merous';
Mimosa_caesalpiniifolia.flower.numberWhorlsOfStamens = 'diplostemonous';
Mimosa_caesalpiniifolia.flower.calyx = new Flower_1.Calyx();
Mimosa_caesalpiniifolia.flower.calyx.shape = 'campanulate';
Mimosa_caesalpiniifolia.flower.corolla = new Flower_1.Corolla();
Mimosa_caesalpiniifolia.flower.corolla.shape = 'turbinate';
Mimosa_caesalpiniifolia.androecium = new v1_1.Androecium();
Mimosa_caesalpiniifolia.androecium.filaments = new Androecium_1.Filaments();
Mimosa_caesalpiniifolia.androecium.filaments.colour = 'whitenish';
Mimosa_caesalpiniifolia.ginoecium = new v1_1.Ginoecium();
Mimosa_caesalpiniifolia.ginoecium.ovary = new Ginoecium_1.Ovary();
Mimosa_caesalpiniifolia.fruit = new v1_1.Fruit();
Mimosa_caesalpiniifolia.fruit.stipe = new Fruit_1.Stipe();
Mimosa_caesalpiniifolia.fruit.replum = new Fruit_1.Replum();
Mimosa_caesalpiniifolia.fruit.epicarp = new Fruit_1.Epicarp();
Mimosa_caesalpiniifolia.seed = new v1_1.Seed();
// Description authorship
Mimosa_caesalpiniifolia.descriptionAuthorship = new v1_2.DescriptionAuthorship();
Mimosa_caesalpiniifolia.descriptionAuthorship.addAuthor({
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
Mimosa_caesalpiniifolia.addSource(source0);
/// Trichomes
var source1 = new v1_2.Source();
source1.sourceType = 'article';
source1.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.';
source1.year = 2020;
source1.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization';
source1.journal = 'Flora';
source1.number = 272;
source1.pages = 151702;
source1.figure = '1A';
source1.obtainingMethod = 'scanningElectronMicroscope';
Mimosa_caesalpiniifolia.stems.trichomes.filiform.addSource(source1);
