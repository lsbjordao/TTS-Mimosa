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


// Description of Mimosa accedens
const Mimosa_accedens = new Mimosa()
Mimosa_accedens.specificEpithet = 'accedens'

Mimosa_accedens.stems = new Stems()

Mimosa_accedens.stipule = new Stipule()
Mimosa_accedens.stipule.margin = new MarginStipule()
Mimosa_accedens.stipule.adaxial = new AdaxialStipule()
Mimosa_accedens.stipule.abaxial = new AbaxialStipule()

Mimosa_accedens.leaf = new Leaf()
Mimosa_accedens.leaf.petiole = new Petiole()
Mimosa_accedens.leaf.bipinnate = new Bipinnate()
Mimosa_accedens.leaf.bipinnate.rachis = new Rachis()
Mimosa_accedens.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_accedens.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_accedens.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(12)
Mimosa_accedens.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(15, 30)
Mimosa_accedens.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(34)
Mimosa_accedens.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_accedens.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_accedens.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_accedens.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(12)
Mimosa_accedens.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(14, 26)
Mimosa_accedens.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(38)
Mimosa_accedens.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_accedens.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_accedens.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_accedens.inflorescence = new Inflorescence()
Mimosa_accedens.inflorescence.peduncle = new Peduncle()
Mimosa_accedens.inflorescence.capitate = new CapitateInflorescence()

Mimosa_accedens.flower = new Flower()
Mimosa_accedens.flower.bracteole = new Bracteole()
Mimosa_accedens.flower.merism = '4-merous'
Mimosa_accedens.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_accedens.flower.calyx = new Calyx()
Mimosa_accedens.flower.calyx.shape = 'campanulate'
Mimosa_accedens.flower.corolla = new Corolla()
Mimosa_accedens.flower.corolla.shape = ['turbinate', 'vase-shaped']

Mimosa_accedens.androecium = new Androecium()
Mimosa_accedens.androecium.filaments = new Filaments()
Mimosa_accedens.androecium.filaments.colour = ['pinkish', 'whitenish']

Mimosa_accedens.ginoecium = new Ginoecium()
Mimosa_accedens.ginoecium.ovary = new Ovary()

Mimosa_accedens.fruit = new Fruit()
Mimosa_accedens.fruit.stipe = new Stipe()
Mimosa_accedens.fruit.replum = new Replum()
Mimosa_accedens.fruit.epicarp = new Epicarp()

Mimosa_accedens.seed = new Seed()


// Description authorship
Mimosa_accedens.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_accedens.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa accedens
export { Mimosa_accedens }