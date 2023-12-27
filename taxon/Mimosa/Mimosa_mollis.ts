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


// Description of Mimosa mollis
const Mimosa_mollis = new Mimosa()
Mimosa_mollis.specificEpithet = 'mollis'

Mimosa_mollis.stems = new Stems()

Mimosa_mollis.stipule = new Stipule()
Mimosa_mollis.stipule.margin = new MarginStipule()
Mimosa_mollis.stipule.adaxial = new AdaxialStipule()
Mimosa_mollis.stipule.abaxial = new AbaxialStipule()

Mimosa_mollis.leaf = new Leaf()
Mimosa_mollis.leaf.petiole = new Petiole()
Mimosa_mollis.leaf.bipinnate = new Bipinnate()
Mimosa_mollis.leaf.bipinnate.rachis = new Rachis()
Mimosa_mollis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_mollis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_mollis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_mollis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_mollis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_mollis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(7, 10)
Mimosa_mollis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_mollis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_mollis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_mollis.inflorescence = new Inflorescence()
Mimosa_mollis.inflorescence.peduncle = new Peduncle()
Mimosa_mollis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_mollis.flower = new Flower()
Mimosa_mollis.flower.bracteole = new Bracteole()
Mimosa_mollis.flower.merism = '5-merous'
Mimosa_mollis.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_mollis.flower.calyx = new Calyx()
Mimosa_mollis.flower.calyx.shape = 'campanulate'
Mimosa_mollis.flower.corolla = new Corolla()
Mimosa_mollis.flower.corolla.shape = 'vase-shaped'

Mimosa_mollis.androecium = new Androecium()
Mimosa_mollis.androecium.filaments = new Filaments()
Mimosa_mollis.androecium.filaments.colour = 'pinkish'

Mimosa_mollis.ginoecium = new Ginoecium()
Mimosa_mollis.ginoecium.ovary = new Ovary()

Mimosa_mollis.fruit = new Fruit()
Mimosa_mollis.fruit.stipe = new Stipe()
Mimosa_mollis.fruit.replum = new Replum()
Mimosa_mollis.fruit.epicarp = new Epicarp()

Mimosa_mollis.seed = new Seed()


// Description authorship
Mimosa_mollis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_mollis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa mollis
export { Mimosa_mollis }