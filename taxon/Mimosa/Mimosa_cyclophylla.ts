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


// Description of Mimosa cyclophylla
const Mimosa_cyclophylla = new Mimosa()
Mimosa_cyclophylla.specificEpithet = 'cyclophylla'

Mimosa_cyclophylla.stems = new Stems()

Mimosa_cyclophylla.stipule = new Stipule()
Mimosa_cyclophylla.stipule.margin = new MarginStipule()
Mimosa_cyclophylla.stipule.adaxial = new AdaxialStipule()
Mimosa_cyclophylla.stipule.abaxial = new AbaxialStipule()

Mimosa_cyclophylla.leaf = new Leaf()
Mimosa_cyclophylla.leaf.petiole = new Petiole()
Mimosa_cyclophylla.leaf.bipinnate = new Bipinnate()
Mimosa_cyclophylla.leaf.bipinnate.rachis = new Rachis()
Mimosa_cyclophylla.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_cyclophylla.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_cyclophylla.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_cyclophylla.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_cyclophylla.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_cyclophylla.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_cyclophylla.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(16)
Mimosa_cyclophylla.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(24, 32)
Mimosa_cyclophylla.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_cyclophylla.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_cyclophylla.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_cyclophylla.inflorescence = new Inflorescence()
Mimosa_cyclophylla.inflorescence.peduncle = new Peduncle()
Mimosa_cyclophylla.inflorescence.capitate = new CapitateInflorescence()

Mimosa_cyclophylla.flower = new Flower()
Mimosa_cyclophylla.flower.bracteole = new Bracteole()
Mimosa_cyclophylla.flower.merism = '4-merous'
Mimosa_cyclophylla.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_cyclophylla.flower.calyx = new Calyx()
Mimosa_cyclophylla.flower.calyx.shape = 'paleaceous'
Mimosa_cyclophylla.flower.corolla = new Corolla()

Mimosa_cyclophylla.androecium = new Androecium()
Mimosa_cyclophylla.androecium.filaments = new Filaments()

Mimosa_cyclophylla.ginoecium = new Ginoecium()
Mimosa_cyclophylla.ginoecium.ovary = new Ovary()

Mimosa_cyclophylla.fruit = new Fruit()
Mimosa_cyclophylla.fruit.stipe = new Stipe()
Mimosa_cyclophylla.fruit.replum = new Replum()
Mimosa_cyclophylla.fruit.epicarp = new Epicarp()

Mimosa_cyclophylla.seed = new Seed()


// Description authorship
Mimosa_cyclophylla.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_cyclophylla.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa cyclophylla
export { Mimosa_cyclophylla }