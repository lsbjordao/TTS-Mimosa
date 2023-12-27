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


// Description of Mimosa densa
const Mimosa_densa = new Mimosa()
Mimosa_densa.specificEpithet = 'densa'

Mimosa_densa.stems = new Stems()

Mimosa_densa.stipule = new Stipule()
Mimosa_densa.stipule.margin = new MarginStipule()
Mimosa_densa.stipule.adaxial = new AdaxialStipule()
Mimosa_densa.stipule.abaxial = new AbaxialStipule()

Mimosa_densa.leaf = new Leaf()
Mimosa_densa.leaf.petiole = new Petiole()
Mimosa_densa.leaf.bipinnate = new Bipinnate()
Mimosa_densa.leaf.bipinnate.rachis = new Rachis()
Mimosa_densa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_densa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_densa.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(10, 32)
Mimosa_densa.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(42)
Mimosa_densa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_densa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_densa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_densa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_densa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_densa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_densa.inflorescence = new Inflorescence()
Mimosa_densa.inflorescence.peduncle = new Peduncle()
Mimosa_densa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_densa.flower = new Flower()
Mimosa_densa.flower.bracteole = new Bracteole()
Mimosa_densa.flower.merism = '4-merous'
Mimosa_densa.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_densa.flower.calyx = new Calyx()
Mimosa_densa.flower.calyx.shape = 'pappiform'
Mimosa_densa.flower.corolla = new Corolla()
Mimosa_densa.flower.corolla.shape = ['turbinate', 'funnelform']

Mimosa_densa.androecium = new Androecium()
Mimosa_densa.androecium.filaments = new Filaments()
Mimosa_densa.androecium.filaments.colour = 'pinkish'

Mimosa_densa.ginoecium = new Ginoecium()
Mimosa_densa.ginoecium.ovary = new Ovary()

Mimosa_densa.fruit = new Fruit()
Mimosa_densa.fruit.stipe = new Stipe()
Mimosa_densa.fruit.replum = new Replum()
Mimosa_densa.fruit.epicarp = new Epicarp()

Mimosa_densa.seed = new Seed()


// Description authorship
Mimosa_densa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_densa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa densa
export { Mimosa_densa }