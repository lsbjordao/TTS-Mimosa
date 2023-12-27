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


// Description of Mimosa falconis
const Mimosa_falconis = new Mimosa()
Mimosa_falconis.specificEpithet = 'falconis'

Mimosa_falconis.stems = new Stems()

Mimosa_falconis.stipule = new Stipule()
Mimosa_falconis.stipule.margin = new MarginStipule()
Mimosa_falconis.stipule.adaxial = new AdaxialStipule()
Mimosa_falconis.stipule.abaxial = new AbaxialStipule()

Mimosa_falconis.leaf = new Leaf()
Mimosa_falconis.leaf.petiole = new Petiole()
Mimosa_falconis.leaf.bipinnate = new Bipinnate()
Mimosa_falconis.leaf.bipinnate.rachis = new Rachis()
Mimosa_falconis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_falconis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_falconis.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 4)
Mimosa_falconis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_falconis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_falconis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_falconis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(20)
Mimosa_falconis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(25, 49)
Mimosa_falconis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_falconis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_falconis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_falconis.inflorescence = new Inflorescence()
Mimosa_falconis.inflorescence.peduncle = new Peduncle()
Mimosa_falconis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_falconis.flower = new Flower()
Mimosa_falconis.flower.bracteole = new Bracteole()
Mimosa_falconis.flower.merism = '4-merous'
Mimosa_falconis.flower.calyx = new Calyx()
Mimosa_falconis.flower.calyx.shape = 'campanulate'
Mimosa_falconis.flower.corolla = new Corolla()

Mimosa_falconis.androecium = new Androecium()
Mimosa_falconis.androecium.filaments = new Filaments()
Mimosa_falconis.androecium.filaments.colour = ['pinkish', 'lilac']

Mimosa_falconis.ginoecium = new Ginoecium()
Mimosa_falconis.ginoecium.ovary = new Ovary()

Mimosa_falconis.fruit = new Fruit()
Mimosa_falconis.fruit.stipe = new Stipe()
Mimosa_falconis.fruit.replum = new Replum()
Mimosa_falconis.fruit.epicarp = new Epicarp()

Mimosa_falconis.seed = new Seed()


// Description authorship
Mimosa_falconis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_falconis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa falconis
export { Mimosa_falconis }