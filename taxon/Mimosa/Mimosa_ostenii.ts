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


// Description of Mimosa ostenii
const Mimosa_ostenii = new Mimosa()
Mimosa_ostenii.specificEpithet = 'ostenii'

Mimosa_ostenii.stems = new Stems()

Mimosa_ostenii.stipule = new Stipule()
Mimosa_ostenii.stipule.margin = new MarginStipule()
Mimosa_ostenii.stipule.adaxial = new AdaxialStipule()
Mimosa_ostenii.stipule.abaxial = new AbaxialStipule()

Mimosa_ostenii.leaf = new Leaf()
Mimosa_ostenii.leaf.petiole = new Petiole()
Mimosa_ostenii.leaf.bipinnate = new Bipinnate()
Mimosa_ostenii.leaf.bipinnate.rachis = new Rachis()
Mimosa_ostenii.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_ostenii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_ostenii.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_ostenii.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_ostenii.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_ostenii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_ostenii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(3, 5)
Mimosa_ostenii.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_ostenii.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_ostenii.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_ostenii.inflorescence = new Inflorescence()
Mimosa_ostenii.inflorescence.peduncle = new Peduncle()
Mimosa_ostenii.inflorescence.capitate = new CapitateInflorescence()

Mimosa_ostenii.flower = new Flower()
Mimosa_ostenii.flower.bracteole = new Bracteole()
Mimosa_ostenii.flower.merism = '4-merous'
Mimosa_ostenii.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_ostenii.flower.calyx = new Calyx()
Mimosa_ostenii.flower.calyx.shape = ['turbinate', 'campanulate']
Mimosa_ostenii.flower.corolla = new Corolla()
Mimosa_ostenii.flower.corolla.shape = 'vase-shaped'

Mimosa_ostenii.androecium = new Androecium()
Mimosa_ostenii.androecium.filaments = new Filaments()
Mimosa_ostenii.androecium.filaments.colour = 'whitenish'

Mimosa_ostenii.ginoecium = new Ginoecium()
Mimosa_ostenii.ginoecium.ovary = new Ovary()

Mimosa_ostenii.fruit = new Fruit()
Mimosa_ostenii.fruit.stipe = new Stipe()
Mimosa_ostenii.fruit.replum = new Replum()
Mimosa_ostenii.fruit.epicarp = new Epicarp()

Mimosa_ostenii.seed = new Seed()


// Description authorship
Mimosa_ostenii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_ostenii.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa ostenii
export { Mimosa_ostenii }