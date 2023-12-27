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


// Description of Mimosa adpressa
const Mimosa_adpressa = new Mimosa()
Mimosa_adpressa.specificEpithet = 'adpressa'

Mimosa_adpressa.stems = new Stems()

Mimosa_adpressa.stipule = new Stipule()
Mimosa_adpressa.stipule.margin = new MarginStipule()
Mimosa_adpressa.stipule.adaxial = new AdaxialStipule()
Mimosa_adpressa.stipule.abaxial = new AbaxialStipule()

Mimosa_adpressa.leaf = new Leaf()
Mimosa_adpressa.leaf.petiole = new Petiole()
Mimosa_adpressa.leaf.bipinnate = new Bipinnate()
Mimosa_adpressa.leaf.bipinnate.rachis = new Rachis()
Mimosa_adpressa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_adpressa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_adpressa.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_adpressa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_adpressa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_adpressa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_adpressa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(15)
Mimosa_adpressa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(16, 32)
Mimosa_adpressa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_adpressa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_adpressa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_adpressa.inflorescence = new Inflorescence()
Mimosa_adpressa.inflorescence.peduncle = new Peduncle()
Mimosa_adpressa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_adpressa.flower = new Flower()
Mimosa_adpressa.flower.bracteole = new Bracteole()
Mimosa_adpressa.flower.merism = '4-merous'
Mimosa_adpressa.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_adpressa.flower.calyx = new Calyx()
Mimosa_adpressa.flower.calyx.shape = 'campanulate'
Mimosa_adpressa.flower.corolla = new Corolla()
Mimosa_adpressa.flower.corolla.shape = ['subtubular', 'vase-shaped']

Mimosa_adpressa.androecium = new Androecium()
Mimosa_adpressa.androecium.filaments = new Filaments()
Mimosa_adpressa.androecium.filaments.colour = 'pinkish'

Mimosa_adpressa.ginoecium = new Ginoecium()
Mimosa_adpressa.ginoecium.ovary = new Ovary()

Mimosa_adpressa.fruit = new Fruit()
Mimosa_adpressa.fruit.stipe = new Stipe()
Mimosa_adpressa.fruit.replum = new Replum()
Mimosa_adpressa.fruit.epicarp = new Epicarp()

Mimosa_adpressa.seed = new Seed()


// Description authorship
Mimosa_adpressa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_adpressa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa adpressa
export { Mimosa_adpressa }