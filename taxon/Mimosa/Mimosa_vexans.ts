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


// Description of Mimosa vexans
const Mimosa_vexans = new Mimosa()
Mimosa_vexans.specificEpithet = 'vexans'

Mimosa_vexans.stems = new Stems()

Mimosa_vexans.stipule = new Stipule()
Mimosa_vexans.stipule.margin = new MarginStipule()
Mimosa_vexans.stipule.adaxial = new AdaxialStipule()
Mimosa_vexans.stipule.abaxial = new AbaxialStipule()

Mimosa_vexans.leaf = new Leaf()
Mimosa_vexans.leaf.petiole = new Petiole()
Mimosa_vexans.leaf.bipinnate = new Bipinnate()
Mimosa_vexans.leaf.bipinnate.rachis = new Rachis()
Mimosa_vexans.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_vexans.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_vexans.leaf.bipinnate.pinnae.setNumberOfPairs(2)
Mimosa_vexans.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_vexans.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_vexans.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_vexans.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(7, 9)
Mimosa_vexans.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_vexans.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_vexans.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_vexans.inflorescence = new Inflorescence()
Mimosa_vexans.inflorescence.peduncle = new Peduncle()
Mimosa_vexans.inflorescence.capitate = new CapitateInflorescence()

Mimosa_vexans.flower = new Flower()
Mimosa_vexans.flower.bracteole = new Bracteole()
Mimosa_vexans.flower.merism = '4-merous'
Mimosa_vexans.flower.calyx = new Calyx()
Mimosa_vexans.flower.calyx.shape = 'paleaceous-pappiform'
Mimosa_vexans.flower.corolla = new Corolla()

Mimosa_vexans.androecium = new Androecium()
Mimosa_vexans.androecium.filaments = new Filaments()

Mimosa_vexans.ginoecium = new Ginoecium()
Mimosa_vexans.ginoecium.ovary = new Ovary()

Mimosa_vexans.fruit = new Fruit()
Mimosa_vexans.fruit.stipe = new Stipe()
Mimosa_vexans.fruit.replum = new Replum()
Mimosa_vexans.fruit.epicarp = new Epicarp()

Mimosa_vexans.seed = new Seed()


// Description authorship
Mimosa_vexans.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_vexans.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa vexans
export { Mimosa_vexans }