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


// Description of Mimosa incana
const Mimosa_incana = new Mimosa()
Mimosa_incana.specificEpithet = 'incana'

Mimosa_incana.stems = new Stems()

Mimosa_incana.stipule = new Stipule()
Mimosa_incana.stipule.margin = new MarginStipule()
Mimosa_incana.stipule.adaxial = new AdaxialStipule()
Mimosa_incana.stipule.abaxial = new AbaxialStipule()

Mimosa_incana.leaf = new Leaf()
Mimosa_incana.leaf.petiole = new Petiole()
Mimosa_incana.leaf.bipinnate = new Bipinnate()
Mimosa_incana.leaf.bipinnate.rachis = new Rachis()
Mimosa_incana.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_incana.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_incana.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_incana.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_incana.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_incana.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_incana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(8)
Mimosa_incana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(9, 19)
Mimosa_incana.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_incana.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_incana.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_incana.inflorescence = new Inflorescence()
Mimosa_incana.inflorescence.peduncle = new Peduncle()
Mimosa_incana.inflorescence.capitate = new CapitateInflorescence()

Mimosa_incana.flower = new Flower()
Mimosa_incana.flower.bracteole = new Bracteole()
Mimosa_incana.flower.merism = '4-merous'
Mimosa_incana.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_incana.flower.calyx = new Calyx()
Mimosa_incana.flower.calyx.shape = 'campanulate'
Mimosa_incana.flower.corolla = new Corolla()
Mimosa_incana.flower.corolla.shape = 'vase-shaped'

Mimosa_incana.androecium = new Androecium()
Mimosa_incana.androecium.filaments = new Filaments()
Mimosa_incana.androecium.filaments.colour = 'pinkish'

Mimosa_incana.ginoecium = new Ginoecium()
Mimosa_incana.ginoecium.ovary = new Ovary()

Mimosa_incana.fruit = new Fruit()
Mimosa_incana.fruit.stipe = new Stipe()
Mimosa_incana.fruit.replum = new Replum()
Mimosa_incana.fruit.epicarp = new Epicarp()

Mimosa_incana.seed = new Seed()


// Description authorship
Mimosa_incana.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_incana.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa incana
export { Mimosa_incana }