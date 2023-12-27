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


// Description of Mimosa adenantheroides
const Mimosa_adenantheroides = new Mimosa()
Mimosa_adenantheroides.specificEpithet = 'adenantheroides'

Mimosa_adenantheroides.stems = new Stems()

Mimosa_adenantheroides.stipule = new Stipule()
Mimosa_adenantheroides.stipule.margin = new MarginStipule()
Mimosa_adenantheroides.stipule.adaxial = new AdaxialStipule()
Mimosa_adenantheroides.stipule.abaxial = new AbaxialStipule()

Mimosa_adenantheroides.leaf = new Leaf()
Mimosa_adenantheroides.leaf.petiole = new Petiole()
Mimosa_adenantheroides.leaf.bipinnate = new Bipinnate()
Mimosa_adenantheroides.leaf.bipinnate.rachis = new Rachis()
Mimosa_adenantheroides.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_adenantheroides.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_adenantheroides.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_adenantheroides.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_adenantheroides.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_adenantheroides.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_adenantheroides.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_adenantheroides.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_adenantheroides.inflorescence = new Inflorescence()
Mimosa_adenantheroides.inflorescence.peduncle = new Peduncle()
Mimosa_adenantheroides.inflorescence.capitate = new CapitateInflorescence()

Mimosa_adenantheroides.flower = new Flower()
Mimosa_adenantheroides.flower.bracteole = new Bracteole()
Mimosa_adenantheroides.flower.merism = '5-merous'
Mimosa_adenantheroides.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_adenantheroides.flower.calyx = new Calyx()
Mimosa_adenantheroides.flower.calyx.shape = 'campanulate'
Mimosa_adenantheroides.flower.corolla = new Corolla()
Mimosa_adenantheroides.flower.corolla.shape = 'vase-shaped'

Mimosa_adenantheroides.androecium = new Androecium()
Mimosa_adenantheroides.androecium.filaments = new Filaments()
Mimosa_adenantheroides.androecium.filaments.colour = ['whitenish', 'pinkish']

Mimosa_adenantheroides.ginoecium = new Ginoecium()
Mimosa_adenantheroides.ginoecium.ovary = new Ovary()

Mimosa_adenantheroides.fruit = new Fruit()
Mimosa_adenantheroides.fruit.stipe = new Stipe()
Mimosa_adenantheroides.fruit.replum = new Replum()
Mimosa_adenantheroides.fruit.epicarp = new Epicarp()

Mimosa_adenantheroides.seed = new Seed()


// Description authorship
Mimosa_adenantheroides.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_adenantheroides.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa adenantheroides
export { Mimosa_adenantheroides }