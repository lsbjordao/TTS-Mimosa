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


// Description of Mimosa petraea
const Mimosa_petraea = new Mimosa()
Mimosa_petraea.specificEpithet = 'petraea'

Mimosa_petraea.stems = new Stems()

Mimosa_petraea.stipule = new Stipule()
Mimosa_petraea.stipule.margin = new MarginStipule()
Mimosa_petraea.stipule.adaxial = new AdaxialStipule()
Mimosa_petraea.stipule.abaxial = new AbaxialStipule()

Mimosa_petraea.leaf = new Leaf()
Mimosa_petraea.leaf.petiole = new Petiole()
Mimosa_petraea.leaf.bipinnate = new Bipinnate()
Mimosa_petraea.leaf.bipinnate.rachis = new Rachis()
Mimosa_petraea.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_petraea.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_petraea.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_petraea.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_petraea.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_petraea.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_petraea.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_petraea.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_petraea.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_petraea.inflorescence = new Inflorescence()
Mimosa_petraea.inflorescence.peduncle = new Peduncle()
Mimosa_petraea.inflorescence.capitate = new CapitateInflorescence()

Mimosa_petraea.flower = new Flower()
Mimosa_petraea.flower.bracteole = new Bracteole()
Mimosa_petraea.flower.merism = '4-merous'
Mimosa_petraea.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_petraea.flower.calyx = new Calyx()
Mimosa_petraea.flower.corolla = new Corolla()

Mimosa_petraea.androecium = new Androecium()
Mimosa_petraea.androecium.filaments = new Filaments()

Mimosa_petraea.ginoecium = new Ginoecium()
Mimosa_petraea.ginoecium.ovary = new Ovary()

Mimosa_petraea.fruit = new Fruit()
Mimosa_petraea.fruit.stipe = new Stipe()
Mimosa_petraea.fruit.replum = new Replum()
Mimosa_petraea.fruit.epicarp = new Epicarp()

Mimosa_petraea.seed = new Seed()


// Description authorship
Mimosa_petraea.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_petraea.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa petraea
export { Mimosa_petraea }