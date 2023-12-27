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


// Description of Mimosa nitidula
const Mimosa_nitidula = new Mimosa()
Mimosa_nitidula.specificEpithet = 'nitidula'

Mimosa_nitidula.stems = new Stems()

Mimosa_nitidula.stipule = new Stipule()
Mimosa_nitidula.stipule.margin = new MarginStipule()
Mimosa_nitidula.stipule.adaxial = new AdaxialStipule()
Mimosa_nitidula.stipule.abaxial = new AbaxialStipule()

Mimosa_nitidula.leaf = new Leaf()
Mimosa_nitidula.leaf.petiole = new Petiole()
Mimosa_nitidula.leaf.bipinnate = new Bipinnate()
Mimosa_nitidula.leaf.bipinnate.rachis = new Rachis()
Mimosa_nitidula.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_nitidula.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_nitidula.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_nitidula.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_nitidula.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_nitidula.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_nitidula.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(7, 12)
Mimosa_nitidula.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_nitidula.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_nitidula.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_nitidula.inflorescence = new Inflorescence()
Mimosa_nitidula.inflorescence.peduncle = new Peduncle()
Mimosa_nitidula.inflorescence.capitate = new CapitateInflorescence()

Mimosa_nitidula.flower = new Flower()
Mimosa_nitidula.flower.bracteole = new Bracteole()
Mimosa_nitidula.flower.merism = '4-merous'
Mimosa_nitidula.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_nitidula.flower.calyx = new Calyx()
Mimosa_nitidula.flower.corolla = new Corolla()
Mimosa_nitidula.flower.corolla.shape = 'vase-shaped'

Mimosa_nitidula.androecium = new Androecium()
Mimosa_nitidula.androecium.filaments = new Filaments()
Mimosa_nitidula.androecium.filaments.colour = 'pinkish'

Mimosa_nitidula.ginoecium = new Ginoecium()
Mimosa_nitidula.ginoecium.ovary = new Ovary()

Mimosa_nitidula.fruit = new Fruit()
Mimosa_nitidula.fruit.stipe = new Stipe()
Mimosa_nitidula.fruit.replum = new Replum()
Mimosa_nitidula.fruit.epicarp = new Epicarp()

Mimosa_nitidula.seed = new Seed()


// Description authorship
Mimosa_nitidula.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_nitidula.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa nitidula
export { Mimosa_nitidula }