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


// Description of Mimosa bifurca
const Mimosa_bifurca = new Mimosa()
Mimosa_bifurca.specificEpithet = 'bifurca'

Mimosa_bifurca.stems = new Stems()

Mimosa_bifurca.stipule = new Stipule()
Mimosa_bifurca.stipule.margin = new MarginStipule()
Mimosa_bifurca.stipule.adaxial = new AdaxialStipule()
Mimosa_bifurca.stipule.abaxial = new AbaxialStipule()

Mimosa_bifurca.leaf = new Leaf()
Mimosa_bifurca.leaf.petiole = new Petiole()
Mimosa_bifurca.leaf.bipinnate = new Bipinnate()
Mimosa_bifurca.leaf.bipinnate.rachis = new Rachis()
Mimosa_bifurca.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_bifurca.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_bifurca.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 6)
Mimosa_bifurca.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(9)
Mimosa_bifurca.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_bifurca.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_bifurca.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_bifurca.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(15, 40)
Mimosa_bifurca.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_bifurca.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_bifurca.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_bifurca.inflorescence = new Inflorescence()
Mimosa_bifurca.inflorescence.peduncle = new Peduncle()
Mimosa_bifurca.inflorescence.capitate = new CapitateInflorescence()

Mimosa_bifurca.flower = new Flower()
Mimosa_bifurca.flower.bracteole = new Bracteole()
Mimosa_bifurca.flower.merism = '4-merous'
Mimosa_bifurca.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_bifurca.flower.calyx = new Calyx()
Mimosa_bifurca.flower.calyx.shape = 'campanulate'
Mimosa_bifurca.flower.corolla = new Corolla()
Mimosa_bifurca.flower.corolla.shape = 'vase-shaped'

Mimosa_bifurca.androecium = new Androecium()
Mimosa_bifurca.androecium.filaments = new Filaments()
Mimosa_bifurca.androecium.filaments.colour = 'pinkish'

Mimosa_bifurca.ginoecium = new Ginoecium()
Mimosa_bifurca.ginoecium.ovary = new Ovary()

Mimosa_bifurca.fruit = new Fruit()
Mimosa_bifurca.fruit.stipe = new Stipe()
Mimosa_bifurca.fruit.replum = new Replum()
Mimosa_bifurca.fruit.epicarp = new Epicarp()

Mimosa_bifurca.seed = new Seed()


// Description authorship
Mimosa_bifurca.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_bifurca.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa bifurca
export { Mimosa_bifurca }