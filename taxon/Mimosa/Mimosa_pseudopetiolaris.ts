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


// Description of Mimosa pseudopetiolaris
const Mimosa_pseudopetiolaris = new Mimosa()
Mimosa_pseudopetiolaris.specificEpithet = 'pseudopetiolaris'

Mimosa_pseudopetiolaris.stems = new Stems()

Mimosa_pseudopetiolaris.stipule = new Stipule()
Mimosa_pseudopetiolaris.stipule.margin = new MarginStipule()
Mimosa_pseudopetiolaris.stipule.adaxial = new AdaxialStipule()
Mimosa_pseudopetiolaris.stipule.abaxial = new AbaxialStipule()

Mimosa_pseudopetiolaris.leaf = new Leaf()
Mimosa_pseudopetiolaris.leaf.petiole = new Petiole()
Mimosa_pseudopetiolaris.leaf.bipinnate = new Bipinnate()
Mimosa_pseudopetiolaris.leaf.bipinnate.rachis = new Rachis()
Mimosa_pseudopetiolaris.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_pseudopetiolaris.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_pseudopetiolaris.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_pseudopetiolaris.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_pseudopetiolaris.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_pseudopetiolaris.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_pseudopetiolaris.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_pseudopetiolaris.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_pseudopetiolaris.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_pseudopetiolaris.inflorescence = new Inflorescence()
Mimosa_pseudopetiolaris.inflorescence.peduncle = new Peduncle()
Mimosa_pseudopetiolaris.inflorescence.capitate = new CapitateInflorescence()

Mimosa_pseudopetiolaris.flower = new Flower()
Mimosa_pseudopetiolaris.flower.bracteole = new Bracteole()
Mimosa_pseudopetiolaris.flower.merism = '4-merous'
Mimosa_pseudopetiolaris.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_pseudopetiolaris.flower.calyx = new Calyx()
Mimosa_pseudopetiolaris.flower.corolla = new Corolla()
Mimosa_pseudopetiolaris.flower.corolla.shape = 'vase-shaped'

Mimosa_pseudopetiolaris.androecium = new Androecium()
Mimosa_pseudopetiolaris.androecium.filaments = new Filaments()
Mimosa_pseudopetiolaris.androecium.filaments.colour = 'pinkish'

Mimosa_pseudopetiolaris.ginoecium = new Ginoecium()
Mimosa_pseudopetiolaris.ginoecium.ovary = new Ovary()

Mimosa_pseudopetiolaris.fruit = new Fruit()
Mimosa_pseudopetiolaris.fruit.stipe = new Stipe()
Mimosa_pseudopetiolaris.fruit.replum = new Replum()
Mimosa_pseudopetiolaris.fruit.epicarp = new Epicarp()

Mimosa_pseudopetiolaris.seed = new Seed()


// Description authorship
Mimosa_pseudopetiolaris.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_pseudopetiolaris.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa pseudopetiolaris
export { Mimosa_pseudopetiolaris }