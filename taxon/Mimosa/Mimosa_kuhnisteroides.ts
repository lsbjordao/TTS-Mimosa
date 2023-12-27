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


// Description of Mimosa kuhnisteroides
const Mimosa_kuhnisteroides = new Mimosa()
Mimosa_kuhnisteroides.specificEpithet = 'kuhnisteroides'

Mimosa_kuhnisteroides.stems = new Stems()

Mimosa_kuhnisteroides.stipule = new Stipule()
Mimosa_kuhnisteroides.stipule.margin = new MarginStipule()
Mimosa_kuhnisteroides.stipule.adaxial = new AdaxialStipule()
Mimosa_kuhnisteroides.stipule.abaxial = new AbaxialStipule()

Mimosa_kuhnisteroides.leaf = new Leaf()
Mimosa_kuhnisteroides.leaf.petiole = new Petiole()
Mimosa_kuhnisteroides.leaf.bipinnate = new Bipinnate()
Mimosa_kuhnisteroides.leaf.bipinnate.rachis = new Rachis()
Mimosa_kuhnisteroides.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_kuhnisteroides.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_kuhnisteroides.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_kuhnisteroides.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_kuhnisteroides.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_kuhnisteroides.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_kuhnisteroides.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(21, 32)
Mimosa_kuhnisteroides.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_kuhnisteroides.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_kuhnisteroides.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_kuhnisteroides.inflorescence = new Inflorescence()
Mimosa_kuhnisteroides.inflorescence.peduncle = new Peduncle()
Mimosa_kuhnisteroides.inflorescence.capitate = new CapitateInflorescence()

Mimosa_kuhnisteroides.flower = new Flower()
Mimosa_kuhnisteroides.flower.bracteole = new Bracteole()
Mimosa_kuhnisteroides.flower.merism = '4-merous'
Mimosa_kuhnisteroides.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_kuhnisteroides.flower.calyx = new Calyx()
Mimosa_kuhnisteroides.flower.calyx.shape = 'campanulate'
Mimosa_kuhnisteroides.flower.corolla = new Corolla()

Mimosa_kuhnisteroides.androecium = new Androecium()
Mimosa_kuhnisteroides.androecium.filaments = new Filaments()

Mimosa_kuhnisteroides.ginoecium = new Ginoecium()
Mimosa_kuhnisteroides.ginoecium.ovary = new Ovary()

Mimosa_kuhnisteroides.fruit = new Fruit()
Mimosa_kuhnisteroides.fruit.stipe = new Stipe()
Mimosa_kuhnisteroides.fruit.replum = new Replum()
Mimosa_kuhnisteroides.fruit.epicarp = new Epicarp()

Mimosa_kuhnisteroides.seed = new Seed()


// Description authorship
Mimosa_kuhnisteroides.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_kuhnisteroides.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa kuhnisteroides
export { Mimosa_kuhnisteroides }