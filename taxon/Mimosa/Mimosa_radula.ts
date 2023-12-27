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


// Description of Mimosa radula
const Mimosa_radula = new Mimosa()
Mimosa_radula.specificEpithet = 'radula'

Mimosa_radula.stems = new Stems()

Mimosa_radula.stipule = new Stipule()
Mimosa_radula.stipule.margin = new MarginStipule()
Mimosa_radula.stipule.adaxial = new AdaxialStipule()
Mimosa_radula.stipule.abaxial = new AbaxialStipule()

Mimosa_radula.leaf = new Leaf()
Mimosa_radula.leaf.petiole = new Petiole()
Mimosa_radula.leaf.bipinnate = new Bipinnate()
Mimosa_radula.leaf.bipinnate.rachis = new Rachis()
Mimosa_radula.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_radula.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_radula.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_radula.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_radula.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_radula.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_radula.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(14, 18)
Mimosa_radula.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_radula.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_radula.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_radula.inflorescence = new Inflorescence()
Mimosa_radula.inflorescence.peduncle = new Peduncle()
Mimosa_radula.inflorescence.capitate = new CapitateInflorescence()

Mimosa_radula.flower = new Flower()
Mimosa_radula.flower.bracteole = new Bracteole()
Mimosa_radula.flower.merism = '4-merous'
Mimosa_radula.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_radula.flower.calyx = new Calyx()
Mimosa_radula.flower.calyx.shape = 'paleaceous'
Mimosa_radula.flower.corolla = new Corolla()
Mimosa_radula.flower.corolla.shape = ['vase-shaped', 'subtubular']

Mimosa_radula.androecium = new Androecium()
Mimosa_radula.androecium.filaments = new Filaments()
Mimosa_radula.androecium.filaments.colour = ['pinkish', 'purplish']

Mimosa_radula.ginoecium = new Ginoecium()
Mimosa_radula.ginoecium.ovary = new Ovary()

Mimosa_radula.fruit = new Fruit()
Mimosa_radula.fruit.stipe = new Stipe()
Mimosa_radula.fruit.replum = new Replum()
Mimosa_radula.fruit.epicarp = new Epicarp()

Mimosa_radula.seed = new Seed()


// Description authorship
Mimosa_radula.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_radula.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa radula
export { Mimosa_radula }