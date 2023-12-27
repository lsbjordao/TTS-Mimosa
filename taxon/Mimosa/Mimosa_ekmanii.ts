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


// Description of Mimosa ekmanii
const Mimosa_ekmanii = new Mimosa()
Mimosa_ekmanii.specificEpithet = 'ekmanii'

Mimosa_ekmanii.stems = new Stems()

Mimosa_ekmanii.stipule = new Stipule()
Mimosa_ekmanii.stipule.margin = new MarginStipule()
Mimosa_ekmanii.stipule.adaxial = new AdaxialStipule()
Mimosa_ekmanii.stipule.abaxial = new AbaxialStipule()

Mimosa_ekmanii.leaf = new Leaf()
Mimosa_ekmanii.leaf.petiole = new Petiole()
Mimosa_ekmanii.leaf.bipinnate = new Bipinnate()
Mimosa_ekmanii.leaf.bipinnate.rachis = new Rachis()
Mimosa_ekmanii.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_ekmanii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_ekmanii.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(1)
Mimosa_ekmanii.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 4)
Mimosa_ekmanii.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(5)
Mimosa_ekmanii.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_ekmanii.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_ekmanii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_ekmanii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(17)
Mimosa_ekmanii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(20, 46)
Mimosa_ekmanii.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_ekmanii.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_ekmanii.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_ekmanii.inflorescence = new Inflorescence()
Mimosa_ekmanii.inflorescence.peduncle = new Peduncle()
Mimosa_ekmanii.inflorescence.capitate = new CapitateInflorescence()

Mimosa_ekmanii.flower = new Flower()
Mimosa_ekmanii.flower.bracteole = new Bracteole()
Mimosa_ekmanii.flower.merism = '4-merous'
Mimosa_ekmanii.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_ekmanii.flower.calyx = new Calyx()
Mimosa_ekmanii.flower.calyx.shape = 'campanulate'
Mimosa_ekmanii.flower.corolla = new Corolla()
Mimosa_ekmanii.flower.corolla.shape = 'turbinate'

Mimosa_ekmanii.androecium = new Androecium()
Mimosa_ekmanii.androecium.filaments = new Filaments()

Mimosa_ekmanii.ginoecium = new Ginoecium()
Mimosa_ekmanii.ginoecium.ovary = new Ovary()

Mimosa_ekmanii.fruit = new Fruit()
Mimosa_ekmanii.fruit.stipe = new Stipe()
Mimosa_ekmanii.fruit.replum = new Replum()
Mimosa_ekmanii.fruit.epicarp = new Epicarp()

Mimosa_ekmanii.seed = new Seed()


// Description authorship
Mimosa_ekmanii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_ekmanii.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa ekmanii
export { Mimosa_ekmanii }