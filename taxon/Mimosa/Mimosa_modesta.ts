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


// Description of Mimosa modesta
const Mimosa_modesta = new Mimosa()
Mimosa_modesta.specificEpithet = 'modesta'

Mimosa_modesta.stems = new Stems()

Mimosa_modesta.stipule = new Stipule()
Mimosa_modesta.stipule.margin = new MarginStipule()
Mimosa_modesta.stipule.adaxial = new AdaxialStipule()
Mimosa_modesta.stipule.abaxial = new AbaxialStipule()

Mimosa_modesta.leaf = new Leaf()
Mimosa_modesta.leaf.petiole = new Petiole()
Mimosa_modesta.leaf.bipinnate = new Bipinnate()
Mimosa_modesta.leaf.bipinnate.rachis = new Rachis()
Mimosa_modesta.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_modesta.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_modesta.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_modesta.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_modesta.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_modesta.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_modesta.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(7)
Mimosa_modesta.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(9, 16)
Mimosa_modesta.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_modesta.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_modesta.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_modesta.inflorescence = new Inflorescence()
Mimosa_modesta.inflorescence.peduncle = new Peduncle()
Mimosa_modesta.inflorescence.capitate = new CapitateInflorescence()

Mimosa_modesta.flower = new Flower()
Mimosa_modesta.flower.bracteole = new Bracteole()
Mimosa_modesta.flower.merism = '4-merous'
Mimosa_modesta.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_modesta.flower.calyx = new Calyx()
Mimosa_modesta.flower.corolla = new Corolla()

Mimosa_modesta.androecium = new Androecium()
Mimosa_modesta.androecium.filaments = new Filaments()
Mimosa_modesta.androecium.filaments.colour = 'pinkish'

Mimosa_modesta.ginoecium = new Ginoecium()
Mimosa_modesta.ginoecium.ovary = new Ovary()

Mimosa_modesta.fruit = new Fruit()
Mimosa_modesta.fruit.stipe = new Stipe()
Mimosa_modesta.fruit.replum = new Replum()
Mimosa_modesta.fruit.epicarp = new Epicarp()

Mimosa_modesta.seed = new Seed()


// Description authorship
Mimosa_modesta.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_modesta.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa modesta
export { Mimosa_modesta }