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


// Description of Mimosa teledactyla
const Mimosa_teledactyla = new Mimosa()
Mimosa_teledactyla.specificEpithet = 'teledactyla'

Mimosa_teledactyla.stems = new Stems()

Mimosa_teledactyla.stipule = new Stipule()
Mimosa_teledactyla.stipule.margin = new MarginStipule()
Mimosa_teledactyla.stipule.adaxial = new AdaxialStipule()
Mimosa_teledactyla.stipule.abaxial = new AbaxialStipule()

Mimosa_teledactyla.leaf = new Leaf()
Mimosa_teledactyla.leaf.petiole = new Petiole()
Mimosa_teledactyla.leaf.bipinnate = new Bipinnate()
Mimosa_teledactyla.leaf.bipinnate.rachis = new Rachis()
Mimosa_teledactyla.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_teledactyla.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_teledactyla.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_teledactyla.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_teledactyla.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_teledactyla.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(12, 16)
Mimosa_teledactyla.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_teledactyla.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_teledactyla.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_teledactyla.inflorescence = new Inflorescence()
Mimosa_teledactyla.inflorescence.peduncle = new Peduncle()
Mimosa_teledactyla.inflorescence.capitate = new CapitateInflorescence()

Mimosa_teledactyla.flower = new Flower()
Mimosa_teledactyla.flower.bracteole = new Bracteole()
Mimosa_teledactyla.flower.calyx = new Calyx()
Mimosa_teledactyla.flower.calyx.shape = 'campanulate'
Mimosa_teledactyla.flower.corolla = new Corolla()

Mimosa_teledactyla.androecium = new Androecium()
Mimosa_teledactyla.androecium.filaments = new Filaments()

Mimosa_teledactyla.ginoecium = new Ginoecium()
Mimosa_teledactyla.ginoecium.ovary = new Ovary()

Mimosa_teledactyla.fruit = new Fruit()
Mimosa_teledactyla.fruit.stipe = new Stipe()
Mimosa_teledactyla.fruit.replum = new Replum()
Mimosa_teledactyla.fruit.epicarp = new Epicarp()

Mimosa_teledactyla.seed = new Seed()


// Description authorship
Mimosa_teledactyla.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_teledactyla.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa teledactyla
export { Mimosa_teledactyla }