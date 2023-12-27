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


// Description of Mimosa lepidota
const Mimosa_lepidota = new Mimosa()
Mimosa_lepidota.specificEpithet = 'lepidota'

Mimosa_lepidota.stems = new Stems()

Mimosa_lepidota.stipule = new Stipule()
Mimosa_lepidota.stipule.margin = new MarginStipule()
Mimosa_lepidota.stipule.adaxial = new AdaxialStipule()
Mimosa_lepidota.stipule.abaxial = new AbaxialStipule()

Mimosa_lepidota.leaf = new Leaf()
Mimosa_lepidota.leaf.petiole = new Petiole()
Mimosa_lepidota.leaf.bipinnate = new Bipinnate()
Mimosa_lepidota.leaf.bipinnate.rachis = new Rachis()
Mimosa_lepidota.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_lepidota.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_lepidota.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(5)
Mimosa_lepidota.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(6, 10)
Mimosa_lepidota.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_lepidota.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_lepidota.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_lepidota.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_lepidota.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_lepidota.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_lepidota.inflorescence = new Inflorescence()
Mimosa_lepidota.inflorescence.peduncle = new Peduncle()
Mimosa_lepidota.inflorescence.capitate = new CapitateInflorescence()

Mimosa_lepidota.flower = new Flower()
Mimosa_lepidota.flower.bracteole = new Bracteole()
Mimosa_lepidota.flower.merism = '4-merous'
Mimosa_lepidota.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_lepidota.flower.calyx = new Calyx()
Mimosa_lepidota.flower.calyx.shape = 'campanulate'
Mimosa_lepidota.flower.corolla = new Corolla()
Mimosa_lepidota.flower.corolla.shape = 'vase-shaped'

Mimosa_lepidota.androecium = new Androecium()
Mimosa_lepidota.androecium.filaments = new Filaments()

Mimosa_lepidota.ginoecium = new Ginoecium()
Mimosa_lepidota.ginoecium.ovary = new Ovary()

Mimosa_lepidota.fruit = new Fruit()
Mimosa_lepidota.fruit.stipe = new Stipe()
Mimosa_lepidota.fruit.replum = new Replum()
Mimosa_lepidota.fruit.epicarp = new Epicarp()

Mimosa_lepidota.seed = new Seed()


// Description authorship
Mimosa_lepidota.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_lepidota.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa lepidota
export { Mimosa_lepidota }