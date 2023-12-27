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


// Description of Mimosa dicerastes
const Mimosa_dicerastes = new Mimosa()
Mimosa_dicerastes.specificEpithet = 'dicerastes'

Mimosa_dicerastes.stems = new Stems()

Mimosa_dicerastes.stipule = new Stipule()
Mimosa_dicerastes.stipule.margin = new MarginStipule()
Mimosa_dicerastes.stipule.adaxial = new AdaxialStipule()
Mimosa_dicerastes.stipule.abaxial = new AbaxialStipule()

Mimosa_dicerastes.leaf = new Leaf()
Mimosa_dicerastes.leaf.petiole = new Petiole()
Mimosa_dicerastes.leaf.bipinnate = new Bipinnate()
Mimosa_dicerastes.leaf.bipinnate.rachis = new Rachis()
Mimosa_dicerastes.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_dicerastes.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_dicerastes.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_dicerastes.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_dicerastes.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_dicerastes.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_dicerastes.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_dicerastes.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_dicerastes.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_dicerastes.inflorescence = new Inflorescence()
Mimosa_dicerastes.inflorescence.peduncle = new Peduncle()
Mimosa_dicerastes.inflorescence.capitate = new CapitateInflorescence()

Mimosa_dicerastes.flower = new Flower()
Mimosa_dicerastes.flower.bracteole = new Bracteole()
Mimosa_dicerastes.flower.merism = '4-merous'
Mimosa_dicerastes.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_dicerastes.flower.calyx = new Calyx()
Mimosa_dicerastes.flower.calyx.shape = 'paleaceous'
Mimosa_dicerastes.flower.corolla = new Corolla()

Mimosa_dicerastes.androecium = new Androecium()
Mimosa_dicerastes.androecium.filaments = new Filaments()
Mimosa_dicerastes.androecium.filaments.colour = 'pinkish'

Mimosa_dicerastes.ginoecium = new Ginoecium()
Mimosa_dicerastes.ginoecium.ovary = new Ovary()

Mimosa_dicerastes.fruit = new Fruit()
Mimosa_dicerastes.fruit.stipe = new Stipe()
Mimosa_dicerastes.fruit.replum = new Replum()
Mimosa_dicerastes.fruit.epicarp = new Epicarp()

Mimosa_dicerastes.seed = new Seed()


// Description authorship
Mimosa_dicerastes.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_dicerastes.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa dicerastes
export { Mimosa_dicerastes }