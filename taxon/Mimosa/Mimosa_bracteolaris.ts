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


// Description of Mimosa bracteolaris
const Mimosa_bracteolaris = new Mimosa()
Mimosa_bracteolaris.specificEpithet = 'bracteolaris'

Mimosa_bracteolaris.stems = new Stems()

Mimosa_bracteolaris.stipule = new Stipule()
Mimosa_bracteolaris.stipule.margin = new MarginStipule()
Mimosa_bracteolaris.stipule.adaxial = new AdaxialStipule()
Mimosa_bracteolaris.stipule.abaxial = new AbaxialStipule()

Mimosa_bracteolaris.leaf = new Leaf()
Mimosa_bracteolaris.leaf.petiole = new Petiole()
Mimosa_bracteolaris.leaf.bipinnate = new Bipinnate()
Mimosa_bracteolaris.leaf.bipinnate.rachis = new Rachis()
Mimosa_bracteolaris.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_bracteolaris.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_bracteolaris.leaf.bipinnate.pinnae.setNumberOfPairs(2)
Mimosa_bracteolaris.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_bracteolaris.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_bracteolaris.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_bracteolaris.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(10, 18)
Mimosa_bracteolaris.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_bracteolaris.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_bracteolaris.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_bracteolaris.inflorescence = new Inflorescence()
Mimosa_bracteolaris.inflorescence.peduncle = new Peduncle()
Mimosa_bracteolaris.inflorescence.capitate = new CapitateInflorescence()

Mimosa_bracteolaris.flower = new Flower()
Mimosa_bracteolaris.flower.bracteole = new Bracteole()
Mimosa_bracteolaris.flower.merism = '4-merous'
Mimosa_bracteolaris.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_bracteolaris.flower.calyx = new Calyx()
Mimosa_bracteolaris.flower.calyx.shape = 'campanulate'
Mimosa_bracteolaris.flower.corolla = new Corolla()

Mimosa_bracteolaris.androecium = new Androecium()
Mimosa_bracteolaris.androecium.filaments = new Filaments()
Mimosa_bracteolaris.androecium.filaments.colour = 'pinkish'

Mimosa_bracteolaris.ginoecium = new Ginoecium()
Mimosa_bracteolaris.ginoecium.ovary = new Ovary()

Mimosa_bracteolaris.fruit = new Fruit()
Mimosa_bracteolaris.fruit.stipe = new Stipe()
Mimosa_bracteolaris.fruit.replum = new Replum()
Mimosa_bracteolaris.fruit.epicarp = new Epicarp()

Mimosa_bracteolaris.seed = new Seed()


// Description authorship
Mimosa_bracteolaris.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_bracteolaris.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa bracteolaris
export { Mimosa_bracteolaris }