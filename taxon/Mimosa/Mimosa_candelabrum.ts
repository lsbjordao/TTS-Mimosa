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


// Description of Mimosa candelabrum
const Mimosa_candelabrum = new Mimosa()
Mimosa_candelabrum.specificEpithet = 'candelabrum'

Mimosa_candelabrum.stems = new Stems()

Mimosa_candelabrum.stipule = new Stipule()
Mimosa_candelabrum.stipule.margin = new MarginStipule()
Mimosa_candelabrum.stipule.adaxial = new AdaxialStipule()
Mimosa_candelabrum.stipule.abaxial = new AbaxialStipule()

Mimosa_candelabrum.leaf = new Leaf()
Mimosa_candelabrum.leaf.petiole = new Petiole()
Mimosa_candelabrum.leaf.bipinnate = new Bipinnate()
Mimosa_candelabrum.leaf.bipinnate.rachis = new Rachis()
Mimosa_candelabrum.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_candelabrum.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_candelabrum.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(4)
Mimosa_candelabrum.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(5, 10)
Mimosa_candelabrum.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_candelabrum.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_candelabrum.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_candelabrum.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_candelabrum.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_candelabrum.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_candelabrum.inflorescence = new Inflorescence()
Mimosa_candelabrum.inflorescence.peduncle = new Peduncle()
Mimosa_candelabrum.inflorescence.capitate = new CapitateInflorescence()

Mimosa_candelabrum.flower = new Flower()
Mimosa_candelabrum.flower.bracteole = new Bracteole()
Mimosa_candelabrum.flower.merism = '4-merous'
Mimosa_candelabrum.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_candelabrum.flower.calyx = new Calyx()
Mimosa_candelabrum.flower.calyx.shape = 'paleaceous-pappiform'
Mimosa_candelabrum.flower.corolla = new Corolla()

Mimosa_candelabrum.androecium = new Androecium()
Mimosa_candelabrum.androecium.filaments = new Filaments()
Mimosa_candelabrum.androecium.filaments.colour = 'pinkish'

Mimosa_candelabrum.ginoecium = new Ginoecium()
Mimosa_candelabrum.ginoecium.ovary = new Ovary()

Mimosa_candelabrum.fruit = new Fruit()
Mimosa_candelabrum.fruit.stipe = new Stipe()
Mimosa_candelabrum.fruit.replum = new Replum()
Mimosa_candelabrum.fruit.epicarp = new Epicarp()

Mimosa_candelabrum.seed = new Seed()


// Description authorship
Mimosa_candelabrum.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_candelabrum.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa candelabrum
export { Mimosa_candelabrum }