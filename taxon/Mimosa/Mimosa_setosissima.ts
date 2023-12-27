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


// Description of Mimosa setosissima
const Mimosa_setosissima = new Mimosa()
Mimosa_setosissima.specificEpithet = 'setosissima'

Mimosa_setosissima.stems = new Stems()

Mimosa_setosissima.stipule = new Stipule()
Mimosa_setosissima.stipule.margin = new MarginStipule()
Mimosa_setosissima.stipule.adaxial = new AdaxialStipule()
Mimosa_setosissima.stipule.abaxial = new AbaxialStipule()

Mimosa_setosissima.leaf = new Leaf()
Mimosa_setosissima.leaf.petiole = new Petiole()
Mimosa_setosissima.leaf.bipinnate = new Bipinnate()
Mimosa_setosissima.leaf.bipinnate.rachis = new Rachis()
Mimosa_setosissima.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_setosissima.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_setosissima.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(14, 24)
Mimosa_setosissima.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(26)
Mimosa_setosissima.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_setosissima.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_setosissima.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_setosissima.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(29, 33)
Mimosa_setosissima.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_setosissima.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_setosissima.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_setosissima.inflorescence = new Inflorescence()
Mimosa_setosissima.inflorescence.peduncle = new Peduncle()
Mimosa_setosissima.inflorescence.capitate = new CapitateInflorescence()

Mimosa_setosissima.flower = new Flower()
Mimosa_setosissima.flower.bracteole = new Bracteole()
Mimosa_setosissima.flower.merism = '4-merous'
Mimosa_setosissima.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_setosissima.flower.calyx = new Calyx()
Mimosa_setosissima.flower.corolla = new Corolla()
Mimosa_setosissima.flower.corolla.shape = ['tubulose', 'funnelform']

Mimosa_setosissima.androecium = new Androecium()
Mimosa_setosissima.androecium.filaments = new Filaments()
Mimosa_setosissima.androecium.filaments.colour = 'pinkish'

Mimosa_setosissima.ginoecium = new Ginoecium()
Mimosa_setosissima.ginoecium.ovary = new Ovary()

Mimosa_setosissima.fruit = new Fruit()
Mimosa_setosissima.fruit.stipe = new Stipe()
Mimosa_setosissima.fruit.replum = new Replum()
Mimosa_setosissima.fruit.epicarp = new Epicarp()

Mimosa_setosissima.seed = new Seed()


// Description authorship
Mimosa_setosissima.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_setosissima.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa setosissima
export { Mimosa_setosissima }