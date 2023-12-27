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


// Description of Mimosa splendida
const Mimosa_splendida = new Mimosa()
Mimosa_splendida.specificEpithet = 'splendida'

Mimosa_splendida.stems = new Stems()

Mimosa_splendida.stipule = new Stipule()
Mimosa_splendida.stipule.margin = new MarginStipule()
Mimosa_splendida.stipule.adaxial = new AdaxialStipule()
Mimosa_splendida.stipule.abaxial = new AbaxialStipule()

Mimosa_splendida.leaf = new Leaf()
Mimosa_splendida.leaf.petiole = new Petiole()
Mimosa_splendida.leaf.bipinnate = new Bipinnate()
Mimosa_splendida.leaf.bipinnate.rachis = new Rachis()
Mimosa_splendida.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_splendida.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_splendida.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(15, 19)
Mimosa_splendida.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_splendida.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_splendida.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_splendida.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(21, 36)
Mimosa_splendida.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_splendida.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_splendida.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_splendida.inflorescence = new Inflorescence()
Mimosa_splendida.inflorescence.peduncle = new Peduncle()
Mimosa_splendida.inflorescence.capitate = new CapitateInflorescence()

Mimosa_splendida.flower = new Flower()
Mimosa_splendida.flower.bracteole = new Bracteole()
Mimosa_splendida.flower.merism = '4-merous'
Mimosa_splendida.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_splendida.flower.calyx = new Calyx()
Mimosa_splendida.flower.corolla = new Corolla()
Mimosa_splendida.flower.corolla.shape = 'vase-shaped'

Mimosa_splendida.androecium = new Androecium()
Mimosa_splendida.androecium.filaments = new Filaments()
Mimosa_splendida.androecium.filaments.colour = 'pinkish'

Mimosa_splendida.ginoecium = new Ginoecium()
Mimosa_splendida.ginoecium.ovary = new Ovary()

Mimosa_splendida.fruit = new Fruit()
Mimosa_splendida.fruit.stipe = new Stipe()
Mimosa_splendida.fruit.replum = new Replum()
Mimosa_splendida.fruit.epicarp = new Epicarp()

Mimosa_splendida.seed = new Seed()


// Description authorship
Mimosa_splendida.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_splendida.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa splendida
export { Mimosa_splendida }