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


// Description of Mimosa paraguariae
const Mimosa_paraguariae = new Mimosa()
Mimosa_paraguariae.specificEpithet = 'paraguariae'

Mimosa_paraguariae.stems = new Stems()

Mimosa_paraguariae.stipule = new Stipule()
Mimosa_paraguariae.stipule.margin = new MarginStipule()
Mimosa_paraguariae.stipule.adaxial = new AdaxialStipule()
Mimosa_paraguariae.stipule.abaxial = new AbaxialStipule()

Mimosa_paraguariae.leaf = new Leaf()
Mimosa_paraguariae.leaf.petiole = new Petiole()
Mimosa_paraguariae.leaf.bipinnate = new Bipinnate()
Mimosa_paraguariae.leaf.bipinnate.rachis = new Rachis()
Mimosa_paraguariae.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_paraguariae.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_paraguariae.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(3)
Mimosa_paraguariae.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(4, 8)
Mimosa_paraguariae.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_paraguariae.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_paraguariae.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_paraguariae.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(5)
Mimosa_paraguariae.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(6, 11)
Mimosa_paraguariae.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(13)
Mimosa_paraguariae.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_paraguariae.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_paraguariae.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_paraguariae.inflorescence = new Inflorescence()
Mimosa_paraguariae.inflorescence.peduncle = new Peduncle()
Mimosa_paraguariae.inflorescence.capitate = new CapitateInflorescence()

Mimosa_paraguariae.flower = new Flower()
Mimosa_paraguariae.flower.bracteole = new Bracteole()
Mimosa_paraguariae.flower.merism = '4-merous'
Mimosa_paraguariae.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_paraguariae.flower.calyx = new Calyx()
Mimosa_paraguariae.flower.calyx.shape = 'campanulate'
Mimosa_paraguariae.flower.corolla = new Corolla()
Mimosa_paraguariae.flower.corolla.shape = 'funnelform'

Mimosa_paraguariae.androecium = new Androecium()
Mimosa_paraguariae.androecium.filaments = new Filaments()
Mimosa_paraguariae.androecium.filaments.colour = 'pinkish'

Mimosa_paraguariae.ginoecium = new Ginoecium()
Mimosa_paraguariae.ginoecium.ovary = new Ovary()

Mimosa_paraguariae.fruit = new Fruit()
Mimosa_paraguariae.fruit.stipe = new Stipe()
Mimosa_paraguariae.fruit.replum = new Replum()
Mimosa_paraguariae.fruit.epicarp = new Epicarp()

Mimosa_paraguariae.seed = new Seed()


// Description authorship
Mimosa_paraguariae.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_paraguariae.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa paraguariae
export { Mimosa_paraguariae }