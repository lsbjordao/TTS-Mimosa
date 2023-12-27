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


// Description of Mimosa paranapiacabae
const Mimosa_paranapiacabae = new Mimosa()
Mimosa_paranapiacabae.specificEpithet = 'paranapiacabae'

Mimosa_paranapiacabae.stems = new Stems()

Mimosa_paranapiacabae.stipule = new Stipule()
Mimosa_paranapiacabae.stipule.margin = new MarginStipule()
Mimosa_paranapiacabae.stipule.adaxial = new AdaxialStipule()
Mimosa_paranapiacabae.stipule.abaxial = new AbaxialStipule()

Mimosa_paranapiacabae.leaf = new Leaf()
Mimosa_paranapiacabae.leaf.petiole = new Petiole()
Mimosa_paranapiacabae.leaf.bipinnate = new Bipinnate()
Mimosa_paranapiacabae.leaf.bipinnate.rachis = new Rachis()
Mimosa_paranapiacabae.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_paranapiacabae.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_paranapiacabae.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_paranapiacabae.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_paranapiacabae.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_paranapiacabae.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(8, 10)
Mimosa_paranapiacabae.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_paranapiacabae.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_paranapiacabae.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_paranapiacabae.inflorescence = new Inflorescence()
Mimosa_paranapiacabae.inflorescence.peduncle = new Peduncle()
Mimosa_paranapiacabae.inflorescence.capitate = new CapitateInflorescence()

Mimosa_paranapiacabae.flower = new Flower()
Mimosa_paranapiacabae.flower.bracteole = new Bracteole()
Mimosa_paranapiacabae.flower.merism = '4-merous'
Mimosa_paranapiacabae.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_paranapiacabae.flower.calyx = new Calyx()
Mimosa_paranapiacabae.flower.calyx.shape = 'pappiform'
Mimosa_paranapiacabae.flower.corolla = new Corolla()
Mimosa_paranapiacabae.flower.corolla.shape = 'vase-shaped'

Mimosa_paranapiacabae.androecium = new Androecium()
Mimosa_paranapiacabae.androecium.filaments = new Filaments()
Mimosa_paranapiacabae.androecium.filaments.colour = 'pinkish'

Mimosa_paranapiacabae.ginoecium = new Ginoecium()
Mimosa_paranapiacabae.ginoecium.ovary = new Ovary()

Mimosa_paranapiacabae.fruit = new Fruit()
Mimosa_paranapiacabae.fruit.stipe = new Stipe()
Mimosa_paranapiacabae.fruit.replum = new Replum()
Mimosa_paranapiacabae.fruit.epicarp = new Epicarp()

Mimosa_paranapiacabae.seed = new Seed()


// Description authorship
Mimosa_paranapiacabae.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_paranapiacabae.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa paranapiacabae
export { Mimosa_paranapiacabae }