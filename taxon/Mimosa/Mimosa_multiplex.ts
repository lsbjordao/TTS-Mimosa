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


// Description of Mimosa multiplex
const Mimosa_multiplex = new Mimosa()
Mimosa_multiplex.specificEpithet = 'multiplex'

Mimosa_multiplex.stems = new Stems()

Mimosa_multiplex.stipule = new Stipule()
Mimosa_multiplex.stipule.margin = new MarginStipule()
Mimosa_multiplex.stipule.adaxial = new AdaxialStipule()
Mimosa_multiplex.stipule.abaxial = new AbaxialStipule()

Mimosa_multiplex.leaf = new Leaf()
Mimosa_multiplex.leaf.petiole = new Petiole()
Mimosa_multiplex.leaf.bipinnate = new Bipinnate()
Mimosa_multiplex.leaf.bipinnate.rachis = new Rachis()
Mimosa_multiplex.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_multiplex.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_multiplex.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_multiplex.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_multiplex.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_multiplex.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_multiplex.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(20, 30)
Mimosa_multiplex.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(33)
Mimosa_multiplex.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_multiplex.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_multiplex.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_multiplex.inflorescence = new Inflorescence()
Mimosa_multiplex.inflorescence.peduncle = new Peduncle()
Mimosa_multiplex.inflorescence.capitate = new CapitateInflorescence()

Mimosa_multiplex.flower = new Flower()
Mimosa_multiplex.flower.bracteole = new Bracteole()
Mimosa_multiplex.flower.merism = '4-merous'
Mimosa_multiplex.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_multiplex.flower.calyx = new Calyx()
Mimosa_multiplex.flower.corolla = new Corolla()
Mimosa_multiplex.flower.corolla.shape = 'funnelform'

Mimosa_multiplex.androecium = new Androecium()
Mimosa_multiplex.androecium.filaments = new Filaments()

Mimosa_multiplex.ginoecium = new Ginoecium()
Mimosa_multiplex.ginoecium.ovary = new Ovary()

Mimosa_multiplex.fruit = new Fruit()
Mimosa_multiplex.fruit.stipe = new Stipe()
Mimosa_multiplex.fruit.replum = new Replum()
Mimosa_multiplex.fruit.epicarp = new Epicarp()

Mimosa_multiplex.seed = new Seed()


// Description authorship
Mimosa_multiplex.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_multiplex.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa multiplex
export { Mimosa_multiplex }