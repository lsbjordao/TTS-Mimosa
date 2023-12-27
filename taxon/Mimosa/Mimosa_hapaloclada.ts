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


// Description of Mimosa hapaloclada
const Mimosa_hapaloclada = new Mimosa()
Mimosa_hapaloclada.specificEpithet = 'hapaloclada'

Mimosa_hapaloclada.stems = new Stems()

Mimosa_hapaloclada.stipule = new Stipule()
Mimosa_hapaloclada.stipule.margin = new MarginStipule()
Mimosa_hapaloclada.stipule.adaxial = new AdaxialStipule()
Mimosa_hapaloclada.stipule.abaxial = new AbaxialStipule()

Mimosa_hapaloclada.leaf = new Leaf()
Mimosa_hapaloclada.leaf.petiole = new Petiole()
Mimosa_hapaloclada.leaf.bipinnate = new Bipinnate()
Mimosa_hapaloclada.leaf.bipinnate.rachis = new Rachis()
Mimosa_hapaloclada.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_hapaloclada.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_hapaloclada.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(9)
Mimosa_hapaloclada.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(14, 19)
Mimosa_hapaloclada.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(20)
Mimosa_hapaloclada.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_hapaloclada.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_hapaloclada.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_hapaloclada.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(22, 29)
Mimosa_hapaloclada.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_hapaloclada.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_hapaloclada.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_hapaloclada.inflorescence = new Inflorescence()
Mimosa_hapaloclada.inflorescence.peduncle = new Peduncle()
Mimosa_hapaloclada.inflorescence.spicate = new Spicate()

Mimosa_hapaloclada.flower = new Flower()
Mimosa_hapaloclada.flower.bracteole = new Bracteole()
Mimosa_hapaloclada.flower.merism = '4-merous'
Mimosa_hapaloclada.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_hapaloclada.flower.calyx = new Calyx()
Mimosa_hapaloclada.flower.calyx.shape = 'turbinate'
Mimosa_hapaloclada.flower.corolla = new Corolla()

Mimosa_hapaloclada.androecium = new Androecium()
Mimosa_hapaloclada.androecium.filaments = new Filaments()
Mimosa_hapaloclada.androecium.filaments.colour = 'pinkish'

Mimosa_hapaloclada.ginoecium = new Ginoecium()
Mimosa_hapaloclada.ginoecium.ovary = new Ovary()

Mimosa_hapaloclada.fruit = new Fruit()
Mimosa_hapaloclada.fruit.stipe = new Stipe()
Mimosa_hapaloclada.fruit.replum = new Replum()
Mimosa_hapaloclada.fruit.epicarp = new Epicarp()

Mimosa_hapaloclada.seed = new Seed()


// Description authorship
Mimosa_hapaloclada.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_hapaloclada.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa hapaloclada
export { Mimosa_hapaloclada }