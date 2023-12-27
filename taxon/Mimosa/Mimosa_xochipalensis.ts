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
import { Peduncle, Spicate } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa xochipalensis
const Mimosa_xochipalensis = new Mimosa()
Mimosa_xochipalensis.specificEpithet = 'xochipalensis'

Mimosa_xochipalensis.stems = new Stems()

Mimosa_xochipalensis.stipule = new Stipule()
Mimosa_xochipalensis.stipule.margin = new MarginStipule()
Mimosa_xochipalensis.stipule.adaxial = new AdaxialStipule()
Mimosa_xochipalensis.stipule.abaxial = new AbaxialStipule()

Mimosa_xochipalensis.leaf = new Leaf()
Mimosa_xochipalensis.leaf.petiole = new Petiole()
Mimosa_xochipalensis.leaf.bipinnate = new Bipinnate()
Mimosa_xochipalensis.leaf.bipinnate.rachis = new Rachis()
Mimosa_xochipalensis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_xochipalensis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_xochipalensis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_xochipalensis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_xochipalensis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_xochipalensis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_xochipalensis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_xochipalensis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_xochipalensis.inflorescence = new Inflorescence()
Mimosa_xochipalensis.inflorescence.peduncle = new Peduncle()
Mimosa_xochipalensis.inflorescence.spicate = new Spicate()

Mimosa_xochipalensis.flower = new Flower()
Mimosa_xochipalensis.flower.bracteole = new Bracteole()
Mimosa_xochipalensis.flower.merism = ['4-merous', '5-merous']
Mimosa_xochipalensis.flower.calyx = new Calyx()
Mimosa_xochipalensis.flower.corolla = new Corolla()

Mimosa_xochipalensis.androecium = new Androecium()
Mimosa_xochipalensis.androecium.filaments = new Filaments()

Mimosa_xochipalensis.ginoecium = new Ginoecium()
Mimosa_xochipalensis.ginoecium.ovary = new Ovary()

Mimosa_xochipalensis.fruit = new Fruit()
Mimosa_xochipalensis.fruit.stipe = new Stipe()
Mimosa_xochipalensis.fruit.replum = new Replum()
Mimosa_xochipalensis.fruit.epicarp = new Epicarp()

Mimosa_xochipalensis.seed = new Seed()


// Description authorship
Mimosa_xochipalensis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_xochipalensis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa xochipalensis
export { Mimosa_xochipalensis }