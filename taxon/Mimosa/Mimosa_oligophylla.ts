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


// Description of Mimosa oligophylla
const Mimosa_oligophylla = new Mimosa()
Mimosa_oligophylla.specificEpithet = 'oligophylla'

Mimosa_oligophylla.stems = new Stems()

Mimosa_oligophylla.stipule = new Stipule()
Mimosa_oligophylla.stipule.margin = new MarginStipule()
Mimosa_oligophylla.stipule.adaxial = new AdaxialStipule()
Mimosa_oligophylla.stipule.abaxial = new AbaxialStipule()

Mimosa_oligophylla.leaf = new Leaf()
Mimosa_oligophylla.leaf.petiole = new Petiole()
Mimosa_oligophylla.leaf.bipinnate = new Bipinnate()
Mimosa_oligophylla.leaf.bipinnate.rachis = new Rachis()
Mimosa_oligophylla.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_oligophylla.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_oligophylla.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_oligophylla.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_oligophylla.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_oligophylla.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(7, 11)
Mimosa_oligophylla.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_oligophylla.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_oligophylla.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_oligophylla.inflorescence = new Inflorescence()
Mimosa_oligophylla.inflorescence.peduncle = new Peduncle()
Mimosa_oligophylla.inflorescence.capitate = new CapitateInflorescence()

Mimosa_oligophylla.flower = new Flower()
Mimosa_oligophylla.flower.bracteole = new Bracteole()
Mimosa_oligophylla.flower.merism = '4-merous'
Mimosa_oligophylla.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_oligophylla.flower.calyx = new Calyx()
Mimosa_oligophylla.flower.corolla = new Corolla()

Mimosa_oligophylla.androecium = new Androecium()
Mimosa_oligophylla.androecium.filaments = new Filaments()
Mimosa_oligophylla.androecium.filaments.colour = 'pinkish'

Mimosa_oligophylla.ginoecium = new Ginoecium()
Mimosa_oligophylla.ginoecium.ovary = new Ovary()

Mimosa_oligophylla.fruit = new Fruit()
Mimosa_oligophylla.fruit.stipe = new Stipe()
Mimosa_oligophylla.fruit.replum = new Replum()
Mimosa_oligophylla.fruit.epicarp = new Epicarp()

Mimosa_oligophylla.seed = new Seed()


// Description authorship
Mimosa_oligophylla.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_oligophylla.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa oligophylla
export { Mimosa_oligophylla }