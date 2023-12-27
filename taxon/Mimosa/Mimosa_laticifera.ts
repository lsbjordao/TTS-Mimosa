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


// Description of Mimosa laticifera
const Mimosa_laticifera = new Mimosa()
Mimosa_laticifera.specificEpithet = 'laticifera'

Mimosa_laticifera.stems = new Stems()

Mimosa_laticifera.stipule = new Stipule()
Mimosa_laticifera.stipule.margin = new MarginStipule()
Mimosa_laticifera.stipule.adaxial = new AdaxialStipule()
Mimosa_laticifera.stipule.abaxial = new AbaxialStipule()

Mimosa_laticifera.leaf = new Leaf()
Mimosa_laticifera.leaf.petiole = new Petiole()
Mimosa_laticifera.leaf.bipinnate = new Bipinnate()
Mimosa_laticifera.leaf.bipinnate.rachis = new Rachis()
Mimosa_laticifera.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_laticifera.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_laticifera.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 4)
Mimosa_laticifera.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_laticifera.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_laticifera.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_laticifera.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_laticifera.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_laticifera.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_laticifera.inflorescence = new Inflorescence()
Mimosa_laticifera.inflorescence.peduncle = new Peduncle()
Mimosa_laticifera.inflorescence.capitate = new CapitateInflorescence()

Mimosa_laticifera.flower = new Flower()
Mimosa_laticifera.flower.bracteole = new Bracteole()
Mimosa_laticifera.flower.merism = '3-merous'
Mimosa_laticifera.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_laticifera.flower.calyx = new Calyx()
Mimosa_laticifera.flower.calyx.shape = 'campanulate'
Mimosa_laticifera.flower.corolla = new Corolla()

Mimosa_laticifera.androecium = new Androecium()
Mimosa_laticifera.androecium.filaments = new Filaments()
Mimosa_laticifera.androecium.filaments.colour = 'whitenish'

Mimosa_laticifera.ginoecium = new Ginoecium()
Mimosa_laticifera.ginoecium.ovary = new Ovary()

Mimosa_laticifera.fruit = new Fruit()
Mimosa_laticifera.fruit.stipe = new Stipe()
Mimosa_laticifera.fruit.replum = new Replum()
Mimosa_laticifera.fruit.epicarp = new Epicarp()

Mimosa_laticifera.seed = new Seed()


// Description authorship
Mimosa_laticifera.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_laticifera.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa laticifera
export { Mimosa_laticifera }