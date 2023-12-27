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


// Description of Mimosa calcicola
const Mimosa_calcicola = new Mimosa()
Mimosa_calcicola.specificEpithet = 'calcicola'

Mimosa_calcicola.stems = new Stems()

Mimosa_calcicola.stipule = new Stipule()
Mimosa_calcicola.stipule.margin = new MarginStipule()
Mimosa_calcicola.stipule.adaxial = new AdaxialStipule()
Mimosa_calcicola.stipule.abaxial = new AbaxialStipule()

Mimosa_calcicola.leaf = new Leaf()
Mimosa_calcicola.leaf.petiole = new Petiole()
Mimosa_calcicola.leaf.bipinnate = new Bipinnate()
Mimosa_calcicola.leaf.bipinnate.rachis = new Rachis()
Mimosa_calcicola.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_calcicola.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_calcicola.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_calcicola.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_calcicola.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_calcicola.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(35, 48)
Mimosa_calcicola.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_calcicola.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_calcicola.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_calcicola.inflorescence = new Inflorescence()
Mimosa_calcicola.inflorescence.peduncle = new Peduncle()
Mimosa_calcicola.inflorescence.capitate = new CapitateInflorescence()

Mimosa_calcicola.flower = new Flower()
Mimosa_calcicola.flower.bracteole = new Bracteole()
Mimosa_calcicola.flower.merism = '5-merous'
Mimosa_calcicola.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_calcicola.flower.calyx = new Calyx()
Mimosa_calcicola.flower.calyx.shape = 'campanulate'
Mimosa_calcicola.flower.corolla = new Corolla()

Mimosa_calcicola.androecium = new Androecium()
Mimosa_calcicola.androecium.filaments = new Filaments()
Mimosa_calcicola.androecium.filaments.colour = 'pinkish'

Mimosa_calcicola.ginoecium = new Ginoecium()
Mimosa_calcicola.ginoecium.ovary = new Ovary()

Mimosa_calcicola.fruit = new Fruit()
Mimosa_calcicola.fruit.stipe = new Stipe()
Mimosa_calcicola.fruit.replum = new Replum()
Mimosa_calcicola.fruit.epicarp = new Epicarp()

Mimosa_calcicola.seed = new Seed()


// Description authorship
Mimosa_calcicola.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_calcicola.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa calcicola
export { Mimosa_calcicola }