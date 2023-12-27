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


// Description of Mimosa peduncularis
const Mimosa_peduncularis = new Mimosa()
Mimosa_peduncularis.specificEpithet = 'peduncularis'

Mimosa_peduncularis.stems = new Stems()

Mimosa_peduncularis.stipule = new Stipule()
Mimosa_peduncularis.stipule.margin = new MarginStipule()
Mimosa_peduncularis.stipule.adaxial = new AdaxialStipule()
Mimosa_peduncularis.stipule.abaxial = new AbaxialStipule()

Mimosa_peduncularis.leaf = new Leaf()
Mimosa_peduncularis.leaf.petiole = new Petiole()
Mimosa_peduncularis.leaf.bipinnate = new Bipinnate()
Mimosa_peduncularis.leaf.bipinnate.rachis = new Rachis()
Mimosa_peduncularis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_peduncularis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_peduncularis.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(1)
Mimosa_peduncularis.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 4)
Mimosa_peduncularis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_peduncularis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_peduncularis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_peduncularis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(8)
Mimosa_peduncularis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(9, 13)
Mimosa_peduncularis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_peduncularis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_peduncularis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_peduncularis.inflorescence = new Inflorescence()
Mimosa_peduncularis.inflorescence.peduncle = new Peduncle()
Mimosa_peduncularis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_peduncularis.flower = new Flower()
Mimosa_peduncularis.flower.bracteole = new Bracteole()
Mimosa_peduncularis.flower.merism = '4-merous'
Mimosa_peduncularis.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_peduncularis.flower.calyx = new Calyx()
Mimosa_peduncularis.flower.calyx.shape = 'campanulate'
Mimosa_peduncularis.flower.corolla = new Corolla()

Mimosa_peduncularis.androecium = new Androecium()
Mimosa_peduncularis.androecium.filaments = new Filaments()
Mimosa_peduncularis.androecium.filaments.colour = ['creamish', 'whitenish']

Mimosa_peduncularis.ginoecium = new Ginoecium()
Mimosa_peduncularis.ginoecium.ovary = new Ovary()

Mimosa_peduncularis.fruit = new Fruit()
Mimosa_peduncularis.fruit.stipe = new Stipe()
Mimosa_peduncularis.fruit.replum = new Replum()
Mimosa_peduncularis.fruit.epicarp = new Epicarp()

Mimosa_peduncularis.seed = new Seed()


// Description authorship
Mimosa_peduncularis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_peduncularis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa peduncularis
export { Mimosa_peduncularis }