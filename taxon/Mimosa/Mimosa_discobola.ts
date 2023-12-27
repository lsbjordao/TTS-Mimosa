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


// Description of Mimosa discobola
const Mimosa_discobola = new Mimosa()
Mimosa_discobola.specificEpithet = 'discobola'

Mimosa_discobola.stems = new Stems()

Mimosa_discobola.stipule = new Stipule()
Mimosa_discobola.stipule.margin = new MarginStipule()
Mimosa_discobola.stipule.adaxial = new AdaxialStipule()
Mimosa_discobola.stipule.abaxial = new AbaxialStipule()

Mimosa_discobola.leaf = new Leaf()
Mimosa_discobola.leaf.petiole = new Petiole()
Mimosa_discobola.leaf.bipinnate = new Bipinnate()
Mimosa_discobola.leaf.bipinnate.rachis = new Rachis()
Mimosa_discobola.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_discobola.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_discobola.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(1)
Mimosa_discobola.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 4)
Mimosa_discobola.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_discobola.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_discobola.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_discobola.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(5)
Mimosa_discobola.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(6, 9)
Mimosa_discobola.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(11)
Mimosa_discobola.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_discobola.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_discobola.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_discobola.inflorescence = new Inflorescence()
Mimosa_discobola.inflorescence.peduncle = new Peduncle()
Mimosa_discobola.inflorescence.capitate = new CapitateInflorescence()

Mimosa_discobola.flower = new Flower()
Mimosa_discobola.flower.bracteole = new Bracteole()
Mimosa_discobola.flower.merism = '4-merous'
Mimosa_discobola.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_discobola.flower.calyx = new Calyx()
Mimosa_discobola.flower.calyx.shape = 'paleaceous'
Mimosa_discobola.flower.corolla = new Corolla()
Mimosa_discobola.flower.corolla.shape = ['tubulose', 'funnelform']

Mimosa_discobola.androecium = new Androecium()
Mimosa_discobola.androecium.filaments = new Filaments()
Mimosa_discobola.androecium.filaments.colour = 'pinkish'

Mimosa_discobola.ginoecium = new Ginoecium()
Mimosa_discobola.ginoecium.ovary = new Ovary()

Mimosa_discobola.fruit = new Fruit()
Mimosa_discobola.fruit.stipe = new Stipe()
Mimosa_discobola.fruit.replum = new Replum()
Mimosa_discobola.fruit.epicarp = new Epicarp()

Mimosa_discobola.seed = new Seed()


// Description authorship
Mimosa_discobola.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_discobola.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa discobola
export { Mimosa_discobola }