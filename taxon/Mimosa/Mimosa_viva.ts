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


// Description of Mimosa viva
const Mimosa_viva = new Mimosa()
Mimosa_viva.specificEpithet = 'viva'

Mimosa_viva.stems = new Stems()

Mimosa_viva.stipule = new Stipule()
Mimosa_viva.stipule.margin = new MarginStipule()
Mimosa_viva.stipule.adaxial = new AdaxialStipule()
Mimosa_viva.stipule.abaxial = new AbaxialStipule()

Mimosa_viva.leaf = new Leaf()
Mimosa_viva.leaf.petiole = new Petiole()
Mimosa_viva.leaf.bipinnate = new Bipinnate()
Mimosa_viva.leaf.bipinnate.rachis = new Rachis()
Mimosa_viva.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_viva.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_viva.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_viva.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_viva.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_viva.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_viva.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(8, 15)
Mimosa_viva.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_viva.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_viva.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_viva.inflorescence = new Inflorescence()
Mimosa_viva.inflorescence.peduncle = new Peduncle()
Mimosa_viva.inflorescence.capitate = new CapitateInflorescence()

Mimosa_viva.flower = new Flower()
Mimosa_viva.flower.bracteole = new Bracteole()
Mimosa_viva.flower.merism = '4-merous'
Mimosa_viva.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_viva.flower.calyx = new Calyx()
Mimosa_viva.flower.calyx.shape = 'campanulate'
Mimosa_viva.flower.corolla = new Corolla()
Mimosa_viva.flower.corolla.shape = 'subtubular'

Mimosa_viva.androecium = new Androecium()
Mimosa_viva.androecium.filaments = new Filaments()
Mimosa_viva.androecium.filaments.colour = 'whitenish'

Mimosa_viva.ginoecium = new Ginoecium()
Mimosa_viva.ginoecium.ovary = new Ovary()

Mimosa_viva.fruit = new Fruit()
Mimosa_viva.fruit.stipe = new Stipe()
Mimosa_viva.fruit.replum = new Replum()
Mimosa_viva.fruit.epicarp = new Epicarp()

Mimosa_viva.seed = new Seed()


// Description authorship
Mimosa_viva.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_viva.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa viva
export { Mimosa_viva }