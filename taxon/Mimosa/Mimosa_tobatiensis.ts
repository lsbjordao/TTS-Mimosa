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


// Description of Mimosa tobatiensis
const Mimosa_tobatiensis = new Mimosa()
Mimosa_tobatiensis.specificEpithet = 'tobatiensis'

Mimosa_tobatiensis.stems = new Stems()

Mimosa_tobatiensis.stipule = new Stipule()
Mimosa_tobatiensis.stipule.margin = new MarginStipule()
Mimosa_tobatiensis.stipule.adaxial = new AdaxialStipule()
Mimosa_tobatiensis.stipule.abaxial = new AbaxialStipule()

Mimosa_tobatiensis.leaf = new Leaf()
Mimosa_tobatiensis.leaf.petiole = new Petiole()
Mimosa_tobatiensis.leaf.bipinnate = new Bipinnate()
Mimosa_tobatiensis.leaf.bipinnate.rachis = new Rachis()
Mimosa_tobatiensis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_tobatiensis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_tobatiensis.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(6, 9)
Mimosa_tobatiensis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_tobatiensis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_tobatiensis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_tobatiensis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(28)
Mimosa_tobatiensis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(30, 48)
Mimosa_tobatiensis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_tobatiensis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_tobatiensis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_tobatiensis.inflorescence = new Inflorescence()
Mimosa_tobatiensis.inflorescence.peduncle = new Peduncle()
Mimosa_tobatiensis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_tobatiensis.flower = new Flower()
Mimosa_tobatiensis.flower.bracteole = new Bracteole()
Mimosa_tobatiensis.flower.merism = '4-merous'
Mimosa_tobatiensis.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_tobatiensis.flower.calyx = new Calyx()
Mimosa_tobatiensis.flower.calyx.shape = 'campanulate'
Mimosa_tobatiensis.flower.corolla = new Corolla()
Mimosa_tobatiensis.flower.corolla.shape = 'turbinate'

Mimosa_tobatiensis.androecium = new Androecium()
Mimosa_tobatiensis.androecium.filaments = new Filaments()
Mimosa_tobatiensis.androecium.filaments.colour = 'pinkish'

Mimosa_tobatiensis.ginoecium = new Ginoecium()
Mimosa_tobatiensis.ginoecium.ovary = new Ovary()

Mimosa_tobatiensis.fruit = new Fruit()
Mimosa_tobatiensis.fruit.stipe = new Stipe()
Mimosa_tobatiensis.fruit.replum = new Replum()
Mimosa_tobatiensis.fruit.epicarp = new Epicarp()

Mimosa_tobatiensis.seed = new Seed()


// Description authorship
Mimosa_tobatiensis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_tobatiensis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa tobatiensis
export { Mimosa_tobatiensis }