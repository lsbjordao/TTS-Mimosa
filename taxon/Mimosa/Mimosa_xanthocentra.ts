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


// Description of Mimosa xanthocentra
const Mimosa_xanthocentra = new Mimosa()
Mimosa_xanthocentra.specificEpithet = 'xanthocentra'

Mimosa_xanthocentra.stems = new Stems()

Mimosa_xanthocentra.stipule = new Stipule()
Mimosa_xanthocentra.stipule.margin = new MarginStipule()
Mimosa_xanthocentra.stipule.adaxial = new AdaxialStipule()
Mimosa_xanthocentra.stipule.abaxial = new AbaxialStipule()

Mimosa_xanthocentra.leaf = new Leaf()
Mimosa_xanthocentra.leaf.petiole = new Petiole()
Mimosa_xanthocentra.leaf.bipinnate = new Bipinnate()
Mimosa_xanthocentra.leaf.bipinnate.rachis = new Rachis()
Mimosa_xanthocentra.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_xanthocentra.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_xanthocentra.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_xanthocentra.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_xanthocentra.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_xanthocentra.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_xanthocentra.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(5)
Mimosa_xanthocentra.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(7, 12)
Mimosa_xanthocentra.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(16)
Mimosa_xanthocentra.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_xanthocentra.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_xanthocentra.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_xanthocentra.inflorescence = new Inflorescence()
Mimosa_xanthocentra.inflorescence.peduncle = new Peduncle()
Mimosa_xanthocentra.inflorescence.capitate = new CapitateInflorescence()

Mimosa_xanthocentra.flower = new Flower()
Mimosa_xanthocentra.flower.bracteole = new Bracteole()
Mimosa_xanthocentra.flower.merism = '4-merous'
Mimosa_xanthocentra.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_xanthocentra.flower.calyx = new Calyx()
Mimosa_xanthocentra.flower.calyx.shape = 'paleaceous-pappiform'
Mimosa_xanthocentra.flower.corolla = new Corolla()

Mimosa_xanthocentra.androecium = new Androecium()
Mimosa_xanthocentra.androecium.filaments = new Filaments()
Mimosa_xanthocentra.androecium.filaments.colour = 'pinkish'

Mimosa_xanthocentra.ginoecium = new Ginoecium()
Mimosa_xanthocentra.ginoecium.ovary = new Ovary()

Mimosa_xanthocentra.fruit = new Fruit()
Mimosa_xanthocentra.fruit.stipe = new Stipe()
Mimosa_xanthocentra.fruit.replum = new Replum()
Mimosa_xanthocentra.fruit.epicarp = new Epicarp()

Mimosa_xanthocentra.seed = new Seed()


// Description authorship
Mimosa_xanthocentra.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_xanthocentra.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa xanthocentra
export { Mimosa_xanthocentra }