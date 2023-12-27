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


// Description of Mimosa riedelii
const Mimosa_riedelii = new Mimosa()
Mimosa_riedelii.specificEpithet = 'riedelii'

Mimosa_riedelii.stems = new Stems()

Mimosa_riedelii.stipule = new Stipule()
Mimosa_riedelii.stipule.margin = new MarginStipule()
Mimosa_riedelii.stipule.adaxial = new AdaxialStipule()
Mimosa_riedelii.stipule.abaxial = new AbaxialStipule()

Mimosa_riedelii.leaf = new Leaf()
Mimosa_riedelii.leaf.petiole = new Petiole()
Mimosa_riedelii.leaf.bipinnate = new Bipinnate()
Mimosa_riedelii.leaf.bipinnate.rachis = new Rachis()
Mimosa_riedelii.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_riedelii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_riedelii.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(18, 28)
Mimosa_riedelii.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_riedelii.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_riedelii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_riedelii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(25, 32)
Mimosa_riedelii.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_riedelii.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_riedelii.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_riedelii.inflorescence = new Inflorescence()
Mimosa_riedelii.inflorescence.peduncle = new Peduncle()
Mimosa_riedelii.inflorescence.capitate = new CapitateInflorescence()

Mimosa_riedelii.flower = new Flower()
Mimosa_riedelii.flower.bracteole = new Bracteole()
Mimosa_riedelii.flower.merism = '4-merous'
Mimosa_riedelii.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_riedelii.flower.calyx = new Calyx()
Mimosa_riedelii.flower.calyx.shape = 'pappiform'
Mimosa_riedelii.flower.corolla = new Corolla()
Mimosa_riedelii.flower.corolla.shape = 'turbinate'

Mimosa_riedelii.androecium = new Androecium()
Mimosa_riedelii.androecium.filaments = new Filaments()
Mimosa_riedelii.androecium.filaments.colour = 'pinkish'

Mimosa_riedelii.ginoecium = new Ginoecium()
Mimosa_riedelii.ginoecium.ovary = new Ovary()

Mimosa_riedelii.fruit = new Fruit()
Mimosa_riedelii.fruit.stipe = new Stipe()
Mimosa_riedelii.fruit.replum = new Replum()
Mimosa_riedelii.fruit.epicarp = new Epicarp()

Mimosa_riedelii.seed = new Seed()


// Description authorship
Mimosa_riedelii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_riedelii.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa riedelii
export { Mimosa_riedelii }