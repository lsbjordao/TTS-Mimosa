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


// Description of Mimosa hortensis
const Mimosa_hortensis = new Mimosa()
Mimosa_hortensis.specificEpithet = 'hortensis'

Mimosa_hortensis.stems = new Stems()

Mimosa_hortensis.stipule = new Stipule()
Mimosa_hortensis.stipule.margin = new MarginStipule()
Mimosa_hortensis.stipule.adaxial = new AdaxialStipule()
Mimosa_hortensis.stipule.abaxial = new AbaxialStipule()

Mimosa_hortensis.leaf = new Leaf()
Mimosa_hortensis.leaf.petiole = new Petiole()
Mimosa_hortensis.leaf.bipinnate = new Bipinnate()
Mimosa_hortensis.leaf.bipinnate.rachis = new Rachis()
Mimosa_hortensis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_hortensis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_hortensis.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(3, 4)
Mimosa_hortensis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_hortensis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_hortensis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_hortensis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(27, 38)
Mimosa_hortensis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_hortensis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_hortensis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_hortensis.inflorescence = new Inflorescence()
Mimosa_hortensis.inflorescence.peduncle = new Peduncle()
Mimosa_hortensis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_hortensis.flower = new Flower()
Mimosa_hortensis.flower.bracteole = new Bracteole()
Mimosa_hortensis.flower.merism = '3-merous'
Mimosa_hortensis.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_hortensis.flower.calyx = new Calyx()
Mimosa_hortensis.flower.corolla = new Corolla()
Mimosa_hortensis.flower.corolla.shape = 'vase-shaped'

Mimosa_hortensis.androecium = new Androecium()
Mimosa_hortensis.androecium.filaments = new Filaments()
Mimosa_hortensis.androecium.filaments.colour = 'pinkish'

Mimosa_hortensis.ginoecium = new Ginoecium()
Mimosa_hortensis.ginoecium.ovary = new Ovary()

Mimosa_hortensis.fruit = new Fruit()
Mimosa_hortensis.fruit.stipe = new Stipe()
Mimosa_hortensis.fruit.replum = new Replum()
Mimosa_hortensis.fruit.epicarp = new Epicarp()

Mimosa_hortensis.seed = new Seed()


// Description authorship
Mimosa_hortensis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_hortensis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa hortensis
export { Mimosa_hortensis }