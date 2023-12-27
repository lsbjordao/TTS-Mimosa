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


// Description of Mimosa bathyrrhena
const Mimosa_bathyrrhena = new Mimosa()
Mimosa_bathyrrhena.specificEpithet = 'bathyrrhena'

Mimosa_bathyrrhena.stems = new Stems()

Mimosa_bathyrrhena.stipule = new Stipule()
Mimosa_bathyrrhena.stipule.margin = new MarginStipule()
Mimosa_bathyrrhena.stipule.adaxial = new AdaxialStipule()
Mimosa_bathyrrhena.stipule.abaxial = new AbaxialStipule()

Mimosa_bathyrrhena.leaf = new Leaf()
Mimosa_bathyrrhena.leaf.petiole = new Petiole()
Mimosa_bathyrrhena.leaf.bipinnate = new Bipinnate()
Mimosa_bathyrrhena.leaf.bipinnate.rachis = new Rachis()
Mimosa_bathyrrhena.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_bathyrrhena.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_bathyrrhena.leaf.bipinnate.pinnae.setNumberOfPairs(2)
Mimosa_bathyrrhena.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_bathyrrhena.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_bathyrrhena.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_bathyrrhena.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(9)
Mimosa_bathyrrhena.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(10, 16)
Mimosa_bathyrrhena.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_bathyrrhena.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_bathyrrhena.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_bathyrrhena.inflorescence = new Inflorescence()
Mimosa_bathyrrhena.inflorescence.peduncle = new Peduncle()
Mimosa_bathyrrhena.inflorescence.capitate = new CapitateInflorescence()

Mimosa_bathyrrhena.flower = new Flower()
Mimosa_bathyrrhena.flower.bracteole = new Bracteole()
Mimosa_bathyrrhena.flower.merism = '4-merous'
Mimosa_bathyrrhena.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_bathyrrhena.flower.calyx = new Calyx()
Mimosa_bathyrrhena.flower.calyx.shape = 'campanulate'
Mimosa_bathyrrhena.flower.corolla = new Corolla()
Mimosa_bathyrrhena.flower.corolla.shape = 'turbinate'

Mimosa_bathyrrhena.androecium = new Androecium()
Mimosa_bathyrrhena.androecium.filaments = new Filaments()
Mimosa_bathyrrhena.androecium.filaments.colour = 'yellowish'

Mimosa_bathyrrhena.ginoecium = new Ginoecium()
Mimosa_bathyrrhena.ginoecium.ovary = new Ovary()

Mimosa_bathyrrhena.fruit = new Fruit()
Mimosa_bathyrrhena.fruit.stipe = new Stipe()
Mimosa_bathyrrhena.fruit.replum = new Replum()
Mimosa_bathyrrhena.fruit.epicarp = new Epicarp()

Mimosa_bathyrrhena.seed = new Seed()


// Description authorship
Mimosa_bathyrrhena.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_bathyrrhena.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa bathyrrhena
export { Mimosa_bathyrrhena }