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


// Description of Mimosa ourobrancoensis
const Mimosa_ourobrancoensis = new Mimosa()
Mimosa_ourobrancoensis.specificEpithet = 'ourobrancoensis'

Mimosa_ourobrancoensis.stems = new Stems()

Mimosa_ourobrancoensis.stipule = new Stipule()
Mimosa_ourobrancoensis.stipule.margin = new MarginStipule()
Mimosa_ourobrancoensis.stipule.adaxial = new AdaxialStipule()
Mimosa_ourobrancoensis.stipule.abaxial = new AbaxialStipule()

Mimosa_ourobrancoensis.leaf = new Leaf()
Mimosa_ourobrancoensis.leaf.petiole = new Petiole()
Mimosa_ourobrancoensis.leaf.bipinnate = new Bipinnate()
Mimosa_ourobrancoensis.leaf.bipinnate.rachis = new Rachis()
Mimosa_ourobrancoensis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_ourobrancoensis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_ourobrancoensis.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_ourobrancoensis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_ourobrancoensis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_ourobrancoensis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_ourobrancoensis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(7)
Mimosa_ourobrancoensis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(8, 14)
Mimosa_ourobrancoensis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_ourobrancoensis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_ourobrancoensis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_ourobrancoensis.inflorescence = new Inflorescence()
Mimosa_ourobrancoensis.inflorescence.peduncle = new Peduncle()
Mimosa_ourobrancoensis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_ourobrancoensis.flower = new Flower()
Mimosa_ourobrancoensis.flower.bracteole = new Bracteole()
Mimosa_ourobrancoensis.flower.merism = '4-merous'
Mimosa_ourobrancoensis.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_ourobrancoensis.flower.calyx = new Calyx()
Mimosa_ourobrancoensis.flower.calyx.shape = ['cup-shaped', 'collar']
Mimosa_ourobrancoensis.flower.corolla = new Corolla()
Mimosa_ourobrancoensis.flower.corolla.shape = 'vase-shaped'

Mimosa_ourobrancoensis.androecium = new Androecium()
Mimosa_ourobrancoensis.androecium.filaments = new Filaments()
Mimosa_ourobrancoensis.androecium.filaments.colour = 'pinkish'

Mimosa_ourobrancoensis.ginoecium = new Ginoecium()
Mimosa_ourobrancoensis.ginoecium.ovary = new Ovary()

Mimosa_ourobrancoensis.fruit = new Fruit()
Mimosa_ourobrancoensis.fruit.stipe = new Stipe()
Mimosa_ourobrancoensis.fruit.replum = new Replum()
Mimosa_ourobrancoensis.fruit.epicarp = new Epicarp()

Mimosa_ourobrancoensis.seed = new Seed()


// Description authorship
Mimosa_ourobrancoensis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_ourobrancoensis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa ourobrancoensis
export { Mimosa_ourobrancoensis }