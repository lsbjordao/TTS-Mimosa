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


// Description of Mimosa troncosoae
const Mimosa_troncosoae = new Mimosa()
Mimosa_troncosoae.specificEpithet = 'troncosoae'

Mimosa_troncosoae.stems = new Stems()

Mimosa_troncosoae.stipule = new Stipule()
Mimosa_troncosoae.stipule.margin = new MarginStipule()
Mimosa_troncosoae.stipule.adaxial = new AdaxialStipule()
Mimosa_troncosoae.stipule.abaxial = new AbaxialStipule()

Mimosa_troncosoae.leaf = new Leaf()
Mimosa_troncosoae.leaf.petiole = new Petiole()
Mimosa_troncosoae.leaf.bipinnate = new Bipinnate()
Mimosa_troncosoae.leaf.bipinnate.rachis = new Rachis()
Mimosa_troncosoae.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_troncosoae.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_troncosoae.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(3, 4)
Mimosa_troncosoae.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_troncosoae.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_troncosoae.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_troncosoae.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(11)
Mimosa_troncosoae.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(12, 18)
Mimosa_troncosoae.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(19)
Mimosa_troncosoae.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_troncosoae.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_troncosoae.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_troncosoae.inflorescence = new Inflorescence()
Mimosa_troncosoae.inflorescence.peduncle = new Peduncle()
Mimosa_troncosoae.inflorescence.capitate = new CapitateInflorescence()

Mimosa_troncosoae.flower = new Flower()
Mimosa_troncosoae.flower.bracteole = new Bracteole()
Mimosa_troncosoae.flower.calyx = new Calyx()
Mimosa_troncosoae.flower.corolla = new Corolla()

Mimosa_troncosoae.androecium = new Androecium()
Mimosa_troncosoae.androecium.filaments = new Filaments()

Mimosa_troncosoae.ginoecium = new Ginoecium()
Mimosa_troncosoae.ginoecium.ovary = new Ovary()

Mimosa_troncosoae.fruit = new Fruit()
Mimosa_troncosoae.fruit.stipe = new Stipe()
Mimosa_troncosoae.fruit.replum = new Replum()
Mimosa_troncosoae.fruit.epicarp = new Epicarp()

Mimosa_troncosoae.seed = new Seed()


// Description authorship
Mimosa_troncosoae.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_troncosoae.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa troncosoae
export { Mimosa_troncosoae }