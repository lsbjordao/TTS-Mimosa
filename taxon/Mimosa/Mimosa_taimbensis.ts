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


// Description of Mimosa taimbensis
const Mimosa_taimbensis = new Mimosa()
Mimosa_taimbensis.specificEpithet = 'taimbensis'

Mimosa_taimbensis.stems = new Stems()

Mimosa_taimbensis.stipule = new Stipule()
Mimosa_taimbensis.stipule.margin = new MarginStipule()
Mimosa_taimbensis.stipule.adaxial = new AdaxialStipule()
Mimosa_taimbensis.stipule.abaxial = new AbaxialStipule()

Mimosa_taimbensis.leaf = new Leaf()
Mimosa_taimbensis.leaf.petiole = new Petiole()
Mimosa_taimbensis.leaf.bipinnate = new Bipinnate()
Mimosa_taimbensis.leaf.bipinnate.rachis = new Rachis()
Mimosa_taimbensis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_taimbensis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_taimbensis.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(1)
Mimosa_taimbensis.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 4)
Mimosa_taimbensis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_taimbensis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_taimbensis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_taimbensis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(22)
Mimosa_taimbensis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(25, 40)
Mimosa_taimbensis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_taimbensis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_taimbensis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_taimbensis.inflorescence = new Inflorescence()
Mimosa_taimbensis.inflorescence.peduncle = new Peduncle()
Mimosa_taimbensis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_taimbensis.flower = new Flower()
Mimosa_taimbensis.flower.bracteole = new Bracteole()
Mimosa_taimbensis.flower.merism = '4-merous'
Mimosa_taimbensis.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_taimbensis.flower.calyx = new Calyx()
Mimosa_taimbensis.flower.calyx.shape = 'campanulate'
Mimosa_taimbensis.flower.corolla = new Corolla()
Mimosa_taimbensis.flower.corolla.shape = 'campanulate'

Mimosa_taimbensis.androecium = new Androecium()
Mimosa_taimbensis.androecium.filaments = new Filaments()
Mimosa_taimbensis.androecium.filaments.colour = 'yellowish'

Mimosa_taimbensis.ginoecium = new Ginoecium()
Mimosa_taimbensis.ginoecium.ovary = new Ovary()

Mimosa_taimbensis.fruit = new Fruit()
Mimosa_taimbensis.fruit.stipe = new Stipe()
Mimosa_taimbensis.fruit.replum = new Replum()
Mimosa_taimbensis.fruit.epicarp = new Epicarp()

Mimosa_taimbensis.seed = new Seed()


// Description authorship
Mimosa_taimbensis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_taimbensis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa taimbensis
export { Mimosa_taimbensis }