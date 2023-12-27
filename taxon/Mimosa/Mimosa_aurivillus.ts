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


// Description of Mimosa aurivillus
const Mimosa_aurivillus = new Mimosa()
Mimosa_aurivillus.specificEpithet = 'aurivillus'

Mimosa_aurivillus.stems = new Stems()

Mimosa_aurivillus.stipule = new Stipule()
Mimosa_aurivillus.stipule.margin = new MarginStipule()
Mimosa_aurivillus.stipule.adaxial = new AdaxialStipule()
Mimosa_aurivillus.stipule.abaxial = new AbaxialStipule()

Mimosa_aurivillus.leaf = new Leaf()
Mimosa_aurivillus.leaf.petiole = new Petiole()
Mimosa_aurivillus.leaf.bipinnate = new Bipinnate()
Mimosa_aurivillus.leaf.bipinnate.rachis = new Rachis()
Mimosa_aurivillus.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_aurivillus.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_aurivillus.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(8)
Mimosa_aurivillus.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_aurivillus.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_aurivillus.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_aurivillus.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(5, 18)
Mimosa_aurivillus.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(27)
Mimosa_aurivillus.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_aurivillus.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_aurivillus.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_aurivillus.inflorescence = new Inflorescence()
Mimosa_aurivillus.inflorescence.peduncle = new Peduncle()
Mimosa_aurivillus.inflorescence.capitate = new CapitateInflorescence()

Mimosa_aurivillus.flower = new Flower()
Mimosa_aurivillus.flower.bracteole = new Bracteole()
Mimosa_aurivillus.flower.merism = '4-merous'
Mimosa_aurivillus.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_aurivillus.flower.calyx = new Calyx()
Mimosa_aurivillus.flower.calyx.shape = 'cup-shaped'
Mimosa_aurivillus.flower.corolla = new Corolla()
Mimosa_aurivillus.flower.corolla.shape = 'campanulate'

Mimosa_aurivillus.androecium = new Androecium()
Mimosa_aurivillus.androecium.filaments = new Filaments()
Mimosa_aurivillus.androecium.filaments.colour = 'yellowish'

Mimosa_aurivillus.ginoecium = new Ginoecium()
Mimosa_aurivillus.ginoecium.ovary = new Ovary()

Mimosa_aurivillus.fruit = new Fruit()
Mimosa_aurivillus.fruit.stipe = new Stipe()
Mimosa_aurivillus.fruit.replum = new Replum()
Mimosa_aurivillus.fruit.epicarp = new Epicarp()

Mimosa_aurivillus.seed = new Seed()


// Description authorship
Mimosa_aurivillus.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_aurivillus.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa aurivillus
export { Mimosa_aurivillus }