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


// Description of Mimosa speciosissima
const Mimosa_speciosissima = new Mimosa()
Mimosa_speciosissima.specificEpithet = 'speciosissima'

Mimosa_speciosissima.stems = new Stems()

Mimosa_speciosissima.stipule = new Stipule()
Mimosa_speciosissima.stipule.margin = new MarginStipule()
Mimosa_speciosissima.stipule.adaxial = new AdaxialStipule()
Mimosa_speciosissima.stipule.abaxial = new AbaxialStipule()

Mimosa_speciosissima.leaf = new Leaf()
Mimosa_speciosissima.leaf.petiole = new Petiole()
Mimosa_speciosissima.leaf.bipinnate = new Bipinnate()
Mimosa_speciosissima.leaf.bipinnate.rachis = new Rachis()
Mimosa_speciosissima.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_speciosissima.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_speciosissima.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(2)
Mimosa_speciosissima.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(7, 14)
Mimosa_speciosissima.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(20)
Mimosa_speciosissima.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_speciosissima.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_speciosissima.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_speciosissima.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(18, 55)
Mimosa_speciosissima.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_speciosissima.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_speciosissima.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_speciosissima.inflorescence = new Inflorescence()
Mimosa_speciosissima.inflorescence.peduncle = new Peduncle()
Mimosa_speciosissima.inflorescence.capitate = new CapitateInflorescence()

Mimosa_speciosissima.flower = new Flower()
Mimosa_speciosissima.flower.bracteole = new Bracteole()
Mimosa_speciosissima.flower.merism = '4-merous'
Mimosa_speciosissima.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_speciosissima.flower.calyx = new Calyx()
Mimosa_speciosissima.flower.corolla = new Corolla()
Mimosa_speciosissima.flower.corolla.shape = ['turbinate', 'funnelform']

Mimosa_speciosissima.androecium = new Androecium()
Mimosa_speciosissima.androecium.filaments = new Filaments()
Mimosa_speciosissima.androecium.filaments.colour = 'pinkish'

Mimosa_speciosissima.ginoecium = new Ginoecium()
Mimosa_speciosissima.ginoecium.ovary = new Ovary()

Mimosa_speciosissima.fruit = new Fruit()
Mimosa_speciosissima.fruit.stipe = new Stipe()
Mimosa_speciosissima.fruit.replum = new Replum()
Mimosa_speciosissima.fruit.epicarp = new Epicarp()

Mimosa_speciosissima.seed = new Seed()


// Description authorship
Mimosa_speciosissima.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_speciosissima.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa speciosissima
export { Mimosa_speciosissima }