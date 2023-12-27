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


// Description of Mimosa cordobensis
const Mimosa_cordobensis = new Mimosa()
Mimosa_cordobensis.specificEpithet = 'cordobensis'

Mimosa_cordobensis.stems = new Stems()

Mimosa_cordobensis.stipule = new Stipule()
Mimosa_cordobensis.stipule.margin = new MarginStipule()
Mimosa_cordobensis.stipule.adaxial = new AdaxialStipule()
Mimosa_cordobensis.stipule.abaxial = new AbaxialStipule()

Mimosa_cordobensis.leaf = new Leaf()
Mimosa_cordobensis.leaf.petiole = new Petiole()
Mimosa_cordobensis.leaf.bipinnate = new Bipinnate()
Mimosa_cordobensis.leaf.bipinnate.rachis = new Rachis()
Mimosa_cordobensis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_cordobensis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_cordobensis.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(4)
Mimosa_cordobensis.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(5, 7)
Mimosa_cordobensis.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(8)
Mimosa_cordobensis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_cordobensis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_cordobensis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_cordobensis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(14)
Mimosa_cordobensis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(15, 21)
Mimosa_cordobensis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(24)
Mimosa_cordobensis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_cordobensis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_cordobensis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_cordobensis.inflorescence = new Inflorescence()
Mimosa_cordobensis.inflorescence.peduncle = new Peduncle()
Mimosa_cordobensis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_cordobensis.flower = new Flower()
Mimosa_cordobensis.flower.bracteole = new Bracteole()
Mimosa_cordobensis.flower.merism = '4-merous'
Mimosa_cordobensis.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_cordobensis.flower.calyx = new Calyx()
Mimosa_cordobensis.flower.calyx.shape = 'turbinate'
Mimosa_cordobensis.flower.corolla = new Corolla()

Mimosa_cordobensis.androecium = new Androecium()
Mimosa_cordobensis.androecium.filaments = new Filaments()

Mimosa_cordobensis.ginoecium = new Ginoecium()
Mimosa_cordobensis.ginoecium.ovary = new Ovary()

Mimosa_cordobensis.fruit = new Fruit()
Mimosa_cordobensis.fruit.stipe = new Stipe()
Mimosa_cordobensis.fruit.replum = new Replum()
Mimosa_cordobensis.fruit.epicarp = new Epicarp()

Mimosa_cordobensis.seed = new Seed()


// Description authorship
Mimosa_cordobensis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_cordobensis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa cordobensis
export { Mimosa_cordobensis }