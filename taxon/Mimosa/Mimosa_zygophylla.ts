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


// Description of Mimosa zygophylla
const Mimosa_zygophylla = new Mimosa()
Mimosa_zygophylla.specificEpithet = 'zygophylla'

Mimosa_zygophylla.stems = new Stems()

Mimosa_zygophylla.stipule = new Stipule()
Mimosa_zygophylla.stipule.margin = new MarginStipule()
Mimosa_zygophylla.stipule.adaxial = new AdaxialStipule()
Mimosa_zygophylla.stipule.abaxial = new AbaxialStipule()

Mimosa_zygophylla.leaf = new Leaf()
Mimosa_zygophylla.leaf.petiole = new Petiole()
Mimosa_zygophylla.leaf.bipinnate = new Bipinnate()
Mimosa_zygophylla.leaf.bipinnate.rachis = new Rachis()
Mimosa_zygophylla.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_zygophylla.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_zygophylla.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_zygophylla.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_zygophylla.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_zygophylla.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(10, 16)
Mimosa_zygophylla.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_zygophylla.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_zygophylla.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_zygophylla.inflorescence = new Inflorescence()
Mimosa_zygophylla.inflorescence.peduncle = new Peduncle()
Mimosa_zygophylla.inflorescence.capitate = new CapitateInflorescence()

Mimosa_zygophylla.flower = new Flower()
Mimosa_zygophylla.flower.bracteole = new Bracteole()
Mimosa_zygophylla.flower.calyx = new Calyx()
Mimosa_zygophylla.flower.calyx.shape = 'campanulate'
Mimosa_zygophylla.flower.corolla = new Corolla()

Mimosa_zygophylla.androecium = new Androecium()
Mimosa_zygophylla.androecium.filaments = new Filaments()
Mimosa_zygophylla.androecium.filaments.colour = 'pinkish'

Mimosa_zygophylla.ginoecium = new Ginoecium()
Mimosa_zygophylla.ginoecium.ovary = new Ovary()

Mimosa_zygophylla.fruit = new Fruit()
Mimosa_zygophylla.fruit.stipe = new Stipe()
Mimosa_zygophylla.fruit.replum = new Replum()
Mimosa_zygophylla.fruit.epicarp = new Epicarp()

Mimosa_zygophylla.seed = new Seed()


// Description authorship
Mimosa_zygophylla.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_zygophylla.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa zygophylla
export { Mimosa_zygophylla }