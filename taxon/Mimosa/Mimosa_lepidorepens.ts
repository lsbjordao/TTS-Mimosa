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


// Description of Mimosa lepidorepens
const Mimosa_lepidorepens = new Mimosa()
Mimosa_lepidorepens.specificEpithet = 'lepidorepens'

Mimosa_lepidorepens.stems = new Stems()

Mimosa_lepidorepens.stipule = new Stipule()
Mimosa_lepidorepens.stipule.margin = new MarginStipule()
Mimosa_lepidorepens.stipule.adaxial = new AdaxialStipule()
Mimosa_lepidorepens.stipule.abaxial = new AbaxialStipule()

Mimosa_lepidorepens.leaf = new Leaf()
Mimosa_lepidorepens.leaf.petiole = new Petiole()
Mimosa_lepidorepens.leaf.bipinnate = new Bipinnate()
Mimosa_lepidorepens.leaf.bipinnate.rachis = new Rachis()
Mimosa_lepidorepens.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_lepidorepens.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_lepidorepens.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(4, 6)
Mimosa_lepidorepens.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_lepidorepens.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_lepidorepens.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_lepidorepens.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(13)
Mimosa_lepidorepens.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(16, 23)
Mimosa_lepidorepens.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_lepidorepens.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_lepidorepens.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_lepidorepens.inflorescence = new Inflorescence()
Mimosa_lepidorepens.inflorescence.peduncle = new Peduncle()
Mimosa_lepidorepens.inflorescence.capitate = new CapitateInflorescence()

Mimosa_lepidorepens.flower = new Flower()
Mimosa_lepidorepens.flower.bracteole = new Bracteole()
Mimosa_lepidorepens.flower.calyx = new Calyx()
Mimosa_lepidorepens.flower.corolla = new Corolla()

Mimosa_lepidorepens.androecium = new Androecium()
Mimosa_lepidorepens.androecium.filaments = new Filaments()

Mimosa_lepidorepens.ginoecium = new Ginoecium()
Mimosa_lepidorepens.ginoecium.ovary = new Ovary()

Mimosa_lepidorepens.fruit = new Fruit()
Mimosa_lepidorepens.fruit.stipe = new Stipe()
Mimosa_lepidorepens.fruit.replum = new Replum()
Mimosa_lepidorepens.fruit.epicarp = new Epicarp()

Mimosa_lepidorepens.seed = new Seed()


// Description authorship
Mimosa_lepidorepens.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_lepidorepens.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa lepidorepens
export { Mimosa_lepidorepens }