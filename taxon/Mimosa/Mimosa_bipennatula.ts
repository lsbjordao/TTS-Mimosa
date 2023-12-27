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


// Description of Mimosa bipennatula
const Mimosa_bipennatula = new Mimosa()
Mimosa_bipennatula.specificEpithet = 'bipennatula'

Mimosa_bipennatula.stems = new Stems()

Mimosa_bipennatula.stipule = new Stipule()
Mimosa_bipennatula.stipule.margin = new MarginStipule()
Mimosa_bipennatula.stipule.adaxial = new AdaxialStipule()
Mimosa_bipennatula.stipule.abaxial = new AbaxialStipule()

Mimosa_bipennatula.leaf = new Leaf()
Mimosa_bipennatula.leaf.petiole = new Petiole()
Mimosa_bipennatula.leaf.bipinnate = new Bipinnate()
Mimosa_bipennatula.leaf.bipinnate.rachis = new Rachis()
Mimosa_bipennatula.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_bipennatula.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_bipennatula.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_bipennatula.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_bipennatula.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_bipennatula.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_bipennatula.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(70, 85)
Mimosa_bipennatula.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_bipennatula.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_bipennatula.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_bipennatula.inflorescence = new Inflorescence()
Mimosa_bipennatula.inflorescence.peduncle = new Peduncle()
Mimosa_bipennatula.inflorescence.capitate = new CapitateInflorescence()

Mimosa_bipennatula.flower = new Flower()
Mimosa_bipennatula.flower.bracteole = new Bracteole()
Mimosa_bipennatula.flower.merism = '4-merous'
Mimosa_bipennatula.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_bipennatula.flower.calyx = new Calyx()
Mimosa_bipennatula.flower.calyx.shape = 'paleaceous'
Mimosa_bipennatula.flower.corolla = new Corolla()
Mimosa_bipennatula.flower.corolla.shape = 'turbinate'

Mimosa_bipennatula.androecium = new Androecium()
Mimosa_bipennatula.androecium.filaments = new Filaments()
Mimosa_bipennatula.androecium.filaments.colour = 'pinkish'

Mimosa_bipennatula.ginoecium = new Ginoecium()
Mimosa_bipennatula.ginoecium.ovary = new Ovary()

Mimosa_bipennatula.fruit = new Fruit()
Mimosa_bipennatula.fruit.stipe = new Stipe()
Mimosa_bipennatula.fruit.replum = new Replum()
Mimosa_bipennatula.fruit.epicarp = new Epicarp()

Mimosa_bipennatula.seed = new Seed()


// Description authorship
Mimosa_bipennatula.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_bipennatula.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa bipennatula
export { Mimosa_bipennatula }