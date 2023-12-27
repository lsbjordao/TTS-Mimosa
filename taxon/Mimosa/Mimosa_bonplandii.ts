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


// Description of Mimosa bonplandii
const Mimosa_bonplandii = new Mimosa()
Mimosa_bonplandii.specificEpithet = 'bonplandii'

Mimosa_bonplandii.stems = new Stems()

Mimosa_bonplandii.stipule = new Stipule()
Mimosa_bonplandii.stipule.margin = new MarginStipule()
Mimosa_bonplandii.stipule.adaxial = new AdaxialStipule()
Mimosa_bonplandii.stipule.abaxial = new AbaxialStipule()

Mimosa_bonplandii.leaf = new Leaf()
Mimosa_bonplandii.leaf.petiole = new Petiole()
Mimosa_bonplandii.leaf.bipinnate = new Bipinnate()
Mimosa_bonplandii.leaf.bipinnate.rachis = new Rachis()
Mimosa_bonplandii.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_bonplandii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_bonplandii.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(1)
Mimosa_bonplandii.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 7)
Mimosa_bonplandii.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(9)
Mimosa_bonplandii.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_bonplandii.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_bonplandii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_bonplandii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(9)
Mimosa_bonplandii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(11, 24)
Mimosa_bonplandii.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_bonplandii.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_bonplandii.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_bonplandii.inflorescence = new Inflorescence()
Mimosa_bonplandii.inflorescence.peduncle = new Peduncle()
Mimosa_bonplandii.inflorescence.capitate = new CapitateInflorescence()

Mimosa_bonplandii.flower = new Flower()
Mimosa_bonplandii.flower.bracteole = new Bracteole()
Mimosa_bonplandii.flower.merism = '4-merous'
Mimosa_bonplandii.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_bonplandii.flower.calyx = new Calyx()
Mimosa_bonplandii.flower.calyx.shape = 'cup-shaped'
Mimosa_bonplandii.flower.corolla = new Corolla()
Mimosa_bonplandii.flower.corolla.shape = 'campanulate'

Mimosa_bonplandii.androecium = new Androecium()
Mimosa_bonplandii.androecium.filaments = new Filaments()
Mimosa_bonplandii.androecium.filaments.colour = 'yellowish'

Mimosa_bonplandii.ginoecium = new Ginoecium()
Mimosa_bonplandii.ginoecium.ovary = new Ovary()

Mimosa_bonplandii.fruit = new Fruit()
Mimosa_bonplandii.fruit.stipe = new Stipe()
Mimosa_bonplandii.fruit.replum = new Replum()
Mimosa_bonplandii.fruit.epicarp = new Epicarp()

Mimosa_bonplandii.seed = new Seed()


// Description authorship
Mimosa_bonplandii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_bonplandii.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa bonplandii
export { Mimosa_bonplandii }