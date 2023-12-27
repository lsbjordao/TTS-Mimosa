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


// Description of Mimosa custodis
const Mimosa_custodis = new Mimosa()
Mimosa_custodis.specificEpithet = 'custodis'

Mimosa_custodis.stems = new Stems()

Mimosa_custodis.stipule = new Stipule()
Mimosa_custodis.stipule.margin = new MarginStipule()
Mimosa_custodis.stipule.adaxial = new AdaxialStipule()
Mimosa_custodis.stipule.abaxial = new AbaxialStipule()

Mimosa_custodis.leaf = new Leaf()
Mimosa_custodis.leaf.petiole = new Petiole()
Mimosa_custodis.leaf.bipinnate = new Bipinnate()
Mimosa_custodis.leaf.bipinnate.rachis = new Rachis()
Mimosa_custodis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_custodis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_custodis.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_custodis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_custodis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_custodis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_custodis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(6, 10)
Mimosa_custodis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(11)
Mimosa_custodis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_custodis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_custodis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_custodis.inflorescence = new Inflorescence()
Mimosa_custodis.inflorescence.peduncle = new Peduncle()
Mimosa_custodis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_custodis.flower = new Flower()
Mimosa_custodis.flower.bracteole = new Bracteole()
Mimosa_custodis.flower.merism = '4-merous'
Mimosa_custodis.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_custodis.flower.calyx = new Calyx()
Mimosa_custodis.flower.corolla = new Corolla()
Mimosa_custodis.flower.corolla.shape = 'vase-shaped'

Mimosa_custodis.androecium = new Androecium()
Mimosa_custodis.androecium.filaments = new Filaments()
Mimosa_custodis.androecium.filaments.colour = 'pinkish'

Mimosa_custodis.ginoecium = new Ginoecium()
Mimosa_custodis.ginoecium.ovary = new Ovary()

Mimosa_custodis.fruit = new Fruit()
Mimosa_custodis.fruit.stipe = new Stipe()
Mimosa_custodis.fruit.replum = new Replum()
Mimosa_custodis.fruit.epicarp = new Epicarp()

Mimosa_custodis.seed = new Seed()


// Description authorship
Mimosa_custodis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_custodis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa custodis
export { Mimosa_custodis }