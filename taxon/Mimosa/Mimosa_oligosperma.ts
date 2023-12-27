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


// Description of Mimosa oligosperma
const Mimosa_oligosperma = new Mimosa()
Mimosa_oligosperma.specificEpithet = 'oligosperma'

Mimosa_oligosperma.stems = new Stems()

Mimosa_oligosperma.stipule = new Stipule()
Mimosa_oligosperma.stipule.margin = new MarginStipule()
Mimosa_oligosperma.stipule.adaxial = new AdaxialStipule()
Mimosa_oligosperma.stipule.abaxial = new AbaxialStipule()

Mimosa_oligosperma.leaf = new Leaf()
Mimosa_oligosperma.leaf.petiole = new Petiole()
Mimosa_oligosperma.leaf.bipinnate = new Bipinnate()
Mimosa_oligosperma.leaf.bipinnate.rachis = new Rachis()
Mimosa_oligosperma.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_oligosperma.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_oligosperma.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(10, 12)
Mimosa_oligosperma.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_oligosperma.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_oligosperma.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_oligosperma.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_oligosperma.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_oligosperma.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_oligosperma.inflorescence = new Inflorescence()
Mimosa_oligosperma.inflorescence.peduncle = new Peduncle()
Mimosa_oligosperma.inflorescence.capitate = new CapitateInflorescence()

Mimosa_oligosperma.flower = new Flower()
Mimosa_oligosperma.flower.bracteole = new Bracteole()
Mimosa_oligosperma.flower.merism = '4-merous'
Mimosa_oligosperma.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_oligosperma.flower.calyx = new Calyx()
Mimosa_oligosperma.flower.corolla = new Corolla()

Mimosa_oligosperma.androecium = new Androecium()
Mimosa_oligosperma.androecium.filaments = new Filaments()

Mimosa_oligosperma.ginoecium = new Ginoecium()
Mimosa_oligosperma.ginoecium.ovary = new Ovary()

Mimosa_oligosperma.fruit = new Fruit()
Mimosa_oligosperma.fruit.stipe = new Stipe()
Mimosa_oligosperma.fruit.replum = new Replum()
Mimosa_oligosperma.fruit.epicarp = new Epicarp()

Mimosa_oligosperma.seed = new Seed()


// Description authorship
Mimosa_oligosperma.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_oligosperma.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa oligosperma
export { Mimosa_oligosperma }