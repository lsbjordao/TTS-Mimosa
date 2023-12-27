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


// Description of Mimosa longipes
const Mimosa_longipes = new Mimosa()
Mimosa_longipes.specificEpithet = 'longipes'

Mimosa_longipes.stems = new Stems()

Mimosa_longipes.stipule = new Stipule()
Mimosa_longipes.stipule.margin = new MarginStipule()
Mimosa_longipes.stipule.adaxial = new AdaxialStipule()
Mimosa_longipes.stipule.abaxial = new AbaxialStipule()

Mimosa_longipes.leaf = new Leaf()
Mimosa_longipes.leaf.petiole = new Petiole()
Mimosa_longipes.leaf.bipinnate = new Bipinnate()
Mimosa_longipes.leaf.bipinnate.rachis = new Rachis()
Mimosa_longipes.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_longipes.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_longipes.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_longipes.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_longipes.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_longipes.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(9, 12)
Mimosa_longipes.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_longipes.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_longipes.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_longipes.inflorescence = new Inflorescence()
Mimosa_longipes.inflorescence.peduncle = new Peduncle()
Mimosa_longipes.inflorescence.capitate = new CapitateInflorescence()

Mimosa_longipes.flower = new Flower()
Mimosa_longipes.flower.bracteole = new Bracteole()
Mimosa_longipes.flower.merism = ['4-merous', '5-merous']
Mimosa_longipes.flower.calyx = new Calyx()
Mimosa_longipes.flower.calyx.shape = 'paleaceous'
Mimosa_longipes.flower.corolla = new Corolla()
Mimosa_longipes.flower.corolla.shape = 'funnelform'

Mimosa_longipes.androecium = new Androecium()
Mimosa_longipes.androecium.filaments = new Filaments()
Mimosa_longipes.androecium.filaments.colour = 'pinkish'

Mimosa_longipes.ginoecium = new Ginoecium()
Mimosa_longipes.ginoecium.ovary = new Ovary()

Mimosa_longipes.fruit = new Fruit()
Mimosa_longipes.fruit.stipe = new Stipe()
Mimosa_longipes.fruit.replum = new Replum()
Mimosa_longipes.fruit.epicarp = new Epicarp()

Mimosa_longipes.seed = new Seed()


// Description authorship
Mimosa_longipes.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_longipes.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa longipes
export { Mimosa_longipes }