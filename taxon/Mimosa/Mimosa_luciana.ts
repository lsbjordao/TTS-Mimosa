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


// Description of Mimosa luciana
const Mimosa_luciana = new Mimosa()
Mimosa_luciana.specificEpithet = 'luciana'

Mimosa_luciana.stems = new Stems()

Mimosa_luciana.stipule = new Stipule()
Mimosa_luciana.stipule.margin = new MarginStipule()
Mimosa_luciana.stipule.adaxial = new AdaxialStipule()
Mimosa_luciana.stipule.abaxial = new AbaxialStipule()

Mimosa_luciana.leaf = new Leaf()
Mimosa_luciana.leaf.petiole = new Petiole()
Mimosa_luciana.leaf.bipinnate = new Bipinnate()
Mimosa_luciana.leaf.bipinnate.rachis = new Rachis()
Mimosa_luciana.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_luciana.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_luciana.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_luciana.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_luciana.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_luciana.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_luciana.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_luciana.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_luciana.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_luciana.inflorescence = new Inflorescence()
Mimosa_luciana.inflorescence.peduncle = new Peduncle()
Mimosa_luciana.inflorescence.capitate = new CapitateInflorescence()

Mimosa_luciana.flower = new Flower()
Mimosa_luciana.flower.bracteole = new Bracteole()
Mimosa_luciana.flower.merism = '4-merous'
Mimosa_luciana.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_luciana.flower.calyx = new Calyx()
Mimosa_luciana.flower.calyx.shape = 'campanulate'
Mimosa_luciana.flower.corolla = new Corolla()
Mimosa_luciana.flower.corolla.shape = 'vase-shaped'

Mimosa_luciana.androecium = new Androecium()
Mimosa_luciana.androecium.filaments = new Filaments()
Mimosa_luciana.androecium.filaments.colour = 'pinkish'

Mimosa_luciana.ginoecium = new Ginoecium()
Mimosa_luciana.ginoecium.ovary = new Ovary()

Mimosa_luciana.fruit = new Fruit()
Mimosa_luciana.fruit.stipe = new Stipe()
Mimosa_luciana.fruit.replum = new Replum()
Mimosa_luciana.fruit.epicarp = new Epicarp()

Mimosa_luciana.seed = new Seed()


// Description authorship
Mimosa_luciana.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_luciana.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa luciana
export { Mimosa_luciana }