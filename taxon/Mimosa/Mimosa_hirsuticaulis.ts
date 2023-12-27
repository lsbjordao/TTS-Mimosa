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


// Description of Mimosa hirsuticaulis
const Mimosa_hirsuticaulis = new Mimosa()
Mimosa_hirsuticaulis.specificEpithet = 'hirsuticaulis'

Mimosa_hirsuticaulis.stems = new Stems()

Mimosa_hirsuticaulis.stipule = new Stipule()
Mimosa_hirsuticaulis.stipule.margin = new MarginStipule()
Mimosa_hirsuticaulis.stipule.adaxial = new AdaxialStipule()
Mimosa_hirsuticaulis.stipule.abaxial = new AbaxialStipule()

Mimosa_hirsuticaulis.leaf = new Leaf()
Mimosa_hirsuticaulis.leaf.petiole = new Petiole()
Mimosa_hirsuticaulis.leaf.bipinnate = new Bipinnate()
Mimosa_hirsuticaulis.leaf.bipinnate.rachis = new Rachis()
Mimosa_hirsuticaulis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_hirsuticaulis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_hirsuticaulis.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(3, 4)
Mimosa_hirsuticaulis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_hirsuticaulis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_hirsuticaulis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_hirsuticaulis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(15)
Mimosa_hirsuticaulis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(17, 33)
Mimosa_hirsuticaulis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(40)
Mimosa_hirsuticaulis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_hirsuticaulis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_hirsuticaulis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_hirsuticaulis.inflorescence = new Inflorescence()
Mimosa_hirsuticaulis.inflorescence.peduncle = new Peduncle()
Mimosa_hirsuticaulis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_hirsuticaulis.flower = new Flower()
Mimosa_hirsuticaulis.flower.bracteole = new Bracteole()
Mimosa_hirsuticaulis.flower.merism = '3-merous'
Mimosa_hirsuticaulis.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_hirsuticaulis.flower.calyx = new Calyx()
Mimosa_hirsuticaulis.flower.calyx.shape = 'campanulate'
Mimosa_hirsuticaulis.flower.corolla = new Corolla()

Mimosa_hirsuticaulis.androecium = new Androecium()
Mimosa_hirsuticaulis.androecium.filaments = new Filaments()

Mimosa_hirsuticaulis.ginoecium = new Ginoecium()
Mimosa_hirsuticaulis.ginoecium.ovary = new Ovary()

Mimosa_hirsuticaulis.fruit = new Fruit()
Mimosa_hirsuticaulis.fruit.stipe = new Stipe()
Mimosa_hirsuticaulis.fruit.replum = new Replum()
Mimosa_hirsuticaulis.fruit.epicarp = new Epicarp()

Mimosa_hirsuticaulis.seed = new Seed()


// Description authorship
Mimosa_hirsuticaulis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_hirsuticaulis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa hirsuticaulis
export { Mimosa_hirsuticaulis }