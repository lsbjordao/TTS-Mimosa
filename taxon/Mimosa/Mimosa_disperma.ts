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


// Description of Mimosa disperma
const Mimosa_disperma = new Mimosa()
Mimosa_disperma.specificEpithet = 'disperma'

Mimosa_disperma.stems = new Stems()

Mimosa_disperma.stipule = new Stipule()
Mimosa_disperma.stipule.margin = new MarginStipule()
Mimosa_disperma.stipule.adaxial = new AdaxialStipule()
Mimosa_disperma.stipule.abaxial = new AbaxialStipule()

Mimosa_disperma.leaf = new Leaf()
Mimosa_disperma.leaf.petiole = new Petiole()
Mimosa_disperma.leaf.bipinnate = new Bipinnate()
Mimosa_disperma.leaf.bipinnate.rachis = new Rachis()
Mimosa_disperma.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_disperma.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_disperma.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_disperma.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_disperma.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_disperma.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_disperma.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_disperma.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_disperma.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_disperma.inflorescence = new Inflorescence()
Mimosa_disperma.inflorescence.peduncle = new Peduncle()
Mimosa_disperma.inflorescence.capitate = new CapitateInflorescence()

Mimosa_disperma.flower = new Flower()
Mimosa_disperma.flower.bracteole = new Bracteole()
Mimosa_disperma.flower.merism = '4-merous'
Mimosa_disperma.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_disperma.flower.calyx = new Calyx()
Mimosa_disperma.flower.calyx.shape = 'campanulate'
Mimosa_disperma.flower.corolla = new Corolla()
Mimosa_disperma.flower.corolla.shape = 'vase-shaped'

Mimosa_disperma.androecium = new Androecium()
Mimosa_disperma.androecium.filaments = new Filaments()
Mimosa_disperma.androecium.filaments.colour = 'pinkish'

Mimosa_disperma.ginoecium = new Ginoecium()
Mimosa_disperma.ginoecium.ovary = new Ovary()

Mimosa_disperma.fruit = new Fruit()
Mimosa_disperma.fruit.stipe = new Stipe()
Mimosa_disperma.fruit.replum = new Replum()
Mimosa_disperma.fruit.epicarp = new Epicarp()

Mimosa_disperma.seed = new Seed()


// Description authorship
Mimosa_disperma.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_disperma.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa disperma
export { Mimosa_disperma }