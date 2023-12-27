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


// Description of Mimosa aguapeia
const Mimosa_aguapeia = new Mimosa()
Mimosa_aguapeia.specificEpithet = 'aguapeia'

Mimosa_aguapeia.stems = new Stems()

Mimosa_aguapeia.stipule = new Stipule()
Mimosa_aguapeia.stipule.margin = new MarginStipule()
Mimosa_aguapeia.stipule.adaxial = new AdaxialStipule()
Mimosa_aguapeia.stipule.abaxial = new AbaxialStipule()

Mimosa_aguapeia.leaf = new Leaf()
Mimosa_aguapeia.leaf.petiole = new Petiole()
Mimosa_aguapeia.leaf.bipinnate = new Bipinnate()
Mimosa_aguapeia.leaf.bipinnate.rachis = new Rachis()
Mimosa_aguapeia.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_aguapeia.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_aguapeia.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(3, 6)
Mimosa_aguapeia.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_aguapeia.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_aguapeia.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_aguapeia.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(16)
Mimosa_aguapeia.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(18, 38)
Mimosa_aguapeia.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_aguapeia.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_aguapeia.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_aguapeia.inflorescence = new Inflorescence()
Mimosa_aguapeia.inflorescence.peduncle = new Peduncle()
Mimosa_aguapeia.inflorescence.capitate = new CapitateInflorescence()

Mimosa_aguapeia.flower = new Flower()
Mimosa_aguapeia.flower.bracteole = new Bracteole()
Mimosa_aguapeia.flower.merism = '4-merous'
Mimosa_aguapeia.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_aguapeia.flower.calyx = new Calyx()
Mimosa_aguapeia.flower.calyx.shape = 'pappiform'
Mimosa_aguapeia.flower.corolla = new Corolla()
Mimosa_aguapeia.flower.corolla.shape = 'trumpet-shaped'

Mimosa_aguapeia.androecium = new Androecium()
Mimosa_aguapeia.androecium.filaments = new Filaments()

Mimosa_aguapeia.ginoecium = new Ginoecium()
Mimosa_aguapeia.ginoecium.ovary = new Ovary()

Mimosa_aguapeia.fruit = new Fruit()
Mimosa_aguapeia.fruit.stipe = new Stipe()
Mimosa_aguapeia.fruit.replum = new Replum()
Mimosa_aguapeia.fruit.epicarp = new Epicarp()

Mimosa_aguapeia.seed = new Seed()


// Description authorship
Mimosa_aguapeia.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_aguapeia.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa aguapeia
export { Mimosa_aguapeia }