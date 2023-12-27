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
import { Peduncle, Spicate } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa nanchititlana
const Mimosa_nanchititlana = new Mimosa()
Mimosa_nanchititlana.specificEpithet = 'nanchititlana'

Mimosa_nanchititlana.stems = new Stems()

Mimosa_nanchititlana.stipule = new Stipule()
Mimosa_nanchititlana.stipule.margin = new MarginStipule()
Mimosa_nanchititlana.stipule.adaxial = new AdaxialStipule()
Mimosa_nanchititlana.stipule.abaxial = new AbaxialStipule()

Mimosa_nanchititlana.leaf = new Leaf()
Mimosa_nanchititlana.leaf.petiole = new Petiole()
Mimosa_nanchititlana.leaf.bipinnate = new Bipinnate()
Mimosa_nanchititlana.leaf.bipinnate.rachis = new Rachis()
Mimosa_nanchititlana.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_nanchititlana.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_nanchititlana.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_nanchititlana.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_nanchititlana.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_nanchititlana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(18)
Mimosa_nanchititlana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(25, 37)
Mimosa_nanchititlana.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_nanchititlana.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_nanchititlana.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_nanchititlana.inflorescence = new Inflorescence()
Mimosa_nanchititlana.inflorescence.peduncle = new Peduncle()
Mimosa_nanchititlana.inflorescence.spicate = new Spicate()

Mimosa_nanchititlana.flower = new Flower()
Mimosa_nanchititlana.flower.bracteole = new Bracteole()
Mimosa_nanchititlana.flower.merism = '5-merous'
Mimosa_nanchititlana.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_nanchititlana.flower.calyx = new Calyx()
Mimosa_nanchititlana.flower.calyx.shape = 'campanulate'
Mimosa_nanchititlana.flower.corolla = new Corolla()

Mimosa_nanchititlana.androecium = new Androecium()
Mimosa_nanchititlana.androecium.filaments = new Filaments()
Mimosa_nanchititlana.androecium.filaments.colour = 'whitenish'

Mimosa_nanchititlana.ginoecium = new Ginoecium()
Mimosa_nanchititlana.ginoecium.ovary = new Ovary()

Mimosa_nanchititlana.fruit = new Fruit()
Mimosa_nanchititlana.fruit.stipe = new Stipe()
Mimosa_nanchititlana.fruit.replum = new Replum()
Mimosa_nanchititlana.fruit.epicarp = new Epicarp()

Mimosa_nanchititlana.seed = new Seed()


// Description authorship
Mimosa_nanchititlana.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_nanchititlana.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa nanchititlana
export { Mimosa_nanchititlana }