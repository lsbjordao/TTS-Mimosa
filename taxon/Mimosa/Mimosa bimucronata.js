"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mimosa_bimucronata = void 0;
// Import genus Mimosa
var _1 = require(".");
// Import characters
var v1_1 = require("../../characters/v1");
var Trichomes_1 = require("../../characters/v1/Trichomes");
var Leaf_1 = require("../../characters/v1/Leaf");
var Bipinnate_1 = require("../../characters/v1/Leaf/Bipinnate");
var Pinnae_1 = require("../../characters/v1/Leaf/Bipinnate/Pinnae");
var Leaflet_1 = require("../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet");
var Stipule_1 = require("../../characters/v1/Stipule");
var Spicule_1 = require("../../characters/v1/Leaf/Bipinnate/Rachis/Spicule");
var Inflorescence_1 = require("../../characters/v1/Inflorescence");
var Flower_1 = require("../../characters/v1/Flower");
var Androecium_1 = require("../../characters/v1/Androecium");
var Ginoecium_1 = require("../../characters/v1/Ginoecium");
var Fruit_1 = require("../../characters/v1/Fruit");
// Import annotation classes
var v1_2 = require("../../characters/v1");
// Description of Mimosa bimucronata
var Mimosa_bimucronata = new _1.Mimosa();
exports.Mimosa_bimucronata = Mimosa_bimucronata;
Mimosa_bimucronata.specificEpithet = 'bimucronata';
Mimosa_bimucronata.stems = new v1_1.Stems();
Mimosa_bimucronata.stems.trichomes = new v1_1.Trichomes();
Mimosa_bimucronata.stems.trichomes.filiform = new Trichomes_1.Filiform();
Mimosa_bimucronata.stems.trichomes.filiform.are = 'present';
Mimosa_bimucronata.stems.trichomes.filiform.orientation = ['patent', 'antrorse'];
Mimosa_bimucronata.stipule = new v1_1.Stipule();
Mimosa_bimucronata.stipule.margin = new Stipule_1.MarginStipule();
Mimosa_bimucronata.stipule.adaxial = new Stipule_1.AdaxialStipule();
Mimosa_bimucronata.stipule.abaxial = new Stipule_1.AbaxialStipule();
Mimosa_bimucronata.leaf = new v1_1.Leaf();
Mimosa_bimucronata.leaf.petiole = new Leaf_1.Petiole();
Mimosa_bimucronata.leaf.petiole.trichomes = new v1_1.Trichomes();
Mimosa_bimucronata.leaf.petiole.trichomes.granular = new Trichomes_1.Granular();
Mimosa_bimucronata.leaf.petiole.trichomes.granular.are = 'present';
Mimosa_bimucronata.leaf.bipinnate = new Leaf_1.Bipinnate();
Mimosa_bimucronata.leaf.bipinnate.rachis = new Bipinnate_1.Rachis();
Mimosa_bimucronata.leaf.bipinnate.rachis.spicule = new Spicule_1.Spicule();
Mimosa_bimucronata.leaf.bipinnate.pinnae = new Bipinnate_1.Pinnae();
Mimosa_bimucronata.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(5, 9);
Mimosa_bimucronata.leaf.bipinnate.pinnae.rachilla = new Pinnae_1.Rachilla();
Mimosa_bimucronata.leaf.bipinnate.pinnae.rachilla.trichomes = new v1_1.Trichomes();
Mimosa_bimucronata.leaf.bipinnate.pinnae.rachilla.trichomes.filiform = new Trichomes_1.Filiform();
Mimosa_bimucronata.leaf.bipinnate.pinnae.rachilla.trichomes.filiform.are = 'present';
Mimosa_bimucronata.leaf.bipinnate.pinnae.leaflet = new Pinnae_1.Leaflet();
Mimosa_bimucronata.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(18, 41);
Mimosa_bimucronata.leaf.bipinnate.pinnae.leaflet.abaxial = new Leaflet_1.AbaxialLeaflet();
Mimosa_bimucronata.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes = new v1_1.Trichomes();
Mimosa_bimucronata.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform = new Trichomes_1.Filiform();
Mimosa_bimucronata.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform.are = 'present';
Mimosa_bimucronata.leaf.bipinnate.pinnae.leaflet.margin = new Leaflet_1.MarginLeaflet();
Mimosa_bimucronata.leaf.bipinnate.pinnae.leaflet.margin.trichomes = new v1_1.Trichomes();
Mimosa_bimucronata.leaf.bipinnate.pinnae.leaflet.margin.trichomes.filiform = new Trichomes_1.Filiform();
Mimosa_bimucronata.leaf.bipinnate.pinnae.leaflet.margin.trichomes.filiform.are = 'present';
Mimosa_bimucronata.leaf.bipinnate.pinnae.leaflet.margin.trichomes.filiform.orientation = 'antrorse-appressed';
Mimosa_bimucronata.inflorescence = new v1_1.Inflorescence();
Mimosa_bimucronata.inflorescence.peduncle = new Inflorescence_1.Peduncle();
Mimosa_bimucronata.inflorescence.capitate = new Inflorescence_1.CapitateInflorescence();
Mimosa_bimucronata.flower = new v1_1.Flower();
Mimosa_bimucronata.flower.bracteole = new Flower_1.Bracteole();
Mimosa_bimucronata.flower.merism = '4-merous';
Mimosa_bimucronata.flower.numberWhorlsOfStamens = 'diplostemonous';
Mimosa_bimucronata.flower.calyx = new Flower_1.Calyx();
Mimosa_bimucronata.flower.calyx.shape = 'campanulate';
Mimosa_bimucronata.flower.corolla = new Flower_1.Corolla();
Mimosa_bimucronata.flower.corolla.shape = 'campanulate';
Mimosa_bimucronata.androecium = new v1_1.Androecium();
Mimosa_bimucronata.androecium.filaments = new Androecium_1.Filaments();
Mimosa_bimucronata.androecium.filaments.colour = 'whitenish';
Mimosa_bimucronata.ginoecium = new v1_1.Ginoecium();
Mimosa_bimucronata.ginoecium.ovary = new Ginoecium_1.Ovary();
Mimosa_bimucronata.fruit = new v1_1.Fruit();
Mimosa_bimucronata.fruit.stipe = new Fruit_1.Stipe();
Mimosa_bimucronata.fruit.replum = new Fruit_1.Replum();
Mimosa_bimucronata.fruit.epicarp = new Fruit_1.Epicarp();
Mimosa_bimucronata.seed = new v1_1.Seed();
// Description authorship
Mimosa_bimucronata.descriptionAuthorship = new v1_2.DescriptionAuthorship();
Mimosa_bimucronata.descriptionAuthorship.addAuthor({
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
source0.pages = '162-197';
Mimosa_bimucronata.addSource(source0);
/// Trichomes
var source1 = new v1_2.Source();
source1.sourceType = 'article';
source1.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.';
source1.year = 2020;
source1.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization';
source1.journal = 'Flora';
source1.number = 272;
source1.pages = 151702;
source1.figure = '1C';
source1.obtainingMethod = 'opticalMicroscope';
Mimosa_bimucronata.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform.addSource(source1);
var source2 = new v1_2.Source();
source2.sourceType = 'article';
source2.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.';
source2.year = 2020;
source2.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization';
source2.journal = 'Flora';
source2.number = 272;
source2.pages = 151702;
source2.figure = '1D';
source2.obtainingMethod = 'scanningElectronMicroscope';
Mimosa_bimucronata.stems.trichomes.filiform.addSource(source2);
var source3 = new v1_2.Source();
source3.sourceType = 'article';
source3.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.';
source3.year = 2020;
source3.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization';
source3.journal = 'Flora';
source3.number = 272;
source3.pages = 151702;
source3.figure = '9O';
source3.obtainingMethod = 'scanningElectronMicroscope';
Mimosa_bimucronata.leaf.bipinnate.pinnae.rachilla.trichomes.filiform.addSource(source3);
var source4 = new v1_2.Source();
source4.sourceType = 'article';
source4.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.';
source4.year = 2020;
source4.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization';
source4.journal = 'Flora';
source4.number = 272;
source4.pages = 151702;
source4.figure = '8B';
source4.obtainingMethod = 'opticalMicroscope';
Mimosa_bimucronata.leaf.petiole.trichomes.granular.addSource(source4);
