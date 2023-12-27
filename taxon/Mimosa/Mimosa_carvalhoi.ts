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


// Description of Mimosa carvalhoi
const Mimosa_carvalhoi = new Mimosa()
Mimosa_carvalhoi.specificEpithet = 'carvalhoi'

Mimosa_carvalhoi.stems = new Stems()

Mimosa_carvalhoi.stipule = new Stipule()
Mimosa_carvalhoi.stipule.margin = new MarginStipule()
Mimosa_carvalhoi.stipule.adaxial = new AdaxialStipule()
Mimosa_carvalhoi.stipule.abaxial = new AbaxialStipule()

Mimosa_carvalhoi.leaf = new Leaf()
Mimosa_carvalhoi.leaf.petiole = new Petiole()
Mimosa_carvalhoi.leaf.bipinnate = new Bipinnate()
Mimosa_carvalhoi.leaf.bipinnate.rachis = new Rachis()
Mimosa_carvalhoi.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_carvalhoi.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_carvalhoi.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(1, 23)
Mimosa_carvalhoi.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_carvalhoi.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_carvalhoi.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_carvalhoi.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(17, 32)
Mimosa_carvalhoi.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_carvalhoi.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_carvalhoi.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_carvalhoi.inflorescence = new Inflorescence()
Mimosa_carvalhoi.inflorescence.peduncle = new Peduncle()
Mimosa_carvalhoi.inflorescence.capitate = new CapitateInflorescence()

Mimosa_carvalhoi.flower = new Flower()
Mimosa_carvalhoi.flower.bracteole = new Bracteole()
Mimosa_carvalhoi.flower.merism = '3-merous'
Mimosa_carvalhoi.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_carvalhoi.flower.calyx = new Calyx()
Mimosa_carvalhoi.flower.calyx.shape = 'campanulate'
Mimosa_carvalhoi.flower.corolla = new Corolla()
Mimosa_carvalhoi.flower.corolla.shape = 'vase-shaped'

Mimosa_carvalhoi.androecium = new Androecium()
Mimosa_carvalhoi.androecium.filaments = new Filaments()

Mimosa_carvalhoi.ginoecium = new Ginoecium()
Mimosa_carvalhoi.ginoecium.ovary = new Ovary()

Mimosa_carvalhoi.fruit = new Fruit()
Mimosa_carvalhoi.fruit.stipe = new Stipe()
Mimosa_carvalhoi.fruit.replum = new Replum()
Mimosa_carvalhoi.fruit.epicarp = new Epicarp()

Mimosa_carvalhoi.seed = new Seed()


// Description authorship
Mimosa_carvalhoi.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_carvalhoi.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa carvalhoi
export { Mimosa_carvalhoi }