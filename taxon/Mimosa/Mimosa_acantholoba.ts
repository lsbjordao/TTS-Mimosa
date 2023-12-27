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


// Description of Mimosa acantholoba
const Mimosa_acantholoba = new Mimosa()
Mimosa_acantholoba.specificEpithet = 'acantholoba'

Mimosa_acantholoba.stems = new Stems()

Mimosa_acantholoba.stipule = new Stipule()
Mimosa_acantholoba.stipule.margin = new MarginStipule()
Mimosa_acantholoba.stipule.adaxial = new AdaxialStipule()
Mimosa_acantholoba.stipule.abaxial = new AbaxialStipule()

Mimosa_acantholoba.leaf = new Leaf()
Mimosa_acantholoba.leaf.petiole = new Petiole()
Mimosa_acantholoba.leaf.bipinnate = new Bipinnate()
Mimosa_acantholoba.leaf.bipinnate.rachis = new Rachis()
Mimosa_acantholoba.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_acantholoba.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_acantholoba.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(7, 15)
Mimosa_acantholoba.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(26)
Mimosa_acantholoba.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_acantholoba.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_acantholoba.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_acantholoba.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_acantholoba.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_acantholoba.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_acantholoba.inflorescence = new Inflorescence()
Mimosa_acantholoba.inflorescence.peduncle = new Peduncle()
Mimosa_acantholoba.inflorescence.capitate = new CapitateInflorescence()

Mimosa_acantholoba.flower = new Flower()
Mimosa_acantholoba.flower.bracteole = new Bracteole()
Mimosa_acantholoba.flower.merism = ['4-merous', '5-merous']
Mimosa_acantholoba.flower.calyx = new Calyx()
Mimosa_acantholoba.flower.calyx.shape = 'campanulate'
Mimosa_acantholoba.flower.corolla = new Corolla()
Mimosa_acantholoba.flower.corolla.shape = ['vase-shaped', 'turbinate']

Mimosa_acantholoba.androecium = new Androecium()
Mimosa_acantholoba.androecium.filaments = new Filaments()
Mimosa_acantholoba.androecium.filaments.colour = 'whitenish'

Mimosa_acantholoba.ginoecium = new Ginoecium()
Mimosa_acantholoba.ginoecium.ovary = new Ovary()

Mimosa_acantholoba.fruit = new Fruit()
Mimosa_acantholoba.fruit.stipe = new Stipe()
Mimosa_acantholoba.fruit.replum = new Replum()
Mimosa_acantholoba.fruit.epicarp = new Epicarp()

Mimosa_acantholoba.seed = new Seed()


// Description authorship
Mimosa_acantholoba.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_acantholoba.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa acantholoba
export { Mimosa_acantholoba }