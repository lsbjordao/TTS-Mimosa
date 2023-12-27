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


// Description of Mimosa hirsutissima
const Mimosa_hirsutissima = new Mimosa()
Mimosa_hirsutissima.specificEpithet = 'hirsutissima'

Mimosa_hirsutissima.stems = new Stems()

Mimosa_hirsutissima.stipule = new Stipule()
Mimosa_hirsutissima.stipule.margin = new MarginStipule()
Mimosa_hirsutissima.stipule.adaxial = new AdaxialStipule()
Mimosa_hirsutissima.stipule.abaxial = new AbaxialStipule()

Mimosa_hirsutissima.leaf = new Leaf()
Mimosa_hirsutissima.leaf.petiole = new Petiole()
Mimosa_hirsutissima.leaf.bipinnate = new Bipinnate()
Mimosa_hirsutissima.leaf.bipinnate.rachis = new Rachis()
Mimosa_hirsutissima.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_hirsutissima.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_hirsutissima.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_hirsutissima.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_hirsutissima.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_hirsutissima.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_hirsutissima.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_hirsutissima.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_hirsutissima.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_hirsutissima.inflorescence = new Inflorescence()
Mimosa_hirsutissima.inflorescence.peduncle = new Peduncle()
Mimosa_hirsutissima.inflorescence.capitate = new CapitateInflorescence()

Mimosa_hirsutissima.flower = new Flower()
Mimosa_hirsutissima.flower.bracteole = new Bracteole()
Mimosa_hirsutissima.flower.merism = '4-merous'
Mimosa_hirsutissima.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_hirsutissima.flower.calyx = new Calyx()
Mimosa_hirsutissima.flower.calyx.shape = 'paleaceous'
Mimosa_hirsutissima.flower.corolla = new Corolla()
Mimosa_hirsutissima.flower.corolla.shape = ['vase-shaped', 'subcylindric']

Mimosa_hirsutissima.androecium = new Androecium()
Mimosa_hirsutissima.androecium.filaments = new Filaments()
Mimosa_hirsutissima.androecium.filaments.colour = 'pinkish'

Mimosa_hirsutissima.ginoecium = new Ginoecium()
Mimosa_hirsutissima.ginoecium.ovary = new Ovary()

Mimosa_hirsutissima.fruit = new Fruit()
Mimosa_hirsutissima.fruit.stipe = new Stipe()
Mimosa_hirsutissima.fruit.replum = new Replum()
Mimosa_hirsutissima.fruit.epicarp = new Epicarp()

Mimosa_hirsutissima.seed = new Seed()


// Description authorship
Mimosa_hirsutissima.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_hirsutissima.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa hirsutissima
export { Mimosa_hirsutissima }