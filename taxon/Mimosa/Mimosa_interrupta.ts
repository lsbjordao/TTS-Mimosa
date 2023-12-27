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
import { Peduncle, Spicate } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa interrupta
const Mimosa_interrupta = new Mimosa()
Mimosa_interrupta.specificEpithet = 'interrupta'

Mimosa_interrupta.stems = new Stems()

Mimosa_interrupta.stipule = new Stipule()
Mimosa_interrupta.stipule.margin = new MarginStipule()
Mimosa_interrupta.stipule.adaxial = new AdaxialStipule()
Mimosa_interrupta.stipule.abaxial = new AbaxialStipule()

Mimosa_interrupta.leaf = new Leaf()
Mimosa_interrupta.leaf.petiole = new Petiole()
Mimosa_interrupta.leaf.bipinnate = new Bipinnate()
Mimosa_interrupta.leaf.bipinnate.rachis = new Rachis()
Mimosa_interrupta.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_interrupta.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_interrupta.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(5)
Mimosa_interrupta.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(6, 10)
Mimosa_interrupta.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(13)
Mimosa_interrupta.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_interrupta.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_interrupta.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_interrupta.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(8, 12)
Mimosa_interrupta.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_interrupta.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_interrupta.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_interrupta.inflorescence = new Inflorescence()
Mimosa_interrupta.inflorescence.peduncle = new Peduncle()
Mimosa_interrupta.inflorescence.spicate = new Spicate()

Mimosa_interrupta.flower = new Flower()
Mimosa_interrupta.flower.bracteole = new Bracteole()
Mimosa_interrupta.flower.merism = '4-merous'
Mimosa_interrupta.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_interrupta.flower.calyx = new Calyx()
Mimosa_interrupta.flower.calyx.shape = 'campanulate'
Mimosa_interrupta.flower.corolla = new Corolla()
Mimosa_interrupta.flower.corolla.shape = 'turbinate'

Mimosa_interrupta.androecium = new Androecium()
Mimosa_interrupta.androecium.filaments = new Filaments()
Mimosa_interrupta.androecium.filaments.colour = 'whitenish'

Mimosa_interrupta.ginoecium = new Ginoecium()
Mimosa_interrupta.ginoecium.ovary = new Ovary()

Mimosa_interrupta.fruit = new Fruit()
Mimosa_interrupta.fruit.stipe = new Stipe()
Mimosa_interrupta.fruit.replum = new Replum()
Mimosa_interrupta.fruit.epicarp = new Epicarp()

Mimosa_interrupta.seed = new Seed()


// Description authorship
Mimosa_interrupta.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_interrupta.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa interrupta
export { Mimosa_interrupta }