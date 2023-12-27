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


// Description of Mimosa pedunculosa
const Mimosa_pedunculosa = new Mimosa()
Mimosa_pedunculosa.specificEpithet = 'pedunculosa'

Mimosa_pedunculosa.stems = new Stems()

Mimosa_pedunculosa.stipule = new Stipule()
Mimosa_pedunculosa.stipule.margin = new MarginStipule()
Mimosa_pedunculosa.stipule.adaxial = new AdaxialStipule()
Mimosa_pedunculosa.stipule.abaxial = new AbaxialStipule()

Mimosa_pedunculosa.leaf = new Leaf()
Mimosa_pedunculosa.leaf.petiole = new Petiole()
Mimosa_pedunculosa.leaf.bipinnate = new Bipinnate()
Mimosa_pedunculosa.leaf.bipinnate.rachis = new Rachis()
Mimosa_pedunculosa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_pedunculosa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_pedunculosa.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_pedunculosa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_pedunculosa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_pedunculosa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_pedunculosa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(26, 33)
Mimosa_pedunculosa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_pedunculosa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_pedunculosa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_pedunculosa.inflorescence = new Inflorescence()
Mimosa_pedunculosa.inflorescence.peduncle = new Peduncle()
Mimosa_pedunculosa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_pedunculosa.flower = new Flower()
Mimosa_pedunculosa.flower.bracteole = new Bracteole()
Mimosa_pedunculosa.flower.merism = ['4-merous', '5-merous']
Mimosa_pedunculosa.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_pedunculosa.flower.calyx = new Calyx()
Mimosa_pedunculosa.flower.calyx.shape = 'campanulate'
Mimosa_pedunculosa.flower.corolla = new Corolla()

Mimosa_pedunculosa.androecium = new Androecium()
Mimosa_pedunculosa.androecium.filaments = new Filaments()
Mimosa_pedunculosa.androecium.filaments.colour = 'pinkish'

Mimosa_pedunculosa.ginoecium = new Ginoecium()
Mimosa_pedunculosa.ginoecium.ovary = new Ovary()

Mimosa_pedunculosa.fruit = new Fruit()
Mimosa_pedunculosa.fruit.stipe = new Stipe()
Mimosa_pedunculosa.fruit.replum = new Replum()
Mimosa_pedunculosa.fruit.epicarp = new Epicarp()

Mimosa_pedunculosa.seed = new Seed()


// Description authorship
Mimosa_pedunculosa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_pedunculosa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa pedunculosa
export { Mimosa_pedunculosa }