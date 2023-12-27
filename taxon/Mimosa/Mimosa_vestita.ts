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


// Description of Mimosa vestita
const Mimosa_vestita = new Mimosa()
Mimosa_vestita.specificEpithet = 'vestita'

Mimosa_vestita.stems = new Stems()

Mimosa_vestita.stipule = new Stipule()
Mimosa_vestita.stipule.margin = new MarginStipule()
Mimosa_vestita.stipule.adaxial = new AdaxialStipule()
Mimosa_vestita.stipule.abaxial = new AbaxialStipule()

Mimosa_vestita.leaf = new Leaf()
Mimosa_vestita.leaf.petiole = new Petiole()
Mimosa_vestita.leaf.bipinnate = new Bipinnate()
Mimosa_vestita.leaf.bipinnate.rachis = new Rachis()
Mimosa_vestita.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_vestita.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_vestita.leaf.bipinnate.pinnae.setNumberOfPairs(2)
Mimosa_vestita.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_vestita.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_vestita.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_vestita.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(17)
Mimosa_vestita.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(20, 38)
Mimosa_vestita.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_vestita.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_vestita.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_vestita.inflorescence = new Inflorescence()
Mimosa_vestita.inflorescence.peduncle = new Peduncle()
Mimosa_vestita.inflorescence.capitate = new CapitateInflorescence()

Mimosa_vestita.flower = new Flower()
Mimosa_vestita.flower.bracteole = new Bracteole()
Mimosa_vestita.flower.merism = '4-merous'
Mimosa_vestita.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_vestita.flower.calyx = new Calyx()
Mimosa_vestita.flower.calyx.shape = 'paleaceous'
Mimosa_vestita.flower.corolla = new Corolla()

Mimosa_vestita.androecium = new Androecium()
Mimosa_vestita.androecium.filaments = new Filaments()
Mimosa_vestita.androecium.filaments.colour = 'pinkish'

Mimosa_vestita.ginoecium = new Ginoecium()
Mimosa_vestita.ginoecium.ovary = new Ovary()

Mimosa_vestita.fruit = new Fruit()
Mimosa_vestita.fruit.stipe = new Stipe()
Mimosa_vestita.fruit.replum = new Replum()
Mimosa_vestita.fruit.epicarp = new Epicarp()

Mimosa_vestita.seed = new Seed()


// Description authorship
Mimosa_vestita.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_vestita.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa vestita
export { Mimosa_vestita }