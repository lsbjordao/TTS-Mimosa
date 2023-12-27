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


// Description of Mimosa setifera
const Mimosa_setifera = new Mimosa()
Mimosa_setifera.specificEpithet = 'setifera'

Mimosa_setifera.stems = new Stems()

Mimosa_setifera.stipule = new Stipule()
Mimosa_setifera.stipule.margin = new MarginStipule()
Mimosa_setifera.stipule.adaxial = new AdaxialStipule()
Mimosa_setifera.stipule.abaxial = new AbaxialStipule()

Mimosa_setifera.leaf = new Leaf()
Mimosa_setifera.leaf.petiole = new Petiole()
Mimosa_setifera.leaf.bipinnate = new Bipinnate()
Mimosa_setifera.leaf.bipinnate.rachis = new Rachis()
Mimosa_setifera.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_setifera.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_setifera.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_setifera.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_setifera.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_setifera.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_setifera.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(7, 18)
Mimosa_setifera.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_setifera.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_setifera.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_setifera.inflorescence = new Inflorescence()
Mimosa_setifera.inflorescence.peduncle = new Peduncle()
Mimosa_setifera.inflorescence.capitate = new CapitateInflorescence()

Mimosa_setifera.flower = new Flower()
Mimosa_setifera.flower.bracteole = new Bracteole()
Mimosa_setifera.flower.merism = '4-merous'
Mimosa_setifera.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_setifera.flower.calyx = new Calyx()
Mimosa_setifera.flower.calyx.shape = 'paleaceous'
Mimosa_setifera.flower.corolla = new Corolla()
Mimosa_setifera.flower.corolla.shape = 'funnelform'

Mimosa_setifera.androecium = new Androecium()
Mimosa_setifera.androecium.filaments = new Filaments()
Mimosa_setifera.androecium.filaments.colour = 'pinkish'

Mimosa_setifera.ginoecium = new Ginoecium()
Mimosa_setifera.ginoecium.ovary = new Ovary()

Mimosa_setifera.fruit = new Fruit()
Mimosa_setifera.fruit.stipe = new Stipe()
Mimosa_setifera.fruit.replum = new Replum()
Mimosa_setifera.fruit.epicarp = new Epicarp()

Mimosa_setifera.seed = new Seed()


// Description authorship
Mimosa_setifera.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_setifera.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa setifera
export { Mimosa_setifera }