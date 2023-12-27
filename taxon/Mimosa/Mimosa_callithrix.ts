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


// Description of Mimosa callithrix
const Mimosa_callithrix = new Mimosa()
Mimosa_callithrix.specificEpithet = 'callithrix'

Mimosa_callithrix.stems = new Stems()

Mimosa_callithrix.stipule = new Stipule()
Mimosa_callithrix.stipule.margin = new MarginStipule()
Mimosa_callithrix.stipule.adaxial = new AdaxialStipule()
Mimosa_callithrix.stipule.abaxial = new AbaxialStipule()

Mimosa_callithrix.leaf = new Leaf()
Mimosa_callithrix.leaf.petiole = new Petiole()
Mimosa_callithrix.leaf.bipinnate = new Bipinnate()
Mimosa_callithrix.leaf.bipinnate.rachis = new Rachis()
Mimosa_callithrix.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_callithrix.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_callithrix.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_callithrix.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_callithrix.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_callithrix.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_callithrix.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(10, 15)
Mimosa_callithrix.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_callithrix.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_callithrix.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_callithrix.inflorescence = new Inflorescence()
Mimosa_callithrix.inflorescence.peduncle = new Peduncle()
Mimosa_callithrix.inflorescence.capitate = new CapitateInflorescence()

Mimosa_callithrix.flower = new Flower()
Mimosa_callithrix.flower.bracteole = new Bracteole()
Mimosa_callithrix.flower.merism = '4-merous'
Mimosa_callithrix.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_callithrix.flower.calyx = new Calyx()
Mimosa_callithrix.flower.calyx.shape = 'paleaceous'
Mimosa_callithrix.flower.corolla = new Corolla()
Mimosa_callithrix.flower.corolla.shape = 'subcylindric'

Mimosa_callithrix.androecium = new Androecium()
Mimosa_callithrix.androecium.filaments = new Filaments()
Mimosa_callithrix.androecium.filaments.colour = 'pinkish'

Mimosa_callithrix.ginoecium = new Ginoecium()
Mimosa_callithrix.ginoecium.ovary = new Ovary()

Mimosa_callithrix.fruit = new Fruit()
Mimosa_callithrix.fruit.stipe = new Stipe()
Mimosa_callithrix.fruit.replum = new Replum()
Mimosa_callithrix.fruit.epicarp = new Epicarp()

Mimosa_callithrix.seed = new Seed()


// Description authorship
Mimosa_callithrix.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_callithrix.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa callithrix
export { Mimosa_callithrix }