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


// Description of Mimosa rusbyana
const Mimosa_rusbyana = new Mimosa()
Mimosa_rusbyana.specificEpithet = 'rusbyana'

Mimosa_rusbyana.stems = new Stems()

Mimosa_rusbyana.stipule = new Stipule()
Mimosa_rusbyana.stipule.margin = new MarginStipule()
Mimosa_rusbyana.stipule.adaxial = new AdaxialStipule()
Mimosa_rusbyana.stipule.abaxial = new AbaxialStipule()

Mimosa_rusbyana.leaf = new Leaf()
Mimosa_rusbyana.leaf.petiole = new Petiole()
Mimosa_rusbyana.leaf.bipinnate = new Bipinnate()
Mimosa_rusbyana.leaf.bipinnate.rachis = new Rachis()
Mimosa_rusbyana.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_rusbyana.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_rusbyana.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_rusbyana.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_rusbyana.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_rusbyana.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_rusbyana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(20)
Mimosa_rusbyana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(23, 30)
Mimosa_rusbyana.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_rusbyana.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_rusbyana.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_rusbyana.inflorescence = new Inflorescence()
Mimosa_rusbyana.inflorescence.peduncle = new Peduncle()
Mimosa_rusbyana.inflorescence.capitate = new CapitateInflorescence()

Mimosa_rusbyana.flower = new Flower()
Mimosa_rusbyana.flower.bracteole = new Bracteole()
Mimosa_rusbyana.flower.merism = '4-merous'
Mimosa_rusbyana.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_rusbyana.flower.calyx = new Calyx()
Mimosa_rusbyana.flower.calyx.shape = 'pappiform'
Mimosa_rusbyana.flower.corolla = new Corolla()
Mimosa_rusbyana.flower.corolla.shape = 'funnelform'

Mimosa_rusbyana.androecium = new Androecium()
Mimosa_rusbyana.androecium.filaments = new Filaments()
Mimosa_rusbyana.androecium.filaments.colour = 'whitenish'

Mimosa_rusbyana.ginoecium = new Ginoecium()
Mimosa_rusbyana.ginoecium.ovary = new Ovary()

Mimosa_rusbyana.fruit = new Fruit()
Mimosa_rusbyana.fruit.stipe = new Stipe()
Mimosa_rusbyana.fruit.replum = new Replum()
Mimosa_rusbyana.fruit.epicarp = new Epicarp()

Mimosa_rusbyana.seed = new Seed()


// Description authorship
Mimosa_rusbyana.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_rusbyana.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa rusbyana
export { Mimosa_rusbyana }