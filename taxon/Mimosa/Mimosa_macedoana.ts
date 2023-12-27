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


// Description of Mimosa macedoana
const Mimosa_macedoana = new Mimosa()
Mimosa_macedoana.specificEpithet = 'macedoana'

Mimosa_macedoana.stems = new Stems()

Mimosa_macedoana.stipule = new Stipule()
Mimosa_macedoana.stipule.margin = new MarginStipule()
Mimosa_macedoana.stipule.adaxial = new AdaxialStipule()
Mimosa_macedoana.stipule.abaxial = new AbaxialStipule()

Mimosa_macedoana.leaf = new Leaf()
Mimosa_macedoana.leaf.petiole = new Petiole()
Mimosa_macedoana.leaf.bipinnate = new Bipinnate()
Mimosa_macedoana.leaf.bipinnate.rachis = new Rachis()
Mimosa_macedoana.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_macedoana.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_macedoana.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(1, 4)
Mimosa_macedoana.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_macedoana.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_macedoana.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_macedoana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(26, 35)
Mimosa_macedoana.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_macedoana.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_macedoana.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_macedoana.inflorescence = new Inflorescence()
Mimosa_macedoana.inflorescence.peduncle = new Peduncle()
Mimosa_macedoana.inflorescence.capitate = new CapitateInflorescence()

Mimosa_macedoana.flower = new Flower()
Mimosa_macedoana.flower.bracteole = new Bracteole()
Mimosa_macedoana.flower.merism = '4-merous'
Mimosa_macedoana.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_macedoana.flower.calyx = new Calyx()
Mimosa_macedoana.flower.calyx.shape = ['campanulate', 'patelliform']
Mimosa_macedoana.flower.corolla = new Corolla()

Mimosa_macedoana.androecium = new Androecium()
Mimosa_macedoana.androecium.filaments = new Filaments()
Mimosa_macedoana.androecium.filaments.colour = 'whitenish'

Mimosa_macedoana.ginoecium = new Ginoecium()
Mimosa_macedoana.ginoecium.ovary = new Ovary()

Mimosa_macedoana.fruit = new Fruit()
Mimosa_macedoana.fruit.stipe = new Stipe()
Mimosa_macedoana.fruit.replum = new Replum()
Mimosa_macedoana.fruit.epicarp = new Epicarp()

Mimosa_macedoana.seed = new Seed()


// Description authorship
Mimosa_macedoana.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_macedoana.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa macedoana
export { Mimosa_macedoana }