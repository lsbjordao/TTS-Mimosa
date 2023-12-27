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


// Description of Mimosa maracayuensis
const Mimosa_maracayuensis = new Mimosa()
Mimosa_maracayuensis.specificEpithet = 'maracayuensis'

Mimosa_maracayuensis.stems = new Stems()

Mimosa_maracayuensis.stipule = new Stipule()
Mimosa_maracayuensis.stipule.margin = new MarginStipule()
Mimosa_maracayuensis.stipule.adaxial = new AdaxialStipule()
Mimosa_maracayuensis.stipule.abaxial = new AbaxialStipule()

Mimosa_maracayuensis.leaf = new Leaf()
Mimosa_maracayuensis.leaf.petiole = new Petiole()
Mimosa_maracayuensis.leaf.bipinnate = new Bipinnate()
Mimosa_maracayuensis.leaf.bipinnate.rachis = new Rachis()
Mimosa_maracayuensis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_maracayuensis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_maracayuensis.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(3, 5)
Mimosa_maracayuensis.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(6)
Mimosa_maracayuensis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_maracayuensis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_maracayuensis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_maracayuensis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(6, 7)
Mimosa_maracayuensis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(8)
Mimosa_maracayuensis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_maracayuensis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_maracayuensis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_maracayuensis.inflorescence = new Inflorescence()
Mimosa_maracayuensis.inflorescence.peduncle = new Peduncle()
Mimosa_maracayuensis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_maracayuensis.flower = new Flower()
Mimosa_maracayuensis.flower.bracteole = new Bracteole()
Mimosa_maracayuensis.flower.merism = '4-merous'
Mimosa_maracayuensis.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_maracayuensis.flower.calyx = new Calyx()
Mimosa_maracayuensis.flower.calyx.shape = 'campanulate'
Mimosa_maracayuensis.flower.corolla = new Corolla()
Mimosa_maracayuensis.flower.corolla.shape = 'turbinate'

Mimosa_maracayuensis.androecium = new Androecium()
Mimosa_maracayuensis.androecium.filaments = new Filaments()
Mimosa_maracayuensis.androecium.filaments.colour = 'pinkish'

Mimosa_maracayuensis.ginoecium = new Ginoecium()
Mimosa_maracayuensis.ginoecium.ovary = new Ovary()

Mimosa_maracayuensis.fruit = new Fruit()
Mimosa_maracayuensis.fruit.stipe = new Stipe()
Mimosa_maracayuensis.fruit.replum = new Replum()
Mimosa_maracayuensis.fruit.epicarp = new Epicarp()

Mimosa_maracayuensis.seed = new Seed()


// Description authorship
Mimosa_maracayuensis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_maracayuensis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa maracayuensis
export { Mimosa_maracayuensis }