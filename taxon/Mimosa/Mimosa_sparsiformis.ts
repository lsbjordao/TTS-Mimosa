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


// Description of Mimosa sparsiformis
const Mimosa_sparsiformis = new Mimosa()
Mimosa_sparsiformis.specificEpithet = 'sparsiformis'

Mimosa_sparsiformis.stems = new Stems()

Mimosa_sparsiformis.stipule = new Stipule()
Mimosa_sparsiformis.stipule.margin = new MarginStipule()
Mimosa_sparsiformis.stipule.adaxial = new AdaxialStipule()
Mimosa_sparsiformis.stipule.abaxial = new AbaxialStipule()

Mimosa_sparsiformis.leaf = new Leaf()
Mimosa_sparsiformis.leaf.petiole = new Petiole()
Mimosa_sparsiformis.leaf.bipinnate = new Bipinnate()
Mimosa_sparsiformis.leaf.bipinnate.rachis = new Rachis()
Mimosa_sparsiformis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_sparsiformis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_sparsiformis.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_sparsiformis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_sparsiformis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_sparsiformis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_sparsiformis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_sparsiformis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_sparsiformis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_sparsiformis.inflorescence = new Inflorescence()
Mimosa_sparsiformis.inflorescence.peduncle = new Peduncle()
Mimosa_sparsiformis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_sparsiformis.flower = new Flower()
Mimosa_sparsiformis.flower.bracteole = new Bracteole()
Mimosa_sparsiformis.flower.merism = '4-merous'
Mimosa_sparsiformis.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_sparsiformis.flower.calyx = new Calyx()
Mimosa_sparsiformis.flower.calyx.shape = 'rudimentary'
Mimosa_sparsiformis.flower.corolla = new Corolla()

Mimosa_sparsiformis.androecium = new Androecium()
Mimosa_sparsiformis.androecium.filaments = new Filaments()
Mimosa_sparsiformis.androecium.filaments.colour = 'pinkish'

Mimosa_sparsiformis.ginoecium = new Ginoecium()
Mimosa_sparsiformis.ginoecium.ovary = new Ovary()

Mimosa_sparsiformis.fruit = new Fruit()
Mimosa_sparsiformis.fruit.stipe = new Stipe()
Mimosa_sparsiformis.fruit.replum = new Replum()
Mimosa_sparsiformis.fruit.epicarp = new Epicarp()

Mimosa_sparsiformis.seed = new Seed()


// Description authorship
Mimosa_sparsiformis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_sparsiformis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa sparsiformis
export { Mimosa_sparsiformis }