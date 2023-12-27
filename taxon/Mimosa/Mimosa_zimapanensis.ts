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


// Description of Mimosa zimapanensis
const Mimosa_zimapanensis = new Mimosa()
Mimosa_zimapanensis.specificEpithet = 'zimapanensis'

Mimosa_zimapanensis.stems = new Stems()

Mimosa_zimapanensis.stipule = new Stipule()
Mimosa_zimapanensis.stipule.margin = new MarginStipule()
Mimosa_zimapanensis.stipule.adaxial = new AdaxialStipule()
Mimosa_zimapanensis.stipule.abaxial = new AbaxialStipule()

Mimosa_zimapanensis.leaf = new Leaf()
Mimosa_zimapanensis.leaf.petiole = new Petiole()
Mimosa_zimapanensis.leaf.bipinnate = new Bipinnate()
Mimosa_zimapanensis.leaf.bipinnate.rachis = new Rachis()
Mimosa_zimapanensis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_zimapanensis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_zimapanensis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_zimapanensis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_zimapanensis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_zimapanensis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(14, 19)
Mimosa_zimapanensis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_zimapanensis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_zimapanensis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_zimapanensis.inflorescence = new Inflorescence()
Mimosa_zimapanensis.inflorescence.peduncle = new Peduncle()
Mimosa_zimapanensis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_zimapanensis.flower = new Flower()
Mimosa_zimapanensis.flower.bracteole = new Bracteole()
Mimosa_zimapanensis.flower.calyx = new Calyx()
Mimosa_zimapanensis.flower.calyx.shape = 'campanulate'
Mimosa_zimapanensis.flower.corolla = new Corolla()
Mimosa_zimapanensis.flower.corolla.shape = 'vase-shaped'

Mimosa_zimapanensis.androecium = new Androecium()
Mimosa_zimapanensis.androecium.filaments = new Filaments()

Mimosa_zimapanensis.ginoecium = new Ginoecium()
Mimosa_zimapanensis.ginoecium.ovary = new Ovary()

Mimosa_zimapanensis.fruit = new Fruit()
Mimosa_zimapanensis.fruit.stipe = new Stipe()
Mimosa_zimapanensis.fruit.replum = new Replum()
Mimosa_zimapanensis.fruit.epicarp = new Epicarp()

Mimosa_zimapanensis.seed = new Seed()


// Description authorship
Mimosa_zimapanensis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_zimapanensis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa zimapanensis
export { Mimosa_zimapanensis }