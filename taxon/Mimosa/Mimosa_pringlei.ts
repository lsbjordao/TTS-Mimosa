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


// Description of Mimosa pringlei
const Mimosa_pringlei = new Mimosa()
Mimosa_pringlei.specificEpithet = 'pringlei'

Mimosa_pringlei.stems = new Stems()

Mimosa_pringlei.stipule = new Stipule()
Mimosa_pringlei.stipule.margin = new MarginStipule()
Mimosa_pringlei.stipule.adaxial = new AdaxialStipule()
Mimosa_pringlei.stipule.abaxial = new AbaxialStipule()

Mimosa_pringlei.leaf = new Leaf()
Mimosa_pringlei.leaf.petiole = new Petiole()
Mimosa_pringlei.leaf.bipinnate = new Bipinnate()
Mimosa_pringlei.leaf.bipinnate.rachis = new Rachis()
Mimosa_pringlei.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_pringlei.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_pringlei.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_pringlei.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_pringlei.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_pringlei.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(25)
Mimosa_pringlei.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(28, 45)
Mimosa_pringlei.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_pringlei.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_pringlei.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_pringlei.inflorescence = new Inflorescence()
Mimosa_pringlei.inflorescence.peduncle = new Peduncle()
Mimosa_pringlei.inflorescence.capitate = new CapitateInflorescence()

Mimosa_pringlei.flower = new Flower()
Mimosa_pringlei.flower.bracteole = new Bracteole()
Mimosa_pringlei.flower.merism = '5-merous'
Mimosa_pringlei.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_pringlei.flower.calyx = new Calyx()
Mimosa_pringlei.flower.calyx.shape = 'campanulate'
Mimosa_pringlei.flower.corolla = new Corolla()
Mimosa_pringlei.flower.corolla.shape = ['turbinate', 'vase-shaped']

Mimosa_pringlei.androecium = new Androecium()
Mimosa_pringlei.androecium.filaments = new Filaments()
Mimosa_pringlei.androecium.filaments.colour = 'pinkish'

Mimosa_pringlei.ginoecium = new Ginoecium()
Mimosa_pringlei.ginoecium.ovary = new Ovary()

Mimosa_pringlei.fruit = new Fruit()
Mimosa_pringlei.fruit.stipe = new Stipe()
Mimosa_pringlei.fruit.replum = new Replum()
Mimosa_pringlei.fruit.epicarp = new Epicarp()

Mimosa_pringlei.seed = new Seed()


// Description authorship
Mimosa_pringlei.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_pringlei.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa pringlei
export { Mimosa_pringlei }