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


// Description of Mimosa josephina
const Mimosa_josephina = new Mimosa()
Mimosa_josephina.specificEpithet = 'josephina'

Mimosa_josephina.stems = new Stems()

Mimosa_josephina.stipule = new Stipule()
Mimosa_josephina.stipule.margin = new MarginStipule()
Mimosa_josephina.stipule.adaxial = new AdaxialStipule()
Mimosa_josephina.stipule.abaxial = new AbaxialStipule()

Mimosa_josephina.leaf = new Leaf()
Mimosa_josephina.leaf.petiole = new Petiole()
Mimosa_josephina.leaf.bipinnate = new Bipinnate()
Mimosa_josephina.leaf.bipinnate.rachis = new Rachis()
Mimosa_josephina.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_josephina.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_josephina.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(5, 8)
Mimosa_josephina.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_josephina.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_josephina.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_josephina.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(1, 4)
Mimosa_josephina.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_josephina.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_josephina.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_josephina.inflorescence = new Inflorescence()
Mimosa_josephina.inflorescence.peduncle = new Peduncle()
Mimosa_josephina.inflorescence.capitate = new CapitateInflorescence()

Mimosa_josephina.flower = new Flower()
Mimosa_josephina.flower.bracteole = new Bracteole()
Mimosa_josephina.flower.merism = '4-merous'
Mimosa_josephina.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_josephina.flower.calyx = new Calyx()
Mimosa_josephina.flower.calyx.shape = 'campanulate'
Mimosa_josephina.flower.corolla = new Corolla()
Mimosa_josephina.flower.corolla.shape = ['turbinate', 'vase-shaped']

Mimosa_josephina.androecium = new Androecium()
Mimosa_josephina.androecium.filaments = new Filaments()
Mimosa_josephina.androecium.filaments.colour = ['lilac', 'pinkish']

Mimosa_josephina.ginoecium = new Ginoecium()
Mimosa_josephina.ginoecium.ovary = new Ovary()

Mimosa_josephina.fruit = new Fruit()
Mimosa_josephina.fruit.stipe = new Stipe()
Mimosa_josephina.fruit.replum = new Replum()
Mimosa_josephina.fruit.epicarp = new Epicarp()

Mimosa_josephina.seed = new Seed()


// Description authorship
Mimosa_josephina.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_josephina.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa josephina
export { Mimosa_josephina }