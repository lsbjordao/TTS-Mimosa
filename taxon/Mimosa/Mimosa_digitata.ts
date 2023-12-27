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


// Description of Mimosa digitata
const Mimosa_digitata = new Mimosa()
Mimosa_digitata.specificEpithet = 'digitata'

Mimosa_digitata.stems = new Stems()

Mimosa_digitata.stipule = new Stipule()
Mimosa_digitata.stipule.margin = new MarginStipule()
Mimosa_digitata.stipule.adaxial = new AdaxialStipule()
Mimosa_digitata.stipule.abaxial = new AbaxialStipule()

Mimosa_digitata.leaf = new Leaf()
Mimosa_digitata.leaf.petiole = new Petiole()
Mimosa_digitata.leaf.bipinnate = new Bipinnate()
Mimosa_digitata.leaf.bipinnate.rachis = new Rachis()
Mimosa_digitata.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_digitata.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_digitata.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_digitata.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_digitata.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_digitata.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(6, 9)
Mimosa_digitata.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_digitata.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_digitata.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_digitata.inflorescence = new Inflorescence()
Mimosa_digitata.inflorescence.peduncle = new Peduncle()
Mimosa_digitata.inflorescence.capitate = new CapitateInflorescence()

Mimosa_digitata.flower = new Flower()
Mimosa_digitata.flower.bracteole = new Bracteole()
Mimosa_digitata.flower.merism = '4-merous'
Mimosa_digitata.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_digitata.flower.calyx = new Calyx()
Mimosa_digitata.flower.calyx.shape = 'pappiform'
Mimosa_digitata.flower.corolla = new Corolla()

Mimosa_digitata.androecium = new Androecium()
Mimosa_digitata.androecium.filaments = new Filaments()
Mimosa_digitata.androecium.filaments.colour = 'pinkish'

Mimosa_digitata.ginoecium = new Ginoecium()
Mimosa_digitata.ginoecium.ovary = new Ovary()

Mimosa_digitata.fruit = new Fruit()
Mimosa_digitata.fruit.stipe = new Stipe()
Mimosa_digitata.fruit.replum = new Replum()
Mimosa_digitata.fruit.epicarp = new Epicarp()

Mimosa_digitata.seed = new Seed()


// Description authorship
Mimosa_digitata.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_digitata.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa digitata
export { Mimosa_digitata }