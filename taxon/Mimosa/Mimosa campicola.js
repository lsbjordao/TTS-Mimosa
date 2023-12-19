"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mimosa_campicola = void 0;
// Import genus Mimosa
var _1 = require(".");
// Import characters
var v1_1 = require("../../characters/v1");
var Trichomes_1 = require("../../characters/v1/Trichomes");
var Setiform_1 = require("../../characters/v1/Trichomes/Setiform");
var Fruit_1 = require("../../characters/v1/Fruit");
// Import annotation classes
var v1_2 = require("../../characters/v1");
// Description of Mimosa campicola
var Mimosa_campicola = new _1.Mimosa();
exports.Mimosa_campicola = Mimosa_campicola;
Mimosa_campicola.specificEpithet = 'campicola';
Mimosa_campicola.fruit = new v1_1.Fruit();
Mimosa_campicola.fruit.epicarp = new Fruit_1.Epicarp();
Mimosa_campicola.fruit.epicarp.trichomes = new v1_1.Trichomes();
Mimosa_campicola.fruit.epicarp.trichomes.setiform = new Trichomes_1.Setiform();
Mimosa_campicola.fruit.epicarp.trichomes.setiform.glochidiate = new Setiform_1.SetiformGlochidiate();
Mimosa_campicola.fruit.epicarp.trichomes.setiform.glochidiate.are = 'present';
// Description authorship
Mimosa_campicola.descriptionAuthorship = new v1_2.DescriptionAuthorship();
Mimosa_campicola.descriptionAuthorship.addAuthor({
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
source1.figure = '4A,B';
source1.obtainingMethod = 'stereoscope';
Mimosa_campicola.fruit.epicarp.trichomes.setiform.glochidiate.addSource(source1);
