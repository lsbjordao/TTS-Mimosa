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


// Description of Mimosa monticola
const Mimosa_monticola = new Mimosa()
Mimosa_monticola.specificEpithet = 'monticola'

Mimosa_monticola.stems = new Stems()

Mimosa_monticola.stipule = new Stipule()
Mimosa_monticola.stipule.margin = new MarginStipule()
Mimosa_monticola.stipule.adaxial = new AdaxialStipule()
Mimosa_monticola.stipule.abaxial = new AbaxialStipule()

Mimosa_monticola.leaf = new Leaf()
Mimosa_monticola.leaf.petiole = new Petiole()
Mimosa_monticola.leaf.bipinnate = new Bipinnate()
Mimosa_monticola.leaf.bipinnate.rachis = new Rachis()
Mimosa_monticola.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_monticola.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_monticola.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_monticola.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_monticola.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_monticola.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_monticola.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_monticola.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_monticola.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_monticola.inflorescence = new Inflorescence()
Mimosa_monticola.inflorescence.peduncle = new Peduncle()
Mimosa_monticola.inflorescence.capitate = new CapitateInflorescence()

Mimosa_monticola.flower = new Flower()
Mimosa_monticola.flower.bracteole = new Bracteole()
Mimosa_monticola.flower.merism = '4-merous'
Mimosa_monticola.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_monticola.flower.calyx = new Calyx()
Mimosa_monticola.flower.calyx.shape = 'rudimentary'
Mimosa_monticola.flower.corolla = new Corolla()

Mimosa_monticola.androecium = new Androecium()
Mimosa_monticola.androecium.filaments = new Filaments()
Mimosa_monticola.androecium.filaments.colour = 'pinkish'

Mimosa_monticola.ginoecium = new Ginoecium()
Mimosa_monticola.ginoecium.ovary = new Ovary()

Mimosa_monticola.fruit = new Fruit()
Mimosa_monticola.fruit.stipe = new Stipe()
Mimosa_monticola.fruit.replum = new Replum()
Mimosa_monticola.fruit.epicarp = new Epicarp()

Mimosa_monticola.seed = new Seed()


// Description authorship
Mimosa_monticola.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_monticola.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa monticola
export { Mimosa_monticola }