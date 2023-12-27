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


// Description of Mimosa lanuginosa
const Mimosa_lanuginosa = new Mimosa()
Mimosa_lanuginosa.specificEpithet = 'lanuginosa'

Mimosa_lanuginosa.stems = new Stems()

Mimosa_lanuginosa.stipule = new Stipule()
Mimosa_lanuginosa.stipule.margin = new MarginStipule()
Mimosa_lanuginosa.stipule.adaxial = new AdaxialStipule()
Mimosa_lanuginosa.stipule.abaxial = new AbaxialStipule()

Mimosa_lanuginosa.leaf = new Leaf()
Mimosa_lanuginosa.leaf.petiole = new Petiole()
Mimosa_lanuginosa.leaf.bipinnate = new Bipinnate()
Mimosa_lanuginosa.leaf.bipinnate.rachis = new Rachis()
Mimosa_lanuginosa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_lanuginosa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_lanuginosa.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_lanuginosa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_lanuginosa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_lanuginosa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_lanuginosa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(10, 14)
Mimosa_lanuginosa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_lanuginosa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_lanuginosa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_lanuginosa.inflorescence = new Inflorescence()
Mimosa_lanuginosa.inflorescence.peduncle = new Peduncle()
Mimosa_lanuginosa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_lanuginosa.flower = new Flower()
Mimosa_lanuginosa.flower.bracteole = new Bracteole()
Mimosa_lanuginosa.flower.merism = '4-merous'
Mimosa_lanuginosa.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_lanuginosa.flower.calyx = new Calyx()
Mimosa_lanuginosa.flower.calyx.shape = 'paleaceous'
Mimosa_lanuginosa.flower.corolla = new Corolla()
Mimosa_lanuginosa.flower.corolla.shape = ['tubulose', 'funnelform']

Mimosa_lanuginosa.androecium = new Androecium()
Mimosa_lanuginosa.androecium.filaments = new Filaments()
Mimosa_lanuginosa.androecium.filaments.colour = 'pinkish'

Mimosa_lanuginosa.ginoecium = new Ginoecium()
Mimosa_lanuginosa.ginoecium.ovary = new Ovary()

Mimosa_lanuginosa.fruit = new Fruit()
Mimosa_lanuginosa.fruit.stipe = new Stipe()
Mimosa_lanuginosa.fruit.replum = new Replum()
Mimosa_lanuginosa.fruit.epicarp = new Epicarp()

Mimosa_lanuginosa.seed = new Seed()


// Description authorship
Mimosa_lanuginosa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_lanuginosa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa lanuginosa
export { Mimosa_lanuginosa }