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


// Description of Mimosa myriophylla
const Mimosa_myriophylla = new Mimosa()
Mimosa_myriophylla.specificEpithet = 'myriophylla'

Mimosa_myriophylla.stems = new Stems()

Mimosa_myriophylla.stipule = new Stipule()
Mimosa_myriophylla.stipule.margin = new MarginStipule()
Mimosa_myriophylla.stipule.adaxial = new AdaxialStipule()
Mimosa_myriophylla.stipule.abaxial = new AbaxialStipule()

Mimosa_myriophylla.leaf = new Leaf()
Mimosa_myriophylla.leaf.petiole = new Petiole()
Mimosa_myriophylla.leaf.bipinnate = new Bipinnate()
Mimosa_myriophylla.leaf.bipinnate.rachis = new Rachis()
Mimosa_myriophylla.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_myriophylla.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_myriophylla.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(8)
Mimosa_myriophylla.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_myriophylla.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_myriophylla.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_myriophylla.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(14, 23)
Mimosa_myriophylla.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(25)
Mimosa_myriophylla.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_myriophylla.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_myriophylla.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_myriophylla.inflorescence = new Inflorescence()
Mimosa_myriophylla.inflorescence.peduncle = new Peduncle()
Mimosa_myriophylla.inflorescence.capitate = new CapitateInflorescence()

Mimosa_myriophylla.flower = new Flower()
Mimosa_myriophylla.flower.bracteole = new Bracteole()
Mimosa_myriophylla.flower.merism = '4-merous'
Mimosa_myriophylla.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_myriophylla.flower.calyx = new Calyx()
Mimosa_myriophylla.flower.calyx.shape = 'paleaceous-pappiform'
Mimosa_myriophylla.flower.corolla = new Corolla()
Mimosa_myriophylla.flower.corolla.shape = ['turbinate', 'vase-shaped']

Mimosa_myriophylla.androecium = new Androecium()
Mimosa_myriophylla.androecium.filaments = new Filaments()
Mimosa_myriophylla.androecium.filaments.colour = 'redish'

Mimosa_myriophylla.ginoecium = new Ginoecium()
Mimosa_myriophylla.ginoecium.ovary = new Ovary()

Mimosa_myriophylla.fruit = new Fruit()
Mimosa_myriophylla.fruit.stipe = new Stipe()
Mimosa_myriophylla.fruit.replum = new Replum()
Mimosa_myriophylla.fruit.epicarp = new Epicarp()

Mimosa_myriophylla.seed = new Seed()


// Description authorship
Mimosa_myriophylla.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_myriophylla.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa myriophylla
export { Mimosa_myriophylla }