"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mimosa_dolens_var_dolens = void 0;
// Import genus Mimosa
var _1 = require(".");
// Import characters
var v1_1 = require("../../characters/v1");
var Trichomes_1 = require("../../characters/v1/Trichomes");
var Capitate_1 = require("../../characters/v1/Trichomes/Capitate");
// Import annotation classes
var v1_2 = require("../../characters/v1");
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
// Description of Mimosa dolens var. dolens
var Mimosa_dolens_var_dolens = new _1.Mimosa();
exports.Mimosa_dolens_var_dolens = Mimosa_dolens_var_dolens;
Mimosa_dolens_var_dolens.specificEpithet = 'dolens var. dolens';
Mimosa_dolens_var_dolens.stems = new v1_1.Stems();
Mimosa_dolens_var_dolens.stems.trichomes = new v1_1.Trichomes();
Mimosa_dolens_var_dolens.stems.trichomes.filiform = new Trichomes_1.Filiform();
Mimosa_dolens_var_dolens.stems.trichomes.filiform.are = 'present';
Mimosa_dolens_var_dolens.stems.trichomes.porrect = new Trichomes_1.Porrect();
Mimosa_dolens_var_dolens.stems.trichomes.porrect.are = 'present or absent';
Mimosa_dolens_var_dolens.stems.trichomes.capitate = new Trichomes_1.Capitate();
Mimosa_dolens_var_dolens.stems.trichomes.capitate.setiform = new Capitate_1.CapitateSetiform();
Mimosa_dolens_var_dolens.stems.trichomes.capitate.setiform.are = 'present';
Mimosa_dolens_var_dolens.stipule = new v1_1.Stipule();
Mimosa_dolens_var_dolens.stipule.margin = new Stipule_1.MarginStipule();
Mimosa_dolens_var_dolens.stipule.adaxial = new Stipule_1.AdaxialStipule();
Mimosa_dolens_var_dolens.stipule.abaxial = new Stipule_1.AbaxialStipule();
Mimosa_dolens_var_dolens.leaf = new v1_1.Leaf();
Mimosa_dolens_var_dolens.leaf.petiole = new Leaf_1.Petiole();
Mimosa_dolens_var_dolens.leaf.bipinnate = new Leaf_1.Bipinnate();
Mimosa_dolens_var_dolens.leaf.bipinnate.rachis = new Bipinnate_1.Rachis();
Mimosa_dolens_var_dolens.leaf.bipinnate.rachis.spicule = new Spicule_1.Spicule();
Mimosa_dolens_var_dolens.leaf.bipinnate.pinnae = new Bipinnate_1.Pinnae();
Mimosa_dolens_var_dolens.leaf.bipinnate.pinnae.setNumberOfPairs(1);
Mimosa_dolens_var_dolens.leaf.bipinnate.pinnae.paraphillidia = new Pinnae_1.Paraphillidia();
Mimosa_dolens_var_dolens.leaf.bipinnate.pinnae.rachilla = new Pinnae_1.Rachilla();
Mimosa_dolens_var_dolens.leaf.bipinnate.pinnae.leaflet = new Pinnae_1.Leaflet();
Mimosa_dolens_var_dolens.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(10, 14);
Mimosa_dolens_var_dolens.leaf.bipinnate.pinnae.leaflet.margin = new Leaflet_1.MarginLeaflet();
Mimosa_dolens_var_dolens.leaf.bipinnate.pinnae.leaflet.adaxial = new Leaflet_1.AdaxialLeaflet();
Mimosa_dolens_var_dolens.leaf.bipinnate.pinnae.leaflet.abaxial = new Leaflet_1.AbaxialLeaflet();
Mimosa_dolens_var_dolens.inflorescence = new v1_1.Inflorescence();
Mimosa_dolens_var_dolens.inflorescence.peduncle = new Inflorescence_1.Peduncle();
Mimosa_dolens_var_dolens.inflorescence.capitate = new Inflorescence_1.CapitateInflorescence();
Mimosa_dolens_var_dolens.flower = new v1_1.Flower();
Mimosa_dolens_var_dolens.flower.bracteole = new Flower_1.Bracteole();
Mimosa_dolens_var_dolens.flower.merism = '4-merous';
Mimosa_dolens_var_dolens.flower.numberWhorlsOfStamens = 'isostemonous';
Mimosa_dolens_var_dolens.flower.calyx = new Flower_1.Calyx();
Mimosa_dolens_var_dolens.flower.calyx.shape = 'pappiform';
Mimosa_dolens_var_dolens.flower.corolla = new Flower_1.Corolla();
Mimosa_dolens_var_dolens.flower.corolla.shape = ['tubulose', 'campanulate'];
Mimosa_dolens_var_dolens.androecium = new v1_1.Androecium();
Mimosa_dolens_var_dolens.androecium.filaments = new Androecium_1.Filaments();
Mimosa_dolens_var_dolens.androecium.filaments.colour = 'pinkish';
Mimosa_dolens_var_dolens.ginoecium = new v1_1.Ginoecium();
Mimosa_dolens_var_dolens.ginoecium.ovary = new Ginoecium_1.Ovary();
Mimosa_dolens_var_dolens.fruit = new v1_1.Fruit();
Mimosa_dolens_var_dolens.fruit.stipe = new Fruit_1.Stipe();
Mimosa_dolens_var_dolens.fruit.replum = new Fruit_1.Replum();
Mimosa_dolens_var_dolens.fruit.epicarp = new Fruit_1.Epicarp();
Mimosa_dolens_var_dolens.seed = new v1_1.Seed();
// Description authorship
Mimosa_dolens_var_dolens.descriptionAuthorship = new v1_2.DescriptionAuthorship();
Mimosa_dolens_var_dolens.descriptionAuthorship.addAuthor({
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
Mimosa_dolens_var_dolens.addSource(source0);
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
Mimosa_dolens_var_dolens.stems.trichomes.filiform.addSource(source1);
var source2 = new v1_2.Source();
source2.sourceType = 'article';
source2.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.';
source2.year = 2020;
source2.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization';
source2.journal = 'Flora';
source2.number = 272;
source2.pages = 151702;
source2.figure = '6G';
source2.obtainingMethod = 'scanningElectronMicroscope';
Mimosa_dolens_var_dolens.stems.trichomes.porrect.addSource(source2);
var source3 = new v1_2.Source();
source3.sourceType = 'article';
source3.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.';
source3.year = 2020;
source3.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization';
source3.journal = 'Flora';
source3.number = 272;
source3.pages = 151702;
source3.figure = '9A';
source3.obtainingMethod = 'scanningElectronMicroscope';
Mimosa_dolens_var_dolens.stems.trichomes.capitate.setiform.addSource(source3);
Mimosa_dolens_var_dolens.stems.trichomes.filiform.addSource(source3);
var source4 = new v1_2.Source();
source4.sourceType = 'article';
source4.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.';
source4.year = 2020;
source4.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization';
source4.journal = 'Flora';
source4.number = 272;
source4.pages = 151702;
source4.figure = '9B';
source4.obtainingMethod = 'opticalMicroscope';
Mimosa_dolens_var_dolens.stems.trichomes.capitate.setiform.addSource(source4);
