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


// Description of Mimosa congestifolia
const Mimosa_congestifolia = new Mimosa()
Mimosa_congestifolia.specificEpithet = 'congestifolia'

Mimosa_congestifolia.stems = new Stems()

Mimosa_congestifolia.stipule = new Stipule()
Mimosa_congestifolia.stipule.margin = new MarginStipule()
Mimosa_congestifolia.stipule.adaxial = new AdaxialStipule()
Mimosa_congestifolia.stipule.abaxial = new AbaxialStipule()

Mimosa_congestifolia.leaf = new Leaf()
Mimosa_congestifolia.leaf.petiole = new Petiole()
Mimosa_congestifolia.leaf.bipinnate = new Bipinnate()
Mimosa_congestifolia.leaf.bipinnate.rachis = new Rachis()
Mimosa_congestifolia.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_congestifolia.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_congestifolia.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_congestifolia.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_congestifolia.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_congestifolia.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_congestifolia.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_congestifolia.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_congestifolia.inflorescence = new Inflorescence()
Mimosa_congestifolia.inflorescence.peduncle = new Peduncle()
Mimosa_congestifolia.inflorescence.capitate = new CapitateInflorescence()

Mimosa_congestifolia.flower = new Flower()
Mimosa_congestifolia.flower.bracteole = new Bracteole()
Mimosa_congestifolia.flower.merism = '4-merous'
Mimosa_congestifolia.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_congestifolia.flower.calyx = new Calyx()
Mimosa_congestifolia.flower.calyx.shape = 'campanulate'
Mimosa_congestifolia.flower.corolla = new Corolla()
Mimosa_congestifolia.flower.corolla.shape = 'subcylindric'

Mimosa_congestifolia.androecium = new Androecium()
Mimosa_congestifolia.androecium.filaments = new Filaments()
Mimosa_congestifolia.androecium.filaments.colour = 'pinkish'

Mimosa_congestifolia.ginoecium = new Ginoecium()
Mimosa_congestifolia.ginoecium.ovary = new Ovary()

Mimosa_congestifolia.fruit = new Fruit()
Mimosa_congestifolia.fruit.stipe = new Stipe()
Mimosa_congestifolia.fruit.replum = new Replum()
Mimosa_congestifolia.fruit.epicarp = new Epicarp()

Mimosa_congestifolia.seed = new Seed()


// Description authorship
Mimosa_congestifolia.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_congestifolia.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa congestifolia
export { Mimosa_congestifolia }