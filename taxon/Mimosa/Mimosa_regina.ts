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


// Description of Mimosa regina
const Mimosa_regina = new Mimosa()
Mimosa_regina.specificEpithet = 'regina'

Mimosa_regina.stems = new Stems()

Mimosa_regina.stipule = new Stipule()
Mimosa_regina.stipule.margin = new MarginStipule()
Mimosa_regina.stipule.adaxial = new AdaxialStipule()
Mimosa_regina.stipule.abaxial = new AbaxialStipule()

Mimosa_regina.leaf = new Leaf()
Mimosa_regina.leaf.petiole = new Petiole()
Mimosa_regina.leaf.bipinnate = new Bipinnate()
Mimosa_regina.leaf.bipinnate.rachis = new Rachis()
Mimosa_regina.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_regina.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_regina.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(25, 32)
Mimosa_regina.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_regina.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_regina.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_regina.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(11, 21)
Mimosa_regina.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(25)
Mimosa_regina.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_regina.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_regina.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_regina.inflorescence = new Inflorescence()
Mimosa_regina.inflorescence.peduncle = new Peduncle()
Mimosa_regina.inflorescence.capitate = new CapitateInflorescence()

Mimosa_regina.flower = new Flower()
Mimosa_regina.flower.bracteole = new Bracteole()
Mimosa_regina.flower.merism = '4-merous'
Mimosa_regina.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_regina.flower.calyx = new Calyx()
Mimosa_regina.flower.calyx.shape = 'campanulate'
Mimosa_regina.flower.corolla = new Corolla()
Mimosa_regina.flower.corolla.shape = 'funnelform'

Mimosa_regina.androecium = new Androecium()
Mimosa_regina.androecium.filaments = new Filaments()
Mimosa_regina.androecium.filaments.colour = 'pinkish'

Mimosa_regina.ginoecium = new Ginoecium()
Mimosa_regina.ginoecium.ovary = new Ovary()

Mimosa_regina.fruit = new Fruit()
Mimosa_regina.fruit.stipe = new Stipe()
Mimosa_regina.fruit.replum = new Replum()
Mimosa_regina.fruit.epicarp = new Epicarp()

Mimosa_regina.seed = new Seed()


// Description authorship
Mimosa_regina.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_regina.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa regina
export { Mimosa_regina }