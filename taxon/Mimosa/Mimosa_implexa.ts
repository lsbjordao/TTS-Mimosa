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


// Description of Mimosa implexa
const Mimosa_implexa = new Mimosa()
Mimosa_implexa.specificEpithet = 'implexa'

Mimosa_implexa.stems = new Stems()

Mimosa_implexa.stipule = new Stipule()
Mimosa_implexa.stipule.margin = new MarginStipule()
Mimosa_implexa.stipule.adaxial = new AdaxialStipule()
Mimosa_implexa.stipule.abaxial = new AbaxialStipule()

Mimosa_implexa.leaf = new Leaf()
Mimosa_implexa.leaf.petiole = new Petiole()
Mimosa_implexa.leaf.bipinnate = new Bipinnate()
Mimosa_implexa.leaf.bipinnate.rachis = new Rachis()
Mimosa_implexa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_implexa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_implexa.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_implexa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_implexa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_implexa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_implexa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_implexa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_implexa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_implexa.inflorescence = new Inflorescence()
Mimosa_implexa.inflorescence.peduncle = new Peduncle()
Mimosa_implexa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_implexa.flower = new Flower()
Mimosa_implexa.flower.bracteole = new Bracteole()
Mimosa_implexa.flower.merism = '4-merous'
Mimosa_implexa.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_implexa.flower.calyx = new Calyx()
Mimosa_implexa.flower.calyx.shape = 'campanulate'
Mimosa_implexa.flower.corolla = new Corolla()
Mimosa_implexa.flower.corolla.shape = 'vase-shaped'

Mimosa_implexa.androecium = new Androecium()
Mimosa_implexa.androecium.filaments = new Filaments()

Mimosa_implexa.ginoecium = new Ginoecium()
Mimosa_implexa.ginoecium.ovary = new Ovary()

Mimosa_implexa.fruit = new Fruit()
Mimosa_implexa.fruit.stipe = new Stipe()
Mimosa_implexa.fruit.replum = new Replum()
Mimosa_implexa.fruit.epicarp = new Epicarp()

Mimosa_implexa.seed = new Seed()


// Description authorship
Mimosa_implexa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_implexa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa implexa
export { Mimosa_implexa }