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


// Description of Mimosa honesta
const Mimosa_honesta = new Mimosa()
Mimosa_honesta.specificEpithet = 'honesta'

Mimosa_honesta.stems = new Stems()

Mimosa_honesta.stipule = new Stipule()
Mimosa_honesta.stipule.margin = new MarginStipule()
Mimosa_honesta.stipule.adaxial = new AdaxialStipule()
Mimosa_honesta.stipule.abaxial = new AbaxialStipule()

Mimosa_honesta.leaf = new Leaf()
Mimosa_honesta.leaf.petiole = new Petiole()
Mimosa_honesta.leaf.bipinnate = new Bipinnate()
Mimosa_honesta.leaf.bipinnate.rachis = new Rachis()
Mimosa_honesta.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_honesta.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_honesta.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_honesta.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_honesta.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_honesta.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_honesta.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_honesta.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_honesta.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_honesta.inflorescence = new Inflorescence()
Mimosa_honesta.inflorescence.peduncle = new Peduncle()
Mimosa_honesta.inflorescence.capitate = new CapitateInflorescence()

Mimosa_honesta.flower = new Flower()
Mimosa_honesta.flower.bracteole = new Bracteole()
Mimosa_honesta.flower.merism = '4-merous'
Mimosa_honesta.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_honesta.flower.calyx = new Calyx()
Mimosa_honesta.flower.calyx.shape = 'pappiform'
Mimosa_honesta.flower.corolla = new Corolla()
Mimosa_honesta.flower.corolla.shape = 'subcylindric'

Mimosa_honesta.androecium = new Androecium()
Mimosa_honesta.androecium.filaments = new Filaments()
Mimosa_honesta.androecium.filaments.colour = ['pinkish', 'lilac', 'purplish']

Mimosa_honesta.ginoecium = new Ginoecium()
Mimosa_honesta.ginoecium.ovary = new Ovary()

Mimosa_honesta.fruit = new Fruit()
Mimosa_honesta.fruit.stipe = new Stipe()
Mimosa_honesta.fruit.replum = new Replum()
Mimosa_honesta.fruit.epicarp = new Epicarp()

Mimosa_honesta.seed = new Seed()


// Description authorship
Mimosa_honesta.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_honesta.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa honesta
export { Mimosa_honesta }