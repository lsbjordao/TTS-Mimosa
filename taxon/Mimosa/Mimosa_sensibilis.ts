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


// Description of Mimosa sensibilis
const Mimosa_sensibilis = new Mimosa()
Mimosa_sensibilis.specificEpithet = 'sensibilis'

Mimosa_sensibilis.stems = new Stems()

Mimosa_sensibilis.stipule = new Stipule()
Mimosa_sensibilis.stipule.margin = new MarginStipule()
Mimosa_sensibilis.stipule.adaxial = new AdaxialStipule()
Mimosa_sensibilis.stipule.abaxial = new AbaxialStipule()

Mimosa_sensibilis.leaf = new Leaf()
Mimosa_sensibilis.leaf.petiole = new Petiole()
Mimosa_sensibilis.leaf.bipinnate = new Bipinnate()
Mimosa_sensibilis.leaf.bipinnate.rachis = new Rachis()
Mimosa_sensibilis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_sensibilis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_sensibilis.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_sensibilis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_sensibilis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_sensibilis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_sensibilis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_sensibilis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_sensibilis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_sensibilis.inflorescence = new Inflorescence()
Mimosa_sensibilis.inflorescence.peduncle = new Peduncle()
Mimosa_sensibilis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_sensibilis.flower = new Flower()
Mimosa_sensibilis.flower.bracteole = new Bracteole()
Mimosa_sensibilis.flower.merism = '4-merous'
Mimosa_sensibilis.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_sensibilis.flower.calyx = new Calyx()
Mimosa_sensibilis.flower.corolla = new Corolla()
Mimosa_sensibilis.flower.corolla.shape = 'vase-shaped'

Mimosa_sensibilis.androecium = new Androecium()
Mimosa_sensibilis.androecium.filaments = new Filaments()
Mimosa_sensibilis.androecium.filaments.colour = ['lilac', 'whitenish']

Mimosa_sensibilis.ginoecium = new Ginoecium()
Mimosa_sensibilis.ginoecium.ovary = new Ovary()

Mimosa_sensibilis.fruit = new Fruit()
Mimosa_sensibilis.fruit.stipe = new Stipe()
Mimosa_sensibilis.fruit.replum = new Replum()
Mimosa_sensibilis.fruit.epicarp = new Epicarp()

Mimosa_sensibilis.seed = new Seed()


// Description authorship
Mimosa_sensibilis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_sensibilis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa sensibilis
export { Mimosa_sensibilis }