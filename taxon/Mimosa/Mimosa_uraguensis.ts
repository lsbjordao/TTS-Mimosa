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


// Description of Mimosa uraguensis
const Mimosa_uraguensis = new Mimosa()
Mimosa_uraguensis.specificEpithet = 'uraguensis'

Mimosa_uraguensis.stems = new Stems()

Mimosa_uraguensis.stipule = new Stipule()
Mimosa_uraguensis.stipule.margin = new MarginStipule()
Mimosa_uraguensis.stipule.adaxial = new AdaxialStipule()
Mimosa_uraguensis.stipule.abaxial = new AbaxialStipule()

Mimosa_uraguensis.leaf = new Leaf()
Mimosa_uraguensis.leaf.petiole = new Petiole()
Mimosa_uraguensis.leaf.bipinnate = new Bipinnate()
Mimosa_uraguensis.leaf.bipinnate.rachis = new Rachis()
Mimosa_uraguensis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_uraguensis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_uraguensis.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(1, 2)
Mimosa_uraguensis.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(3)
Mimosa_uraguensis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_uraguensis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_uraguensis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_uraguensis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(15, 40)
Mimosa_uraguensis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(48)
Mimosa_uraguensis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_uraguensis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_uraguensis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_uraguensis.inflorescence = new Inflorescence()
Mimosa_uraguensis.inflorescence.peduncle = new Peduncle()
Mimosa_uraguensis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_uraguensis.flower = new Flower()
Mimosa_uraguensis.flower.bracteole = new Bracteole()
Mimosa_uraguensis.flower.merism = '4-merous'
Mimosa_uraguensis.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_uraguensis.flower.calyx = new Calyx()
Mimosa_uraguensis.flower.calyx.shape = 'campanulate'
Mimosa_uraguensis.flower.corolla = new Corolla()
Mimosa_uraguensis.flower.corolla.shape = 'vase-shaped'

Mimosa_uraguensis.androecium = new Androecium()
Mimosa_uraguensis.androecium.filaments = new Filaments()
Mimosa_uraguensis.androecium.filaments.colour = 'pinkish'

Mimosa_uraguensis.ginoecium = new Ginoecium()
Mimosa_uraguensis.ginoecium.ovary = new Ovary()

Mimosa_uraguensis.fruit = new Fruit()
Mimosa_uraguensis.fruit.stipe = new Stipe()
Mimosa_uraguensis.fruit.replum = new Replum()
Mimosa_uraguensis.fruit.epicarp = new Epicarp()

Mimosa_uraguensis.seed = new Seed()


// Description authorship
Mimosa_uraguensis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_uraguensis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa uraguensis
export { Mimosa_uraguensis }