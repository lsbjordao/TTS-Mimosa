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


// Description of Mimosa urticaria
const Mimosa_urticaria = new Mimosa()
Mimosa_urticaria.specificEpithet = 'urticaria'

Mimosa_urticaria.stems = new Stems()

Mimosa_urticaria.stipule = new Stipule()
Mimosa_urticaria.stipule.margin = new MarginStipule()
Mimosa_urticaria.stipule.adaxial = new AdaxialStipule()
Mimosa_urticaria.stipule.abaxial = new AbaxialStipule()

Mimosa_urticaria.leaf = new Leaf()
Mimosa_urticaria.leaf.petiole = new Petiole()
Mimosa_urticaria.leaf.bipinnate = new Bipinnate()
Mimosa_urticaria.leaf.bipinnate.rachis = new Rachis()
Mimosa_urticaria.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_urticaria.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_urticaria.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_urticaria.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_urticaria.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_urticaria.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_urticaria.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(20, 3)
Mimosa_urticaria.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_urticaria.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_urticaria.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_urticaria.inflorescence = new Inflorescence()
Mimosa_urticaria.inflorescence.peduncle = new Peduncle()
Mimosa_urticaria.inflorescence.capitate = new CapitateInflorescence()

Mimosa_urticaria.flower = new Flower()
Mimosa_urticaria.flower.bracteole = new Bracteole()
Mimosa_urticaria.flower.merism = '4-merous'
Mimosa_urticaria.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_urticaria.flower.calyx = new Calyx()
Mimosa_urticaria.flower.calyx.shape = 'collar'
Mimosa_urticaria.flower.corolla = new Corolla()
Mimosa_urticaria.flower.corolla.shape = 'turbinate'

Mimosa_urticaria.androecium = new Androecium()
Mimosa_urticaria.androecium.filaments = new Filaments()
Mimosa_urticaria.androecium.filaments.colour = 'yellowish'

Mimosa_urticaria.ginoecium = new Ginoecium()
Mimosa_urticaria.ginoecium.ovary = new Ovary()

Mimosa_urticaria.fruit = new Fruit()
Mimosa_urticaria.fruit.stipe = new Stipe()
Mimosa_urticaria.fruit.replum = new Replum()
Mimosa_urticaria.fruit.epicarp = new Epicarp()

Mimosa_urticaria.seed = new Seed()


// Description authorship
Mimosa_urticaria.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_urticaria.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa urticaria
export { Mimosa_urticaria }