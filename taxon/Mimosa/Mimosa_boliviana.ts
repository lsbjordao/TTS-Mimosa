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


// Description of Mimosa boliviana
const Mimosa_boliviana = new Mimosa()
Mimosa_boliviana.specificEpithet = 'boliviana'

Mimosa_boliviana.stems = new Stems()

Mimosa_boliviana.stipule = new Stipule()
Mimosa_boliviana.stipule.margin = new MarginStipule()
Mimosa_boliviana.stipule.adaxial = new AdaxialStipule()
Mimosa_boliviana.stipule.abaxial = new AbaxialStipule()

Mimosa_boliviana.leaf = new Leaf()
Mimosa_boliviana.leaf.petiole = new Petiole()
Mimosa_boliviana.leaf.bipinnate = new Bipinnate()
Mimosa_boliviana.leaf.bipinnate.rachis = new Rachis()
Mimosa_boliviana.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_boliviana.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_boliviana.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_boliviana.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_boliviana.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_boliviana.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_boliviana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(19)
Mimosa_boliviana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(23, 30)
Mimosa_boliviana.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_boliviana.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_boliviana.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_boliviana.inflorescence = new Inflorescence()
Mimosa_boliviana.inflorescence.peduncle = new Peduncle()
Mimosa_boliviana.inflorescence.capitate = new CapitateInflorescence()

Mimosa_boliviana.flower = new Flower()
Mimosa_boliviana.flower.bracteole = new Bracteole()
Mimosa_boliviana.flower.merism = '4-merous'
Mimosa_boliviana.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_boliviana.flower.calyx = new Calyx()
Mimosa_boliviana.flower.calyx.shape = 'paleaceous-pappiform'
Mimosa_boliviana.flower.corolla = new Corolla()

Mimosa_boliviana.androecium = new Androecium()
Mimosa_boliviana.androecium.filaments = new Filaments()
Mimosa_boliviana.androecium.filaments.colour = 'pinkish'

Mimosa_boliviana.ginoecium = new Ginoecium()
Mimosa_boliviana.ginoecium.ovary = new Ovary()

Mimosa_boliviana.fruit = new Fruit()
Mimosa_boliviana.fruit.stipe = new Stipe()
Mimosa_boliviana.fruit.replum = new Replum()
Mimosa_boliviana.fruit.epicarp = new Epicarp()

Mimosa_boliviana.seed = new Seed()


// Description authorship
Mimosa_boliviana.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_boliviana.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa boliviana
export { Mimosa_boliviana }