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


// Description of Mimosa pratincola
const Mimosa_pratincola = new Mimosa()
Mimosa_pratincola.specificEpithet = 'pratincola'

Mimosa_pratincola.stems = new Stems()

Mimosa_pratincola.stipule = new Stipule()
Mimosa_pratincola.stipule.margin = new MarginStipule()
Mimosa_pratincola.stipule.adaxial = new AdaxialStipule()
Mimosa_pratincola.stipule.abaxial = new AbaxialStipule()

Mimosa_pratincola.leaf = new Leaf()
Mimosa_pratincola.leaf.petiole = new Petiole()
Mimosa_pratincola.leaf.bipinnate = new Bipinnate()
Mimosa_pratincola.leaf.bipinnate.rachis = new Rachis()
Mimosa_pratincola.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_pratincola.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_pratincola.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(5, 8)
Mimosa_pratincola.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_pratincola.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_pratincola.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_pratincola.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(12)
Mimosa_pratincola.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(16, 44)
Mimosa_pratincola.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_pratincola.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_pratincola.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_pratincola.inflorescence = new Inflorescence()
Mimosa_pratincola.inflorescence.peduncle = new Peduncle()
Mimosa_pratincola.inflorescence.capitate = new CapitateInflorescence()

Mimosa_pratincola.flower = new Flower()
Mimosa_pratincola.flower.bracteole = new Bracteole()
Mimosa_pratincola.flower.merism = '4-merous'
Mimosa_pratincola.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_pratincola.flower.calyx = new Calyx()
Mimosa_pratincola.flower.corolla = new Corolla()

Mimosa_pratincola.androecium = new Androecium()
Mimosa_pratincola.androecium.filaments = new Filaments()
Mimosa_pratincola.androecium.filaments.colour = 'pinkish'

Mimosa_pratincola.ginoecium = new Ginoecium()
Mimosa_pratincola.ginoecium.ovary = new Ovary()

Mimosa_pratincola.fruit = new Fruit()
Mimosa_pratincola.fruit.stipe = new Stipe()
Mimosa_pratincola.fruit.replum = new Replum()
Mimosa_pratincola.fruit.epicarp = new Epicarp()

Mimosa_pratincola.seed = new Seed()


// Description authorship
Mimosa_pratincola.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_pratincola.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa pratincola
export { Mimosa_pratincola }