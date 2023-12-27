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


// Description of Mimosa williamsii
const Mimosa_williamsii = new Mimosa()
Mimosa_williamsii.specificEpithet = 'williamsii'

Mimosa_williamsii.stems = new Stems()

Mimosa_williamsii.stipule = new Stipule()
Mimosa_williamsii.stipule.margin = new MarginStipule()
Mimosa_williamsii.stipule.adaxial = new AdaxialStipule()
Mimosa_williamsii.stipule.abaxial = new AbaxialStipule()

Mimosa_williamsii.leaf = new Leaf()
Mimosa_williamsii.leaf.petiole = new Petiole()
Mimosa_williamsii.leaf.bipinnate = new Bipinnate()
Mimosa_williamsii.leaf.bipinnate.rachis = new Rachis()
Mimosa_williamsii.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_williamsii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_williamsii.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(1)
Mimosa_williamsii.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 4)
Mimosa_williamsii.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_williamsii.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_williamsii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_williamsii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(22)
Mimosa_williamsii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(25, 44)
Mimosa_williamsii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(47)
Mimosa_williamsii.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_williamsii.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_williamsii.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_williamsii.inflorescence = new Inflorescence()
Mimosa_williamsii.inflorescence.peduncle = new Peduncle()
Mimosa_williamsii.inflorescence.capitate = new CapitateInflorescence()

Mimosa_williamsii.flower = new Flower()
Mimosa_williamsii.flower.bracteole = new Bracteole()
Mimosa_williamsii.flower.merism = '4-merous'
Mimosa_williamsii.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_williamsii.flower.calyx = new Calyx()
Mimosa_williamsii.flower.calyx.shape = 'campanulate'
Mimosa_williamsii.flower.corolla = new Corolla()
Mimosa_williamsii.flower.corolla.shape = 'vase-shaped'

Mimosa_williamsii.androecium = new Androecium()
Mimosa_williamsii.androecium.filaments = new Filaments()
Mimosa_williamsii.androecium.filaments.colour = 'pinkish'

Mimosa_williamsii.ginoecium = new Ginoecium()
Mimosa_williamsii.ginoecium.ovary = new Ovary()

Mimosa_williamsii.fruit = new Fruit()
Mimosa_williamsii.fruit.stipe = new Stipe()
Mimosa_williamsii.fruit.replum = new Replum()
Mimosa_williamsii.fruit.epicarp = new Epicarp()

Mimosa_williamsii.seed = new Seed()


// Description authorship
Mimosa_williamsii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_williamsii.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa williamsii
export { Mimosa_williamsii }