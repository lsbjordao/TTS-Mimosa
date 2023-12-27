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


// Description of Mimosa bombycina
const Mimosa_bombycina = new Mimosa()
Mimosa_bombycina.specificEpithet = 'bombycina'

Mimosa_bombycina.stems = new Stems()

Mimosa_bombycina.stipule = new Stipule()
Mimosa_bombycina.stipule.margin = new MarginStipule()
Mimosa_bombycina.stipule.adaxial = new AdaxialStipule()
Mimosa_bombycina.stipule.abaxial = new AbaxialStipule()

Mimosa_bombycina.leaf = new Leaf()
Mimosa_bombycina.leaf.petiole = new Petiole()
Mimosa_bombycina.leaf.bipinnate = new Bipinnate()
Mimosa_bombycina.leaf.bipinnate.rachis = new Rachis()
Mimosa_bombycina.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_bombycina.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_bombycina.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_bombycina.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_bombycina.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_bombycina.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_bombycina.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(9, 16)
Mimosa_bombycina.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_bombycina.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_bombycina.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_bombycina.inflorescence = new Inflorescence()
Mimosa_bombycina.inflorescence.peduncle = new Peduncle()
Mimosa_bombycina.inflorescence.capitate = new CapitateInflorescence()

Mimosa_bombycina.flower = new Flower()
Mimosa_bombycina.flower.bracteole = new Bracteole()
Mimosa_bombycina.flower.merism = '4-merous'
Mimosa_bombycina.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_bombycina.flower.calyx = new Calyx()
Mimosa_bombycina.flower.calyx.shape = 'campanulate'
Mimosa_bombycina.flower.corolla = new Corolla()
Mimosa_bombycina.flower.corolla.shape = 'subcylindric'

Mimosa_bombycina.androecium = new Androecium()
Mimosa_bombycina.androecium.filaments = new Filaments()
Mimosa_bombycina.androecium.filaments.colour = 'pinkish'

Mimosa_bombycina.ginoecium = new Ginoecium()
Mimosa_bombycina.ginoecium.ovary = new Ovary()

Mimosa_bombycina.fruit = new Fruit()
Mimosa_bombycina.fruit.stipe = new Stipe()
Mimosa_bombycina.fruit.replum = new Replum()
Mimosa_bombycina.fruit.epicarp = new Epicarp()

Mimosa_bombycina.seed = new Seed()


// Description authorship
Mimosa_bombycina.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_bombycina.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa bombycina
export { Mimosa_bombycina }