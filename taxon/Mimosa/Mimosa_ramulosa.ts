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


// Description of Mimosa ramulosa
const Mimosa_ramulosa = new Mimosa()
Mimosa_ramulosa.specificEpithet = 'ramulosa'

Mimosa_ramulosa.stems = new Stems()

Mimosa_ramulosa.stipule = new Stipule()
Mimosa_ramulosa.stipule.margin = new MarginStipule()
Mimosa_ramulosa.stipule.adaxial = new AdaxialStipule()
Mimosa_ramulosa.stipule.abaxial = new AbaxialStipule()

Mimosa_ramulosa.leaf = new Leaf()
Mimosa_ramulosa.leaf.petiole = new Petiole()
Mimosa_ramulosa.leaf.bipinnate = new Bipinnate()
Mimosa_ramulosa.leaf.bipinnate.rachis = new Rachis()
Mimosa_ramulosa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_ramulosa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_ramulosa.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_ramulosa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_ramulosa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_ramulosa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_ramulosa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(15, 23)
Mimosa_ramulosa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_ramulosa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_ramulosa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_ramulosa.inflorescence = new Inflorescence()
Mimosa_ramulosa.inflorescence.peduncle = new Peduncle()
Mimosa_ramulosa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_ramulosa.flower = new Flower()
Mimosa_ramulosa.flower.bracteole = new Bracteole()
Mimosa_ramulosa.flower.merism = '4-merous'
Mimosa_ramulosa.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_ramulosa.flower.calyx = new Calyx()
Mimosa_ramulosa.flower.calyx.shape = 'collar'
Mimosa_ramulosa.flower.corolla = new Corolla()
Mimosa_ramulosa.flower.corolla.shape = 'turbinate'

Mimosa_ramulosa.androecium = new Androecium()
Mimosa_ramulosa.androecium.filaments = new Filaments()
Mimosa_ramulosa.androecium.filaments.colour = ['pinkish', 'lilac']

Mimosa_ramulosa.ginoecium = new Ginoecium()
Mimosa_ramulosa.ginoecium.ovary = new Ovary()

Mimosa_ramulosa.fruit = new Fruit()
Mimosa_ramulosa.fruit.stipe = new Stipe()
Mimosa_ramulosa.fruit.replum = new Replum()
Mimosa_ramulosa.fruit.epicarp = new Epicarp()

Mimosa_ramulosa.seed = new Seed()


// Description authorship
Mimosa_ramulosa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_ramulosa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa ramulosa
export { Mimosa_ramulosa }