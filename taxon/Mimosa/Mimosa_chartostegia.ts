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


// Description of Mimosa chartostegia
const Mimosa_chartostegia = new Mimosa()
Mimosa_chartostegia.specificEpithet = 'chartostegia'

Mimosa_chartostegia.stems = new Stems()

Mimosa_chartostegia.stipule = new Stipule()
Mimosa_chartostegia.stipule.margin = new MarginStipule()
Mimosa_chartostegia.stipule.adaxial = new AdaxialStipule()
Mimosa_chartostegia.stipule.abaxial = new AbaxialStipule()

Mimosa_chartostegia.leaf = new Leaf()
Mimosa_chartostegia.leaf.petiole = new Petiole()
Mimosa_chartostegia.leaf.bipinnate = new Bipinnate()
Mimosa_chartostegia.leaf.bipinnate.rachis = new Rachis()
Mimosa_chartostegia.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_chartostegia.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_chartostegia.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(7, 9)
Mimosa_chartostegia.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_chartostegia.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_chartostegia.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_chartostegia.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(17, 28)
Mimosa_chartostegia.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_chartostegia.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_chartostegia.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_chartostegia.inflorescence = new Inflorescence()
Mimosa_chartostegia.inflorescence.peduncle = new Peduncle()
Mimosa_chartostegia.inflorescence.capitate = new CapitateInflorescence()

Mimosa_chartostegia.flower = new Flower()
Mimosa_chartostegia.flower.bracteole = new Bracteole()
Mimosa_chartostegia.flower.merism = '4-merous'
Mimosa_chartostegia.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_chartostegia.flower.calyx = new Calyx()
Mimosa_chartostegia.flower.calyx.shape = 'paleaceous'
Mimosa_chartostegia.flower.corolla = new Corolla()

Mimosa_chartostegia.androecium = new Androecium()
Mimosa_chartostegia.androecium.filaments = new Filaments()
Mimosa_chartostegia.androecium.filaments.colour = 'pinkish'

Mimosa_chartostegia.ginoecium = new Ginoecium()
Mimosa_chartostegia.ginoecium.ovary = new Ovary()

Mimosa_chartostegia.fruit = new Fruit()
Mimosa_chartostegia.fruit.stipe = new Stipe()
Mimosa_chartostegia.fruit.replum = new Replum()
Mimosa_chartostegia.fruit.epicarp = new Epicarp()

Mimosa_chartostegia.seed = new Seed()


// Description authorship
Mimosa_chartostegia.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_chartostegia.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa chartostegia
export { Mimosa_chartostegia }