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


// Description of Mimosa sparsa
const Mimosa_sparsa = new Mimosa()
Mimosa_sparsa.specificEpithet = 'sparsa'

Mimosa_sparsa.stems = new Stems()

Mimosa_sparsa.stipule = new Stipule()
Mimosa_sparsa.stipule.margin = new MarginStipule()
Mimosa_sparsa.stipule.adaxial = new AdaxialStipule()
Mimosa_sparsa.stipule.abaxial = new AbaxialStipule()

Mimosa_sparsa.leaf = new Leaf()
Mimosa_sparsa.leaf.petiole = new Petiole()
Mimosa_sparsa.leaf.bipinnate = new Bipinnate()
Mimosa_sparsa.leaf.bipinnate.rachis = new Rachis()
Mimosa_sparsa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_sparsa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_sparsa.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_sparsa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_sparsa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_sparsa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_sparsa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(12, 26)
Mimosa_sparsa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_sparsa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_sparsa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_sparsa.inflorescence = new Inflorescence()
Mimosa_sparsa.inflorescence.peduncle = new Peduncle()
Mimosa_sparsa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_sparsa.flower = new Flower()
Mimosa_sparsa.flower.bracteole = new Bracteole()
Mimosa_sparsa.flower.merism = '4-merous'
Mimosa_sparsa.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_sparsa.flower.calyx = new Calyx()
Mimosa_sparsa.flower.corolla = new Corolla()
Mimosa_sparsa.flower.corolla.shape = 'subtubular'

Mimosa_sparsa.androecium = new Androecium()
Mimosa_sparsa.androecium.filaments = new Filaments()
Mimosa_sparsa.androecium.filaments.colour = 'pinkish'

Mimosa_sparsa.ginoecium = new Ginoecium()
Mimosa_sparsa.ginoecium.ovary = new Ovary()

Mimosa_sparsa.fruit = new Fruit()
Mimosa_sparsa.fruit.stipe = new Stipe()
Mimosa_sparsa.fruit.replum = new Replum()
Mimosa_sparsa.fruit.epicarp = new Epicarp()

Mimosa_sparsa.seed = new Seed()


// Description authorship
Mimosa_sparsa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_sparsa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa sparsa
export { Mimosa_sparsa }