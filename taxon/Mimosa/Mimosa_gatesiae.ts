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


// Description of Mimosa gatesiae
const Mimosa_gatesiae = new Mimosa()
Mimosa_gatesiae.specificEpithet = 'gatesiae'

Mimosa_gatesiae.stems = new Stems()

Mimosa_gatesiae.stipule = new Stipule()
Mimosa_gatesiae.stipule.margin = new MarginStipule()
Mimosa_gatesiae.stipule.adaxial = new AdaxialStipule()
Mimosa_gatesiae.stipule.abaxial = new AbaxialStipule()

Mimosa_gatesiae.leaf = new Leaf()
Mimosa_gatesiae.leaf.petiole = new Petiole()
Mimosa_gatesiae.leaf.bipinnate = new Bipinnate()
Mimosa_gatesiae.leaf.bipinnate.rachis = new Rachis()
Mimosa_gatesiae.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_gatesiae.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_gatesiae.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 4)
Mimosa_gatesiae.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_gatesiae.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_gatesiae.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_gatesiae.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_gatesiae.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_gatesiae.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_gatesiae.inflorescence = new Inflorescence()
Mimosa_gatesiae.inflorescence.peduncle = new Peduncle()
Mimosa_gatesiae.inflorescence.capitate = new CapitateInflorescence()

Mimosa_gatesiae.flower = new Flower()
Mimosa_gatesiae.flower.bracteole = new Bracteole()
Mimosa_gatesiae.flower.merism = '4-merous'
Mimosa_gatesiae.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_gatesiae.flower.calyx = new Calyx()
Mimosa_gatesiae.flower.corolla = new Corolla()
Mimosa_gatesiae.flower.corolla.shape = 'turbinate'

Mimosa_gatesiae.androecium = new Androecium()
Mimosa_gatesiae.androecium.filaments = new Filaments()
Mimosa_gatesiae.androecium.filaments.colour = 'pinkish'

Mimosa_gatesiae.ginoecium = new Ginoecium()
Mimosa_gatesiae.ginoecium.ovary = new Ovary()

Mimosa_gatesiae.fruit = new Fruit()
Mimosa_gatesiae.fruit.stipe = new Stipe()
Mimosa_gatesiae.fruit.replum = new Replum()
Mimosa_gatesiae.fruit.epicarp = new Epicarp()

Mimosa_gatesiae.seed = new Seed()


// Description authorship
Mimosa_gatesiae.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_gatesiae.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa gatesiae
export { Mimosa_gatesiae }