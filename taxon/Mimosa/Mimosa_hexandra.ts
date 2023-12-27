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


// Description of Mimosa hexandra
const Mimosa_hexandra = new Mimosa()
Mimosa_hexandra.specificEpithet = 'hexandra'

Mimosa_hexandra.stems = new Stems()

Mimosa_hexandra.stipule = new Stipule()
Mimosa_hexandra.stipule.margin = new MarginStipule()
Mimosa_hexandra.stipule.adaxial = new AdaxialStipule()
Mimosa_hexandra.stipule.abaxial = new AbaxialStipule()

Mimosa_hexandra.leaf = new Leaf()
Mimosa_hexandra.leaf.petiole = new Petiole()
Mimosa_hexandra.leaf.bipinnate = new Bipinnate()
Mimosa_hexandra.leaf.bipinnate.rachis = new Rachis()
Mimosa_hexandra.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_hexandra.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_hexandra.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 4)
Mimosa_hexandra.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_hexandra.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_hexandra.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_hexandra.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(33, 40)
Mimosa_hexandra.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_hexandra.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_hexandra.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_hexandra.inflorescence = new Inflorescence()
Mimosa_hexandra.inflorescence.peduncle = new Peduncle()
Mimosa_hexandra.inflorescence.capitate = new CapitateInflorescence()

Mimosa_hexandra.flower = new Flower()
Mimosa_hexandra.flower.bracteole = new Bracteole()
Mimosa_hexandra.flower.merism = '3-merous'
Mimosa_hexandra.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_hexandra.flower.calyx = new Calyx()
Mimosa_hexandra.flower.corolla = new Corolla()
Mimosa_hexandra.flower.corolla.shape = 'vase-shaped'

Mimosa_hexandra.androecium = new Androecium()
Mimosa_hexandra.androecium.filaments = new Filaments()
Mimosa_hexandra.androecium.filaments.colour = 'whitenish'

Mimosa_hexandra.ginoecium = new Ginoecium()
Mimosa_hexandra.ginoecium.ovary = new Ovary()

Mimosa_hexandra.fruit = new Fruit()
Mimosa_hexandra.fruit.stipe = new Stipe()
Mimosa_hexandra.fruit.replum = new Replum()
Mimosa_hexandra.fruit.epicarp = new Epicarp()

Mimosa_hexandra.seed = new Seed()


// Description authorship
Mimosa_hexandra.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_hexandra.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa hexandra
export { Mimosa_hexandra }