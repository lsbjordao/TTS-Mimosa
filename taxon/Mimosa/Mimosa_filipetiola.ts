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


// Description of Mimosa filipetiola
const Mimosa_filipetiola = new Mimosa()
Mimosa_filipetiola.specificEpithet = 'filipetiola'

Mimosa_filipetiola.stems = new Stems()

Mimosa_filipetiola.stipule = new Stipule()
Mimosa_filipetiola.stipule.margin = new MarginStipule()
Mimosa_filipetiola.stipule.adaxial = new AdaxialStipule()
Mimosa_filipetiola.stipule.abaxial = new AbaxialStipule()

Mimosa_filipetiola.leaf = new Leaf()
Mimosa_filipetiola.leaf.petiole = new Petiole()
Mimosa_filipetiola.leaf.bipinnate = new Bipinnate()
Mimosa_filipetiola.leaf.bipinnate.rachis = new Rachis()
Mimosa_filipetiola.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_filipetiola.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_filipetiola.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_filipetiola.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_filipetiola.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_filipetiola.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_filipetiola.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(25, 35)
Mimosa_filipetiola.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_filipetiola.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_filipetiola.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_filipetiola.inflorescence = new Inflorescence()
Mimosa_filipetiola.inflorescence.peduncle = new Peduncle()
Mimosa_filipetiola.inflorescence.capitate = new CapitateInflorescence()

Mimosa_filipetiola.flower = new Flower()
Mimosa_filipetiola.flower.bracteole = new Bracteole()
Mimosa_filipetiola.flower.merism = '4-merous'
Mimosa_filipetiola.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_filipetiola.flower.calyx = new Calyx()
Mimosa_filipetiola.flower.calyx.shape = 'campanulate'
Mimosa_filipetiola.flower.corolla = new Corolla()
Mimosa_filipetiola.flower.corolla.shape = 'turbinate'

Mimosa_filipetiola.androecium = new Androecium()
Mimosa_filipetiola.androecium.filaments = new Filaments()
Mimosa_filipetiola.androecium.filaments.colour = 'pinkish'

Mimosa_filipetiola.ginoecium = new Ginoecium()
Mimosa_filipetiola.ginoecium.ovary = new Ovary()

Mimosa_filipetiola.fruit = new Fruit()
Mimosa_filipetiola.fruit.stipe = new Stipe()
Mimosa_filipetiola.fruit.replum = new Replum()
Mimosa_filipetiola.fruit.epicarp = new Epicarp()

Mimosa_filipetiola.seed = new Seed()


// Description authorship
Mimosa_filipetiola.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_filipetiola.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa filipetiola
export { Mimosa_filipetiola }