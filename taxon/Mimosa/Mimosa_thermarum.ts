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


// Description of Mimosa thermarum
const Mimosa_thermarum = new Mimosa()
Mimosa_thermarum.specificEpithet = 'thermarum'

Mimosa_thermarum.stems = new Stems()

Mimosa_thermarum.stipule = new Stipule()
Mimosa_thermarum.stipule.margin = new MarginStipule()
Mimosa_thermarum.stipule.adaxial = new AdaxialStipule()
Mimosa_thermarum.stipule.abaxial = new AbaxialStipule()

Mimosa_thermarum.leaf = new Leaf()
Mimosa_thermarum.leaf.petiole = new Petiole()
Mimosa_thermarum.leaf.bipinnate = new Bipinnate()
Mimosa_thermarum.leaf.bipinnate.rachis = new Rachis()
Mimosa_thermarum.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_thermarum.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_thermarum.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_thermarum.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_thermarum.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_thermarum.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_thermarum.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(3, 6)
Mimosa_thermarum.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_thermarum.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_thermarum.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_thermarum.inflorescence = new Inflorescence()
Mimosa_thermarum.inflorescence.peduncle = new Peduncle()
Mimosa_thermarum.inflorescence.capitate = new CapitateInflorescence()

Mimosa_thermarum.flower = new Flower()
Mimosa_thermarum.flower.bracteole = new Bracteole()
Mimosa_thermarum.flower.merism = '4-merous'
Mimosa_thermarum.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_thermarum.flower.calyx = new Calyx()
Mimosa_thermarum.flower.calyx.shape = 'paleaceous'
Mimosa_thermarum.flower.corolla = new Corolla()
Mimosa_thermarum.flower.corolla.shape = ['funnelform', 'subcylindric']

Mimosa_thermarum.androecium = new Androecium()
Mimosa_thermarum.androecium.filaments = new Filaments()
Mimosa_thermarum.androecium.filaments.colour = 'pinkish'

Mimosa_thermarum.ginoecium = new Ginoecium()
Mimosa_thermarum.ginoecium.ovary = new Ovary()

Mimosa_thermarum.fruit = new Fruit()
Mimosa_thermarum.fruit.stipe = new Stipe()
Mimosa_thermarum.fruit.replum = new Replum()
Mimosa_thermarum.fruit.epicarp = new Epicarp()

Mimosa_thermarum.seed = new Seed()


// Description authorship
Mimosa_thermarum.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_thermarum.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa thermarum
export { Mimosa_thermarum }