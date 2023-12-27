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


// Description of Mimosa adenocarpa
const Mimosa_adenocarpa = new Mimosa()
Mimosa_adenocarpa.specificEpithet = 'adenocarpa'

Mimosa_adenocarpa.stems = new Stems()

Mimosa_adenocarpa.stipule = new Stipule()
Mimosa_adenocarpa.stipule.margin = new MarginStipule()
Mimosa_adenocarpa.stipule.adaxial = new AdaxialStipule()
Mimosa_adenocarpa.stipule.abaxial = new AbaxialStipule()

Mimosa_adenocarpa.leaf = new Leaf()
Mimosa_adenocarpa.leaf.petiole = new Petiole()
Mimosa_adenocarpa.leaf.bipinnate = new Bipinnate()
Mimosa_adenocarpa.leaf.bipinnate.rachis = new Rachis()
Mimosa_adenocarpa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_adenocarpa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_adenocarpa.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(5, 9)
Mimosa_adenocarpa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_adenocarpa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_adenocarpa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_adenocarpa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(13, 22)
Mimosa_adenocarpa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_adenocarpa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_adenocarpa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_adenocarpa.inflorescence = new Inflorescence()
Mimosa_adenocarpa.inflorescence.peduncle = new Peduncle()
Mimosa_adenocarpa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_adenocarpa.flower = new Flower()
Mimosa_adenocarpa.flower.bracteole = new Bracteole()
Mimosa_adenocarpa.flower.merism = '4-merous'
Mimosa_adenocarpa.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_adenocarpa.flower.calyx = new Calyx()
Mimosa_adenocarpa.flower.calyx.shape = 'campanulate'
Mimosa_adenocarpa.flower.corolla = new Corolla()
Mimosa_adenocarpa.flower.corolla.shape = 'vase-shaped'

Mimosa_adenocarpa.androecium = new Androecium()
Mimosa_adenocarpa.androecium.filaments = new Filaments()
Mimosa_adenocarpa.androecium.filaments.colour = 'pinkish'

Mimosa_adenocarpa.ginoecium = new Ginoecium()
Mimosa_adenocarpa.ginoecium.ovary = new Ovary()

Mimosa_adenocarpa.fruit = new Fruit()
Mimosa_adenocarpa.fruit.stipe = new Stipe()
Mimosa_adenocarpa.fruit.replum = new Replum()
Mimosa_adenocarpa.fruit.epicarp = new Epicarp()

Mimosa_adenocarpa.seed = new Seed()


// Description authorship
Mimosa_adenocarpa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_adenocarpa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa adenocarpa
export { Mimosa_adenocarpa }