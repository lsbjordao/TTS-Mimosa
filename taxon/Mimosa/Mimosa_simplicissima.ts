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


// Description of Mimosa simplicissima
const Mimosa_simplicissima = new Mimosa()
Mimosa_simplicissima.specificEpithet = 'simplicissima'

Mimosa_simplicissima.stems = new Stems()

Mimosa_simplicissima.stipule = new Stipule()
Mimosa_simplicissima.stipule.margin = new MarginStipule()
Mimosa_simplicissima.stipule.adaxial = new AdaxialStipule()
Mimosa_simplicissima.stipule.abaxial = new AbaxialStipule()

Mimosa_simplicissima.leaf = new Leaf()
Mimosa_simplicissima.leaf.petiole = new Petiole()
Mimosa_simplicissima.leaf.bipinnate = new Bipinnate()
Mimosa_simplicissima.leaf.bipinnate.rachis = new Rachis()
Mimosa_simplicissima.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_simplicissima.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_simplicissima.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_simplicissima.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_simplicissima.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_simplicissima.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_simplicissima.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(20, 30)
Mimosa_simplicissima.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_simplicissima.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_simplicissima.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_simplicissima.inflorescence = new Inflorescence()
Mimosa_simplicissima.inflorescence.peduncle = new Peduncle()
Mimosa_simplicissima.inflorescence.capitate = new CapitateInflorescence()

Mimosa_simplicissima.flower = new Flower()
Mimosa_simplicissima.flower.bracteole = new Bracteole()
Mimosa_simplicissima.flower.merism = '4-merous'
Mimosa_simplicissima.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_simplicissima.flower.calyx = new Calyx()
Mimosa_simplicissima.flower.corolla = new Corolla()
Mimosa_simplicissima.flower.corolla.shape = 'vase-shaped'

Mimosa_simplicissima.androecium = new Androecium()
Mimosa_simplicissima.androecium.filaments = new Filaments()
Mimosa_simplicissima.androecium.filaments.colour = ['lilac', 'pinkish']

Mimosa_simplicissima.ginoecium = new Ginoecium()
Mimosa_simplicissima.ginoecium.ovary = new Ovary()

Mimosa_simplicissima.fruit = new Fruit()
Mimosa_simplicissima.fruit.stipe = new Stipe()
Mimosa_simplicissima.fruit.replum = new Replum()
Mimosa_simplicissima.fruit.epicarp = new Epicarp()

Mimosa_simplicissima.seed = new Seed()


// Description authorship
Mimosa_simplicissima.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_simplicissima.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa simplicissima
export { Mimosa_simplicissima }