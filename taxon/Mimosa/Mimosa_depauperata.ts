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


// Description of Mimosa depauperata
const Mimosa_depauperata = new Mimosa()
Mimosa_depauperata.specificEpithet = 'depauperata'

Mimosa_depauperata.stems = new Stems()

Mimosa_depauperata.stipule = new Stipule()
Mimosa_depauperata.stipule.margin = new MarginStipule()
Mimosa_depauperata.stipule.adaxial = new AdaxialStipule()
Mimosa_depauperata.stipule.abaxial = new AbaxialStipule()

Mimosa_depauperata.leaf = new Leaf()
Mimosa_depauperata.leaf.petiole = new Petiole()
Mimosa_depauperata.leaf.bipinnate = new Bipinnate()
Mimosa_depauperata.leaf.bipinnate.rachis = new Rachis()
Mimosa_depauperata.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_depauperata.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_depauperata.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_depauperata.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_depauperata.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_depauperata.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(40)
Mimosa_depauperata.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(45, 75)
Mimosa_depauperata.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(80)
Mimosa_depauperata.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_depauperata.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_depauperata.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_depauperata.inflorescence = new Inflorescence()
Mimosa_depauperata.inflorescence.peduncle = new Peduncle()
Mimosa_depauperata.inflorescence.capitate = new CapitateInflorescence()

Mimosa_depauperata.flower = new Flower()
Mimosa_depauperata.flower.bracteole = new Bracteole()
Mimosa_depauperata.flower.merism = '4-merous'
Mimosa_depauperata.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_depauperata.flower.calyx = new Calyx()
Mimosa_depauperata.flower.corolla = new Corolla()

Mimosa_depauperata.androecium = new Androecium()
Mimosa_depauperata.androecium.filaments = new Filaments()
Mimosa_depauperata.androecium.filaments.colour = 'pinkish'

Mimosa_depauperata.ginoecium = new Ginoecium()
Mimosa_depauperata.ginoecium.ovary = new Ovary()

Mimosa_depauperata.fruit = new Fruit()
Mimosa_depauperata.fruit.stipe = new Stipe()
Mimosa_depauperata.fruit.replum = new Replum()
Mimosa_depauperata.fruit.epicarp = new Epicarp()

Mimosa_depauperata.seed = new Seed()


// Description authorship
Mimosa_depauperata.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_depauperata.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa depauperata
export { Mimosa_depauperata }