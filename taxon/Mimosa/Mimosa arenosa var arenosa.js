"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mimosa_arenosa_var_arenosa = void 0;
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
// Description of Mimosa arenosa var. arenosa
var Mimosa_arenosa_var_arenosa = new _1.Mimosa();
exports.Mimosa_arenosa_var_arenosa = Mimosa_arenosa_var_arenosa;
Mimosa_arenosa_var_arenosa.specificEpithet = 'arenosa var. arenosa';
Mimosa_arenosa_var_arenosa.stipule = new v1_1.Stipule();
Mimosa_arenosa_var_arenosa.stipule.margin = new Stipule_1.MarginStipule();
Mimosa_arenosa_var_arenosa.stipule.adaxial = new Stipule_1.AdaxialStipule();
Mimosa_arenosa_var_arenosa.stipule.abaxial = new Stipule_1.AbaxialStipule();
Mimosa_arenosa_var_arenosa.leaf = new v1_1.Leaf();
Mimosa_arenosa_var_arenosa.leaf.petiole = new Leaf_1.Petiole();
Mimosa_arenosa_var_arenosa.leaf.petiole.trichomes = new Trichomes_1.Trichomes();
Mimosa_arenosa_var_arenosa.leaf.petiole.trichomes.granular = new Trichomes_1.Granular();
Mimosa_arenosa_var_arenosa.leaf.petiole.trichomes.granular.are = 'present';
Mimosa_arenosa_var_arenosa.leaf.bipinnate = new Leaf_1.Bipinnate();
Mimosa_arenosa_var_arenosa.leaf.bipinnate.rachis = new Bipinnate_1.Rachis();
Mimosa_arenosa_var_arenosa.leaf.bipinnate.rachis.spicule = new Spicule_1.Spicule();
Mimosa_arenosa_var_arenosa.leaf.bipinnate.pinnae = new Bipinnate_1.Pinnae();
Mimosa_arenosa_var_arenosa.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(4, 12);
Mimosa_arenosa_var_arenosa.leaf.bipinnate.pinnae.paraphillidia = new Pinnae_1.Paraphillidia();
Mimosa_arenosa_var_arenosa.leaf.bipinnate.pinnae.rachilla = new Pinnae_1.Rachilla();
Mimosa_arenosa_var_arenosa.leaf.bipinnate.pinnae.leaflet = new Pinnae_1.Leaflet();
Mimosa_arenosa_var_arenosa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(12, 30);
Mimosa_arenosa_var_arenosa.leaf.bipinnate.pinnae.leaflet.margin = new Leaflet_1.MarginLeaflet();
Mimosa_arenosa_var_arenosa.leaf.bipinnate.pinnae.leaflet.adaxial = new Leaflet_1.AdaxialLeaflet();
Mimosa_arenosa_var_arenosa.leaf.bipinnate.pinnae.leaflet.abaxial = new Leaflet_1.AbaxialLeaflet();
Mimosa_arenosa_var_arenosa.inflorescence = new v1_1.Inflorescence();
Mimosa_arenosa_var_arenosa.inflorescence.peduncle = new Inflorescence_1.Peduncle();
Mimosa_arenosa_var_arenosa.inflorescence.spicate = new Inflorescence_1.Spicate();
Mimosa_arenosa_var_arenosa.flower = new v1_1.Flower();
Mimosa_arenosa_var_arenosa.flower.bracteole = new Flower_1.Bracteole();
Mimosa_arenosa_var_arenosa.flower.merism = '4-merous';
Mimosa_arenosa_var_arenosa.flower.numberWhorlsOfStamens = 'diplostemonous';
Mimosa_arenosa_var_arenosa.flower.calyx = new Flower_1.Calyx();
Mimosa_arenosa_var_arenosa.flower.calyx.shape = 'campanulate';
Mimosa_arenosa_var_arenosa.flower.corolla = new Flower_1.Corolla();
Mimosa_arenosa_var_arenosa.flower.corolla.shape = 'turbinate';
Mimosa_arenosa_var_arenosa.androecium = new v1_1.Androecium();
Mimosa_arenosa_var_arenosa.androecium.filaments = new Androecium_1.Filaments();
Mimosa_arenosa_var_arenosa.androecium.filaments.colour = 'whitenish';
Mimosa_arenosa_var_arenosa.ginoecium = new v1_1.Ginoecium();
Mimosa_arenosa_var_arenosa.ginoecium.ovary = new Ginoecium_1.Ovary();
Mimosa_arenosa_var_arenosa.fruit = new v1_1.Fruit();
Mimosa_arenosa_var_arenosa.fruit.stipe = new Fruit_1.Stipe();
Mimosa_arenosa_var_arenosa.fruit.replum = new Fruit_1.Replum();
Mimosa_arenosa_var_arenosa.fruit.epicarp = new Fruit_1.Epicarp();
Mimosa_arenosa_var_arenosa.seed = new Seed_1.Seed();
// Description authorship
Mimosa_arenosa_var_arenosa.descriptionAuthorship = new v1_2.DescriptionAuthorship();
Mimosa_arenosa_var_arenosa.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 1692107172
});
// Sources
var source1 = new v1_2.Source();
source1.sourceType = 'article';
source1.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.';
source1.year = 2018;
source1.title = 'Toward a Census of *Mimosa* (Leguminosae) in the Atlantic Domain, Southeastern Brazil';
source1.journal = 'Systematic Botany';
source1.volume = 43;
source1.number = 1;
source1.pages = 162 - 197;
Mimosa_arenosa_var_arenosa.addSource(source1);
/// Trichomes
var source2 = new v1_2.Source();
source2.sourceType = 'article';
source2.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.';
source2.year = 2020;
source2.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization';
source2.journal = 'Flora';
source2.number = 272;
source2.pages = 151702;
source2.figure = '8A';
source2.obtainingMethod = 'scanningElectronMicroscope';
Mimosa_arenosa_var_arenosa.leaf.petiole.trichomes.granular.addSource(source2);
