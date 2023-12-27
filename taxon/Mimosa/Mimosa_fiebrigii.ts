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


// Description of Mimosa fiebrigii
const Mimosa_fiebrigii = new Mimosa()
Mimosa_fiebrigii.specificEpithet = 'fiebrigii'

Mimosa_fiebrigii.stems = new Stems()

Mimosa_fiebrigii.stipule = new Stipule()
Mimosa_fiebrigii.stipule.margin = new MarginStipule()
Mimosa_fiebrigii.stipule.adaxial = new AdaxialStipule()
Mimosa_fiebrigii.stipule.abaxial = new AbaxialStipule()

Mimosa_fiebrigii.leaf = new Leaf()
Mimosa_fiebrigii.leaf.petiole = new Petiole()
Mimosa_fiebrigii.leaf.bipinnate = new Bipinnate()
Mimosa_fiebrigii.leaf.bipinnate.rachis = new Rachis()
Mimosa_fiebrigii.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_fiebrigii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_fiebrigii.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(8)
Mimosa_fiebrigii.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(10, 16)
Mimosa_fiebrigii.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_fiebrigii.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_fiebrigii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_fiebrigii.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_fiebrigii.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_fiebrigii.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_fiebrigii.inflorescence = new Inflorescence()
Mimosa_fiebrigii.inflorescence.peduncle = new Peduncle()
Mimosa_fiebrigii.inflorescence.capitate = new CapitateInflorescence()

Mimosa_fiebrigii.flower = new Flower()
Mimosa_fiebrigii.flower.bracteole = new Bracteole()
Mimosa_fiebrigii.flower.merism = '4-merous'
Mimosa_fiebrigii.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_fiebrigii.flower.calyx = new Calyx()
Mimosa_fiebrigii.flower.corolla = new Corolla()
Mimosa_fiebrigii.flower.corolla.shape = ['turbinate', 'vase-shaped']

Mimosa_fiebrigii.androecium = new Androecium()
Mimosa_fiebrigii.androecium.filaments = new Filaments()
Mimosa_fiebrigii.androecium.filaments.colour = ['purplish', 'pinkish']

Mimosa_fiebrigii.ginoecium = new Ginoecium()
Mimosa_fiebrigii.ginoecium.ovary = new Ovary()

Mimosa_fiebrigii.fruit = new Fruit()
Mimosa_fiebrigii.fruit.stipe = new Stipe()
Mimosa_fiebrigii.fruit.replum = new Replum()
Mimosa_fiebrigii.fruit.epicarp = new Epicarp()

Mimosa_fiebrigii.seed = new Seed()


// Description authorship
Mimosa_fiebrigii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_fiebrigii.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa fiebrigii
export { Mimosa_fiebrigii }