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
import { Peduncle, Spicate } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa chacoensis
const Mimosa_chacoensis = new Mimosa()
Mimosa_chacoensis.specificEpithet = 'chacoensis'

Mimosa_chacoensis.stems = new Stems()

Mimosa_chacoensis.stipule = new Stipule()
Mimosa_chacoensis.stipule.margin = new MarginStipule()
Mimosa_chacoensis.stipule.adaxial = new AdaxialStipule()
Mimosa_chacoensis.stipule.abaxial = new AbaxialStipule()

Mimosa_chacoensis.leaf = new Leaf()
Mimosa_chacoensis.leaf.petiole = new Petiole()
Mimosa_chacoensis.leaf.bipinnate = new Bipinnate()
Mimosa_chacoensis.leaf.bipinnate.rachis = new Rachis()
Mimosa_chacoensis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_chacoensis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_chacoensis.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(9)
Mimosa_chacoensis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_chacoensis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_chacoensis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_chacoensis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(11)
Mimosa_chacoensis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(14, 30)
Mimosa_chacoensis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_chacoensis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_chacoensis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_chacoensis.inflorescence = new Inflorescence()
Mimosa_chacoensis.inflorescence.peduncle = new Peduncle()
Mimosa_chacoensis.inflorescence.spicate = new Spicate()

Mimosa_chacoensis.flower = new Flower()
Mimosa_chacoensis.flower.bracteole = new Bracteole()
Mimosa_chacoensis.flower.merism = '4-merous'
Mimosa_chacoensis.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_chacoensis.flower.calyx = new Calyx()
Mimosa_chacoensis.flower.calyx.shape = 'campanulate'
Mimosa_chacoensis.flower.corolla = new Corolla()
Mimosa_chacoensis.flower.corolla.shape = ['turbinate', 'campanulate']

Mimosa_chacoensis.androecium = new Androecium()
Mimosa_chacoensis.androecium.filaments = new Filaments()
Mimosa_chacoensis.androecium.filaments.colour = 'pinkish'

Mimosa_chacoensis.ginoecium = new Ginoecium()
Mimosa_chacoensis.ginoecium.ovary = new Ovary()

Mimosa_chacoensis.fruit = new Fruit()
Mimosa_chacoensis.fruit.stipe = new Stipe()
Mimosa_chacoensis.fruit.replum = new Replum()
Mimosa_chacoensis.fruit.epicarp = new Epicarp()

Mimosa_chacoensis.seed = new Seed()


// Description authorship
Mimosa_chacoensis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_chacoensis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa chacoensis
export { Mimosa_chacoensis }