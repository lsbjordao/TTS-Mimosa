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


// Description of Mimosa borboremae
const Mimosa_borboremae = new Mimosa()
Mimosa_borboremae.specificEpithet = 'borboremae'

Mimosa_borboremae.stems = new Stems()

Mimosa_borboremae.stipule = new Stipule()
Mimosa_borboremae.stipule.margin = new MarginStipule()
Mimosa_borboremae.stipule.adaxial = new AdaxialStipule()
Mimosa_borboremae.stipule.abaxial = new AbaxialStipule()

Mimosa_borboremae.leaf = new Leaf()
Mimosa_borboremae.leaf.petiole = new Petiole()
Mimosa_borboremae.leaf.bipinnate = new Bipinnate()
Mimosa_borboremae.leaf.bipinnate.rachis = new Rachis()
Mimosa_borboremae.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_borboremae.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_borboremae.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(4)
Mimosa_borboremae.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(5, 9)
Mimosa_borboremae.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_borboremae.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_borboremae.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_borboremae.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(5, 7)
Mimosa_borboremae.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_borboremae.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_borboremae.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_borboremae.inflorescence = new Inflorescence()
Mimosa_borboremae.inflorescence.peduncle = new Peduncle()
Mimosa_borboremae.inflorescence.capitate = new CapitateInflorescence()

Mimosa_borboremae.flower = new Flower()
Mimosa_borboremae.flower.bracteole = new Bracteole()
Mimosa_borboremae.flower.merism = '3-merous'
Mimosa_borboremae.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_borboremae.flower.calyx = new Calyx()
Mimosa_borboremae.flower.calyx.shape = 'campanulate'
Mimosa_borboremae.flower.corolla = new Corolla()

Mimosa_borboremae.androecium = new Androecium()
Mimosa_borboremae.androecium.filaments = new Filaments()
Mimosa_borboremae.androecium.filaments.colour = 'pinkish'

Mimosa_borboremae.ginoecium = new Ginoecium()
Mimosa_borboremae.ginoecium.ovary = new Ovary()

Mimosa_borboremae.fruit = new Fruit()
Mimosa_borboremae.fruit.stipe = new Stipe()
Mimosa_borboremae.fruit.replum = new Replum()
Mimosa_borboremae.fruit.epicarp = new Epicarp()

Mimosa_borboremae.seed = new Seed()


// Description authorship
Mimosa_borboremae.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_borboremae.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa borboremae
export { Mimosa_borboremae }