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


// Description of Mimosa insignis
const Mimosa_insignis = new Mimosa()
Mimosa_insignis.specificEpithet = 'insignis'

Mimosa_insignis.stems = new Stems()

Mimosa_insignis.stipule = new Stipule()
Mimosa_insignis.stipule.margin = new MarginStipule()
Mimosa_insignis.stipule.adaxial = new AdaxialStipule()
Mimosa_insignis.stipule.abaxial = new AbaxialStipule()

Mimosa_insignis.leaf = new Leaf()
Mimosa_insignis.leaf.petiole = new Petiole()
Mimosa_insignis.leaf.bipinnate = new Bipinnate()
Mimosa_insignis.leaf.bipinnate.rachis = new Rachis()
Mimosa_insignis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_insignis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_insignis.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(5, 10)
Mimosa_insignis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_insignis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_insignis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_insignis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(40, 55)
Mimosa_insignis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_insignis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_insignis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_insignis.inflorescence = new Inflorescence()
Mimosa_insignis.inflorescence.peduncle = new Peduncle()
Mimosa_insignis.inflorescence.spicate = new Spicate()

Mimosa_insignis.flower = new Flower()
Mimosa_insignis.flower.bracteole = new Bracteole()
Mimosa_insignis.flower.merism = '4-merous'
Mimosa_insignis.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_insignis.flower.calyx = new Calyx()
Mimosa_insignis.flower.calyx.shape = 'campanulate'
Mimosa_insignis.flower.corolla = new Corolla()

Mimosa_insignis.androecium = new Androecium()
Mimosa_insignis.androecium.filaments = new Filaments()
Mimosa_insignis.androecium.filaments.colour = 'whitenish'

Mimosa_insignis.ginoecium = new Ginoecium()
Mimosa_insignis.ginoecium.ovary = new Ovary()

Mimosa_insignis.fruit = new Fruit()
Mimosa_insignis.fruit.stipe = new Stipe()
Mimosa_insignis.fruit.replum = new Replum()
Mimosa_insignis.fruit.epicarp = new Epicarp()

Mimosa_insignis.seed = new Seed()


// Description authorship
Mimosa_insignis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_insignis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa insignis
export { Mimosa_insignis }