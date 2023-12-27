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


// Description of Mimosa axillaris
const Mimosa_axillaris = new Mimosa()
Mimosa_axillaris.specificEpithet = 'axillaris'

Mimosa_axillaris.stems = new Stems()

Mimosa_axillaris.stipule = new Stipule()
Mimosa_axillaris.stipule.margin = new MarginStipule()
Mimosa_axillaris.stipule.adaxial = new AdaxialStipule()
Mimosa_axillaris.stipule.abaxial = new AbaxialStipule()

Mimosa_axillaris.leaf = new Leaf()
Mimosa_axillaris.leaf.petiole = new Petiole()
Mimosa_axillaris.leaf.bipinnate = new Bipinnate()
Mimosa_axillaris.leaf.bipinnate.rachis = new Rachis()
Mimosa_axillaris.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_axillaris.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_axillaris.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_axillaris.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_axillaris.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_axillaris.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_axillaris.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(30, 41)
Mimosa_axillaris.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_axillaris.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_axillaris.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_axillaris.inflorescence = new Inflorescence()
Mimosa_axillaris.inflorescence.peduncle = new Peduncle()
Mimosa_axillaris.inflorescence.capitate = new CapitateInflorescence()

Mimosa_axillaris.flower = new Flower()
Mimosa_axillaris.flower.bracteole = new Bracteole()
Mimosa_axillaris.flower.merism = '4-merous'
Mimosa_axillaris.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_axillaris.flower.calyx = new Calyx()
Mimosa_axillaris.flower.calyx.shape = 'paleaceous-pappiform'
Mimosa_axillaris.flower.corolla = new Corolla()
Mimosa_axillaris.flower.corolla.shape = 'vase-shaped'

Mimosa_axillaris.androecium = new Androecium()
Mimosa_axillaris.androecium.filaments = new Filaments()
Mimosa_axillaris.androecium.filaments.colour = 'pinkish'

Mimosa_axillaris.ginoecium = new Ginoecium()
Mimosa_axillaris.ginoecium.ovary = new Ovary()

Mimosa_axillaris.fruit = new Fruit()
Mimosa_axillaris.fruit.stipe = new Stipe()
Mimosa_axillaris.fruit.replum = new Replum()
Mimosa_axillaris.fruit.epicarp = new Epicarp()

Mimosa_axillaris.seed = new Seed()


// Description authorship
Mimosa_axillaris.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_axillaris.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa axillaris
export { Mimosa_axillaris }