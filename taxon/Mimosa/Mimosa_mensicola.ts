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


// Description of Mimosa mensicola
const Mimosa_mensicola = new Mimosa()
Mimosa_mensicola.specificEpithet = 'mensicola'

Mimosa_mensicola.stems = new Stems()

Mimosa_mensicola.stipule = new Stipule()
Mimosa_mensicola.stipule.margin = new MarginStipule()
Mimosa_mensicola.stipule.adaxial = new AdaxialStipule()
Mimosa_mensicola.stipule.abaxial = new AbaxialStipule()

Mimosa_mensicola.leaf = new Leaf()
Mimosa_mensicola.leaf.petiole = new Petiole()
Mimosa_mensicola.leaf.bipinnate = new Bipinnate()
Mimosa_mensicola.leaf.bipinnate.rachis = new Rachis()
Mimosa_mensicola.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_mensicola.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_mensicola.leaf.bipinnate.pinnae.setNumberOfPairs(12)
Mimosa_mensicola.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_mensicola.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_mensicola.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_mensicola.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_mensicola.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_mensicola.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_mensicola.inflorescence = new Inflorescence()
Mimosa_mensicola.inflorescence.peduncle = new Peduncle()
Mimosa_mensicola.inflorescence.spicate = new Spicate()

Mimosa_mensicola.flower = new Flower()
Mimosa_mensicola.flower.bracteole = new Bracteole()
Mimosa_mensicola.flower.merism = '4-merous'
Mimosa_mensicola.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_mensicola.flower.calyx = new Calyx()
Mimosa_mensicola.flower.calyx.shape = 'campanulate'
Mimosa_mensicola.flower.corolla = new Corolla()

Mimosa_mensicola.androecium = new Androecium()
Mimosa_mensicola.androecium.filaments = new Filaments()
Mimosa_mensicola.androecium.filaments.colour = 'whitenish'

Mimosa_mensicola.ginoecium = new Ginoecium()
Mimosa_mensicola.ginoecium.ovary = new Ovary()

Mimosa_mensicola.fruit = new Fruit()
Mimosa_mensicola.fruit.stipe = new Stipe()
Mimosa_mensicola.fruit.replum = new Replum()
Mimosa_mensicola.fruit.epicarp = new Epicarp()

Mimosa_mensicola.seed = new Seed()


// Description authorship
Mimosa_mensicola.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_mensicola.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa mensicola
export { Mimosa_mensicola }