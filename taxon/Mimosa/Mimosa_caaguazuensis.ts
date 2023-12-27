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


// Description of Mimosa caaguazuensis
const Mimosa_caaguazuensis = new Mimosa()
Mimosa_caaguazuensis.specificEpithet = 'caaguazuensis'

Mimosa_caaguazuensis.stems = new Stems()

Mimosa_caaguazuensis.stipule = new Stipule()
Mimosa_caaguazuensis.stipule.margin = new MarginStipule()
Mimosa_caaguazuensis.stipule.adaxial = new AdaxialStipule()
Mimosa_caaguazuensis.stipule.abaxial = new AbaxialStipule()

Mimosa_caaguazuensis.leaf = new Leaf()
Mimosa_caaguazuensis.leaf.petiole = new Petiole()
Mimosa_caaguazuensis.leaf.bipinnate = new Bipinnate()
Mimosa_caaguazuensis.leaf.bipinnate.rachis = new Rachis()
Mimosa_caaguazuensis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_caaguazuensis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_caaguazuensis.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(1)
Mimosa_caaguazuensis.leaf.bipinnate.pinnae.setNumberOfPairs(2)
Mimosa_caaguazuensis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_caaguazuensis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_caaguazuensis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_caaguazuensis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(16, 24)
Mimosa_caaguazuensis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(26)
Mimosa_caaguazuensis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_caaguazuensis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_caaguazuensis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_caaguazuensis.inflorescence = new Inflorescence()
Mimosa_caaguazuensis.inflorescence.peduncle = new Peduncle()
Mimosa_caaguazuensis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_caaguazuensis.flower = new Flower()
Mimosa_caaguazuensis.flower.bracteole = new Bracteole()
Mimosa_caaguazuensis.flower.merism = '4-merous'
Mimosa_caaguazuensis.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_caaguazuensis.flower.calyx = new Calyx()
Mimosa_caaguazuensis.flower.corolla = new Corolla()
Mimosa_caaguazuensis.flower.corolla.shape = 'vase-shaped'

Mimosa_caaguazuensis.androecium = new Androecium()
Mimosa_caaguazuensis.androecium.filaments = new Filaments()
Mimosa_caaguazuensis.androecium.filaments.colour = 'pinkish'

Mimosa_caaguazuensis.ginoecium = new Ginoecium()
Mimosa_caaguazuensis.ginoecium.ovary = new Ovary()

Mimosa_caaguazuensis.fruit = new Fruit()
Mimosa_caaguazuensis.fruit.stipe = new Stipe()
Mimosa_caaguazuensis.fruit.replum = new Replum()
Mimosa_caaguazuensis.fruit.epicarp = new Epicarp()

Mimosa_caaguazuensis.seed = new Seed()


// Description authorship
Mimosa_caaguazuensis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_caaguazuensis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa caaguazuensis
export { Mimosa_caaguazuensis }