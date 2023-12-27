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


// Description of Mimosa strobiliflora
const Mimosa_strobiliflora = new Mimosa()
Mimosa_strobiliflora.specificEpithet = 'strobiliflora'

Mimosa_strobiliflora.stems = new Stems()

Mimosa_strobiliflora.stipule = new Stipule()
Mimosa_strobiliflora.stipule.margin = new MarginStipule()
Mimosa_strobiliflora.stipule.adaxial = new AdaxialStipule()
Mimosa_strobiliflora.stipule.abaxial = new AbaxialStipule()

Mimosa_strobiliflora.leaf = new Leaf()
Mimosa_strobiliflora.leaf.petiole = new Petiole()
Mimosa_strobiliflora.leaf.bipinnate = new Bipinnate()
Mimosa_strobiliflora.leaf.bipinnate.rachis = new Rachis()
Mimosa_strobiliflora.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_strobiliflora.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_strobiliflora.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(2)
Mimosa_strobiliflora.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(3, 5)
Mimosa_strobiliflora.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_strobiliflora.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_strobiliflora.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_strobiliflora.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(7, 10)
Mimosa_strobiliflora.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_strobiliflora.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_strobiliflora.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_strobiliflora.inflorescence = new Inflorescence()
Mimosa_strobiliflora.inflorescence.peduncle = new Peduncle()
Mimosa_strobiliflora.inflorescence.capitate = new CapitateInflorescence()

Mimosa_strobiliflora.flower = new Flower()
Mimosa_strobiliflora.flower.bracteole = new Bracteole()
Mimosa_strobiliflora.flower.merism = '4-merous'
Mimosa_strobiliflora.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_strobiliflora.flower.calyx = new Calyx()
Mimosa_strobiliflora.flower.calyx.shape = 'campanulate'
Mimosa_strobiliflora.flower.corolla = new Corolla()
Mimosa_strobiliflora.flower.corolla.shape = 'funnelform'

Mimosa_strobiliflora.androecium = new Androecium()
Mimosa_strobiliflora.androecium.filaments = new Filaments()
Mimosa_strobiliflora.androecium.filaments.colour = 'pinkish'

Mimosa_strobiliflora.ginoecium = new Ginoecium()
Mimosa_strobiliflora.ginoecium.ovary = new Ovary()

Mimosa_strobiliflora.fruit = new Fruit()
Mimosa_strobiliflora.fruit.stipe = new Stipe()
Mimosa_strobiliflora.fruit.replum = new Replum()
Mimosa_strobiliflora.fruit.epicarp = new Epicarp()

Mimosa_strobiliflora.seed = new Seed()


// Description authorship
Mimosa_strobiliflora.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_strobiliflora.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa strobiliflora
export { Mimosa_strobiliflora }