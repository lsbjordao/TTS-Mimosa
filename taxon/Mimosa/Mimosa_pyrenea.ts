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


// Description of Mimosa pyrenea
const Mimosa_pyrenea = new Mimosa()
Mimosa_pyrenea.specificEpithet = 'pyrenea'

Mimosa_pyrenea.stems = new Stems()

Mimosa_pyrenea.stipule = new Stipule()
Mimosa_pyrenea.stipule.margin = new MarginStipule()
Mimosa_pyrenea.stipule.adaxial = new AdaxialStipule()
Mimosa_pyrenea.stipule.abaxial = new AbaxialStipule()

Mimosa_pyrenea.leaf = new Leaf()
Mimosa_pyrenea.leaf.petiole = new Petiole()
Mimosa_pyrenea.leaf.bipinnate = new Bipinnate()
Mimosa_pyrenea.leaf.bipinnate.rachis = new Rachis()
Mimosa_pyrenea.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_pyrenea.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_pyrenea.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_pyrenea.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_pyrenea.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_pyrenea.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_pyrenea.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(26, 35)
Mimosa_pyrenea.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_pyrenea.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_pyrenea.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_pyrenea.inflorescence = new Inflorescence()
Mimosa_pyrenea.inflorescence.peduncle = new Peduncle()
Mimosa_pyrenea.inflorescence.capitate = new CapitateInflorescence()

Mimosa_pyrenea.flower = new Flower()
Mimosa_pyrenea.flower.bracteole = new Bracteole()
Mimosa_pyrenea.flower.merism = '4-merous'
Mimosa_pyrenea.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_pyrenea.flower.calyx = new Calyx()
Mimosa_pyrenea.flower.calyx.shape = 'paleaceous'
Mimosa_pyrenea.flower.corolla = new Corolla()
Mimosa_pyrenea.flower.corolla.shape = 'funnelform'

Mimosa_pyrenea.androecium = new Androecium()
Mimosa_pyrenea.androecium.filaments = new Filaments()

Mimosa_pyrenea.ginoecium = new Ginoecium()
Mimosa_pyrenea.ginoecium.ovary = new Ovary()

Mimosa_pyrenea.fruit = new Fruit()
Mimosa_pyrenea.fruit.stipe = new Stipe()
Mimosa_pyrenea.fruit.replum = new Replum()
Mimosa_pyrenea.fruit.epicarp = new Epicarp()

Mimosa_pyrenea.seed = new Seed()


// Description authorship
Mimosa_pyrenea.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_pyrenea.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa pyrenea
export { Mimosa_pyrenea }