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


// Description of Mimosa hondurana
const Mimosa_hondurana = new Mimosa()
Mimosa_hondurana.specificEpithet = 'hondurana'

Mimosa_hondurana.stems = new Stems()

Mimosa_hondurana.stipule = new Stipule()
Mimosa_hondurana.stipule.margin = new MarginStipule()
Mimosa_hondurana.stipule.adaxial = new AdaxialStipule()
Mimosa_hondurana.stipule.abaxial = new AbaxialStipule()

Mimosa_hondurana.leaf = new Leaf()
Mimosa_hondurana.leaf.petiole = new Petiole()
Mimosa_hondurana.leaf.bipinnate = new Bipinnate()
Mimosa_hondurana.leaf.bipinnate.rachis = new Rachis()
Mimosa_hondurana.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_hondurana.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_hondurana.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_hondurana.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_hondurana.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_hondurana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(8, 13)
Mimosa_hondurana.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_hondurana.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_hondurana.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_hondurana.inflorescence = new Inflorescence()
Mimosa_hondurana.inflorescence.peduncle = new Peduncle()
Mimosa_hondurana.inflorescence.capitate = new CapitateInflorescence()

Mimosa_hondurana.flower = new Flower()
Mimosa_hondurana.flower.bracteole = new Bracteole()
Mimosa_hondurana.flower.merism = '4-merous'
Mimosa_hondurana.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_hondurana.flower.calyx = new Calyx()
Mimosa_hondurana.flower.calyx.shape = 'campanulate'
Mimosa_hondurana.flower.corolla = new Corolla()
Mimosa_hondurana.flower.corolla.shape = 'turbinate'

Mimosa_hondurana.androecium = new Androecium()
Mimosa_hondurana.androecium.filaments = new Filaments()

Mimosa_hondurana.ginoecium = new Ginoecium()
Mimosa_hondurana.ginoecium.ovary = new Ovary()

Mimosa_hondurana.fruit = new Fruit()
Mimosa_hondurana.fruit.stipe = new Stipe()
Mimosa_hondurana.fruit.replum = new Replum()
Mimosa_hondurana.fruit.epicarp = new Epicarp()

Mimosa_hondurana.seed = new Seed()


// Description authorship
Mimosa_hondurana.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_hondurana.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa hondurana
export { Mimosa_hondurana }