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


// Description of Mimosa micropteris
const Mimosa_micropteris = new Mimosa()
Mimosa_micropteris.specificEpithet = 'micropteris'

Mimosa_micropteris.stems = new Stems()

Mimosa_micropteris.stipule = new Stipule()
Mimosa_micropteris.stipule.margin = new MarginStipule()
Mimosa_micropteris.stipule.adaxial = new AdaxialStipule()
Mimosa_micropteris.stipule.abaxial = new AbaxialStipule()

Mimosa_micropteris.leaf = new Leaf()
Mimosa_micropteris.leaf.petiole = new Petiole()
Mimosa_micropteris.leaf.bipinnate = new Bipinnate()
Mimosa_micropteris.leaf.bipinnate.rachis = new Rachis()
Mimosa_micropteris.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_micropteris.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_micropteris.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(4, 12)
Mimosa_micropteris.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(13)
Mimosa_micropteris.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_micropteris.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_micropteris.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_micropteris.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(8, 11)
Mimosa_micropteris.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_micropteris.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_micropteris.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_micropteris.inflorescence = new Inflorescence()
Mimosa_micropteris.inflorescence.peduncle = new Peduncle()
Mimosa_micropteris.inflorescence.capitate = new CapitateInflorescence()

Mimosa_micropteris.flower = new Flower()
Mimosa_micropteris.flower.bracteole = new Bracteole()
Mimosa_micropteris.flower.merism = '4-merous'
Mimosa_micropteris.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_micropteris.flower.calyx = new Calyx()
Mimosa_micropteris.flower.calyx.shape = 'paleaceous-pappiform'
Mimosa_micropteris.flower.corolla = new Corolla()

Mimosa_micropteris.androecium = new Androecium()
Mimosa_micropteris.androecium.filaments = new Filaments()
Mimosa_micropteris.androecium.filaments.colour = ['pinkish', 'lilac']

Mimosa_micropteris.ginoecium = new Ginoecium()
Mimosa_micropteris.ginoecium.ovary = new Ovary()

Mimosa_micropteris.fruit = new Fruit()
Mimosa_micropteris.fruit.stipe = new Stipe()
Mimosa_micropteris.fruit.replum = new Replum()
Mimosa_micropteris.fruit.epicarp = new Epicarp()

Mimosa_micropteris.seed = new Seed()


// Description authorship
Mimosa_micropteris.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_micropteris.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa micropteris
export { Mimosa_micropteris }