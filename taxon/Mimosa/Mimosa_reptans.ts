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


// Description of Mimosa reptans
const Mimosa_reptans = new Mimosa()
Mimosa_reptans.specificEpithet = 'reptans'

Mimosa_reptans.stems = new Stems()

Mimosa_reptans.stipule = new Stipule()
Mimosa_reptans.stipule.margin = new MarginStipule()
Mimosa_reptans.stipule.adaxial = new AdaxialStipule()
Mimosa_reptans.stipule.abaxial = new AbaxialStipule()

Mimosa_reptans.leaf = new Leaf()
Mimosa_reptans.leaf.petiole = new Petiole()
Mimosa_reptans.leaf.bipinnate = new Bipinnate()
Mimosa_reptans.leaf.bipinnate.rachis = new Rachis()
Mimosa_reptans.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_reptans.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_reptans.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_reptans.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_reptans.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_reptans.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_reptans.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(50, 58)
Mimosa_reptans.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_reptans.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_reptans.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_reptans.inflorescence = new Inflorescence()
Mimosa_reptans.inflorescence.peduncle = new Peduncle()
Mimosa_reptans.inflorescence.capitate = new CapitateInflorescence()

Mimosa_reptans.flower = new Flower()
Mimosa_reptans.flower.bracteole = new Bracteole()
Mimosa_reptans.flower.merism = '4-merous'
Mimosa_reptans.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_reptans.flower.calyx = new Calyx()
Mimosa_reptans.flower.calyx.shape = 'paleaceous'
Mimosa_reptans.flower.corolla = new Corolla()
Mimosa_reptans.flower.corolla.shape = 'vase-shaped'

Mimosa_reptans.androecium = new Androecium()
Mimosa_reptans.androecium.filaments = new Filaments()
Mimosa_reptans.androecium.filaments.colour = 'pinkish'

Mimosa_reptans.ginoecium = new Ginoecium()
Mimosa_reptans.ginoecium.ovary = new Ovary()

Mimosa_reptans.fruit = new Fruit()
Mimosa_reptans.fruit.stipe = new Stipe()
Mimosa_reptans.fruit.replum = new Replum()
Mimosa_reptans.fruit.epicarp = new Epicarp()

Mimosa_reptans.seed = new Seed()


// Description authorship
Mimosa_reptans.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_reptans.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa reptans
export { Mimosa_reptans }