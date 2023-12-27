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


// Description of Mimosa ctenodes
const Mimosa_ctenodes = new Mimosa()
Mimosa_ctenodes.specificEpithet = 'ctenodes'

Mimosa_ctenodes.stems = new Stems()

Mimosa_ctenodes.stipule = new Stipule()
Mimosa_ctenodes.stipule.margin = new MarginStipule()
Mimosa_ctenodes.stipule.adaxial = new AdaxialStipule()
Mimosa_ctenodes.stipule.abaxial = new AbaxialStipule()

Mimosa_ctenodes.leaf = new Leaf()
Mimosa_ctenodes.leaf.petiole = new Petiole()
Mimosa_ctenodes.leaf.bipinnate = new Bipinnate()
Mimosa_ctenodes.leaf.bipinnate.rachis = new Rachis()
Mimosa_ctenodes.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_ctenodes.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_ctenodes.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_ctenodes.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_ctenodes.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_ctenodes.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_ctenodes.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(11, 17)
Mimosa_ctenodes.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_ctenodes.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_ctenodes.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_ctenodes.inflorescence = new Inflorescence()
Mimosa_ctenodes.inflorescence.peduncle = new Peduncle()
Mimosa_ctenodes.inflorescence.capitate = new CapitateInflorescence()

Mimosa_ctenodes.flower = new Flower()
Mimosa_ctenodes.flower.bracteole = new Bracteole()
Mimosa_ctenodes.flower.merism = '4-merous'
Mimosa_ctenodes.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_ctenodes.flower.calyx = new Calyx()
Mimosa_ctenodes.flower.calyx.shape = 'campanulate'
Mimosa_ctenodes.flower.corolla = new Corolla()
Mimosa_ctenodes.flower.corolla.shape = 'vase-shaped'

Mimosa_ctenodes.androecium = new Androecium()
Mimosa_ctenodes.androecium.filaments = new Filaments()
Mimosa_ctenodes.androecium.filaments.colour = 'whitenish'

Mimosa_ctenodes.ginoecium = new Ginoecium()
Mimosa_ctenodes.ginoecium.ovary = new Ovary()

Mimosa_ctenodes.fruit = new Fruit()
Mimosa_ctenodes.fruit.stipe = new Stipe()
Mimosa_ctenodes.fruit.replum = new Replum()
Mimosa_ctenodes.fruit.epicarp = new Epicarp()

Mimosa_ctenodes.seed = new Seed()


// Description authorship
Mimosa_ctenodes.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_ctenodes.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa ctenodes
export { Mimosa_ctenodes }