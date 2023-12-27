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


// Description of Mimosa rondoniana
const Mimosa_rondoniana = new Mimosa()
Mimosa_rondoniana.specificEpithet = 'rondoniana'

Mimosa_rondoniana.stems = new Stems()

Mimosa_rondoniana.stipule = new Stipule()
Mimosa_rondoniana.stipule.margin = new MarginStipule()
Mimosa_rondoniana.stipule.adaxial = new AdaxialStipule()
Mimosa_rondoniana.stipule.abaxial = new AbaxialStipule()

Mimosa_rondoniana.leaf = new Leaf()
Mimosa_rondoniana.leaf.petiole = new Petiole()
Mimosa_rondoniana.leaf.bipinnate = new Bipinnate()
Mimosa_rondoniana.leaf.bipinnate.rachis = new Rachis()
Mimosa_rondoniana.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_rondoniana.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_rondoniana.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 4)
Mimosa_rondoniana.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_rondoniana.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_rondoniana.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_rondoniana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(9, 13)
Mimosa_rondoniana.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_rondoniana.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_rondoniana.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_rondoniana.inflorescence = new Inflorescence()
Mimosa_rondoniana.inflorescence.peduncle = new Peduncle()
Mimosa_rondoniana.inflorescence.capitate = new CapitateInflorescence()

Mimosa_rondoniana.flower = new Flower()
Mimosa_rondoniana.flower.bracteole = new Bracteole()
Mimosa_rondoniana.flower.merism = '4-merous'
Mimosa_rondoniana.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_rondoniana.flower.calyx = new Calyx()
Mimosa_rondoniana.flower.calyx.shape = 'campanulate'
Mimosa_rondoniana.flower.corolla = new Corolla()
Mimosa_rondoniana.flower.corolla.shape = 'turbinate'

Mimosa_rondoniana.androecium = new Androecium()
Mimosa_rondoniana.androecium.filaments = new Filaments()
Mimosa_rondoniana.androecium.filaments.colour = 'pinkish'

Mimosa_rondoniana.ginoecium = new Ginoecium()
Mimosa_rondoniana.ginoecium.ovary = new Ovary()

Mimosa_rondoniana.fruit = new Fruit()
Mimosa_rondoniana.fruit.stipe = new Stipe()
Mimosa_rondoniana.fruit.replum = new Replum()
Mimosa_rondoniana.fruit.epicarp = new Epicarp()

Mimosa_rondoniana.seed = new Seed()


// Description authorship
Mimosa_rondoniana.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_rondoniana.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa rondoniana
export { Mimosa_rondoniana }