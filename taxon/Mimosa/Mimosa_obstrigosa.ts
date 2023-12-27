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


// Description of Mimosa obstrigosa
const Mimosa_obstrigosa = new Mimosa()
Mimosa_obstrigosa.specificEpithet = 'obstrigosa'

Mimosa_obstrigosa.stems = new Stems()

Mimosa_obstrigosa.stipule = new Stipule()
Mimosa_obstrigosa.stipule.margin = new MarginStipule()
Mimosa_obstrigosa.stipule.adaxial = new AdaxialStipule()
Mimosa_obstrigosa.stipule.abaxial = new AbaxialStipule()

Mimosa_obstrigosa.leaf = new Leaf()
Mimosa_obstrigosa.leaf.petiole = new Petiole()
Mimosa_obstrigosa.leaf.bipinnate = new Bipinnate()
Mimosa_obstrigosa.leaf.bipinnate.rachis = new Rachis()
Mimosa_obstrigosa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_obstrigosa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_obstrigosa.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_obstrigosa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_obstrigosa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_obstrigosa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_obstrigosa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(28, 35)
Mimosa_obstrigosa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_obstrigosa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_obstrigosa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_obstrigosa.inflorescence = new Inflorescence()
Mimosa_obstrigosa.inflorescence.peduncle = new Peduncle()
Mimosa_obstrigosa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_obstrigosa.flower = new Flower()
Mimosa_obstrigosa.flower.bracteole = new Bracteole()
Mimosa_obstrigosa.flower.merism = '4-merous'
Mimosa_obstrigosa.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_obstrigosa.flower.calyx = new Calyx()
Mimosa_obstrigosa.flower.calyx.shape = 'campanulate'
Mimosa_obstrigosa.flower.corolla = new Corolla()

Mimosa_obstrigosa.androecium = new Androecium()
Mimosa_obstrigosa.androecium.filaments = new Filaments()
Mimosa_obstrigosa.androecium.filaments.colour = 'pinkish'

Mimosa_obstrigosa.ginoecium = new Ginoecium()
Mimosa_obstrigosa.ginoecium.ovary = new Ovary()

Mimosa_obstrigosa.fruit = new Fruit()
Mimosa_obstrigosa.fruit.stipe = new Stipe()
Mimosa_obstrigosa.fruit.replum = new Replum()
Mimosa_obstrigosa.fruit.epicarp = new Epicarp()

Mimosa_obstrigosa.seed = new Seed()


// Description authorship
Mimosa_obstrigosa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_obstrigosa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa obstrigosa
export { Mimosa_obstrigosa }