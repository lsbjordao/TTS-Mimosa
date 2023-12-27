// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Prickles,
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Rachis, Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Rachilla, Leaflet, Paraphillidia } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AdaxialStipule, AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Peduncle, CapitateInflorescence } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa regnellii
const Mimosa_regnellii = new Mimosa()
Mimosa_regnellii.specificEpithet = 'regnellii'

Mimosa_regnellii.stems = new Stems()

Mimosa_regnellii.stipule = new Stipule()
Mimosa_regnellii.stipule.margin = new MarginStipule()
Mimosa_regnellii.stipule.adaxial = new AdaxialStipule()
Mimosa_regnellii.stipule.abaxial = new AbaxialStipule()

Mimosa_regnellii.leaf = new Leaf()
Mimosa_regnellii.leaf.petiole = new Petiole()
Mimosa_regnellii.leaf.bipinnate = new Bipinnate()
Mimosa_regnellii.leaf.bipinnate.rachis = new Rachis()
Mimosa_regnellii.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_regnellii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_regnellii.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(4, 13)
Mimosa_regnellii.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_regnellii.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_regnellii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_regnellii.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_regnellii.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_regnellii.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_regnellii.inflorescence = new Inflorescence()
Mimosa_regnellii.inflorescence.peduncle = new Peduncle()
Mimosa_regnellii.inflorescence.capitate = new CapitateInflorescence()

Mimosa_regnellii.flower = new Flower()
Mimosa_regnellii.flower.bracteole = new Bracteole()
Mimosa_regnellii.flower.merism = '4-merous'
Mimosa_regnellii.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_regnellii.flower.calyx = new Calyx()
Mimosa_regnellii.flower.calyx.shape = 'paleaceous-pappiform'
Mimosa_regnellii.flower.corolla = new Corolla()
Mimosa_regnellii.flower.corolla.shape = 'subtubular'

Mimosa_regnellii.androecium = new Androecium()
Mimosa_regnellii.androecium.filaments = new Filaments()
Mimosa_regnellii.androecium.filaments.colour = 'pinkish'

Mimosa_regnellii.ginoecium = new Ginoecium()
Mimosa_regnellii.ginoecium.ovary = new Ovary()

Mimosa_regnellii.fruit = new Fruit()
Mimosa_regnellii.fruit.stipe = new Stipe()
Mimosa_regnellii.fruit.replum = new Replum()
Mimosa_regnellii.fruit.epicarp = new Epicarp()

Mimosa_regnellii.seed = new Seed()


// Description authorship
Mimosa_regnellii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_regnellii.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa regnellii
export { Mimosa_regnellii }