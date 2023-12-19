"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mimosa_minarum = void 0;
// Import genus Mimosa
var _1 = require(".");
// Import characters
var v1_1 = require("../../characters/v1");
var Trichomes_1 = require("../../characters/v1/Trichomes");
var Capitate_1 = require("../../characters/v1/Trichomes/Capitate");
var CapitateFiliform_1 = require("../../characters/v1/Trichomes/Capitate/CapitateFiliform");
var Leaf_1 = require("../../characters/v1/Leaf");
var Bipinnate_1 = require("../../characters/v1/Leaf/Bipinnate");
var Pinnae_1 = require("../../characters/v1/Leaf/Bipinnate/Pinnae");
var Leaflet_1 = require("../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet");
// Import annotation classes
var v1_2 = require("../../characters/v1");
// Description of Mimosa minarum
var Mimosa_minarum = new _1.Mimosa();
exports.Mimosa_minarum = Mimosa_minarum;
Mimosa_minarum.specificEpithet = 'minarum';
Mimosa_minarum.leaf = new v1_1.Leaf();
Mimosa_minarum.leaf.bipinnate = new Leaf_1.Bipinnate();
Mimosa_minarum.leaf.bipinnate.pinnae = new Bipinnate_1.Pinnae();
Mimosa_minarum.leaf.bipinnate.pinnae.leaflet = new Pinnae_1.Leaflet();
Mimosa_minarum.leaf.bipinnate.pinnae.leaflet.abaxial = new Leaflet_1.AbaxialLeaflet();
Mimosa_minarum.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes = new v1_1.Trichomes();
Mimosa_minarum.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.capitate = new Trichomes_1.Capitate();
Mimosa_minarum.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.capitate.filiform = new Capitate_1.CapitateFiliform();
Mimosa_minarum.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.capitate.filiform.variantCordistipulae = new CapitateFiliform_1.VariantCordistipulae();
// Description authorship
Mimosa_minarum.descriptionAuthorship = new v1_2.DescriptionAuthorship();
Mimosa_minarum.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 1692107172
});
// Sources
/// Trichomes
var source1 = new v1_2.Source();
source1.sourceType = 'article';
source1.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.';
source1.year = 2020;
source1.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization';
source1.journal = 'Flora';
source1.number = 272;
source1.pages = 151702;
source1.figure = '8O,P,Q,R,S,T';
source1.obtainingMethod = 'scanningElectronMicroscope';
Mimosa_minarum.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.capitate.filiform.variantCordistipulae.addSource(source1);
