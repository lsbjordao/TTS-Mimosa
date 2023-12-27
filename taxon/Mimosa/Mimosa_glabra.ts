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


// Description of Mimosa glabra
const Mimosa_glabra = new Mimosa()
Mimosa_glabra.specificEpithet = 'glabra'

Mimosa_glabra.stems = new Stems()

Mimosa_glabra.stipule = new Stipule()
Mimosa_glabra.stipule.margin = new MarginStipule()
Mimosa_glabra.stipule.adaxial = new AdaxialStipule()
Mimosa_glabra.stipule.abaxial = new AbaxialStipule()

Mimosa_glabra.leaf = new Leaf()
Mimosa_glabra.leaf.petiole = new Petiole()
Mimosa_glabra.leaf.bipinnate = new Bipinnate()
Mimosa_glabra.leaf.bipinnate.rachis = new Rachis()
Mimosa_glabra.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_glabra.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_glabra.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_glabra.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_glabra.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_glabra.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_glabra.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_glabra.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_glabra.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_glabra.inflorescence = new Inflorescence()
Mimosa_glabra.inflorescence.peduncle = new Peduncle()
Mimosa_glabra.inflorescence.capitate = new CapitateInflorescence()

Mimosa_glabra.flower = new Flower()
Mimosa_glabra.flower.bracteole = new Bracteole()
Mimosa_glabra.flower.merism = '4-merous'
Mimosa_glabra.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_glabra.flower.calyx = new Calyx()
Mimosa_glabra.flower.calyx.shape = 'campanulate'
Mimosa_glabra.flower.corolla = new Corolla()
Mimosa_glabra.flower.corolla.shape = 'vase-shaped'

Mimosa_glabra.androecium = new Androecium()
Mimosa_glabra.androecium.filaments = new Filaments()
Mimosa_glabra.androecium.filaments.colour = 'pinkish'

Mimosa_glabra.ginoecium = new Ginoecium()
Mimosa_glabra.ginoecium.ovary = new Ovary()

Mimosa_glabra.fruit = new Fruit()
Mimosa_glabra.fruit.stipe = new Stipe()
Mimosa_glabra.fruit.replum = new Replum()
Mimosa_glabra.fruit.epicarp = new Epicarp()

Mimosa_glabra.seed = new Seed()


// Description authorship
Mimosa_glabra.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_glabra.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa glabra
export { Mimosa_glabra }