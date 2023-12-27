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


// Description of Mimosa leptocarpa
const Mimosa_leptocarpa = new Mimosa()
Mimosa_leptocarpa.specificEpithet = 'leptocarpa'

Mimosa_leptocarpa.stems = new Stems()

Mimosa_leptocarpa.stipule = new Stipule()
Mimosa_leptocarpa.stipule.margin = new MarginStipule()
Mimosa_leptocarpa.stipule.adaxial = new AdaxialStipule()
Mimosa_leptocarpa.stipule.abaxial = new AbaxialStipule()

Mimosa_leptocarpa.leaf = new Leaf()
Mimosa_leptocarpa.leaf.petiole = new Petiole()
Mimosa_leptocarpa.leaf.bipinnate = new Bipinnate()
Mimosa_leptocarpa.leaf.bipinnate.rachis = new Rachis()
Mimosa_leptocarpa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_leptocarpa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_leptocarpa.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(4, 6)
Mimosa_leptocarpa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_leptocarpa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_leptocarpa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_leptocarpa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(31, 57)
Mimosa_leptocarpa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_leptocarpa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_leptocarpa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_leptocarpa.inflorescence = new Inflorescence()
Mimosa_leptocarpa.inflorescence.peduncle = new Peduncle()
Mimosa_leptocarpa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_leptocarpa.flower = new Flower()
Mimosa_leptocarpa.flower.bracteole = new Bracteole()
Mimosa_leptocarpa.flower.merism = '5-merous'
Mimosa_leptocarpa.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_leptocarpa.flower.calyx = new Calyx()
Mimosa_leptocarpa.flower.corolla = new Corolla()
Mimosa_leptocarpa.flower.corolla.shape = 'vase-shaped'

Mimosa_leptocarpa.androecium = new Androecium()
Mimosa_leptocarpa.androecium.filaments = new Filaments()

Mimosa_leptocarpa.ginoecium = new Ginoecium()
Mimosa_leptocarpa.ginoecium.ovary = new Ovary()

Mimosa_leptocarpa.fruit = new Fruit()
Mimosa_leptocarpa.fruit.stipe = new Stipe()
Mimosa_leptocarpa.fruit.replum = new Replum()
Mimosa_leptocarpa.fruit.epicarp = new Epicarp()

Mimosa_leptocarpa.seed = new Seed()


// Description authorship
Mimosa_leptocarpa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_leptocarpa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa leptocarpa
export { Mimosa_leptocarpa }