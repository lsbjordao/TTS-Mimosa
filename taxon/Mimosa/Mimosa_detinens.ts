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


// Description of Mimosa detinens
const Mimosa_detinens = new Mimosa()
Mimosa_detinens.specificEpithet = 'detinens'

Mimosa_detinens.stems = new Stems()

Mimosa_detinens.stipule = new Stipule()
Mimosa_detinens.stipule.margin = new MarginStipule()
Mimosa_detinens.stipule.adaxial = new AdaxialStipule()
Mimosa_detinens.stipule.abaxial = new AbaxialStipule()

Mimosa_detinens.leaf = new Leaf()
Mimosa_detinens.leaf.petiole = new Petiole()
Mimosa_detinens.leaf.bipinnate = new Bipinnate()
Mimosa_detinens.leaf.bipinnate.rachis = new Rachis()
Mimosa_detinens.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_detinens.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_detinens.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_detinens.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_detinens.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_detinens.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_detinens.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(3, 11)
Mimosa_detinens.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_detinens.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_detinens.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_detinens.inflorescence = new Inflorescence()
Mimosa_detinens.inflorescence.peduncle = new Peduncle()
Mimosa_detinens.inflorescence.capitate = new CapitateInflorescence()

Mimosa_detinens.flower = new Flower()
Mimosa_detinens.flower.bracteole = new Bracteole()
Mimosa_detinens.flower.merism = '4-merous'
Mimosa_detinens.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_detinens.flower.calyx = new Calyx()
Mimosa_detinens.flower.calyx.shape = 'campanulate'
Mimosa_detinens.flower.corolla = new Corolla()

Mimosa_detinens.androecium = new Androecium()
Mimosa_detinens.androecium.filaments = new Filaments()
Mimosa_detinens.androecium.filaments.colour = 'whitenish'

Mimosa_detinens.ginoecium = new Ginoecium()
Mimosa_detinens.ginoecium.ovary = new Ovary()

Mimosa_detinens.fruit = new Fruit()
Mimosa_detinens.fruit.stipe = new Stipe()
Mimosa_detinens.fruit.replum = new Replum()
Mimosa_detinens.fruit.epicarp = new Epicarp()

Mimosa_detinens.seed = new Seed()


// Description authorship
Mimosa_detinens.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_detinens.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa detinens
export { Mimosa_detinens }