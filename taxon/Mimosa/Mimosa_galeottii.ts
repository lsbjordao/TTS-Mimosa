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


// Description of Mimosa galeottii
const Mimosa_galeottii = new Mimosa()
Mimosa_galeottii.specificEpithet = 'galeottii'

Mimosa_galeottii.stems = new Stems()

Mimosa_galeottii.stipule = new Stipule()
Mimosa_galeottii.stipule.margin = new MarginStipule()
Mimosa_galeottii.stipule.adaxial = new AdaxialStipule()
Mimosa_galeottii.stipule.abaxial = new AbaxialStipule()

Mimosa_galeottii.leaf = new Leaf()
Mimosa_galeottii.leaf.petiole = new Petiole()
Mimosa_galeottii.leaf.bipinnate = new Bipinnate()
Mimosa_galeottii.leaf.bipinnate.rachis = new Rachis()
Mimosa_galeottii.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_galeottii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_galeottii.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_galeottii.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_galeottii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_galeottii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(6)
Mimosa_galeottii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(7, 12)
Mimosa_galeottii.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_galeottii.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_galeottii.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_galeottii.inflorescence = new Inflorescence()
Mimosa_galeottii.inflorescence.peduncle = new Peduncle()
Mimosa_galeottii.inflorescence.capitate = new CapitateInflorescence()

Mimosa_galeottii.flower = new Flower()
Mimosa_galeottii.flower.bracteole = new Bracteole()
Mimosa_galeottii.flower.merism = '5-merous'
Mimosa_galeottii.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_galeottii.flower.calyx = new Calyx()
Mimosa_galeottii.flower.calyx.shape = 'campanulate'
Mimosa_galeottii.flower.corolla = new Corolla()
Mimosa_galeottii.flower.corolla.shape = 'vase-shaped'

Mimosa_galeottii.androecium = new Androecium()
Mimosa_galeottii.androecium.filaments = new Filaments()
Mimosa_galeottii.androecium.filaments.colour = 'whitenish'

Mimosa_galeottii.ginoecium = new Ginoecium()
Mimosa_galeottii.ginoecium.ovary = new Ovary()

Mimosa_galeottii.fruit = new Fruit()
Mimosa_galeottii.fruit.stipe = new Stipe()
Mimosa_galeottii.fruit.replum = new Replum()
Mimosa_galeottii.fruit.epicarp = new Epicarp()

Mimosa_galeottii.seed = new Seed()


// Description authorship
Mimosa_galeottii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_galeottii.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa galeottii
export { Mimosa_galeottii }