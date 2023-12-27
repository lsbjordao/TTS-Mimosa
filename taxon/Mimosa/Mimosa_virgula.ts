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


// Description of Mimosa virgula
const Mimosa_virgula = new Mimosa()
Mimosa_virgula.specificEpithet = 'virgula'

Mimosa_virgula.stems = new Stems()

Mimosa_virgula.stipule = new Stipule()
Mimosa_virgula.stipule.margin = new MarginStipule()
Mimosa_virgula.stipule.adaxial = new AdaxialStipule()
Mimosa_virgula.stipule.abaxial = new AbaxialStipule()

Mimosa_virgula.leaf = new Leaf()
Mimosa_virgula.leaf.petiole = new Petiole()
Mimosa_virgula.leaf.bipinnate = new Bipinnate()
Mimosa_virgula.leaf.bipinnate.rachis = new Rachis()
Mimosa_virgula.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_virgula.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_virgula.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_virgula.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_virgula.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_virgula.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(28, 4)
Mimosa_virgula.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_virgula.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_virgula.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_virgula.inflorescence = new Inflorescence()
Mimosa_virgula.inflorescence.peduncle = new Peduncle()
Mimosa_virgula.inflorescence.capitate = new CapitateInflorescence()

Mimosa_virgula.flower = new Flower()
Mimosa_virgula.flower.bracteole = new Bracteole()
Mimosa_virgula.flower.merism = '4-merous'
Mimosa_virgula.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_virgula.flower.calyx = new Calyx()
Mimosa_virgula.flower.calyx.shape = 'paleaceous'
Mimosa_virgula.flower.corolla = new Corolla()
Mimosa_virgula.flower.corolla.shape = 'funnelform'

Mimosa_virgula.androecium = new Androecium()
Mimosa_virgula.androecium.filaments = new Filaments()
Mimosa_virgula.androecium.filaments.colour = 'pinkish'

Mimosa_virgula.ginoecium = new Ginoecium()
Mimosa_virgula.ginoecium.ovary = new Ovary()

Mimosa_virgula.fruit = new Fruit()
Mimosa_virgula.fruit.stipe = new Stipe()
Mimosa_virgula.fruit.replum = new Replum()
Mimosa_virgula.fruit.epicarp = new Epicarp()

Mimosa_virgula.seed = new Seed()


// Description authorship
Mimosa_virgula.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_virgula.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa virgula
export { Mimosa_virgula }