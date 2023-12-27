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


// Description of Mimosa grahamii
const Mimosa_grahamii = new Mimosa()
Mimosa_grahamii.specificEpithet = 'grahamii'

Mimosa_grahamii.stems = new Stems()

Mimosa_grahamii.stipule = new Stipule()
Mimosa_grahamii.stipule.margin = new MarginStipule()
Mimosa_grahamii.stipule.adaxial = new AdaxialStipule()
Mimosa_grahamii.stipule.abaxial = new AbaxialStipule()

Mimosa_grahamii.leaf = new Leaf()
Mimosa_grahamii.leaf.petiole = new Petiole()
Mimosa_grahamii.leaf.bipinnate = new Bipinnate()
Mimosa_grahamii.leaf.bipinnate.rachis = new Rachis()
Mimosa_grahamii.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_grahamii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_grahamii.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_grahamii.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_grahamii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_grahamii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(18, 25)
Mimosa_grahamii.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_grahamii.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_grahamii.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_grahamii.inflorescence = new Inflorescence()
Mimosa_grahamii.inflorescence.peduncle = new Peduncle()
Mimosa_grahamii.inflorescence.capitate = new CapitateInflorescence()

Mimosa_grahamii.flower = new Flower()
Mimosa_grahamii.flower.bracteole = new Bracteole()
Mimosa_grahamii.flower.merism = '5-merous'
Mimosa_grahamii.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_grahamii.flower.calyx = new Calyx()
Mimosa_grahamii.flower.calyx.shape = 'campanulate'
Mimosa_grahamii.flower.corolla = new Corolla()
Mimosa_grahamii.flower.corolla.shape = 'subtubular'

Mimosa_grahamii.androecium = new Androecium()
Mimosa_grahamii.androecium.filaments = new Filaments()
Mimosa_grahamii.androecium.filaments.colour = 'whitenish'

Mimosa_grahamii.ginoecium = new Ginoecium()
Mimosa_grahamii.ginoecium.ovary = new Ovary()

Mimosa_grahamii.fruit = new Fruit()
Mimosa_grahamii.fruit.stipe = new Stipe()
Mimosa_grahamii.fruit.replum = new Replum()
Mimosa_grahamii.fruit.epicarp = new Epicarp()

Mimosa_grahamii.seed = new Seed()


// Description authorship
Mimosa_grahamii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_grahamii.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa grahamii
export { Mimosa_grahamii }