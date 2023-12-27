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


// Description of Mimosa guatemalensis
const Mimosa_guatemalensis = new Mimosa()
Mimosa_guatemalensis.specificEpithet = 'guatemalensis'

Mimosa_guatemalensis.stems = new Stems()

Mimosa_guatemalensis.stipule = new Stipule()
Mimosa_guatemalensis.stipule.margin = new MarginStipule()
Mimosa_guatemalensis.stipule.adaxial = new AdaxialStipule()
Mimosa_guatemalensis.stipule.abaxial = new AbaxialStipule()

Mimosa_guatemalensis.leaf = new Leaf()
Mimosa_guatemalensis.leaf.petiole = new Petiole()
Mimosa_guatemalensis.leaf.bipinnate = new Bipinnate()
Mimosa_guatemalensis.leaf.bipinnate.rachis = new Rachis()
Mimosa_guatemalensis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_guatemalensis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_guatemalensis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_guatemalensis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_guatemalensis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_guatemalensis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(30, 46)
Mimosa_guatemalensis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_guatemalensis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_guatemalensis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_guatemalensis.inflorescence = new Inflorescence()
Mimosa_guatemalensis.inflorescence.peduncle = new Peduncle()
Mimosa_guatemalensis.inflorescence.spicate = new Spicate()

Mimosa_guatemalensis.flower = new Flower()
Mimosa_guatemalensis.flower.bracteole = new Bracteole()
Mimosa_guatemalensis.flower.merism = ['4-merous', '5-merous']
Mimosa_guatemalensis.flower.calyx = new Calyx()
Mimosa_guatemalensis.flower.calyx.shape = 'campanulate'
Mimosa_guatemalensis.flower.corolla = new Corolla()
Mimosa_guatemalensis.flower.corolla.shape = ['campanulate', 'vase-shaped']

Mimosa_guatemalensis.androecium = new Androecium()
Mimosa_guatemalensis.androecium.filaments = new Filaments()
Mimosa_guatemalensis.androecium.filaments.colour = 'pinkish'

Mimosa_guatemalensis.ginoecium = new Ginoecium()
Mimosa_guatemalensis.ginoecium.ovary = new Ovary()

Mimosa_guatemalensis.fruit = new Fruit()
Mimosa_guatemalensis.fruit.stipe = new Stipe()
Mimosa_guatemalensis.fruit.replum = new Replum()
Mimosa_guatemalensis.fruit.epicarp = new Epicarp()

Mimosa_guatemalensis.seed = new Seed()


// Description authorship
Mimosa_guatemalensis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_guatemalensis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa guatemalensis
export { Mimosa_guatemalensis }