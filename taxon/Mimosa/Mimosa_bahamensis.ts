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


// Description of Mimosa bahamensis
const Mimosa_bahamensis = new Mimosa()
Mimosa_bahamensis.specificEpithet = 'bahamensis'

Mimosa_bahamensis.stems = new Stems()

Mimosa_bahamensis.stipule = new Stipule()
Mimosa_bahamensis.stipule.margin = new MarginStipule()
Mimosa_bahamensis.stipule.adaxial = new AdaxialStipule()
Mimosa_bahamensis.stipule.abaxial = new AbaxialStipule()

Mimosa_bahamensis.leaf = new Leaf()
Mimosa_bahamensis.leaf.petiole = new Petiole()
Mimosa_bahamensis.leaf.bipinnate = new Bipinnate()
Mimosa_bahamensis.leaf.bipinnate.rachis = new Rachis()
Mimosa_bahamensis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_bahamensis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_bahamensis.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 4)
Mimosa_bahamensis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_bahamensis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_bahamensis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_bahamensis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(20, 32)
Mimosa_bahamensis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_bahamensis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_bahamensis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_bahamensis.inflorescence = new Inflorescence()
Mimosa_bahamensis.inflorescence.peduncle = new Peduncle()
Mimosa_bahamensis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_bahamensis.flower = new Flower()
Mimosa_bahamensis.flower.bracteole = new Bracteole()
Mimosa_bahamensis.flower.merism = ['4-merous', '5-merous']
Mimosa_bahamensis.flower.calyx = new Calyx()
Mimosa_bahamensis.flower.calyx.shape = 'campanulate'
Mimosa_bahamensis.flower.corolla = new Corolla()
Mimosa_bahamensis.flower.corolla.shape = 'vase-shaped'

Mimosa_bahamensis.androecium = new Androecium()
Mimosa_bahamensis.androecium.filaments = new Filaments()
Mimosa_bahamensis.androecium.filaments.colour = 'pinkish'

Mimosa_bahamensis.ginoecium = new Ginoecium()
Mimosa_bahamensis.ginoecium.ovary = new Ovary()

Mimosa_bahamensis.fruit = new Fruit()
Mimosa_bahamensis.fruit.stipe = new Stipe()
Mimosa_bahamensis.fruit.replum = new Replum()
Mimosa_bahamensis.fruit.epicarp = new Epicarp()

Mimosa_bahamensis.seed = new Seed()


// Description authorship
Mimosa_bahamensis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_bahamensis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa bahamensis
export { Mimosa_bahamensis }