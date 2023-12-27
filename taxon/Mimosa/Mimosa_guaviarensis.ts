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


// Description of Mimosa guaviarensis
const Mimosa_guaviarensis = new Mimosa()
Mimosa_guaviarensis.specificEpithet = 'guaviarensis'

Mimosa_guaviarensis.stems = new Stems()

Mimosa_guaviarensis.stipule = new Stipule()
Mimosa_guaviarensis.stipule.margin = new MarginStipule()
Mimosa_guaviarensis.stipule.adaxial = new AdaxialStipule()
Mimosa_guaviarensis.stipule.abaxial = new AbaxialStipule()

Mimosa_guaviarensis.leaf = new Leaf()
Mimosa_guaviarensis.leaf.petiole = new Petiole()
Mimosa_guaviarensis.leaf.bipinnate = new Bipinnate()
Mimosa_guaviarensis.leaf.bipinnate.rachis = new Rachis()
Mimosa_guaviarensis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_guaviarensis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_guaviarensis.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(1, 2)
Mimosa_guaviarensis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_guaviarensis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_guaviarensis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_guaviarensis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(4, 11)
Mimosa_guaviarensis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_guaviarensis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_guaviarensis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_guaviarensis.inflorescence = new Inflorescence()
Mimosa_guaviarensis.inflorescence.peduncle = new Peduncle()
Mimosa_guaviarensis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_guaviarensis.flower = new Flower()
Mimosa_guaviarensis.flower.bracteole = new Bracteole()
Mimosa_guaviarensis.flower.merism = '4-merous'
Mimosa_guaviarensis.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_guaviarensis.flower.calyx = new Calyx()
Mimosa_guaviarensis.flower.calyx.shape = 'collar'
Mimosa_guaviarensis.flower.corolla = new Corolla()
Mimosa_guaviarensis.flower.corolla.shape = ['turbinate', 'campanulate']

Mimosa_guaviarensis.androecium = new Androecium()
Mimosa_guaviarensis.androecium.filaments = new Filaments()
Mimosa_guaviarensis.androecium.filaments.colour = 'pinkish'

Mimosa_guaviarensis.ginoecium = new Ginoecium()
Mimosa_guaviarensis.ginoecium.ovary = new Ovary()

Mimosa_guaviarensis.fruit = new Fruit()
Mimosa_guaviarensis.fruit.stipe = new Stipe()
Mimosa_guaviarensis.fruit.replum = new Replum()
Mimosa_guaviarensis.fruit.epicarp = new Epicarp()

Mimosa_guaviarensis.seed = new Seed()


// Description authorship
Mimosa_guaviarensis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_guaviarensis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa guaviarensis
export { Mimosa_guaviarensis }