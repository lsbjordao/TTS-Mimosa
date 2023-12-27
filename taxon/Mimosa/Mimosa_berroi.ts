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


// Description of Mimosa berroi
const Mimosa_berroi = new Mimosa()
Mimosa_berroi.specificEpithet = 'berroi'

Mimosa_berroi.stems = new Stems()

Mimosa_berroi.stipule = new Stipule()
Mimosa_berroi.stipule.margin = new MarginStipule()
Mimosa_berroi.stipule.adaxial = new AdaxialStipule()
Mimosa_berroi.stipule.abaxial = new AbaxialStipule()

Mimosa_berroi.leaf = new Leaf()
Mimosa_berroi.leaf.petiole = new Petiole()
Mimosa_berroi.leaf.bipinnate = new Bipinnate()
Mimosa_berroi.leaf.bipinnate.rachis = new Rachis()
Mimosa_berroi.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_berroi.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_berroi.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_berroi.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_berroi.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_berroi.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_berroi.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(17)
Mimosa_berroi.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(20, 28)
Mimosa_berroi.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(30)
Mimosa_berroi.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_berroi.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_berroi.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_berroi.inflorescence = new Inflorescence()
Mimosa_berroi.inflorescence.peduncle = new Peduncle()
Mimosa_berroi.inflorescence.capitate = new CapitateInflorescence()

Mimosa_berroi.flower = new Flower()
Mimosa_berroi.flower.bracteole = new Bracteole()
Mimosa_berroi.flower.merism = '4-merous'
Mimosa_berroi.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_berroi.flower.calyx = new Calyx()
Mimosa_berroi.flower.calyx.shape = 'campanulate'
Mimosa_berroi.flower.corolla = new Corolla()
Mimosa_berroi.flower.corolla.shape = ['turbinate', 'vase-shaped']

Mimosa_berroi.androecium = new Androecium()
Mimosa_berroi.androecium.filaments = new Filaments()
Mimosa_berroi.androecium.filaments.colour = 'yellowish'

Mimosa_berroi.ginoecium = new Ginoecium()
Mimosa_berroi.ginoecium.ovary = new Ovary()

Mimosa_berroi.fruit = new Fruit()
Mimosa_berroi.fruit.stipe = new Stipe()
Mimosa_berroi.fruit.replum = new Replum()
Mimosa_berroi.fruit.epicarp = new Epicarp()

Mimosa_berroi.seed = new Seed()


// Description authorship
Mimosa_berroi.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_berroi.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa berroi
export { Mimosa_berroi }