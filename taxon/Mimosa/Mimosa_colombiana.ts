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


// Description of Mimosa colombiana
const Mimosa_colombiana = new Mimosa()
Mimosa_colombiana.specificEpithet = 'colombiana'

Mimosa_colombiana.stems = new Stems()

Mimosa_colombiana.stipule = new Stipule()
Mimosa_colombiana.stipule.margin = new MarginStipule()
Mimosa_colombiana.stipule.adaxial = new AdaxialStipule()
Mimosa_colombiana.stipule.abaxial = new AbaxialStipule()

Mimosa_colombiana.leaf = new Leaf()
Mimosa_colombiana.leaf.petiole = new Petiole()
Mimosa_colombiana.leaf.bipinnate = new Bipinnate()
Mimosa_colombiana.leaf.bipinnate.rachis = new Rachis()
Mimosa_colombiana.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_colombiana.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_colombiana.leaf.bipinnate.pinnae.setNumberOfPairs(2)
Mimosa_colombiana.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_colombiana.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_colombiana.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_colombiana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(25, 45)
Mimosa_colombiana.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_colombiana.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_colombiana.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_colombiana.inflorescence = new Inflorescence()
Mimosa_colombiana.inflorescence.peduncle = new Peduncle()
Mimosa_colombiana.inflorescence.capitate = new CapitateInflorescence()

Mimosa_colombiana.flower = new Flower()
Mimosa_colombiana.flower.bracteole = new Bracteole()
Mimosa_colombiana.flower.merism = ['5-merous', '6-merous']
Mimosa_colombiana.flower.calyx = new Calyx()
Mimosa_colombiana.flower.calyx.shape = 'campanulate'
Mimosa_colombiana.flower.corolla = new Corolla()
Mimosa_colombiana.flower.corolla.shape = 'turbinate'

Mimosa_colombiana.androecium = new Androecium()
Mimosa_colombiana.androecium.filaments = new Filaments()
Mimosa_colombiana.androecium.filaments.colour = 'whitenish'

Mimosa_colombiana.ginoecium = new Ginoecium()
Mimosa_colombiana.ginoecium.ovary = new Ovary()

Mimosa_colombiana.fruit = new Fruit()
Mimosa_colombiana.fruit.stipe = new Stipe()
Mimosa_colombiana.fruit.replum = new Replum()
Mimosa_colombiana.fruit.epicarp = new Epicarp()

Mimosa_colombiana.seed = new Seed()


// Description authorship
Mimosa_colombiana.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_colombiana.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa colombiana
export { Mimosa_colombiana }