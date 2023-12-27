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


// Description of Mimosa martinDelcampoi
const Mimosa_martinDelcampoi = new Mimosa()
Mimosa_martinDelcampoi.specificEpithet = 'martinDelcampoi'

Mimosa_martinDelcampoi.stems = new Stems()

Mimosa_martinDelcampoi.stipule = new Stipule()
Mimosa_martinDelcampoi.stipule.margin = new MarginStipule()
Mimosa_martinDelcampoi.stipule.adaxial = new AdaxialStipule()
Mimosa_martinDelcampoi.stipule.abaxial = new AbaxialStipule()

Mimosa_martinDelcampoi.leaf = new Leaf()
Mimosa_martinDelcampoi.leaf.petiole = new Petiole()
Mimosa_martinDelcampoi.leaf.bipinnate = new Bipinnate()
Mimosa_martinDelcampoi.leaf.bipinnate.rachis = new Rachis()
Mimosa_martinDelcampoi.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_martinDelcampoi.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_martinDelcampoi.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_martinDelcampoi.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_martinDelcampoi.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_martinDelcampoi.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_martinDelcampoi.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_martinDelcampoi.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_martinDelcampoi.inflorescence = new Inflorescence()
Mimosa_martinDelcampoi.inflorescence.peduncle = new Peduncle()
Mimosa_martinDelcampoi.inflorescence.capitate = new CapitateInflorescence()

Mimosa_martinDelcampoi.flower = new Flower()
Mimosa_martinDelcampoi.flower.bracteole = new Bracteole()
Mimosa_martinDelcampoi.flower.merism = ['4-merous', '5-merous']
Mimosa_martinDelcampoi.flower.calyx = new Calyx()
Mimosa_martinDelcampoi.flower.calyx.shape = 'campanulate'
Mimosa_martinDelcampoi.flower.corolla = new Corolla()

Mimosa_martinDelcampoi.androecium = new Androecium()
Mimosa_martinDelcampoi.androecium.filaments = new Filaments()
Mimosa_martinDelcampoi.androecium.filaments.colour = 'pinkish'

Mimosa_martinDelcampoi.ginoecium = new Ginoecium()
Mimosa_martinDelcampoi.ginoecium.ovary = new Ovary()

Mimosa_martinDelcampoi.fruit = new Fruit()
Mimosa_martinDelcampoi.fruit.stipe = new Stipe()
Mimosa_martinDelcampoi.fruit.replum = new Replum()
Mimosa_martinDelcampoi.fruit.epicarp = new Epicarp()

Mimosa_martinDelcampoi.seed = new Seed()


// Description authorship
Mimosa_martinDelcampoi.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_martinDelcampoi.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa martinDelcampoi
export { Mimosa_martinDelcampoi }