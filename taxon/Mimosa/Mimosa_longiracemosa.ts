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


// Description of Mimosa longiracemosa
const Mimosa_longiracemosa = new Mimosa()
Mimosa_longiracemosa.specificEpithet = 'longiracemosa'

Mimosa_longiracemosa.stems = new Stems()

Mimosa_longiracemosa.stipule = new Stipule()
Mimosa_longiracemosa.stipule.margin = new MarginStipule()
Mimosa_longiracemosa.stipule.adaxial = new AdaxialStipule()
Mimosa_longiracemosa.stipule.abaxial = new AbaxialStipule()

Mimosa_longiracemosa.leaf = new Leaf()
Mimosa_longiracemosa.leaf.petiole = new Petiole()
Mimosa_longiracemosa.leaf.bipinnate = new Bipinnate()
Mimosa_longiracemosa.leaf.bipinnate.rachis = new Rachis()
Mimosa_longiracemosa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_longiracemosa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_longiracemosa.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_longiracemosa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_longiracemosa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_longiracemosa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_longiracemosa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_longiracemosa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_longiracemosa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_longiracemosa.inflorescence = new Inflorescence()
Mimosa_longiracemosa.inflorescence.peduncle = new Peduncle()
Mimosa_longiracemosa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_longiracemosa.flower = new Flower()
Mimosa_longiracemosa.flower.bracteole = new Bracteole()
Mimosa_longiracemosa.flower.merism = '4-merous'
Mimosa_longiracemosa.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_longiracemosa.flower.calyx = new Calyx()
Mimosa_longiracemosa.flower.calyx.shape = 'collar'
Mimosa_longiracemosa.flower.corolla = new Corolla()
Mimosa_longiracemosa.flower.corolla.shape = 'vase-shaped'

Mimosa_longiracemosa.androecium = new Androecium()
Mimosa_longiracemosa.androecium.filaments = new Filaments()
Mimosa_longiracemosa.androecium.filaments.colour = 'pinkish'

Mimosa_longiracemosa.ginoecium = new Ginoecium()
Mimosa_longiracemosa.ginoecium.ovary = new Ovary()

Mimosa_longiracemosa.fruit = new Fruit()
Mimosa_longiracemosa.fruit.stipe = new Stipe()
Mimosa_longiracemosa.fruit.replum = new Replum()
Mimosa_longiracemosa.fruit.epicarp = new Epicarp()

Mimosa_longiracemosa.seed = new Seed()


// Description authorship
Mimosa_longiracemosa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_longiracemosa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa longiracemosa
export { Mimosa_longiracemosa }