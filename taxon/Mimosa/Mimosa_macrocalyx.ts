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


// Description of Mimosa macrocalyx
const Mimosa_macrocalyx = new Mimosa()
Mimosa_macrocalyx.specificEpithet = 'macrocalyx'

Mimosa_macrocalyx.stems = new Stems()

Mimosa_macrocalyx.stipule = new Stipule()
Mimosa_macrocalyx.stipule.margin = new MarginStipule()
Mimosa_macrocalyx.stipule.adaxial = new AdaxialStipule()
Mimosa_macrocalyx.stipule.abaxial = new AbaxialStipule()

Mimosa_macrocalyx.leaf = new Leaf()
Mimosa_macrocalyx.leaf.petiole = new Petiole()
Mimosa_macrocalyx.leaf.bipinnate = new Bipinnate()
Mimosa_macrocalyx.leaf.bipinnate.rachis = new Rachis()
Mimosa_macrocalyx.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_macrocalyx.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_macrocalyx.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_macrocalyx.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_macrocalyx.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_macrocalyx.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_macrocalyx.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(10, 17)
Mimosa_macrocalyx.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_macrocalyx.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_macrocalyx.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_macrocalyx.inflorescence = new Inflorescence()
Mimosa_macrocalyx.inflorescence.peduncle = new Peduncle()
Mimosa_macrocalyx.inflorescence.capitate = new CapitateInflorescence()

Mimosa_macrocalyx.flower = new Flower()
Mimosa_macrocalyx.flower.bracteole = new Bracteole()
Mimosa_macrocalyx.flower.merism = '4-merous'
Mimosa_macrocalyx.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_macrocalyx.flower.calyx = new Calyx()
Mimosa_macrocalyx.flower.calyx.shape = 'paleaceous'
Mimosa_macrocalyx.flower.corolla = new Corolla()
Mimosa_macrocalyx.flower.corolla.shape = 'vase-shaped'

Mimosa_macrocalyx.androecium = new Androecium()
Mimosa_macrocalyx.androecium.filaments = new Filaments()
Mimosa_macrocalyx.androecium.filaments.colour = 'pinkish'

Mimosa_macrocalyx.ginoecium = new Ginoecium()
Mimosa_macrocalyx.ginoecium.ovary = new Ovary()

Mimosa_macrocalyx.fruit = new Fruit()
Mimosa_macrocalyx.fruit.stipe = new Stipe()
Mimosa_macrocalyx.fruit.replum = new Replum()
Mimosa_macrocalyx.fruit.epicarp = new Epicarp()

Mimosa_macrocalyx.seed = new Seed()


// Description authorship
Mimosa_macrocalyx.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_macrocalyx.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa macrocalyx
export { Mimosa_macrocalyx }