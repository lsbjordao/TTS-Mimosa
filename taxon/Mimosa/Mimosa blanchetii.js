"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mimosa_blanchetii = void 0;
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
// Description of Mimosa blanchetii
var Mimosa_blanchetii = new _1.Mimosa();
exports.Mimosa_blanchetii = Mimosa_blanchetii;
Mimosa_blanchetii.specificEpithet = 'blanchetii';
Mimosa_blanchetii.leaf = new v1_1.Leaf();
Mimosa_blanchetii.leaf.bipinnate = new Leaf_1.Bipinnate();
Mimosa_blanchetii.leaf.bipinnate.pinnae = new Bipinnate_1.Pinnae();
Mimosa_blanchetii.leaf.bipinnate.pinnae.leaflet = new Pinnae_1.Leaflet();
Mimosa_blanchetii.leaf.bipinnate.pinnae.leaflet.abaxial = new Leaflet_1.AbaxialLeaflet();
Mimosa_blanchetii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes = new v1_1.Trichomes();
Mimosa_blanchetii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.capitate = new Trichomes_1.Capitate();
Mimosa_blanchetii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.capitate.filiform = new Capitate_1.CapitateFiliform();
Mimosa_blanchetii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.capitate.filiform.variantCordistipulae = new CapitateFiliform_1.VariantCordistipulae();
Mimosa_blanchetii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.capitate.filiform.variantCordistipulae.are = 'present';
// Description authorship
Mimosa_blanchetii.descriptionAuthorship = new v1_2.DescriptionAuthorship();
Mimosa_blanchetii.descriptionAuthorship.addAuthor({
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
source1.figure = '8F,G,H';
source1.obtainingMethod = 'opticalMicroscope';
Mimosa_blanchetii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.capitate.filiform.variantCordistipulae.addSource(source1);
