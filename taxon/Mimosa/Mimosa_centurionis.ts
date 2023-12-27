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


// Description of Mimosa centurionis
const Mimosa_centurionis = new Mimosa()
Mimosa_centurionis.specificEpithet = 'centurionis'

Mimosa_centurionis.stems = new Stems()

Mimosa_centurionis.stipule = new Stipule()
Mimosa_centurionis.stipule.margin = new MarginStipule()
Mimosa_centurionis.stipule.adaxial = new AdaxialStipule()
Mimosa_centurionis.stipule.abaxial = new AbaxialStipule()

Mimosa_centurionis.leaf = new Leaf()
Mimosa_centurionis.leaf.petiole = new Petiole()
Mimosa_centurionis.leaf.bipinnate = new Bipinnate()
Mimosa_centurionis.leaf.bipinnate.rachis = new Rachis()
Mimosa_centurionis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_centurionis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_centurionis.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(3)
Mimosa_centurionis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_centurionis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_centurionis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_centurionis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_centurionis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_centurionis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_centurionis.inflorescence = new Inflorescence()
Mimosa_centurionis.inflorescence.peduncle = new Peduncle()
Mimosa_centurionis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_centurionis.flower = new Flower()
Mimosa_centurionis.flower.bracteole = new Bracteole()
Mimosa_centurionis.flower.merism = '4-merous'
Mimosa_centurionis.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_centurionis.flower.calyx = new Calyx()
Mimosa_centurionis.flower.calyx.shape = 'spathiform'
Mimosa_centurionis.flower.corolla = new Corolla()
Mimosa_centurionis.flower.corolla.shape = 'subcylindric'

Mimosa_centurionis.androecium = new Androecium()
Mimosa_centurionis.androecium.filaments = new Filaments()
Mimosa_centurionis.androecium.filaments.colour = 'pinkish'

Mimosa_centurionis.ginoecium = new Ginoecium()
Mimosa_centurionis.ginoecium.ovary = new Ovary()

Mimosa_centurionis.fruit = new Fruit()
Mimosa_centurionis.fruit.stipe = new Stipe()
Mimosa_centurionis.fruit.replum = new Replum()
Mimosa_centurionis.fruit.epicarp = new Epicarp()

Mimosa_centurionis.seed = new Seed()


// Description authorship
Mimosa_centurionis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_centurionis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa centurionis
export { Mimosa_centurionis }