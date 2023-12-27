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


// Description of Mimosa fachinalensis
const Mimosa_fachinalensis = new Mimosa()
Mimosa_fachinalensis.specificEpithet = 'fachinalensis'

Mimosa_fachinalensis.stems = new Stems()

Mimosa_fachinalensis.stipule = new Stipule()
Mimosa_fachinalensis.stipule.margin = new MarginStipule()
Mimosa_fachinalensis.stipule.adaxial = new AdaxialStipule()
Mimosa_fachinalensis.stipule.abaxial = new AbaxialStipule()

Mimosa_fachinalensis.leaf = new Leaf()
Mimosa_fachinalensis.leaf.petiole = new Petiole()
Mimosa_fachinalensis.leaf.bipinnate = new Bipinnate()
Mimosa_fachinalensis.leaf.bipinnate.rachis = new Rachis()
Mimosa_fachinalensis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_fachinalensis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_fachinalensis.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_fachinalensis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_fachinalensis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_fachinalensis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_fachinalensis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(3)
Mimosa_fachinalensis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(4, 7)
Mimosa_fachinalensis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(8)
Mimosa_fachinalensis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_fachinalensis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_fachinalensis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_fachinalensis.inflorescence = new Inflorescence()
Mimosa_fachinalensis.inflorescence.peduncle = new Peduncle()
Mimosa_fachinalensis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_fachinalensis.flower = new Flower()
Mimosa_fachinalensis.flower.bracteole = new Bracteole()
Mimosa_fachinalensis.flower.merism = '4-merous'
Mimosa_fachinalensis.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_fachinalensis.flower.calyx = new Calyx()
Mimosa_fachinalensis.flower.calyx.shape = 'paleaceous'
Mimosa_fachinalensis.flower.corolla = new Corolla()
Mimosa_fachinalensis.flower.corolla.shape = 'subtubular'

Mimosa_fachinalensis.androecium = new Androecium()
Mimosa_fachinalensis.androecium.filaments = new Filaments()
Mimosa_fachinalensis.androecium.filaments.colour = 'pinkish'

Mimosa_fachinalensis.ginoecium = new Ginoecium()
Mimosa_fachinalensis.ginoecium.ovary = new Ovary()

Mimosa_fachinalensis.fruit = new Fruit()
Mimosa_fachinalensis.fruit.stipe = new Stipe()
Mimosa_fachinalensis.fruit.replum = new Replum()
Mimosa_fachinalensis.fruit.epicarp = new Epicarp()

Mimosa_fachinalensis.seed = new Seed()


// Description authorship
Mimosa_fachinalensis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_fachinalensis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa fachinalensis
export { Mimosa_fachinalensis }