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


// Description of Mimosa kuhlmannii
const Mimosa_kuhlmannii = new Mimosa()
Mimosa_kuhlmannii.specificEpithet = 'kuhlmannii'

Mimosa_kuhlmannii.stems = new Stems()

Mimosa_kuhlmannii.stipule = new Stipule()
Mimosa_kuhlmannii.stipule.margin = new MarginStipule()
Mimosa_kuhlmannii.stipule.adaxial = new AdaxialStipule()
Mimosa_kuhlmannii.stipule.abaxial = new AbaxialStipule()

Mimosa_kuhlmannii.leaf = new Leaf()
Mimosa_kuhlmannii.leaf.petiole = new Petiole()
Mimosa_kuhlmannii.leaf.bipinnate = new Bipinnate()
Mimosa_kuhlmannii.leaf.bipinnate.rachis = new Rachis()
Mimosa_kuhlmannii.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_kuhlmannii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_kuhlmannii.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_kuhlmannii.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_kuhlmannii.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_kuhlmannii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_kuhlmannii.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_kuhlmannii.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_kuhlmannii.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_kuhlmannii.inflorescence = new Inflorescence()
Mimosa_kuhlmannii.inflorescence.peduncle = new Peduncle()
Mimosa_kuhlmannii.inflorescence.capitate = new CapitateInflorescence()

Mimosa_kuhlmannii.flower = new Flower()
Mimosa_kuhlmannii.flower.bracteole = new Bracteole()
Mimosa_kuhlmannii.flower.merism = '4-merous'
Mimosa_kuhlmannii.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_kuhlmannii.flower.calyx = new Calyx()
Mimosa_kuhlmannii.flower.calyx.shape = 'pappiform'
Mimosa_kuhlmannii.flower.corolla = new Corolla()
Mimosa_kuhlmannii.flower.corolla.shape = 'vase-shaped'

Mimosa_kuhlmannii.androecium = new Androecium()
Mimosa_kuhlmannii.androecium.filaments = new Filaments()
Mimosa_kuhlmannii.androecium.filaments.colour = 'pinkish'

Mimosa_kuhlmannii.ginoecium = new Ginoecium()
Mimosa_kuhlmannii.ginoecium.ovary = new Ovary()

Mimosa_kuhlmannii.fruit = new Fruit()
Mimosa_kuhlmannii.fruit.stipe = new Stipe()
Mimosa_kuhlmannii.fruit.replum = new Replum()
Mimosa_kuhlmannii.fruit.epicarp = new Epicarp()

Mimosa_kuhlmannii.seed = new Seed()


// Description authorship
Mimosa_kuhlmannii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_kuhlmannii.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa kuhlmannii
export { Mimosa_kuhlmannii }