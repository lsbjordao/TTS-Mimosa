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


// Description of Mimosa lithoreas
const Mimosa_lithoreas = new Mimosa()
Mimosa_lithoreas.specificEpithet = 'lithoreas'

Mimosa_lithoreas.stems = new Stems()

Mimosa_lithoreas.stipule = new Stipule()
Mimosa_lithoreas.stipule.margin = new MarginStipule()
Mimosa_lithoreas.stipule.adaxial = new AdaxialStipule()
Mimosa_lithoreas.stipule.abaxial = new AbaxialStipule()

Mimosa_lithoreas.leaf = new Leaf()
Mimosa_lithoreas.leaf.petiole = new Petiole()
Mimosa_lithoreas.leaf.bipinnate = new Bipinnate()
Mimosa_lithoreas.leaf.bipinnate.rachis = new Rachis()
Mimosa_lithoreas.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_lithoreas.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_lithoreas.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(5)
Mimosa_lithoreas.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(8, 15)
Mimosa_lithoreas.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_lithoreas.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_lithoreas.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_lithoreas.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_lithoreas.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_lithoreas.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_lithoreas.inflorescence = new Inflorescence()
Mimosa_lithoreas.inflorescence.peduncle = new Peduncle()
Mimosa_lithoreas.inflorescence.capitate = new CapitateInflorescence()

Mimosa_lithoreas.flower = new Flower()
Mimosa_lithoreas.flower.bracteole = new Bracteole()
Mimosa_lithoreas.flower.merism = '4-merous'
Mimosa_lithoreas.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_lithoreas.flower.calyx = new Calyx()
Mimosa_lithoreas.flower.calyx.shape = 'campanulate'
Mimosa_lithoreas.flower.corolla = new Corolla()
Mimosa_lithoreas.flower.corolla.shape = 'funnelform'

Mimosa_lithoreas.androecium = new Androecium()
Mimosa_lithoreas.androecium.filaments = new Filaments()
Mimosa_lithoreas.androecium.filaments.colour = 'lilac'

Mimosa_lithoreas.ginoecium = new Ginoecium()
Mimosa_lithoreas.ginoecium.ovary = new Ovary()

Mimosa_lithoreas.fruit = new Fruit()
Mimosa_lithoreas.fruit.stipe = new Stipe()
Mimosa_lithoreas.fruit.replum = new Replum()
Mimosa_lithoreas.fruit.epicarp = new Epicarp()

Mimosa_lithoreas.seed = new Seed()


// Description authorship
Mimosa_lithoreas.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_lithoreas.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa lithoreas
export { Mimosa_lithoreas }