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


// Description of Mimosa uniceps
const Mimosa_uniceps = new Mimosa()
Mimosa_uniceps.specificEpithet = 'uniceps'

Mimosa_uniceps.stems = new Stems()

Mimosa_uniceps.stipule = new Stipule()
Mimosa_uniceps.stipule.margin = new MarginStipule()
Mimosa_uniceps.stipule.adaxial = new AdaxialStipule()
Mimosa_uniceps.stipule.abaxial = new AbaxialStipule()

Mimosa_uniceps.leaf = new Leaf()
Mimosa_uniceps.leaf.petiole = new Petiole()
Mimosa_uniceps.leaf.bipinnate = new Bipinnate()
Mimosa_uniceps.leaf.bipinnate.rachis = new Rachis()
Mimosa_uniceps.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_uniceps.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_uniceps.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_uniceps.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_uniceps.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_uniceps.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_uniceps.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(9, 12)
Mimosa_uniceps.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(13)
Mimosa_uniceps.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_uniceps.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_uniceps.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_uniceps.inflorescence = new Inflorescence()
Mimosa_uniceps.inflorescence.peduncle = new Peduncle()
Mimosa_uniceps.inflorescence.capitate = new CapitateInflorescence()

Mimosa_uniceps.flower = new Flower()
Mimosa_uniceps.flower.bracteole = new Bracteole()
Mimosa_uniceps.flower.merism = '4-merous'
Mimosa_uniceps.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_uniceps.flower.calyx = new Calyx()
Mimosa_uniceps.flower.calyx.shape = 'paleaceous'
Mimosa_uniceps.flower.corolla = new Corolla()

Mimosa_uniceps.androecium = new Androecium()
Mimosa_uniceps.androecium.filaments = new Filaments()

Mimosa_uniceps.ginoecium = new Ginoecium()
Mimosa_uniceps.ginoecium.ovary = new Ovary()

Mimosa_uniceps.fruit = new Fruit()
Mimosa_uniceps.fruit.stipe = new Stipe()
Mimosa_uniceps.fruit.replum = new Replum()
Mimosa_uniceps.fruit.epicarp = new Epicarp()

Mimosa_uniceps.seed = new Seed()


// Description authorship
Mimosa_uniceps.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_uniceps.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa uniceps
export { Mimosa_uniceps }