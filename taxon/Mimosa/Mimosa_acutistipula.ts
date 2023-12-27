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


// Description of Mimosa acutistipula
const Mimosa_acutistipula = new Mimosa()
Mimosa_acutistipula.specificEpithet = 'acutistipula'

Mimosa_acutistipula.stems = new Stems()

Mimosa_acutistipula.stipule = new Stipule()
Mimosa_acutistipula.stipule.margin = new MarginStipule()
Mimosa_acutistipula.stipule.adaxial = new AdaxialStipule()
Mimosa_acutistipula.stipule.abaxial = new AbaxialStipule()

Mimosa_acutistipula.leaf = new Leaf()
Mimosa_acutistipula.leaf.petiole = new Petiole()
Mimosa_acutistipula.leaf.bipinnate = new Bipinnate()
Mimosa_acutistipula.leaf.bipinnate.rachis = new Rachis()
Mimosa_acutistipula.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_acutistipula.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_acutistipula.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(4, 10)
Mimosa_acutistipula.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(11)
Mimosa_acutistipula.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_acutistipula.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_acutistipula.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_acutistipula.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(20, 31)
Mimosa_acutistipula.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(33)
Mimosa_acutistipula.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_acutistipula.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_acutistipula.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_acutistipula.inflorescence = new Inflorescence()
Mimosa_acutistipula.inflorescence.peduncle = new Peduncle()
Mimosa_acutistipula.inflorescence.spicate = new Spicate()

Mimosa_acutistipula.flower = new Flower()
Mimosa_acutistipula.flower.bracteole = new Bracteole()
Mimosa_acutistipula.flower.merism = '4-merous'
Mimosa_acutistipula.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_acutistipula.flower.calyx = new Calyx()
Mimosa_acutistipula.flower.calyx.shape = 'campanulate'
Mimosa_acutistipula.flower.corolla = new Corolla()
Mimosa_acutistipula.flower.corolla.shape = ['turbinate', 'campanulate']

Mimosa_acutistipula.androecium = new Androecium()
Mimosa_acutistipula.androecium.filaments = new Filaments()
Mimosa_acutistipula.androecium.filaments.colour = ['whitenish', 'creamish']

Mimosa_acutistipula.ginoecium = new Ginoecium()
Mimosa_acutistipula.ginoecium.ovary = new Ovary()

Mimosa_acutistipula.fruit = new Fruit()
Mimosa_acutistipula.fruit.stipe = new Stipe()
Mimosa_acutistipula.fruit.replum = new Replum()
Mimosa_acutistipula.fruit.epicarp = new Epicarp()

Mimosa_acutistipula.seed = new Seed()


// Description authorship
Mimosa_acutistipula.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_acutistipula.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa acutistipula
export { Mimosa_acutistipula }