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


// Description of Mimosa sinaloensis
const Mimosa_sinaloensis = new Mimosa()
Mimosa_sinaloensis.specificEpithet = 'sinaloensis'

Mimosa_sinaloensis.stems = new Stems()

Mimosa_sinaloensis.stipule = new Stipule()
Mimosa_sinaloensis.stipule.margin = new MarginStipule()
Mimosa_sinaloensis.stipule.adaxial = new AdaxialStipule()
Mimosa_sinaloensis.stipule.abaxial = new AbaxialStipule()

Mimosa_sinaloensis.leaf = new Leaf()
Mimosa_sinaloensis.leaf.petiole = new Petiole()
Mimosa_sinaloensis.leaf.bipinnate = new Bipinnate()
Mimosa_sinaloensis.leaf.bipinnate.rachis = new Rachis()
Mimosa_sinaloensis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_sinaloensis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_sinaloensis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_sinaloensis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_sinaloensis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_sinaloensis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_sinaloensis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_sinaloensis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_sinaloensis.inflorescence = new Inflorescence()
Mimosa_sinaloensis.inflorescence.peduncle = new Peduncle()
Mimosa_sinaloensis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_sinaloensis.flower = new Flower()
Mimosa_sinaloensis.flower.bracteole = new Bracteole()
Mimosa_sinaloensis.flower.calyx = new Calyx()
Mimosa_sinaloensis.flower.calyx.shape = 'campanulate'
Mimosa_sinaloensis.flower.corolla = new Corolla()

Mimosa_sinaloensis.androecium = new Androecium()
Mimosa_sinaloensis.androecium.filaments = new Filaments()

Mimosa_sinaloensis.ginoecium = new Ginoecium()
Mimosa_sinaloensis.ginoecium.ovary = new Ovary()

Mimosa_sinaloensis.fruit = new Fruit()
Mimosa_sinaloensis.fruit.stipe = new Stipe()
Mimosa_sinaloensis.fruit.replum = new Replum()
Mimosa_sinaloensis.fruit.epicarp = new Epicarp()

Mimosa_sinaloensis.seed = new Seed()


// Description authorship
Mimosa_sinaloensis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_sinaloensis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa sinaloensis
export { Mimosa_sinaloensis }