"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mimosa_gemmulata = void 0;
// Import genus Mimosa
var _1 = require(".");
// Import characters
var v1_1 = require("../../characters/v1");
var Leaf_1 = require("../../characters/v1/Leaf");
var Bipinnate_1 = require("../../characters/v1/Leaf/Bipinnate");
// Import annotation classes
var v1_2 = require("../../characters/v1");
// Description of Mimosa gemulata
var Mimosa_gemmulata = new _1.Mimosa();
exports.Mimosa_gemmulata = Mimosa_gemmulata;
Mimosa_gemmulata.specificEpithet = 'gemmulata';
Mimosa_gemmulata.leaf = new v1_1.Leaf();
Mimosa_gemmulata.leaf.bipinnate = new Leaf_1.Bipinnate();
Mimosa_gemmulata.leaf.bipinnate.pinnae = new Bipinnate_1.Pinnae();
Mimosa_gemmulata.leaf.bipinnate.pinnae.gall = new v1_1.Gall();
Mimosa_gemmulata.leaf.bipinnate.pinnae.gall.inducedBy = 'Cecidomyiidae';
// Description authorship
Mimosa_gemmulata.descriptionAuthorship = new v1_2.DescriptionAuthorship();
Mimosa_gemmulata.descriptionAuthorship.addAuthor({
    name: 'Juliana Santos-Silva',
    date: 1692107172
});
// Sources
/// Trichomes
var source1 = new v1_2.Source();
source1.sourceType = 'article';
source1.authorship = 'Vieira, L.G. & Nogueiro, R.M. & Costa, E.C. & Carvalho-Fernandes, S.P. & Santos-Silva, J.';
source1.year = 2018;
source1.title = 'Insect galls in Rupestrian field and Cerrado stricto sensu vegetation in Caetité, Bahia, Brazil';
source1.journal = 'Biota Neotrop.';
source1.number = 18;
source1.volume = 2;
source1.figure = '2P,Q';
source1.obtainingMethod = 'photo';
source1.doi = 'https://doi.org/10.1590/1676-0611-BN-2017-0402';
Mimosa_gemmulata.leaf.bipinnate.pinnae.gall.addSource(source1);
