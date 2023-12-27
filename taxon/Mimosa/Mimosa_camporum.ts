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


// Description of Mimosa camporum
const Mimosa_camporum = new Mimosa()
Mimosa_camporum.specificEpithet = 'camporum'

Mimosa_camporum.stems = new Stems()

Mimosa_camporum.stipule = new Stipule()
Mimosa_camporum.stipule.margin = new MarginStipule()
Mimosa_camporum.stipule.adaxial = new AdaxialStipule()
Mimosa_camporum.stipule.abaxial = new AbaxialStipule()

Mimosa_camporum.leaf = new Leaf()
Mimosa_camporum.leaf.petiole = new Petiole()
Mimosa_camporum.leaf.bipinnate = new Bipinnate()
Mimosa_camporum.leaf.bipinnate.rachis = new Rachis()
Mimosa_camporum.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_camporum.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_camporum.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(1, 9)
Mimosa_camporum.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_camporum.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_camporum.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_camporum.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_camporum.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_camporum.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_camporum.inflorescence = new Inflorescence()
Mimosa_camporum.inflorescence.peduncle = new Peduncle()
Mimosa_camporum.inflorescence.capitate = new CapitateInflorescence()

Mimosa_camporum.flower = new Flower()
Mimosa_camporum.flower.bracteole = new Bracteole()
Mimosa_camporum.flower.merism = '4-merous'
Mimosa_camporum.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_camporum.flower.calyx = new Calyx()
Mimosa_camporum.flower.corolla = new Corolla()
Mimosa_camporum.flower.corolla.shape = 'vase-shaped'

Mimosa_camporum.androecium = new Androecium()
Mimosa_camporum.androecium.filaments = new Filaments()
Mimosa_camporum.androecium.filaments.colour = ['lilac', 'pinkish', 'whitenish']

Mimosa_camporum.ginoecium = new Ginoecium()
Mimosa_camporum.ginoecium.ovary = new Ovary()

Mimosa_camporum.fruit = new Fruit()
Mimosa_camporum.fruit.stipe = new Stipe()
Mimosa_camporum.fruit.replum = new Replum()
Mimosa_camporum.fruit.epicarp = new Epicarp()

Mimosa_camporum.seed = new Seed()


// Description authorship
Mimosa_camporum.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_camporum.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa camporum
export { Mimosa_camporum }