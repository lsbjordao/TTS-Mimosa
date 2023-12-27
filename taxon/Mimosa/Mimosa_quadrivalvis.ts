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


// Description of Mimosa quadrivalvis
const Mimosa_quadrivalvis = new Mimosa()
Mimosa_quadrivalvis.specificEpithet = 'quadrivalvis'

Mimosa_quadrivalvis.stems = new Stems()

Mimosa_quadrivalvis.stipule = new Stipule()
Mimosa_quadrivalvis.stipule.margin = new MarginStipule()
Mimosa_quadrivalvis.stipule.adaxial = new AdaxialStipule()
Mimosa_quadrivalvis.stipule.abaxial = new AbaxialStipule()

Mimosa_quadrivalvis.leaf = new Leaf()
Mimosa_quadrivalvis.leaf.petiole = new Petiole()
Mimosa_quadrivalvis.leaf.bipinnate = new Bipinnate()
Mimosa_quadrivalvis.leaf.bipinnate.rachis = new Rachis()
Mimosa_quadrivalvis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_quadrivalvis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_quadrivalvis.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(1, 9)
Mimosa_quadrivalvis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_quadrivalvis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_quadrivalvis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_quadrivalvis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(4, 6)
Mimosa_quadrivalvis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_quadrivalvis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_quadrivalvis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_quadrivalvis.inflorescence = new Inflorescence()
Mimosa_quadrivalvis.inflorescence.peduncle = new Peduncle()
Mimosa_quadrivalvis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_quadrivalvis.flower = new Flower()
Mimosa_quadrivalvis.flower.bracteole = new Bracteole()
Mimosa_quadrivalvis.flower.merism = ['4-merous', '5-merous', '6-merous']
Mimosa_quadrivalvis.flower.calyx = new Calyx()
Mimosa_quadrivalvis.flower.calyx.shape = 'campanulate'
Mimosa_quadrivalvis.flower.corolla = new Corolla()
Mimosa_quadrivalvis.flower.corolla.shape = ['turbinate', 'vase-shaped']

Mimosa_quadrivalvis.androecium = new Androecium()
Mimosa_quadrivalvis.androecium.filaments = new Filaments()
Mimosa_quadrivalvis.androecium.filaments.colour = ['pinkish', 'purplish']

Mimosa_quadrivalvis.ginoecium = new Ginoecium()
Mimosa_quadrivalvis.ginoecium.ovary = new Ovary()

Mimosa_quadrivalvis.fruit = new Fruit()
Mimosa_quadrivalvis.fruit.stipe = new Stipe()
Mimosa_quadrivalvis.fruit.replum = new Replum()
Mimosa_quadrivalvis.fruit.epicarp = new Epicarp()

Mimosa_quadrivalvis.seed = new Seed()


// Description authorship
Mimosa_quadrivalvis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_quadrivalvis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa quadrivalvis
export { Mimosa_quadrivalvis }