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


// Description of Mimosa casta
const Mimosa_casta = new Mimosa()
Mimosa_casta.specificEpithet = 'casta'

Mimosa_casta.stems = new Stems()

Mimosa_casta.stipule = new Stipule()
Mimosa_casta.stipule.margin = new MarginStipule()
Mimosa_casta.stipule.adaxial = new AdaxialStipule()
Mimosa_casta.stipule.abaxial = new AbaxialStipule()

Mimosa_casta.leaf = new Leaf()
Mimosa_casta.leaf.petiole = new Petiole()
Mimosa_casta.leaf.bipinnate = new Bipinnate()
Mimosa_casta.leaf.bipinnate.rachis = new Rachis()
Mimosa_casta.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_casta.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_casta.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_casta.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_casta.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_casta.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_casta.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(3)
Mimosa_casta.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(4, 5)
Mimosa_casta.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(6)
Mimosa_casta.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_casta.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_casta.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_casta.inflorescence = new Inflorescence()
Mimosa_casta.inflorescence.peduncle = new Peduncle()
Mimosa_casta.inflorescence.capitate = new CapitateInflorescence()

Mimosa_casta.flower = new Flower()
Mimosa_casta.flower.bracteole = new Bracteole()
Mimosa_casta.flower.merism = '4-merous'
Mimosa_casta.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_casta.flower.calyx = new Calyx()
Mimosa_casta.flower.corolla = new Corolla()
Mimosa_casta.flower.corolla.shape = ['vase-shaped', 'turbinate']

Mimosa_casta.androecium = new Androecium()
Mimosa_casta.androecium.filaments = new Filaments()
Mimosa_casta.androecium.filaments.colour = ['pinkish', 'whitenish']

Mimosa_casta.ginoecium = new Ginoecium()
Mimosa_casta.ginoecium.ovary = new Ovary()

Mimosa_casta.fruit = new Fruit()
Mimosa_casta.fruit.stipe = new Stipe()
Mimosa_casta.fruit.replum = new Replum()
Mimosa_casta.fruit.epicarp = new Epicarp()

Mimosa_casta.seed = new Seed()


// Description authorship
Mimosa_casta.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_casta.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa casta
export { Mimosa_casta }