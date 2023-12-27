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


// Description of Mimosa polydactyla
const Mimosa_polydactyla = new Mimosa()
Mimosa_polydactyla.specificEpithet = 'polydactyla'

Mimosa_polydactyla.stems = new Stems()

Mimosa_polydactyla.stipule = new Stipule()
Mimosa_polydactyla.stipule.margin = new MarginStipule()
Mimosa_polydactyla.stipule.adaxial = new AdaxialStipule()
Mimosa_polydactyla.stipule.abaxial = new AbaxialStipule()

Mimosa_polydactyla.leaf = new Leaf()
Mimosa_polydactyla.leaf.petiole = new Petiole()
Mimosa_polydactyla.leaf.bipinnate = new Bipinnate()
Mimosa_polydactyla.leaf.bipinnate.rachis = new Rachis()
Mimosa_polydactyla.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_polydactyla.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_polydactyla.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(3, 5)
Mimosa_polydactyla.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_polydactyla.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_polydactyla.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_polydactyla.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(5, 9)
Mimosa_polydactyla.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(10)
Mimosa_polydactyla.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_polydactyla.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_polydactyla.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_polydactyla.inflorescence = new Inflorescence()
Mimosa_polydactyla.inflorescence.peduncle = new Peduncle()
Mimosa_polydactyla.inflorescence.capitate = new CapitateInflorescence()

Mimosa_polydactyla.flower = new Flower()
Mimosa_polydactyla.flower.bracteole = new Bracteole()
Mimosa_polydactyla.flower.merism = '4-merous'
Mimosa_polydactyla.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_polydactyla.flower.calyx = new Calyx()
Mimosa_polydactyla.flower.corolla = new Corolla()
Mimosa_polydactyla.flower.corolla.shape = 'vase-shaped'

Mimosa_polydactyla.androecium = new Androecium()
Mimosa_polydactyla.androecium.filaments = new Filaments()
Mimosa_polydactyla.androecium.filaments.colour = ['pinkish', 'whitenish']

Mimosa_polydactyla.ginoecium = new Ginoecium()
Mimosa_polydactyla.ginoecium.ovary = new Ovary()

Mimosa_polydactyla.fruit = new Fruit()
Mimosa_polydactyla.fruit.stipe = new Stipe()
Mimosa_polydactyla.fruit.replum = new Replum()
Mimosa_polydactyla.fruit.epicarp = new Epicarp()

Mimosa_polydactyla.seed = new Seed()


// Description authorship
Mimosa_polydactyla.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_polydactyla.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa polydactyla
export { Mimosa_polydactyla }