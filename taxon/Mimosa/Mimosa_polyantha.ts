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
import { Peduncle, Spicate } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa polyantha
const Mimosa_polyantha = new Mimosa()
Mimosa_polyantha.specificEpithet = 'polyantha'

Mimosa_polyantha.stems = new Stems()

Mimosa_polyantha.stipule = new Stipule()
Mimosa_polyantha.stipule.margin = new MarginStipule()
Mimosa_polyantha.stipule.adaxial = new AdaxialStipule()
Mimosa_polyantha.stipule.abaxial = new AbaxialStipule()

Mimosa_polyantha.leaf = new Leaf()
Mimosa_polyantha.leaf.petiole = new Petiole()
Mimosa_polyantha.leaf.bipinnate = new Bipinnate()
Mimosa_polyantha.leaf.bipinnate.rachis = new Rachis()
Mimosa_polyantha.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_polyantha.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_polyantha.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_polyantha.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_polyantha.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_polyantha.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(2)
Mimosa_polyantha.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(3, 16)
Mimosa_polyantha.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_polyantha.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_polyantha.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_polyantha.inflorescence = new Inflorescence()
Mimosa_polyantha.inflorescence.peduncle = new Peduncle()
Mimosa_polyantha.inflorescence.spicate = new Spicate()

Mimosa_polyantha.flower = new Flower()
Mimosa_polyantha.flower.bracteole = new Bracteole()
Mimosa_polyantha.flower.merism = ['4-merous', '5-merous']
Mimosa_polyantha.flower.calyx = new Calyx()
Mimosa_polyantha.flower.calyx.shape = 'campanulate'
Mimosa_polyantha.flower.corolla = new Corolla()
Mimosa_polyantha.flower.corolla.shape = ['turbinate', 'campanulate']

Mimosa_polyantha.androecium = new Androecium()
Mimosa_polyantha.androecium.filaments = new Filaments()
Mimosa_polyantha.androecium.filaments.colour = ['whitenish', 'lilac']

Mimosa_polyantha.ginoecium = new Ginoecium()
Mimosa_polyantha.ginoecium.ovary = new Ovary()

Mimosa_polyantha.fruit = new Fruit()
Mimosa_polyantha.fruit.stipe = new Stipe()
Mimosa_polyantha.fruit.replum = new Replum()
Mimosa_polyantha.fruit.epicarp = new Epicarp()

Mimosa_polyantha.seed = new Seed()


// Description authorship
Mimosa_polyantha.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_polyantha.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa polyantha
export { Mimosa_polyantha }