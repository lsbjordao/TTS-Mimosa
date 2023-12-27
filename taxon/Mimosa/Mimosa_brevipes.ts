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


// Description of Mimosa brevipes
const Mimosa_brevipes = new Mimosa()
Mimosa_brevipes.specificEpithet = 'brevipes'

Mimosa_brevipes.stems = new Stems()

Mimosa_brevipes.stipule = new Stipule()
Mimosa_brevipes.stipule.margin = new MarginStipule()
Mimosa_brevipes.stipule.adaxial = new AdaxialStipule()
Mimosa_brevipes.stipule.abaxial = new AbaxialStipule()

Mimosa_brevipes.leaf = new Leaf()
Mimosa_brevipes.leaf.petiole = new Petiole()
Mimosa_brevipes.leaf.bipinnate = new Bipinnate()
Mimosa_brevipes.leaf.bipinnate.rachis = new Rachis()
Mimosa_brevipes.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_brevipes.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_brevipes.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_brevipes.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_brevipes.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_brevipes.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_brevipes.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(10)
Mimosa_brevipes.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(12, 24)
Mimosa_brevipes.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_brevipes.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_brevipes.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_brevipes.inflorescence = new Inflorescence()
Mimosa_brevipes.inflorescence.peduncle = new Peduncle()
Mimosa_brevipes.inflorescence.capitate = new CapitateInflorescence()

Mimosa_brevipes.flower = new Flower()
Mimosa_brevipes.flower.bracteole = new Bracteole()
Mimosa_brevipes.flower.merism = '4-merous'
Mimosa_brevipes.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_brevipes.flower.calyx = new Calyx()
Mimosa_brevipes.flower.corolla = new Corolla()

Mimosa_brevipes.androecium = new Androecium()
Mimosa_brevipes.androecium.filaments = new Filaments()
Mimosa_brevipes.androecium.filaments.colour = 'pinkish'

Mimosa_brevipes.ginoecium = new Ginoecium()
Mimosa_brevipes.ginoecium.ovary = new Ovary()

Mimosa_brevipes.fruit = new Fruit()
Mimosa_brevipes.fruit.stipe = new Stipe()
Mimosa_brevipes.fruit.replum = new Replum()
Mimosa_brevipes.fruit.epicarp = new Epicarp()

Mimosa_brevipes.seed = new Seed()


// Description authorship
Mimosa_brevipes.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_brevipes.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa brevipes
export { Mimosa_brevipes }