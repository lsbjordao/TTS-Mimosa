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


// Description of Mimosa atlantica
const Mimosa_atlantica = new Mimosa()
Mimosa_atlantica.specificEpithet = 'atlantica'

Mimosa_atlantica.stems = new Stems()

Mimosa_atlantica.stipule = new Stipule()
Mimosa_atlantica.stipule.margin = new MarginStipule()
Mimosa_atlantica.stipule.adaxial = new AdaxialStipule()
Mimosa_atlantica.stipule.abaxial = new AbaxialStipule()

Mimosa_atlantica.leaf = new Leaf()
Mimosa_atlantica.leaf.petiole = new Petiole()
Mimosa_atlantica.leaf.bipinnate = new Bipinnate()
Mimosa_atlantica.leaf.bipinnate.rachis = new Rachis()
Mimosa_atlantica.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_atlantica.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_atlantica.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_atlantica.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_atlantica.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_atlantica.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_atlantica.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(18, 21)
Mimosa_atlantica.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_atlantica.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_atlantica.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_atlantica.inflorescence = new Inflorescence()
Mimosa_atlantica.inflorescence.peduncle = new Peduncle()
Mimosa_atlantica.inflorescence.capitate = new CapitateInflorescence()

Mimosa_atlantica.flower = new Flower()
Mimosa_atlantica.flower.bracteole = new Bracteole()
Mimosa_atlantica.flower.merism = '4-merous'
Mimosa_atlantica.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_atlantica.flower.calyx = new Calyx()
Mimosa_atlantica.flower.calyx.shape = 'campanulate'
Mimosa_atlantica.flower.corolla = new Corolla()

Mimosa_atlantica.androecium = new Androecium()
Mimosa_atlantica.androecium.filaments = new Filaments()
Mimosa_atlantica.androecium.filaments.colour = ['lilac', 'pinkish']

Mimosa_atlantica.ginoecium = new Ginoecium()
Mimosa_atlantica.ginoecium.ovary = new Ovary()

Mimosa_atlantica.fruit = new Fruit()
Mimosa_atlantica.fruit.stipe = new Stipe()
Mimosa_atlantica.fruit.replum = new Replum()
Mimosa_atlantica.fruit.epicarp = new Epicarp()

Mimosa_atlantica.seed = new Seed()


// Description authorship
Mimosa_atlantica.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_atlantica.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa atlantica
export { Mimosa_atlantica }