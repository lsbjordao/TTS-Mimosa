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


// Description of Mimosa diplacantha
const Mimosa_diplacantha = new Mimosa()
Mimosa_diplacantha.specificEpithet = 'diplacantha'

Mimosa_diplacantha.stems = new Stems()

Mimosa_diplacantha.stipule = new Stipule()
Mimosa_diplacantha.stipule.margin = new MarginStipule()
Mimosa_diplacantha.stipule.adaxial = new AdaxialStipule()
Mimosa_diplacantha.stipule.abaxial = new AbaxialStipule()

Mimosa_diplacantha.leaf = new Leaf()
Mimosa_diplacantha.leaf.petiole = new Petiole()
Mimosa_diplacantha.leaf.bipinnate = new Bipinnate()
Mimosa_diplacantha.leaf.bipinnate.rachis = new Rachis()
Mimosa_diplacantha.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_diplacantha.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_diplacantha.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(1)
Mimosa_diplacantha.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 4)
Mimosa_diplacantha.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_diplacantha.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_diplacantha.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_diplacantha.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_diplacantha.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_diplacantha.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_diplacantha.inflorescence = new Inflorescence()
Mimosa_diplacantha.inflorescence.peduncle = new Peduncle()
Mimosa_diplacantha.inflorescence.capitate = new CapitateInflorescence()

Mimosa_diplacantha.flower = new Flower()
Mimosa_diplacantha.flower.bracteole = new Bracteole()
Mimosa_diplacantha.flower.merism = ['4-merous', '5-merous']
Mimosa_diplacantha.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_diplacantha.flower.calyx = new Calyx()
Mimosa_diplacantha.flower.calyx.shape = 'campanulate'
Mimosa_diplacantha.flower.corolla = new Corolla()
Mimosa_diplacantha.flower.corolla.shape = ['turbinate', 'vase-shaped']

Mimosa_diplacantha.androecium = new Androecium()
Mimosa_diplacantha.androecium.filaments = new Filaments()
Mimosa_diplacantha.androecium.filaments.colour = 'whitenish'

Mimosa_diplacantha.ginoecium = new Ginoecium()
Mimosa_diplacantha.ginoecium.ovary = new Ovary()

Mimosa_diplacantha.fruit = new Fruit()
Mimosa_diplacantha.fruit.stipe = new Stipe()
Mimosa_diplacantha.fruit.replum = new Replum()
Mimosa_diplacantha.fruit.epicarp = new Epicarp()

Mimosa_diplacantha.seed = new Seed()


// Description authorship
Mimosa_diplacantha.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_diplacantha.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa diplacantha
export { Mimosa_diplacantha }