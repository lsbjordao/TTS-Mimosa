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


// Description of Mimosa cainguensis
const Mimosa_cainguensis = new Mimosa()
Mimosa_cainguensis.specificEpithet = 'cainguensis'

Mimosa_cainguensis.stems = new Stems()

Mimosa_cainguensis.stipule = new Stipule()
Mimosa_cainguensis.stipule.margin = new MarginStipule()
Mimosa_cainguensis.stipule.adaxial = new AdaxialStipule()
Mimosa_cainguensis.stipule.abaxial = new AbaxialStipule()

Mimosa_cainguensis.leaf = new Leaf()
Mimosa_cainguensis.leaf.petiole = new Petiole()
Mimosa_cainguensis.leaf.bipinnate = new Bipinnate()
Mimosa_cainguensis.leaf.bipinnate.rachis = new Rachis()
Mimosa_cainguensis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_cainguensis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_cainguensis.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_cainguensis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_cainguensis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_cainguensis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_cainguensis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(9, 15)
Mimosa_cainguensis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_cainguensis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_cainguensis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_cainguensis.inflorescence = new Inflorescence()
Mimosa_cainguensis.inflorescence.peduncle = new Peduncle()
Mimosa_cainguensis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_cainguensis.flower = new Flower()
Mimosa_cainguensis.flower.bracteole = new Bracteole()
Mimosa_cainguensis.flower.merism = '4-merous'
Mimosa_cainguensis.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_cainguensis.flower.calyx = new Calyx()
Mimosa_cainguensis.flower.calyx.shape = 'campanulate'
Mimosa_cainguensis.flower.corolla = new Corolla()
Mimosa_cainguensis.flower.corolla.shape = 'vase-shaped'

Mimosa_cainguensis.androecium = new Androecium()
Mimosa_cainguensis.androecium.filaments = new Filaments()
Mimosa_cainguensis.androecium.filaments.colour = ['lilac', 'pinkish']

Mimosa_cainguensis.ginoecium = new Ginoecium()
Mimosa_cainguensis.ginoecium.ovary = new Ovary()

Mimosa_cainguensis.fruit = new Fruit()
Mimosa_cainguensis.fruit.stipe = new Stipe()
Mimosa_cainguensis.fruit.replum = new Replum()
Mimosa_cainguensis.fruit.epicarp = new Epicarp()

Mimosa_cainguensis.seed = new Seed()


// Description authorship
Mimosa_cainguensis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_cainguensis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa cainguensis
export { Mimosa_cainguensis }