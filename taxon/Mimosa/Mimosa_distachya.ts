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


// Description of Mimosa distachya
const Mimosa_distachya = new Mimosa()
Mimosa_distachya.specificEpithet = 'distachya'

Mimosa_distachya.stems = new Stems()

Mimosa_distachya.stipule = new Stipule()
Mimosa_distachya.stipule.margin = new MarginStipule()
Mimosa_distachya.stipule.adaxial = new AdaxialStipule()
Mimosa_distachya.stipule.abaxial = new AbaxialStipule()

Mimosa_distachya.leaf = new Leaf()
Mimosa_distachya.leaf.petiole = new Petiole()
Mimosa_distachya.leaf.bipinnate = new Bipinnate()
Mimosa_distachya.leaf.bipinnate.rachis = new Rachis()
Mimosa_distachya.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_distachya.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_distachya.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 4)
Mimosa_distachya.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(5)
Mimosa_distachya.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_distachya.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_distachya.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_distachya.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(13, 50)
Mimosa_distachya.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_distachya.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_distachya.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_distachya.inflorescence = new Inflorescence()
Mimosa_distachya.inflorescence.peduncle = new Peduncle()
Mimosa_distachya.inflorescence.spicate = new Spicate()

Mimosa_distachya.flower = new Flower()
Mimosa_distachya.flower.bracteole = new Bracteole()
Mimosa_distachya.flower.merism = '5-merous'
Mimosa_distachya.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_distachya.flower.calyx = new Calyx()
Mimosa_distachya.flower.calyx.shape = ['campanulate', 'turbinate']
Mimosa_distachya.flower.corolla = new Corolla()
Mimosa_distachya.flower.corolla.shape = ['turbinate', 'vase-shaped']

Mimosa_distachya.androecium = new Androecium()
Mimosa_distachya.androecium.filaments = new Filaments()
Mimosa_distachya.androecium.filaments.colour = ['whitenish', 'pinkish']

Mimosa_distachya.ginoecium = new Ginoecium()
Mimosa_distachya.ginoecium.ovary = new Ovary()

Mimosa_distachya.fruit = new Fruit()
Mimosa_distachya.fruit.stipe = new Stipe()
Mimosa_distachya.fruit.replum = new Replum()
Mimosa_distachya.fruit.epicarp = new Epicarp()

Mimosa_distachya.seed = new Seed()


// Description authorship
Mimosa_distachya.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_distachya.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa distachya
export { Mimosa_distachya }