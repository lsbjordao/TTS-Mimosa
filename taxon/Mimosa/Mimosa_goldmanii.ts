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


// Description of Mimosa goldmanii
const Mimosa_goldmanii = new Mimosa()
Mimosa_goldmanii.specificEpithet = 'goldmanii'

Mimosa_goldmanii.stems = new Stems()

Mimosa_goldmanii.stipule = new Stipule()
Mimosa_goldmanii.stipule.margin = new MarginStipule()
Mimosa_goldmanii.stipule.adaxial = new AdaxialStipule()
Mimosa_goldmanii.stipule.abaxial = new AbaxialStipule()

Mimosa_goldmanii.leaf = new Leaf()
Mimosa_goldmanii.leaf.petiole = new Petiole()
Mimosa_goldmanii.leaf.bipinnate = new Bipinnate()
Mimosa_goldmanii.leaf.bipinnate.rachis = new Rachis()
Mimosa_goldmanii.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_goldmanii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_goldmanii.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_goldmanii.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_goldmanii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_goldmanii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(4, 6)
Mimosa_goldmanii.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_goldmanii.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_goldmanii.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_goldmanii.inflorescence = new Inflorescence()
Mimosa_goldmanii.inflorescence.peduncle = new Peduncle()
Mimosa_goldmanii.inflorescence.capitate = new CapitateInflorescence()

Mimosa_goldmanii.flower = new Flower()
Mimosa_goldmanii.flower.bracteole = new Bracteole()
Mimosa_goldmanii.flower.calyx = new Calyx()
Mimosa_goldmanii.flower.corolla = new Corolla()

Mimosa_goldmanii.androecium = new Androecium()
Mimosa_goldmanii.androecium.filaments = new Filaments()

Mimosa_goldmanii.ginoecium = new Ginoecium()
Mimosa_goldmanii.ginoecium.ovary = new Ovary()

Mimosa_goldmanii.fruit = new Fruit()
Mimosa_goldmanii.fruit.stipe = new Stipe()
Mimosa_goldmanii.fruit.replum = new Replum()
Mimosa_goldmanii.fruit.epicarp = new Epicarp()

Mimosa_goldmanii.seed = new Seed()


// Description authorship
Mimosa_goldmanii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_goldmanii.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa goldmanii
export { Mimosa_goldmanii }