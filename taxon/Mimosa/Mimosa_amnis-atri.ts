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


// Description of Mimosa amnisAtri
const Mimosa_amnisAtri = new Mimosa()
Mimosa_amnisAtri.specificEpithet = 'amnisAtri'

Mimosa_amnisAtri.stems = new Stems()

Mimosa_amnisAtri.stipule = new Stipule()
Mimosa_amnisAtri.stipule.margin = new MarginStipule()
Mimosa_amnisAtri.stipule.adaxial = new AdaxialStipule()
Mimosa_amnisAtri.stipule.abaxial = new AbaxialStipule()

Mimosa_amnisAtri.leaf = new Leaf()
Mimosa_amnisAtri.leaf.petiole = new Petiole()
Mimosa_amnisAtri.leaf.bipinnate = new Bipinnate()
Mimosa_amnisAtri.leaf.bipinnate.rachis = new Rachis()
Mimosa_amnisAtri.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_amnisAtri.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_amnisAtri.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(35, 49)
Mimosa_amnisAtri.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_amnisAtri.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_amnisAtri.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_amnisAtri.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(20, 26)
Mimosa_amnisAtri.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_amnisAtri.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_amnisAtri.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_amnisAtri.inflorescence = new Inflorescence()
Mimosa_amnisAtri.inflorescence.peduncle = new Peduncle()
Mimosa_amnisAtri.inflorescence.spicate = new Spicate()

Mimosa_amnisAtri.flower = new Flower()
Mimosa_amnisAtri.flower.bracteole = new Bracteole()
Mimosa_amnisAtri.flower.merism = ['4-merous', '5-merous']
Mimosa_amnisAtri.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_amnisAtri.flower.calyx = new Calyx()
Mimosa_amnisAtri.flower.calyx.shape = 'campanulate'
Mimosa_amnisAtri.flower.corolla = new Corolla()
Mimosa_amnisAtri.flower.corolla.shape = 'turbinate'

Mimosa_amnisAtri.androecium = new Androecium()
Mimosa_amnisAtri.androecium.filaments = new Filaments()
Mimosa_amnisAtri.androecium.filaments.colour = 'pinkish'

Mimosa_amnisAtri.ginoecium = new Ginoecium()
Mimosa_amnisAtri.ginoecium.ovary = new Ovary()

Mimosa_amnisAtri.fruit = new Fruit()
Mimosa_amnisAtri.fruit.stipe = new Stipe()
Mimosa_amnisAtri.fruit.replum = new Replum()
Mimosa_amnisAtri.fruit.epicarp = new Epicarp()

Mimosa_amnisAtri.seed = new Seed()


// Description authorship
Mimosa_amnisAtri.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_amnisAtri.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa amnisAtri
export { Mimosa_amnisAtri }