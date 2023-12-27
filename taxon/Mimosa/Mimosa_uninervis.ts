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


// Description of Mimosa uninervis
const Mimosa_uninervis = new Mimosa()
Mimosa_uninervis.specificEpithet = 'uninervis'

Mimosa_uninervis.stems = new Stems()

Mimosa_uninervis.stipule = new Stipule()
Mimosa_uninervis.stipule.margin = new MarginStipule()
Mimosa_uninervis.stipule.adaxial = new AdaxialStipule()
Mimosa_uninervis.stipule.abaxial = new AbaxialStipule()

Mimosa_uninervis.leaf = new Leaf()
Mimosa_uninervis.leaf.petiole = new Petiole()
Mimosa_uninervis.leaf.bipinnate = new Bipinnate()
Mimosa_uninervis.leaf.bipinnate.rachis = new Rachis()
Mimosa_uninervis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_uninervis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_uninervis.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_uninervis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_uninervis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_uninervis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_uninervis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(5, 7)
Mimosa_uninervis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_uninervis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_uninervis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_uninervis.inflorescence = new Inflorescence()
Mimosa_uninervis.inflorescence.peduncle = new Peduncle()
Mimosa_uninervis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_uninervis.flower = new Flower()
Mimosa_uninervis.flower.bracteole = new Bracteole()
Mimosa_uninervis.flower.merism = '4-merous'
Mimosa_uninervis.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_uninervis.flower.calyx = new Calyx()
Mimosa_uninervis.flower.corolla = new Corolla()

Mimosa_uninervis.androecium = new Androecium()
Mimosa_uninervis.androecium.filaments = new Filaments()
Mimosa_uninervis.androecium.filaments.colour = 'pinkish'

Mimosa_uninervis.ginoecium = new Ginoecium()
Mimosa_uninervis.ginoecium.ovary = new Ovary()

Mimosa_uninervis.fruit = new Fruit()
Mimosa_uninervis.fruit.stipe = new Stipe()
Mimosa_uninervis.fruit.replum = new Replum()
Mimosa_uninervis.fruit.epicarp = new Epicarp()

Mimosa_uninervis.seed = new Seed()


// Description authorship
Mimosa_uninervis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_uninervis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa uninervis
export { Mimosa_uninervis }