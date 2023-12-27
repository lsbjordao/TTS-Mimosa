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


// Description of Mimosa guilandinae
const Mimosa_guilandinae = new Mimosa()
Mimosa_guilandinae.specificEpithet = 'guilandinae'

Mimosa_guilandinae.stems = new Stems()

Mimosa_guilandinae.stipule = new Stipule()
Mimosa_guilandinae.stipule.margin = new MarginStipule()
Mimosa_guilandinae.stipule.adaxial = new AdaxialStipule()
Mimosa_guilandinae.stipule.abaxial = new AbaxialStipule()

Mimosa_guilandinae.leaf = new Leaf()
Mimosa_guilandinae.leaf.petiole = new Petiole()
Mimosa_guilandinae.leaf.bipinnate = new Bipinnate()
Mimosa_guilandinae.leaf.bipinnate.rachis = new Rachis()
Mimosa_guilandinae.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_guilandinae.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_guilandinae.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(1, 4)
Mimosa_guilandinae.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_guilandinae.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_guilandinae.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_guilandinae.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(11, 16)
Mimosa_guilandinae.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(17)
Mimosa_guilandinae.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_guilandinae.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_guilandinae.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_guilandinae.inflorescence = new Inflorescence()
Mimosa_guilandinae.inflorescence.peduncle = new Peduncle()
Mimosa_guilandinae.inflorescence.capitate = new CapitateInflorescence()

Mimosa_guilandinae.flower = new Flower()
Mimosa_guilandinae.flower.bracteole = new Bracteole()
Mimosa_guilandinae.flower.merism = ['4-merous', '5-merous']
Mimosa_guilandinae.flower.calyx = new Calyx()
Mimosa_guilandinae.flower.calyx.shape = 'campanulate'
Mimosa_guilandinae.flower.corolla = new Corolla()
Mimosa_guilandinae.flower.corolla.shape = 'turbinate'

Mimosa_guilandinae.androecium = new Androecium()
Mimosa_guilandinae.androecium.filaments = new Filaments()
Mimosa_guilandinae.androecium.filaments.colour = ['whitenish', 'creamish']

Mimosa_guilandinae.ginoecium = new Ginoecium()
Mimosa_guilandinae.ginoecium.ovary = new Ovary()

Mimosa_guilandinae.fruit = new Fruit()
Mimosa_guilandinae.fruit.stipe = new Stipe()
Mimosa_guilandinae.fruit.replum = new Replum()
Mimosa_guilandinae.fruit.epicarp = new Epicarp()

Mimosa_guilandinae.seed = new Seed()


// Description authorship
Mimosa_guilandinae.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_guilandinae.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa guilandinae
export { Mimosa_guilandinae }