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


// Description of Mimosa pteridifolia
const Mimosa_pteridifolia = new Mimosa()
Mimosa_pteridifolia.specificEpithet = 'pteridifolia'

Mimosa_pteridifolia.stems = new Stems()

Mimosa_pteridifolia.stipule = new Stipule()
Mimosa_pteridifolia.stipule.margin = new MarginStipule()
Mimosa_pteridifolia.stipule.adaxial = new AdaxialStipule()
Mimosa_pteridifolia.stipule.abaxial = new AbaxialStipule()

Mimosa_pteridifolia.leaf = new Leaf()
Mimosa_pteridifolia.leaf.petiole = new Petiole()
Mimosa_pteridifolia.leaf.bipinnate = new Bipinnate()
Mimosa_pteridifolia.leaf.bipinnate.rachis = new Rachis()
Mimosa_pteridifolia.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_pteridifolia.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_pteridifolia.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(9, 24)
Mimosa_pteridifolia.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_pteridifolia.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_pteridifolia.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_pteridifolia.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_pteridifolia.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_pteridifolia.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_pteridifolia.inflorescence = new Inflorescence()
Mimosa_pteridifolia.inflorescence.peduncle = new Peduncle()
Mimosa_pteridifolia.inflorescence.spicate = new Spicate()

Mimosa_pteridifolia.flower = new Flower()
Mimosa_pteridifolia.flower.bracteole = new Bracteole()
Mimosa_pteridifolia.flower.merism = '4-merous'
Mimosa_pteridifolia.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_pteridifolia.flower.calyx = new Calyx()
Mimosa_pteridifolia.flower.calyx.shape = 'campanulate'
Mimosa_pteridifolia.flower.corolla = new Corolla()
Mimosa_pteridifolia.flower.corolla.shape = 'turbinate'

Mimosa_pteridifolia.androecium = new Androecium()
Mimosa_pteridifolia.androecium.filaments = new Filaments()
Mimosa_pteridifolia.androecium.filaments.colour = 'pinkish'

Mimosa_pteridifolia.ginoecium = new Ginoecium()
Mimosa_pteridifolia.ginoecium.ovary = new Ovary()

Mimosa_pteridifolia.fruit = new Fruit()
Mimosa_pteridifolia.fruit.stipe = new Stipe()
Mimosa_pteridifolia.fruit.replum = new Replum()
Mimosa_pteridifolia.fruit.epicarp = new Epicarp()

Mimosa_pteridifolia.seed = new Seed()


// Description authorship
Mimosa_pteridifolia.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_pteridifolia.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa pteridifolia
export { Mimosa_pteridifolia }