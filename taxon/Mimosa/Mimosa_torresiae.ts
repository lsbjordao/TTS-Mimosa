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


// Description of Mimosa torresiae
const Mimosa_torresiae = new Mimosa()
Mimosa_torresiae.specificEpithet = 'torresiae'

Mimosa_torresiae.stems = new Stems()

Mimosa_torresiae.stipule = new Stipule()
Mimosa_torresiae.stipule.margin = new MarginStipule()
Mimosa_torresiae.stipule.adaxial = new AdaxialStipule()
Mimosa_torresiae.stipule.abaxial = new AbaxialStipule()

Mimosa_torresiae.leaf = new Leaf()
Mimosa_torresiae.leaf.petiole = new Petiole()
Mimosa_torresiae.leaf.bipinnate = new Bipinnate()
Mimosa_torresiae.leaf.bipinnate.rachis = new Rachis()
Mimosa_torresiae.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_torresiae.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_torresiae.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_torresiae.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_torresiae.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_torresiae.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(5, 8)
Mimosa_torresiae.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_torresiae.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_torresiae.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_torresiae.inflorescence = new Inflorescence()
Mimosa_torresiae.inflorescence.peduncle = new Peduncle()
Mimosa_torresiae.inflorescence.capitate = new CapitateInflorescence()

Mimosa_torresiae.flower = new Flower()
Mimosa_torresiae.flower.bracteole = new Bracteole()
Mimosa_torresiae.flower.merism = '5-merous'
Mimosa_torresiae.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_torresiae.flower.calyx = new Calyx()
Mimosa_torresiae.flower.calyx.shape = 'campanulate'
Mimosa_torresiae.flower.corolla = new Corolla()

Mimosa_torresiae.androecium = new Androecium()
Mimosa_torresiae.androecium.filaments = new Filaments()
Mimosa_torresiae.androecium.filaments.colour = 'whitenish'

Mimosa_torresiae.ginoecium = new Ginoecium()
Mimosa_torresiae.ginoecium.ovary = new Ovary()

Mimosa_torresiae.fruit = new Fruit()
Mimosa_torresiae.fruit.stipe = new Stipe()
Mimosa_torresiae.fruit.replum = new Replum()
Mimosa_torresiae.fruit.epicarp = new Epicarp()

Mimosa_torresiae.seed = new Seed()


// Description authorship
Mimosa_torresiae.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_torresiae.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa torresiae
export { Mimosa_torresiae }