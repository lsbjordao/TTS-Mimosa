"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mimosa_cordistipula = void 0;
// Import genus Mimosa
var _1 = require(".");
// Import characters
var v1_1 = require("../../characters/v1");
var Trichomes_1 = require("../../characters/v1/Trichomes");
var Capitate_1 = require("../../characters/v1/Trichomes/Capitate");
// Import annotation classes
var v1_2 = require("../../characters/v1");
// Description of Mimosa cordistipula
var Mimosa_cordistipula = new _1.Mimosa();
exports.Mimosa_cordistipula = Mimosa_cordistipula;
Mimosa_cordistipula.specificEpithet = 'cordistipula';
Mimosa_cordistipula.stems = new v1_1.Stems();
Mimosa_cordistipula.stems.trichomes = new v1_1.Trichomes();
Mimosa_cordistipula.stems.trichomes.capitate = new Trichomes_1.Capitate();
Mimosa_cordistipula.stems.trichomes.capitate.filiform = new Capitate_1.CapitateFiliform();
Mimosa_cordistipula.stems.trichomes.capitate.filiform.are = 'present';
// Description authorship
Mimosa_cordistipula.descriptionAuthorship = new v1_2.DescriptionAuthorship();
Mimosa_cordistipula.descriptionAuthorship.addAuthor({
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
source1.figure = '9F,G,H';
source1.obtainingMethod = 'opticalMicroscope';
Mimosa_cordistipula.stems.trichomes.capitate.filiform.addSource(source1);
