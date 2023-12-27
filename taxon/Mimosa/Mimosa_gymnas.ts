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


// Description of Mimosa gymnas
const Mimosa_gymnas = new Mimosa()
Mimosa_gymnas.specificEpithet = 'gymnas'

Mimosa_gymnas.stems = new Stems()

Mimosa_gymnas.stipule = new Stipule()
Mimosa_gymnas.stipule.margin = new MarginStipule()
Mimosa_gymnas.stipule.adaxial = new AdaxialStipule()
Mimosa_gymnas.stipule.abaxial = new AbaxialStipule()

Mimosa_gymnas.leaf = new Leaf()
Mimosa_gymnas.leaf.petiole = new Petiole()
Mimosa_gymnas.leaf.bipinnate = new Bipinnate()
Mimosa_gymnas.leaf.bipinnate.rachis = new Rachis()
Mimosa_gymnas.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_gymnas.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_gymnas.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_gymnas.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_gymnas.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_gymnas.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_gymnas.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(35, 63)
Mimosa_gymnas.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_gymnas.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_gymnas.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_gymnas.inflorescence = new Inflorescence()
Mimosa_gymnas.inflorescence.peduncle = new Peduncle()
Mimosa_gymnas.inflorescence.capitate = new CapitateInflorescence()

Mimosa_gymnas.flower = new Flower()
Mimosa_gymnas.flower.bracteole = new Bracteole()
Mimosa_gymnas.flower.merism = '4-merous'
Mimosa_gymnas.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_gymnas.flower.calyx = new Calyx()
Mimosa_gymnas.flower.calyx.shape = 'campanulate'
Mimosa_gymnas.flower.corolla = new Corolla()
Mimosa_gymnas.flower.corolla.shape = 'vase-shaped'

Mimosa_gymnas.androecium = new Androecium()
Mimosa_gymnas.androecium.filaments = new Filaments()
Mimosa_gymnas.androecium.filaments.colour = ['lilac', 'pinkish']

Mimosa_gymnas.ginoecium = new Ginoecium()
Mimosa_gymnas.ginoecium.ovary = new Ovary()

Mimosa_gymnas.fruit = new Fruit()
Mimosa_gymnas.fruit.stipe = new Stipe()
Mimosa_gymnas.fruit.replum = new Replum()
Mimosa_gymnas.fruit.epicarp = new Epicarp()

Mimosa_gymnas.seed = new Seed()


// Description authorship
Mimosa_gymnas.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_gymnas.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa gymnas
export { Mimosa_gymnas }