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


// Description of Mimosa guaranitica
const Mimosa_guaranitica = new Mimosa()
Mimosa_guaranitica.specificEpithet = 'guaranitica'

Mimosa_guaranitica.stems = new Stems()

Mimosa_guaranitica.stipule = new Stipule()
Mimosa_guaranitica.stipule.margin = new MarginStipule()
Mimosa_guaranitica.stipule.adaxial = new AdaxialStipule()
Mimosa_guaranitica.stipule.abaxial = new AbaxialStipule()

Mimosa_guaranitica.leaf = new Leaf()
Mimosa_guaranitica.leaf.petiole = new Petiole()
Mimosa_guaranitica.leaf.bipinnate = new Bipinnate()
Mimosa_guaranitica.leaf.bipinnate.rachis = new Rachis()
Mimosa_guaranitica.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_guaranitica.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_guaranitica.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(3, 8)
Mimosa_guaranitica.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_guaranitica.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_guaranitica.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_guaranitica.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(2, 3)
Mimosa_guaranitica.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_guaranitica.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_guaranitica.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_guaranitica.inflorescence = new Inflorescence()
Mimosa_guaranitica.inflorescence.peduncle = new Peduncle()
Mimosa_guaranitica.inflorescence.capitate = new CapitateInflorescence()

Mimosa_guaranitica.flower = new Flower()
Mimosa_guaranitica.flower.bracteole = new Bracteole()
Mimosa_guaranitica.flower.merism = '3-merous'
Mimosa_guaranitica.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_guaranitica.flower.calyx = new Calyx()
Mimosa_guaranitica.flower.calyx.shape = 'campanulate'
Mimosa_guaranitica.flower.corolla = new Corolla()

Mimosa_guaranitica.androecium = new Androecium()
Mimosa_guaranitica.androecium.filaments = new Filaments()
Mimosa_guaranitica.androecium.filaments.colour = 'pinkish'

Mimosa_guaranitica.ginoecium = new Ginoecium()
Mimosa_guaranitica.ginoecium.ovary = new Ovary()

Mimosa_guaranitica.fruit = new Fruit()
Mimosa_guaranitica.fruit.stipe = new Stipe()
Mimosa_guaranitica.fruit.replum = new Replum()
Mimosa_guaranitica.fruit.epicarp = new Epicarp()

Mimosa_guaranitica.seed = new Seed()


// Description authorship
Mimosa_guaranitica.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_guaranitica.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa guaranitica
export { Mimosa_guaranitica }