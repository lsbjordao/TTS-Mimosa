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


// Description of Mimosa myriadenia
const Mimosa_myriadenia = new Mimosa()
Mimosa_myriadenia.specificEpithet = 'myriadenia'

Mimosa_myriadenia.stems = new Stems()

Mimosa_myriadenia.stipule = new Stipule()
Mimosa_myriadenia.stipule.margin = new MarginStipule()
Mimosa_myriadenia.stipule.adaxial = new AdaxialStipule()
Mimosa_myriadenia.stipule.abaxial = new AbaxialStipule()

Mimosa_myriadenia.leaf = new Leaf()
Mimosa_myriadenia.leaf.petiole = new Petiole()
Mimosa_myriadenia.leaf.bipinnate = new Bipinnate()
Mimosa_myriadenia.leaf.bipinnate.rachis = new Rachis()
Mimosa_myriadenia.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_myriadenia.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_myriadenia.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(5, 33)
Mimosa_myriadenia.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_myriadenia.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_myriadenia.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_myriadenia.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_myriadenia.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_myriadenia.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_myriadenia.inflorescence = new Inflorescence()
Mimosa_myriadenia.inflorescence.peduncle = new Peduncle()
Mimosa_myriadenia.inflorescence.spicate = new Spicate()

Mimosa_myriadenia.flower = new Flower()
Mimosa_myriadenia.flower.bracteole = new Bracteole()
Mimosa_myriadenia.flower.merism = '5-merous'
Mimosa_myriadenia.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_myriadenia.flower.calyx = new Calyx()
Mimosa_myriadenia.flower.calyx.shape = 'campanulate'
Mimosa_myriadenia.flower.corolla = new Corolla()

Mimosa_myriadenia.androecium = new Androecium()
Mimosa_myriadenia.androecium.filaments = new Filaments()
Mimosa_myriadenia.androecium.filaments.colour = 'whitenish'

Mimosa_myriadenia.ginoecium = new Ginoecium()
Mimosa_myriadenia.ginoecium.ovary = new Ovary()

Mimosa_myriadenia.fruit = new Fruit()
Mimosa_myriadenia.fruit.stipe = new Stipe()
Mimosa_myriadenia.fruit.replum = new Replum()
Mimosa_myriadenia.fruit.epicarp = new Epicarp()

Mimosa_myriadenia.seed = new Seed()


// Description authorship
Mimosa_myriadenia.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_myriadenia.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa myriadenia
export { Mimosa_myriadenia }