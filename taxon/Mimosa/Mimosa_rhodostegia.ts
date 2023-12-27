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


// Description of Mimosa rhodostegia
const Mimosa_rhodostegia = new Mimosa()
Mimosa_rhodostegia.specificEpithet = 'rhodostegia'

Mimosa_rhodostegia.stems = new Stems()

Mimosa_rhodostegia.stipule = new Stipule()
Mimosa_rhodostegia.stipule.margin = new MarginStipule()
Mimosa_rhodostegia.stipule.adaxial = new AdaxialStipule()
Mimosa_rhodostegia.stipule.abaxial = new AbaxialStipule()

Mimosa_rhodostegia.leaf = new Leaf()
Mimosa_rhodostegia.leaf.petiole = new Petiole()
Mimosa_rhodostegia.leaf.bipinnate = new Bipinnate()
Mimosa_rhodostegia.leaf.bipinnate.rachis = new Rachis()
Mimosa_rhodostegia.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_rhodostegia.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_rhodostegia.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(25, 44)
Mimosa_rhodostegia.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_rhodostegia.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_rhodostegia.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_rhodostegia.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(5, 8)
Mimosa_rhodostegia.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_rhodostegia.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_rhodostegia.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_rhodostegia.inflorescence = new Inflorescence()
Mimosa_rhodostegia.inflorescence.peduncle = new Peduncle()
Mimosa_rhodostegia.inflorescence.capitate = new CapitateInflorescence()

Mimosa_rhodostegia.flower = new Flower()
Mimosa_rhodostegia.flower.bracteole = new Bracteole()
Mimosa_rhodostegia.flower.merism = '4-merous'
Mimosa_rhodostegia.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_rhodostegia.flower.calyx = new Calyx()
Mimosa_rhodostegia.flower.calyx.shape = 'campanulate'
Mimosa_rhodostegia.flower.corolla = new Corolla()
Mimosa_rhodostegia.flower.corolla.shape = 'funnelform'

Mimosa_rhodostegia.androecium = new Androecium()
Mimosa_rhodostegia.androecium.filaments = new Filaments()
Mimosa_rhodostegia.androecium.filaments.colour = 'pinkish'

Mimosa_rhodostegia.ginoecium = new Ginoecium()
Mimosa_rhodostegia.ginoecium.ovary = new Ovary()

Mimosa_rhodostegia.fruit = new Fruit()
Mimosa_rhodostegia.fruit.stipe = new Stipe()
Mimosa_rhodostegia.fruit.replum = new Replum()
Mimosa_rhodostegia.fruit.epicarp = new Epicarp()

Mimosa_rhodostegia.seed = new Seed()


// Description authorship
Mimosa_rhodostegia.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_rhodostegia.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa rhodostegia
export { Mimosa_rhodostegia }