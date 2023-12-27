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


// Description of Mimosa oblonga
const Mimosa_oblonga = new Mimosa()
Mimosa_oblonga.specificEpithet = 'oblonga'

Mimosa_oblonga.stems = new Stems()

Mimosa_oblonga.stipule = new Stipule()
Mimosa_oblonga.stipule.margin = new MarginStipule()
Mimosa_oblonga.stipule.adaxial = new AdaxialStipule()
Mimosa_oblonga.stipule.abaxial = new AbaxialStipule()

Mimosa_oblonga.leaf = new Leaf()
Mimosa_oblonga.leaf.petiole = new Petiole()
Mimosa_oblonga.leaf.bipinnate = new Bipinnate()
Mimosa_oblonga.leaf.bipinnate.rachis = new Rachis()
Mimosa_oblonga.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_oblonga.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_oblonga.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_oblonga.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_oblonga.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_oblonga.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_oblonga.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_oblonga.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_oblonga.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_oblonga.inflorescence = new Inflorescence()
Mimosa_oblonga.inflorescence.peduncle = new Peduncle()
Mimosa_oblonga.inflorescence.capitate = new CapitateInflorescence()

Mimosa_oblonga.flower = new Flower()
Mimosa_oblonga.flower.bracteole = new Bracteole()
Mimosa_oblonga.flower.merism = '4-merous'
Mimosa_oblonga.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_oblonga.flower.calyx = new Calyx()
Mimosa_oblonga.flower.corolla = new Corolla()
Mimosa_oblonga.flower.corolla.shape = ['turbinate', 'vase-shaped']

Mimosa_oblonga.androecium = new Androecium()
Mimosa_oblonga.androecium.filaments = new Filaments()
Mimosa_oblonga.androecium.filaments.colour = 'pinkish'

Mimosa_oblonga.ginoecium = new Ginoecium()
Mimosa_oblonga.ginoecium.ovary = new Ovary()

Mimosa_oblonga.fruit = new Fruit()
Mimosa_oblonga.fruit.stipe = new Stipe()
Mimosa_oblonga.fruit.replum = new Replum()
Mimosa_oblonga.fruit.epicarp = new Epicarp()

Mimosa_oblonga.seed = new Seed()


// Description authorship
Mimosa_oblonga.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_oblonga.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa oblonga
export { Mimosa_oblonga }