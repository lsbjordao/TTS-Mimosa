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


// Description of Mimosa deceptrix
const Mimosa_deceptrix = new Mimosa()
Mimosa_deceptrix.specificEpithet = 'deceptrix'

Mimosa_deceptrix.stems = new Stems()

Mimosa_deceptrix.stipule = new Stipule()
Mimosa_deceptrix.stipule.margin = new MarginStipule()
Mimosa_deceptrix.stipule.adaxial = new AdaxialStipule()
Mimosa_deceptrix.stipule.abaxial = new AbaxialStipule()

Mimosa_deceptrix.leaf = new Leaf()
Mimosa_deceptrix.leaf.petiole = new Petiole()
Mimosa_deceptrix.leaf.bipinnate = new Bipinnate()
Mimosa_deceptrix.leaf.bipinnate.rachis = new Rachis()
Mimosa_deceptrix.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_deceptrix.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_deceptrix.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(9)
Mimosa_deceptrix.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(12, 16)
Mimosa_deceptrix.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_deceptrix.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_deceptrix.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_deceptrix.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(16, 22)
Mimosa_deceptrix.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_deceptrix.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_deceptrix.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_deceptrix.inflorescence = new Inflorescence()
Mimosa_deceptrix.inflorescence.peduncle = new Peduncle()
Mimosa_deceptrix.inflorescence.capitate = new CapitateInflorescence()

Mimosa_deceptrix.flower = new Flower()
Mimosa_deceptrix.flower.bracteole = new Bracteole()
Mimosa_deceptrix.flower.merism = '4-merous'
Mimosa_deceptrix.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_deceptrix.flower.calyx = new Calyx()
Mimosa_deceptrix.flower.calyx.shape = 'paleaceous-pappiform'
Mimosa_deceptrix.flower.corolla = new Corolla()
Mimosa_deceptrix.flower.corolla.shape = 'subcylindric'

Mimosa_deceptrix.androecium = new Androecium()
Mimosa_deceptrix.androecium.filaments = new Filaments()
Mimosa_deceptrix.androecium.filaments.colour = ['lilac', 'pinkish']

Mimosa_deceptrix.ginoecium = new Ginoecium()
Mimosa_deceptrix.ginoecium.ovary = new Ovary()

Mimosa_deceptrix.fruit = new Fruit()
Mimosa_deceptrix.fruit.stipe = new Stipe()
Mimosa_deceptrix.fruit.replum = new Replum()
Mimosa_deceptrix.fruit.epicarp = new Epicarp()

Mimosa_deceptrix.seed = new Seed()


// Description authorship
Mimosa_deceptrix.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_deceptrix.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa deceptrix
export { Mimosa_deceptrix }