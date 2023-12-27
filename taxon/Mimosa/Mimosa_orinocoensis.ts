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


// Description of Mimosa orinocoensis
const Mimosa_orinocoensis = new Mimosa()
Mimosa_orinocoensis.specificEpithet = 'orinocoensis'

Mimosa_orinocoensis.stems = new Stems()

Mimosa_orinocoensis.stipule = new Stipule()
Mimosa_orinocoensis.stipule.margin = new MarginStipule()
Mimosa_orinocoensis.stipule.adaxial = new AdaxialStipule()
Mimosa_orinocoensis.stipule.abaxial = new AbaxialStipule()

Mimosa_orinocoensis.leaf = new Leaf()
Mimosa_orinocoensis.leaf.petiole = new Petiole()
Mimosa_orinocoensis.leaf.bipinnate = new Bipinnate()
Mimosa_orinocoensis.leaf.bipinnate.rachis = new Rachis()
Mimosa_orinocoensis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_orinocoensis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_orinocoensis.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(9, 15)
Mimosa_orinocoensis.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(16)
Mimosa_orinocoensis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_orinocoensis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_orinocoensis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_orinocoensis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_orinocoensis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_orinocoensis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_orinocoensis.inflorescence = new Inflorescence()
Mimosa_orinocoensis.inflorescence.peduncle = new Peduncle()
Mimosa_orinocoensis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_orinocoensis.flower = new Flower()
Mimosa_orinocoensis.flower.bracteole = new Bracteole()
Mimosa_orinocoensis.flower.merism = '4-merous'
Mimosa_orinocoensis.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_orinocoensis.flower.calyx = new Calyx()
Mimosa_orinocoensis.flower.calyx.shape = 'campanulate'
Mimosa_orinocoensis.flower.corolla = new Corolla()
Mimosa_orinocoensis.flower.corolla.shape = 'vase-shaped'

Mimosa_orinocoensis.androecium = new Androecium()
Mimosa_orinocoensis.androecium.filaments = new Filaments()
Mimosa_orinocoensis.androecium.filaments.colour = ['whitenish', 'pinkish']

Mimosa_orinocoensis.ginoecium = new Ginoecium()
Mimosa_orinocoensis.ginoecium.ovary = new Ovary()

Mimosa_orinocoensis.fruit = new Fruit()
Mimosa_orinocoensis.fruit.stipe = new Stipe()
Mimosa_orinocoensis.fruit.replum = new Replum()
Mimosa_orinocoensis.fruit.epicarp = new Epicarp()

Mimosa_orinocoensis.seed = new Seed()


// Description authorship
Mimosa_orinocoensis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_orinocoensis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa orinocoensis
export { Mimosa_orinocoensis }