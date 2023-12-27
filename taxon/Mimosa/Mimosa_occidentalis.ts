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


// Description of Mimosa occidentalis
const Mimosa_occidentalis = new Mimosa()
Mimosa_occidentalis.specificEpithet = 'occidentalis'

Mimosa_occidentalis.stems = new Stems()

Mimosa_occidentalis.stipule = new Stipule()
Mimosa_occidentalis.stipule.margin = new MarginStipule()
Mimosa_occidentalis.stipule.adaxial = new AdaxialStipule()
Mimosa_occidentalis.stipule.abaxial = new AbaxialStipule()

Mimosa_occidentalis.leaf = new Leaf()
Mimosa_occidentalis.leaf.petiole = new Petiole()
Mimosa_occidentalis.leaf.bipinnate = new Bipinnate()
Mimosa_occidentalis.leaf.bipinnate.rachis = new Rachis()
Mimosa_occidentalis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_occidentalis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_occidentalis.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(4, 9)
Mimosa_occidentalis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_occidentalis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_occidentalis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_occidentalis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(4, 9)
Mimosa_occidentalis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_occidentalis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_occidentalis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_occidentalis.inflorescence = new Inflorescence()
Mimosa_occidentalis.inflorescence.peduncle = new Peduncle()
Mimosa_occidentalis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_occidentalis.flower = new Flower()
Mimosa_occidentalis.flower.bracteole = new Bracteole()
Mimosa_occidentalis.flower.merism = '4-merous'
Mimosa_occidentalis.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_occidentalis.flower.calyx = new Calyx()
Mimosa_occidentalis.flower.calyx.shape = ['campanulate', 'turbinate']
Mimosa_occidentalis.flower.corolla = new Corolla()
Mimosa_occidentalis.flower.corolla.shape = ['turbinate', 'campanulate', 'vase-shaped']

Mimosa_occidentalis.androecium = new Androecium()
Mimosa_occidentalis.androecium.filaments = new Filaments()

Mimosa_occidentalis.ginoecium = new Ginoecium()
Mimosa_occidentalis.ginoecium.ovary = new Ovary()

Mimosa_occidentalis.fruit = new Fruit()
Mimosa_occidentalis.fruit.stipe = new Stipe()
Mimosa_occidentalis.fruit.replum = new Replum()
Mimosa_occidentalis.fruit.epicarp = new Epicarp()

Mimosa_occidentalis.seed = new Seed()


// Description authorship
Mimosa_occidentalis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_occidentalis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709353 
})


// Sources


// Export Mimosa occidentalis
export { Mimosa_occidentalis }