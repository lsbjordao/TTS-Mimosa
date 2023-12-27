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


// Description of Mimosa lactiflua
const Mimosa_lactiflua = new Mimosa()
Mimosa_lactiflua.specificEpithet = 'lactiflua'

Mimosa_lactiflua.stems = new Stems()

Mimosa_lactiflua.stipule = new Stipule()
Mimosa_lactiflua.stipule.margin = new MarginStipule()
Mimosa_lactiflua.stipule.adaxial = new AdaxialStipule()
Mimosa_lactiflua.stipule.abaxial = new AbaxialStipule()

Mimosa_lactiflua.leaf = new Leaf()
Mimosa_lactiflua.leaf.petiole = new Petiole()
Mimosa_lactiflua.leaf.bipinnate = new Bipinnate()
Mimosa_lactiflua.leaf.bipinnate.rachis = new Rachis()
Mimosa_lactiflua.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_lactiflua.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_lactiflua.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_lactiflua.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_lactiflua.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_lactiflua.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(9)
Mimosa_lactiflua.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(10, 20)
Mimosa_lactiflua.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(22)
Mimosa_lactiflua.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_lactiflua.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_lactiflua.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_lactiflua.inflorescence = new Inflorescence()
Mimosa_lactiflua.inflorescence.peduncle = new Peduncle()
Mimosa_lactiflua.inflorescence.capitate = new CapitateInflorescence()

Mimosa_lactiflua.flower = new Flower()
Mimosa_lactiflua.flower.bracteole = new Bracteole()
Mimosa_lactiflua.flower.calyx = new Calyx()
Mimosa_lactiflua.flower.corolla = new Corolla()

Mimosa_lactiflua.androecium = new Androecium()
Mimosa_lactiflua.androecium.filaments = new Filaments()

Mimosa_lactiflua.ginoecium = new Ginoecium()
Mimosa_lactiflua.ginoecium.ovary = new Ovary()

Mimosa_lactiflua.fruit = new Fruit()
Mimosa_lactiflua.fruit.stipe = new Stipe()
Mimosa_lactiflua.fruit.replum = new Replum()
Mimosa_lactiflua.fruit.epicarp = new Epicarp()

Mimosa_lactiflua.seed = new Seed()


// Description authorship
Mimosa_lactiflua.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_lactiflua.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa lactiflua
export { Mimosa_lactiflua }