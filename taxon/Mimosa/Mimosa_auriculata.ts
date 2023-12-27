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


// Description of Mimosa auriculata
const Mimosa_auriculata = new Mimosa()
Mimosa_auriculata.specificEpithet = 'auriculata'

Mimosa_auriculata.stems = new Stems()

Mimosa_auriculata.stipule = new Stipule()
Mimosa_auriculata.stipule.margin = new MarginStipule()
Mimosa_auriculata.stipule.adaxial = new AdaxialStipule()
Mimosa_auriculata.stipule.abaxial = new AbaxialStipule()

Mimosa_auriculata.leaf = new Leaf()
Mimosa_auriculata.leaf.petiole = new Petiole()
Mimosa_auriculata.leaf.bipinnate = new Bipinnate()
Mimosa_auriculata.leaf.bipinnate.rachis = new Rachis()
Mimosa_auriculata.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_auriculata.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_auriculata.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_auriculata.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_auriculata.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_auriculata.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_auriculata.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(8, 12)
Mimosa_auriculata.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_auriculata.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_auriculata.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_auriculata.inflorescence = new Inflorescence()
Mimosa_auriculata.inflorescence.peduncle = new Peduncle()
Mimosa_auriculata.inflorescence.capitate = new CapitateInflorescence()

Mimosa_auriculata.flower = new Flower()
Mimosa_auriculata.flower.bracteole = new Bracteole()
Mimosa_auriculata.flower.merism = '4-merous'
Mimosa_auriculata.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_auriculata.flower.calyx = new Calyx()
Mimosa_auriculata.flower.calyx.shape = 'campanulate'
Mimosa_auriculata.flower.corolla = new Corolla()

Mimosa_auriculata.androecium = new Androecium()
Mimosa_auriculata.androecium.filaments = new Filaments()
Mimosa_auriculata.androecium.filaments.colour = 'whitenish'

Mimosa_auriculata.ginoecium = new Ginoecium()
Mimosa_auriculata.ginoecium.ovary = new Ovary()

Mimosa_auriculata.fruit = new Fruit()
Mimosa_auriculata.fruit.stipe = new Stipe()
Mimosa_auriculata.fruit.replum = new Replum()
Mimosa_auriculata.fruit.epicarp = new Epicarp()

Mimosa_auriculata.seed = new Seed()


// Description authorship
Mimosa_auriculata.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_auriculata.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa auriculata
export { Mimosa_auriculata }