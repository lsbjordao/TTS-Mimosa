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


// Description of Mimosa pedersenii
const Mimosa_pedersenii = new Mimosa()
Mimosa_pedersenii.specificEpithet = 'pedersenii'

Mimosa_pedersenii.stems = new Stems()

Mimosa_pedersenii.stipule = new Stipule()
Mimosa_pedersenii.stipule.margin = new MarginStipule()
Mimosa_pedersenii.stipule.adaxial = new AdaxialStipule()
Mimosa_pedersenii.stipule.abaxial = new AbaxialStipule()

Mimosa_pedersenii.leaf = new Leaf()
Mimosa_pedersenii.leaf.petiole = new Petiole()
Mimosa_pedersenii.leaf.bipinnate = new Bipinnate()
Mimosa_pedersenii.leaf.bipinnate.rachis = new Rachis()
Mimosa_pedersenii.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_pedersenii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_pedersenii.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_pedersenii.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_pedersenii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_pedersenii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(15, 20)
Mimosa_pedersenii.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_pedersenii.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_pedersenii.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_pedersenii.inflorescence = new Inflorescence()
Mimosa_pedersenii.inflorescence.peduncle = new Peduncle()
Mimosa_pedersenii.inflorescence.capitate = new CapitateInflorescence()

Mimosa_pedersenii.flower = new Flower()
Mimosa_pedersenii.flower.bracteole = new Bracteole()
Mimosa_pedersenii.flower.merism = '4-merous'
Mimosa_pedersenii.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_pedersenii.flower.calyx = new Calyx()
Mimosa_pedersenii.flower.calyx.shape = 'paleaceous-pappiform'
Mimosa_pedersenii.flower.corolla = new Corolla()
Mimosa_pedersenii.flower.corolla.shape = 'vase-shaped'

Mimosa_pedersenii.androecium = new Androecium()
Mimosa_pedersenii.androecium.filaments = new Filaments()
Mimosa_pedersenii.androecium.filaments.colour = 'pinkish'

Mimosa_pedersenii.ginoecium = new Ginoecium()
Mimosa_pedersenii.ginoecium.ovary = new Ovary()

Mimosa_pedersenii.fruit = new Fruit()
Mimosa_pedersenii.fruit.stipe = new Stipe()
Mimosa_pedersenii.fruit.replum = new Replum()
Mimosa_pedersenii.fruit.epicarp = new Epicarp()

Mimosa_pedersenii.seed = new Seed()


// Description authorship
Mimosa_pedersenii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_pedersenii.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa pedersenii
export { Mimosa_pedersenii }