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


// Description of Mimosa rupestris
const Mimosa_rupestris = new Mimosa()
Mimosa_rupestris.specificEpithet = 'rupestris'

Mimosa_rupestris.stems = new Stems()

Mimosa_rupestris.stipule = new Stipule()
Mimosa_rupestris.stipule.margin = new MarginStipule()
Mimosa_rupestris.stipule.adaxial = new AdaxialStipule()
Mimosa_rupestris.stipule.abaxial = new AbaxialStipule()

Mimosa_rupestris.leaf = new Leaf()
Mimosa_rupestris.leaf.petiole = new Petiole()
Mimosa_rupestris.leaf.bipinnate = new Bipinnate()
Mimosa_rupestris.leaf.bipinnate.rachis = new Rachis()
Mimosa_rupestris.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_rupestris.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_rupestris.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_rupestris.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_rupestris.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_rupestris.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_rupestris.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(7)
Mimosa_rupestris.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(8, 12)
Mimosa_rupestris.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_rupestris.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_rupestris.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_rupestris.inflorescence = new Inflorescence()
Mimosa_rupestris.inflorescence.peduncle = new Peduncle()
Mimosa_rupestris.inflorescence.capitate = new CapitateInflorescence()

Mimosa_rupestris.flower = new Flower()
Mimosa_rupestris.flower.bracteole = new Bracteole()
Mimosa_rupestris.flower.merism = '4-merous'
Mimosa_rupestris.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_rupestris.flower.calyx = new Calyx()
Mimosa_rupestris.flower.calyx.shape = 'cup-shaped'
Mimosa_rupestris.flower.corolla = new Corolla()
Mimosa_rupestris.flower.corolla.shape = ['turbinate', 'campanulate']

Mimosa_rupestris.androecium = new Androecium()
Mimosa_rupestris.androecium.filaments = new Filaments()

Mimosa_rupestris.ginoecium = new Ginoecium()
Mimosa_rupestris.ginoecium.ovary = new Ovary()

Mimosa_rupestris.fruit = new Fruit()
Mimosa_rupestris.fruit.stipe = new Stipe()
Mimosa_rupestris.fruit.replum = new Replum()
Mimosa_rupestris.fruit.epicarp = new Epicarp()

Mimosa_rupestris.seed = new Seed()


// Description authorship
Mimosa_rupestris.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_rupestris.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa rupestris
export { Mimosa_rupestris }