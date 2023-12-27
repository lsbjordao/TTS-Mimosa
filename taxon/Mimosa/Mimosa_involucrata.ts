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


// Description of Mimosa involucrata
const Mimosa_involucrata = new Mimosa()
Mimosa_involucrata.specificEpithet = 'involucrata'

Mimosa_involucrata.stems = new Stems()

Mimosa_involucrata.stipule = new Stipule()
Mimosa_involucrata.stipule.margin = new MarginStipule()
Mimosa_involucrata.stipule.adaxial = new AdaxialStipule()
Mimosa_involucrata.stipule.abaxial = new AbaxialStipule()

Mimosa_involucrata.leaf = new Leaf()
Mimosa_involucrata.leaf.petiole = new Petiole()
Mimosa_involucrata.leaf.bipinnate = new Bipinnate()
Mimosa_involucrata.leaf.bipinnate.rachis = new Rachis()
Mimosa_involucrata.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_involucrata.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_involucrata.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_involucrata.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_involucrata.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_involucrata.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_involucrata.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(5, 7)
Mimosa_involucrata.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(10)
Mimosa_involucrata.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_involucrata.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_involucrata.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_involucrata.inflorescence = new Inflorescence()
Mimosa_involucrata.inflorescence.peduncle = new Peduncle()
Mimosa_involucrata.inflorescence.capitate = new CapitateInflorescence()

Mimosa_involucrata.flower = new Flower()
Mimosa_involucrata.flower.bracteole = new Bracteole()
Mimosa_involucrata.flower.merism = '4-merous'
Mimosa_involucrata.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_involucrata.flower.calyx = new Calyx()
Mimosa_involucrata.flower.corolla = new Corolla()
Mimosa_involucrata.flower.corolla.shape = 'vase-shaped'

Mimosa_involucrata.androecium = new Androecium()
Mimosa_involucrata.androecium.filaments = new Filaments()

Mimosa_involucrata.ginoecium = new Ginoecium()
Mimosa_involucrata.ginoecium.ovary = new Ovary()

Mimosa_involucrata.fruit = new Fruit()
Mimosa_involucrata.fruit.stipe = new Stipe()
Mimosa_involucrata.fruit.replum = new Replum()
Mimosa_involucrata.fruit.epicarp = new Epicarp()

Mimosa_involucrata.seed = new Seed()


// Description authorship
Mimosa_involucrata.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_involucrata.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa involucrata
export { Mimosa_involucrata }