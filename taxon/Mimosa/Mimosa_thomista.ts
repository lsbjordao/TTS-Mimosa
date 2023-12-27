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


// Description of Mimosa thomista
const Mimosa_thomista = new Mimosa()
Mimosa_thomista.specificEpithet = 'thomista'

Mimosa_thomista.stems = new Stems()

Mimosa_thomista.stipule = new Stipule()
Mimosa_thomista.stipule.margin = new MarginStipule()
Mimosa_thomista.stipule.adaxial = new AdaxialStipule()
Mimosa_thomista.stipule.abaxial = new AbaxialStipule()

Mimosa_thomista.leaf = new Leaf()
Mimosa_thomista.leaf.petiole = new Petiole()
Mimosa_thomista.leaf.bipinnate = new Bipinnate()
Mimosa_thomista.leaf.bipinnate.rachis = new Rachis()
Mimosa_thomista.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_thomista.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_thomista.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_thomista.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_thomista.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_thomista.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_thomista.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(55, 90)
Mimosa_thomista.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_thomista.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_thomista.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_thomista.inflorescence = new Inflorescence()
Mimosa_thomista.inflorescence.peduncle = new Peduncle()
Mimosa_thomista.inflorescence.capitate = new CapitateInflorescence()

Mimosa_thomista.flower = new Flower()
Mimosa_thomista.flower.bracteole = new Bracteole()
Mimosa_thomista.flower.merism = '4-merous'
Mimosa_thomista.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_thomista.flower.calyx = new Calyx()
Mimosa_thomista.flower.calyx.shape = 'paleaceous-pappiform'
Mimosa_thomista.flower.corolla = new Corolla()
Mimosa_thomista.flower.corolla.shape = 'funnelform'

Mimosa_thomista.androecium = new Androecium()
Mimosa_thomista.androecium.filaments = new Filaments()

Mimosa_thomista.ginoecium = new Ginoecium()
Mimosa_thomista.ginoecium.ovary = new Ovary()

Mimosa_thomista.fruit = new Fruit()
Mimosa_thomista.fruit.stipe = new Stipe()
Mimosa_thomista.fruit.replum = new Replum()
Mimosa_thomista.fruit.epicarp = new Epicarp()

Mimosa_thomista.seed = new Seed()


// Description authorship
Mimosa_thomista.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_thomista.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa thomista
export { Mimosa_thomista }