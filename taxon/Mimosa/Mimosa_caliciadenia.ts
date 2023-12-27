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


// Description of Mimosa caliciadenia
const Mimosa_caliciadenia = new Mimosa()
Mimosa_caliciadenia.specificEpithet = 'caliciadenia'

Mimosa_caliciadenia.stems = new Stems()

Mimosa_caliciadenia.stipule = new Stipule()
Mimosa_caliciadenia.stipule.margin = new MarginStipule()
Mimosa_caliciadenia.stipule.adaxial = new AdaxialStipule()
Mimosa_caliciadenia.stipule.abaxial = new AbaxialStipule()

Mimosa_caliciadenia.leaf = new Leaf()
Mimosa_caliciadenia.leaf.petiole = new Petiole()
Mimosa_caliciadenia.leaf.bipinnate = new Bipinnate()
Mimosa_caliciadenia.leaf.bipinnate.rachis = new Rachis()
Mimosa_caliciadenia.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_caliciadenia.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_caliciadenia.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(4, 6)
Mimosa_caliciadenia.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(7)
Mimosa_caliciadenia.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_caliciadenia.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_caliciadenia.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_caliciadenia.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(42, 64)
Mimosa_caliciadenia.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_caliciadenia.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_caliciadenia.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_caliciadenia.inflorescence = new Inflorescence()
Mimosa_caliciadenia.inflorescence.peduncle = new Peduncle()
Mimosa_caliciadenia.inflorescence.capitate = new CapitateInflorescence()

Mimosa_caliciadenia.flower = new Flower()
Mimosa_caliciadenia.flower.bracteole = new Bracteole()
Mimosa_caliciadenia.flower.merism = '4-merous'
Mimosa_caliciadenia.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_caliciadenia.flower.calyx = new Calyx()
Mimosa_caliciadenia.flower.calyx.shape = 'campanulate'
Mimosa_caliciadenia.flower.corolla = new Corolla()
Mimosa_caliciadenia.flower.corolla.shape = 'funnelform'

Mimosa_caliciadenia.androecium = new Androecium()
Mimosa_caliciadenia.androecium.filaments = new Filaments()
Mimosa_caliciadenia.androecium.filaments.colour = 'pinkish'

Mimosa_caliciadenia.ginoecium = new Ginoecium()
Mimosa_caliciadenia.ginoecium.ovary = new Ovary()

Mimosa_caliciadenia.fruit = new Fruit()
Mimosa_caliciadenia.fruit.stipe = new Stipe()
Mimosa_caliciadenia.fruit.replum = new Replum()
Mimosa_caliciadenia.fruit.epicarp = new Epicarp()

Mimosa_caliciadenia.seed = new Seed()


// Description authorship
Mimosa_caliciadenia.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_caliciadenia.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa caliciadenia
export { Mimosa_caliciadenia }