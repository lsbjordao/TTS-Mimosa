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


// Description of Mimosa lepidophora
const Mimosa_lepidophora = new Mimosa()
Mimosa_lepidophora.specificEpithet = 'lepidophora'

Mimosa_lepidophora.stems = new Stems()

Mimosa_lepidophora.stipule = new Stipule()
Mimosa_lepidophora.stipule.margin = new MarginStipule()
Mimosa_lepidophora.stipule.adaxial = new AdaxialStipule()
Mimosa_lepidophora.stipule.abaxial = new AbaxialStipule()

Mimosa_lepidophora.leaf = new Leaf()
Mimosa_lepidophora.leaf.petiole = new Petiole()
Mimosa_lepidophora.leaf.bipinnate = new Bipinnate()
Mimosa_lepidophora.leaf.bipinnate.rachis = new Rachis()
Mimosa_lepidophora.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_lepidophora.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_lepidophora.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 9)
Mimosa_lepidophora.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_lepidophora.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_lepidophora.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_lepidophora.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(20, 35)
Mimosa_lepidophora.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_lepidophora.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_lepidophora.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_lepidophora.inflorescence = new Inflorescence()
Mimosa_lepidophora.inflorescence.peduncle = new Peduncle()
Mimosa_lepidophora.inflorescence.capitate = new CapitateInflorescence()

Mimosa_lepidophora.flower = new Flower()
Mimosa_lepidophora.flower.bracteole = new Bracteole()
Mimosa_lepidophora.flower.merism = '4-merous'
Mimosa_lepidophora.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_lepidophora.flower.calyx = new Calyx()
Mimosa_lepidophora.flower.calyx.shape = ['turbinate', 'campanulate']
Mimosa_lepidophora.flower.corolla = new Corolla()
Mimosa_lepidophora.flower.corolla.shape = 'vase-shaped'

Mimosa_lepidophora.androecium = new Androecium()
Mimosa_lepidophora.androecium.filaments = new Filaments()

Mimosa_lepidophora.ginoecium = new Ginoecium()
Mimosa_lepidophora.ginoecium.ovary = new Ovary()

Mimosa_lepidophora.fruit = new Fruit()
Mimosa_lepidophora.fruit.stipe = new Stipe()
Mimosa_lepidophora.fruit.replum = new Replum()
Mimosa_lepidophora.fruit.epicarp = new Epicarp()

Mimosa_lepidophora.seed = new Seed()


// Description authorship
Mimosa_lepidophora.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_lepidophora.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa lepidophora
export { Mimosa_lepidophora }