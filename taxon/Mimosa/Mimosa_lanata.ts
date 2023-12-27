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


// Description of Mimosa lanata
const Mimosa_lanata = new Mimosa()
Mimosa_lanata.specificEpithet = 'lanata'

Mimosa_lanata.stems = new Stems()

Mimosa_lanata.stipule = new Stipule()
Mimosa_lanata.stipule.margin = new MarginStipule()
Mimosa_lanata.stipule.adaxial = new AdaxialStipule()
Mimosa_lanata.stipule.abaxial = new AbaxialStipule()

Mimosa_lanata.leaf = new Leaf()
Mimosa_lanata.leaf.petiole = new Petiole()
Mimosa_lanata.leaf.bipinnate = new Bipinnate()
Mimosa_lanata.leaf.bipinnate.rachis = new Rachis()
Mimosa_lanata.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_lanata.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_lanata.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_lanata.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_lanata.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_lanata.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_lanata.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(17, 26)
Mimosa_lanata.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(31)
Mimosa_lanata.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_lanata.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_lanata.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_lanata.inflorescence = new Inflorescence()
Mimosa_lanata.inflorescence.peduncle = new Peduncle()
Mimosa_lanata.inflorescence.capitate = new CapitateInflorescence()

Mimosa_lanata.flower = new Flower()
Mimosa_lanata.flower.bracteole = new Bracteole()
Mimosa_lanata.flower.merism = '4-merous'
Mimosa_lanata.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_lanata.flower.calyx = new Calyx()
Mimosa_lanata.flower.calyx.shape = 'paleaceous-pappiform'
Mimosa_lanata.flower.corolla = new Corolla()
Mimosa_lanata.flower.corolla.shape = 'funnelform'

Mimosa_lanata.androecium = new Androecium()
Mimosa_lanata.androecium.filaments = new Filaments()
Mimosa_lanata.androecium.filaments.colour = ['pinkish', 'lilac']

Mimosa_lanata.ginoecium = new Ginoecium()
Mimosa_lanata.ginoecium.ovary = new Ovary()

Mimosa_lanata.fruit = new Fruit()
Mimosa_lanata.fruit.stipe = new Stipe()
Mimosa_lanata.fruit.replum = new Replum()
Mimosa_lanata.fruit.epicarp = new Epicarp()

Mimosa_lanata.seed = new Seed()


// Description authorship
Mimosa_lanata.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_lanata.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa lanata
export { Mimosa_lanata }