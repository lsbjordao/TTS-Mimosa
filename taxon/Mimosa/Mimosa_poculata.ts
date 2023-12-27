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


// Description of Mimosa poculata
const Mimosa_poculata = new Mimosa()
Mimosa_poculata.specificEpithet = 'poculata'

Mimosa_poculata.stems = new Stems()

Mimosa_poculata.stipule = new Stipule()
Mimosa_poculata.stipule.margin = new MarginStipule()
Mimosa_poculata.stipule.adaxial = new AdaxialStipule()
Mimosa_poculata.stipule.abaxial = new AbaxialStipule()

Mimosa_poculata.leaf = new Leaf()
Mimosa_poculata.leaf.petiole = new Petiole()
Mimosa_poculata.leaf.bipinnate = new Bipinnate()
Mimosa_poculata.leaf.bipinnate.rachis = new Rachis()
Mimosa_poculata.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_poculata.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_poculata.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 4)
Mimosa_poculata.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_poculata.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_poculata.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_poculata.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(35, 50)
Mimosa_poculata.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_poculata.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_poculata.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_poculata.inflorescence = new Inflorescence()
Mimosa_poculata.inflorescence.peduncle = new Peduncle()
Mimosa_poculata.inflorescence.capitate = new CapitateInflorescence()

Mimosa_poculata.flower = new Flower()
Mimosa_poculata.flower.bracteole = new Bracteole()
Mimosa_poculata.flower.merism = '4-merous'
Mimosa_poculata.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_poculata.flower.calyx = new Calyx()
Mimosa_poculata.flower.calyx.shape = 'cup-shaped'
Mimosa_poculata.flower.corolla = new Corolla()

Mimosa_poculata.androecium = new Androecium()
Mimosa_poculata.androecium.filaments = new Filaments()

Mimosa_poculata.ginoecium = new Ginoecium()
Mimosa_poculata.ginoecium.ovary = new Ovary()

Mimosa_poculata.fruit = new Fruit()
Mimosa_poculata.fruit.stipe = new Stipe()
Mimosa_poculata.fruit.replum = new Replum()
Mimosa_poculata.fruit.epicarp = new Epicarp()

Mimosa_poculata.seed = new Seed()


// Description authorship
Mimosa_poculata.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_poculata.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa poculata
export { Mimosa_poculata }