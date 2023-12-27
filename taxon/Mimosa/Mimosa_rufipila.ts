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


// Description of Mimosa rufipila
const Mimosa_rufipila = new Mimosa()
Mimosa_rufipila.specificEpithet = 'rufipila'

Mimosa_rufipila.stems = new Stems()

Mimosa_rufipila.stipule = new Stipule()
Mimosa_rufipila.stipule.margin = new MarginStipule()
Mimosa_rufipila.stipule.adaxial = new AdaxialStipule()
Mimosa_rufipila.stipule.abaxial = new AbaxialStipule()

Mimosa_rufipila.leaf = new Leaf()
Mimosa_rufipila.leaf.petiole = new Petiole()
Mimosa_rufipila.leaf.bipinnate = new Bipinnate()
Mimosa_rufipila.leaf.bipinnate.rachis = new Rachis()
Mimosa_rufipila.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_rufipila.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_rufipila.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_rufipila.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_rufipila.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_rufipila.leaf.bipinnate.pinnae.leaflet.setNumberOfPairs(1)
Mimosa_rufipila.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_rufipila.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_rufipila.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_rufipila.inflorescence = new Inflorescence()
Mimosa_rufipila.inflorescence.peduncle = new Peduncle()
Mimosa_rufipila.inflorescence.capitate = new CapitateInflorescence()

Mimosa_rufipila.flower = new Flower()
Mimosa_rufipila.flower.bracteole = new Bracteole()
Mimosa_rufipila.flower.merism = '4-merous'
Mimosa_rufipila.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_rufipila.flower.calyx = new Calyx()
Mimosa_rufipila.flower.calyx.shape = 'paleaceous-pappiform'
Mimosa_rufipila.flower.corolla = new Corolla()

Mimosa_rufipila.androecium = new Androecium()
Mimosa_rufipila.androecium.filaments = new Filaments()
Mimosa_rufipila.androecium.filaments.colour = 'pinkish'

Mimosa_rufipila.ginoecium = new Ginoecium()
Mimosa_rufipila.ginoecium.ovary = new Ovary()

Mimosa_rufipila.fruit = new Fruit()
Mimosa_rufipila.fruit.stipe = new Stipe()
Mimosa_rufipila.fruit.replum = new Replum()
Mimosa_rufipila.fruit.epicarp = new Epicarp()

Mimosa_rufipila.seed = new Seed()


// Description authorship
Mimosa_rufipila.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_rufipila.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa rufipila
export { Mimosa_rufipila }