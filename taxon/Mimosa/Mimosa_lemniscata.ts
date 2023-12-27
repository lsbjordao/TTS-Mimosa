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


// Description of Mimosa lemniscata
const Mimosa_lemniscata = new Mimosa()
Mimosa_lemniscata.specificEpithet = 'lemniscata'

Mimosa_lemniscata.stems = new Stems()

Mimosa_lemniscata.stipule = new Stipule()
Mimosa_lemniscata.stipule.margin = new MarginStipule()
Mimosa_lemniscata.stipule.adaxial = new AdaxialStipule()
Mimosa_lemniscata.stipule.abaxial = new AbaxialStipule()

Mimosa_lemniscata.leaf = new Leaf()
Mimosa_lemniscata.leaf.petiole = new Petiole()
Mimosa_lemniscata.leaf.bipinnate = new Bipinnate()
Mimosa_lemniscata.leaf.bipinnate.rachis = new Rachis()
Mimosa_lemniscata.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_lemniscata.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_lemniscata.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(7, 10)
Mimosa_lemniscata.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_lemniscata.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_lemniscata.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_lemniscata.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(27)
Mimosa_lemniscata.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(30, 48)
Mimosa_lemniscata.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_lemniscata.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_lemniscata.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_lemniscata.inflorescence = new Inflorescence()
Mimosa_lemniscata.inflorescence.peduncle = new Peduncle()
Mimosa_lemniscata.inflorescence.capitate = new CapitateInflorescence()

Mimosa_lemniscata.flower = new Flower()
Mimosa_lemniscata.flower.bracteole = new Bracteole()
Mimosa_lemniscata.flower.merism = '5-merous'
Mimosa_lemniscata.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_lemniscata.flower.calyx = new Calyx()
Mimosa_lemniscata.flower.calyx.shape = 'campanulate'
Mimosa_lemniscata.flower.corolla = new Corolla()
Mimosa_lemniscata.flower.corolla.shape = 'vase-shaped'

Mimosa_lemniscata.androecium = new Androecium()
Mimosa_lemniscata.androecium.filaments = new Filaments()
Mimosa_lemniscata.androecium.filaments.colour = 'whitenish'

Mimosa_lemniscata.ginoecium = new Ginoecium()
Mimosa_lemniscata.ginoecium.ovary = new Ovary()

Mimosa_lemniscata.fruit = new Fruit()
Mimosa_lemniscata.fruit.stipe = new Stipe()
Mimosa_lemniscata.fruit.replum = new Replum()
Mimosa_lemniscata.fruit.epicarp = new Epicarp()

Mimosa_lemniscata.seed = new Seed()


// Description authorship
Mimosa_lemniscata.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_lemniscata.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa lemniscata
export { Mimosa_lemniscata }