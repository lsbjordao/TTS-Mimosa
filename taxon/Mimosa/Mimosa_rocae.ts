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


// Description of Mimosa rocae
const Mimosa_rocae = new Mimosa()
Mimosa_rocae.specificEpithet = 'rocae'

Mimosa_rocae.stems = new Stems()

Mimosa_rocae.stipule = new Stipule()
Mimosa_rocae.stipule.margin = new MarginStipule()
Mimosa_rocae.stipule.adaxial = new AdaxialStipule()
Mimosa_rocae.stipule.abaxial = new AbaxialStipule()

Mimosa_rocae.leaf = new Leaf()
Mimosa_rocae.leaf.petiole = new Petiole()
Mimosa_rocae.leaf.bipinnate = new Bipinnate()
Mimosa_rocae.leaf.bipinnate.rachis = new Rachis()
Mimosa_rocae.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_rocae.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_rocae.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_rocae.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_rocae.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_rocae.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_rocae.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(8)
Mimosa_rocae.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(9, 15)
Mimosa_rocae.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(17)
Mimosa_rocae.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_rocae.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_rocae.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_rocae.inflorescence = new Inflorescence()
Mimosa_rocae.inflorescence.peduncle = new Peduncle()
Mimosa_rocae.inflorescence.capitate = new CapitateInflorescence()

Mimosa_rocae.flower = new Flower()
Mimosa_rocae.flower.bracteole = new Bracteole()
Mimosa_rocae.flower.merism = '4-merous'
Mimosa_rocae.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_rocae.flower.calyx = new Calyx()
Mimosa_rocae.flower.calyx.shape = 'campanulate'
Mimosa_rocae.flower.corolla = new Corolla()
Mimosa_rocae.flower.corolla.shape = ['turbinate', 'campanulate']

Mimosa_rocae.androecium = new Androecium()
Mimosa_rocae.androecium.filaments = new Filaments()
Mimosa_rocae.androecium.filaments.colour = 'yellowish'

Mimosa_rocae.ginoecium = new Ginoecium()
Mimosa_rocae.ginoecium.ovary = new Ovary()

Mimosa_rocae.fruit = new Fruit()
Mimosa_rocae.fruit.stipe = new Stipe()
Mimosa_rocae.fruit.replum = new Replum()
Mimosa_rocae.fruit.epicarp = new Epicarp()

Mimosa_rocae.seed = new Seed()


// Description authorship
Mimosa_rocae.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_rocae.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa rocae
export { Mimosa_rocae }