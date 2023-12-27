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


// Description of Mimosa flavocaesia
const Mimosa_flavocaesia = new Mimosa()
Mimosa_flavocaesia.specificEpithet = 'flavocaesia'

Mimosa_flavocaesia.stems = new Stems()

Mimosa_flavocaesia.stipule = new Stipule()
Mimosa_flavocaesia.stipule.margin = new MarginStipule()
Mimosa_flavocaesia.stipule.adaxial = new AdaxialStipule()
Mimosa_flavocaesia.stipule.abaxial = new AbaxialStipule()

Mimosa_flavocaesia.leaf = new Leaf()
Mimosa_flavocaesia.leaf.petiole = new Petiole()
Mimosa_flavocaesia.leaf.bipinnate = new Bipinnate()
Mimosa_flavocaesia.leaf.bipinnate.rachis = new Rachis()
Mimosa_flavocaesia.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_flavocaesia.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_flavocaesia.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_flavocaesia.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_flavocaesia.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_flavocaesia.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_flavocaesia.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(38)
Mimosa_flavocaesia.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(40, 65)
Mimosa_flavocaesia.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_flavocaesia.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_flavocaesia.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_flavocaesia.inflorescence = new Inflorescence()
Mimosa_flavocaesia.inflorescence.peduncle = new Peduncle()
Mimosa_flavocaesia.inflorescence.capitate = new CapitateInflorescence()

Mimosa_flavocaesia.flower = new Flower()
Mimosa_flavocaesia.flower.bracteole = new Bracteole()
Mimosa_flavocaesia.flower.merism = '4-merous'
Mimosa_flavocaesia.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_flavocaesia.flower.calyx = new Calyx()
Mimosa_flavocaesia.flower.calyx.shape = 'paleaceous'
Mimosa_flavocaesia.flower.corolla = new Corolla()
Mimosa_flavocaesia.flower.corolla.shape = 'funnelform'

Mimosa_flavocaesia.androecium = new Androecium()
Mimosa_flavocaesia.androecium.filaments = new Filaments()
Mimosa_flavocaesia.androecium.filaments.colour = 'pinkish'

Mimosa_flavocaesia.ginoecium = new Ginoecium()
Mimosa_flavocaesia.ginoecium.ovary = new Ovary()

Mimosa_flavocaesia.fruit = new Fruit()
Mimosa_flavocaesia.fruit.stipe = new Stipe()
Mimosa_flavocaesia.fruit.replum = new Replum()
Mimosa_flavocaesia.fruit.epicarp = new Epicarp()

Mimosa_flavocaesia.seed = new Seed()


// Description authorship
Mimosa_flavocaesia.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_flavocaesia.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa flavocaesia
export { Mimosa_flavocaesia }