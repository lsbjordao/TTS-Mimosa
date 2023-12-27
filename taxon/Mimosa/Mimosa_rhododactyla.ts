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


// Description of Mimosa rhododactyla
const Mimosa_rhododactyla = new Mimosa()
Mimosa_rhododactyla.specificEpithet = 'rhododactyla'

Mimosa_rhododactyla.stems = new Stems()

Mimosa_rhododactyla.stipule = new Stipule()
Mimosa_rhododactyla.stipule.margin = new MarginStipule()
Mimosa_rhododactyla.stipule.adaxial = new AdaxialStipule()
Mimosa_rhododactyla.stipule.abaxial = new AbaxialStipule()

Mimosa_rhododactyla.leaf = new Leaf()
Mimosa_rhododactyla.leaf.petiole = new Petiole()
Mimosa_rhododactyla.leaf.bipinnate = new Bipinnate()
Mimosa_rhododactyla.leaf.bipinnate.rachis = new Rachis()
Mimosa_rhododactyla.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_rhododactyla.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_rhododactyla.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_rhododactyla.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_rhododactyla.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_rhododactyla.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(15, 23)
Mimosa_rhododactyla.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_rhododactyla.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_rhododactyla.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_rhododactyla.inflorescence = new Inflorescence()
Mimosa_rhododactyla.inflorescence.peduncle = new Peduncle()
Mimosa_rhododactyla.inflorescence.spicate = new Spicate()

Mimosa_rhododactyla.flower = new Flower()
Mimosa_rhododactyla.flower.bracteole = new Bracteole()
Mimosa_rhododactyla.flower.merism = ['4-merous', '5-merous', '6-merous']
Mimosa_rhododactyla.flower.calyx = new Calyx()
Mimosa_rhododactyla.flower.calyx.shape = ['campanulate', 'turbinate']
Mimosa_rhododactyla.flower.corolla = new Corolla()
Mimosa_rhododactyla.flower.corolla.shape = ['turbinate', 'campanulate']

Mimosa_rhododactyla.androecium = new Androecium()
Mimosa_rhododactyla.androecium.filaments = new Filaments()
Mimosa_rhododactyla.androecium.filaments.colour = 'pinkish'

Mimosa_rhododactyla.ginoecium = new Ginoecium()
Mimosa_rhododactyla.ginoecium.ovary = new Ovary()

Mimosa_rhododactyla.fruit = new Fruit()
Mimosa_rhododactyla.fruit.stipe = new Stipe()
Mimosa_rhododactyla.fruit.replum = new Replum()
Mimosa_rhododactyla.fruit.epicarp = new Epicarp()

Mimosa_rhododactyla.seed = new Seed()


// Description authorship
Mimosa_rhododactyla.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_rhododactyla.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa rhododactyla
export { Mimosa_rhododactyla }