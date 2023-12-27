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


// Description of Mimosa chaetosphaera
const Mimosa_chaetosphaera = new Mimosa()
Mimosa_chaetosphaera.specificEpithet = 'chaetosphaera'

Mimosa_chaetosphaera.stems = new Stems()

Mimosa_chaetosphaera.stipule = new Stipule()
Mimosa_chaetosphaera.stipule.margin = new MarginStipule()
Mimosa_chaetosphaera.stipule.adaxial = new AdaxialStipule()
Mimosa_chaetosphaera.stipule.abaxial = new AbaxialStipule()

Mimosa_chaetosphaera.leaf = new Leaf()
Mimosa_chaetosphaera.leaf.petiole = new Petiole()
Mimosa_chaetosphaera.leaf.bipinnate = new Bipinnate()
Mimosa_chaetosphaera.leaf.bipinnate.rachis = new Rachis()
Mimosa_chaetosphaera.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_chaetosphaera.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_chaetosphaera.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_chaetosphaera.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_chaetosphaera.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_chaetosphaera.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_chaetosphaera.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(22)
Mimosa_chaetosphaera.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(25, 32)
Mimosa_chaetosphaera.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_chaetosphaera.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_chaetosphaera.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_chaetosphaera.inflorescence = new Inflorescence()
Mimosa_chaetosphaera.inflorescence.peduncle = new Peduncle()
Mimosa_chaetosphaera.inflorescence.capitate = new CapitateInflorescence()

Mimosa_chaetosphaera.flower = new Flower()
Mimosa_chaetosphaera.flower.bracteole = new Bracteole()
Mimosa_chaetosphaera.flower.merism = '4-merous'
Mimosa_chaetosphaera.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_chaetosphaera.flower.calyx = new Calyx()
Mimosa_chaetosphaera.flower.calyx.shape = 'campanulate'
Mimosa_chaetosphaera.flower.corolla = new Corolla()

Mimosa_chaetosphaera.androecium = new Androecium()
Mimosa_chaetosphaera.androecium.filaments = new Filaments()
Mimosa_chaetosphaera.androecium.filaments.colour = 'pinkish'

Mimosa_chaetosphaera.ginoecium = new Ginoecium()
Mimosa_chaetosphaera.ginoecium.ovary = new Ovary()

Mimosa_chaetosphaera.fruit = new Fruit()
Mimosa_chaetosphaera.fruit.stipe = new Stipe()
Mimosa_chaetosphaera.fruit.replum = new Replum()
Mimosa_chaetosphaera.fruit.epicarp = new Epicarp()

Mimosa_chaetosphaera.seed = new Seed()


// Description authorship
Mimosa_chaetosphaera.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_chaetosphaera.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa chaetosphaera
export { Mimosa_chaetosphaera }