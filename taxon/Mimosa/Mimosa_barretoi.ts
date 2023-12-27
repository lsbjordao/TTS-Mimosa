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


// Description of Mimosa barretoi
const Mimosa_barretoi = new Mimosa()
Mimosa_barretoi.specificEpithet = 'barretoi'

Mimosa_barretoi.stems = new Stems()

Mimosa_barretoi.stipule = new Stipule()
Mimosa_barretoi.stipule.margin = new MarginStipule()
Mimosa_barretoi.stipule.adaxial = new AdaxialStipule()
Mimosa_barretoi.stipule.abaxial = new AbaxialStipule()

Mimosa_barretoi.leaf = new Leaf()
Mimosa_barretoi.leaf.petiole = new Petiole()
Mimosa_barretoi.leaf.bipinnate = new Bipinnate()
Mimosa_barretoi.leaf.bipinnate.rachis = new Rachis()
Mimosa_barretoi.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_barretoi.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_barretoi.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_barretoi.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_barretoi.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_barretoi.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(10, 17)
Mimosa_barretoi.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_barretoi.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_barretoi.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_barretoi.inflorescence = new Inflorescence()
Mimosa_barretoi.inflorescence.peduncle = new Peduncle()
Mimosa_barretoi.inflorescence.spicate = new Spicate()

Mimosa_barretoi.flower = new Flower()
Mimosa_barretoi.flower.bracteole = new Bracteole()
Mimosa_barretoi.flower.merism = '4-merous'
Mimosa_barretoi.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_barretoi.flower.calyx = new Calyx()
Mimosa_barretoi.flower.calyx.shape = 'discoid'
Mimosa_barretoi.flower.corolla = new Corolla()

Mimosa_barretoi.androecium = new Androecium()
Mimosa_barretoi.androecium.filaments = new Filaments()

Mimosa_barretoi.ginoecium = new Ginoecium()
Mimosa_barretoi.ginoecium.ovary = new Ovary()

Mimosa_barretoi.fruit = new Fruit()
Mimosa_barretoi.fruit.stipe = new Stipe()
Mimosa_barretoi.fruit.replum = new Replum()
Mimosa_barretoi.fruit.epicarp = new Epicarp()

Mimosa_barretoi.seed = new Seed()


// Description authorship
Mimosa_barretoi.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_barretoi.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa barretoi
export { Mimosa_barretoi }