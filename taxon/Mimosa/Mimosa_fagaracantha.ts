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


// Description of Mimosa fagaracantha
const Mimosa_fagaracantha = new Mimosa()
Mimosa_fagaracantha.specificEpithet = 'fagaracantha'

Mimosa_fagaracantha.stems = new Stems()

Mimosa_fagaracantha.stipule = new Stipule()
Mimosa_fagaracantha.stipule.margin = new MarginStipule()
Mimosa_fagaracantha.stipule.adaxial = new AdaxialStipule()
Mimosa_fagaracantha.stipule.abaxial = new AbaxialStipule()

Mimosa_fagaracantha.leaf = new Leaf()
Mimosa_fagaracantha.leaf.petiole = new Petiole()
Mimosa_fagaracantha.leaf.bipinnate = new Bipinnate()
Mimosa_fagaracantha.leaf.bipinnate.rachis = new Rachis()
Mimosa_fagaracantha.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_fagaracantha.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_fagaracantha.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 3)
Mimosa_fagaracantha.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(4)
Mimosa_fagaracantha.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_fagaracantha.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_fagaracantha.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_fagaracantha.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(15, 36)
Mimosa_fagaracantha.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_fagaracantha.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_fagaracantha.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_fagaracantha.inflorescence = new Inflorescence()
Mimosa_fagaracantha.inflorescence.peduncle = new Peduncle()
Mimosa_fagaracantha.inflorescence.capitate = new CapitateInflorescence()

Mimosa_fagaracantha.flower = new Flower()
Mimosa_fagaracantha.flower.bracteole = new Bracteole()
Mimosa_fagaracantha.flower.merism = ['4-merous', '5-merous']
Mimosa_fagaracantha.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_fagaracantha.flower.calyx = new Calyx()
Mimosa_fagaracantha.flower.calyx.shape = 'campanulate'
Mimosa_fagaracantha.flower.corolla = new Corolla()
Mimosa_fagaracantha.flower.corolla.shape = 'vase-shaped'

Mimosa_fagaracantha.androecium = new Androecium()
Mimosa_fagaracantha.androecium.filaments = new Filaments()

Mimosa_fagaracantha.ginoecium = new Ginoecium()
Mimosa_fagaracantha.ginoecium.ovary = new Ovary()

Mimosa_fagaracantha.fruit = new Fruit()
Mimosa_fagaracantha.fruit.stipe = new Stipe()
Mimosa_fagaracantha.fruit.replum = new Replum()
Mimosa_fagaracantha.fruit.epicarp = new Epicarp()

Mimosa_fagaracantha.seed = new Seed()


// Description authorship
Mimosa_fagaracantha.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_fagaracantha.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa fagaracantha
export { Mimosa_fagaracantha }