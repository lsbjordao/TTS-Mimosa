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


// Description of Mimosa rojasii
const Mimosa_rojasii = new Mimosa()
Mimosa_rojasii.specificEpithet = 'rojasii'

Mimosa_rojasii.stems = new Stems()

Mimosa_rojasii.stipule = new Stipule()
Mimosa_rojasii.stipule.margin = new MarginStipule()
Mimosa_rojasii.stipule.adaxial = new AdaxialStipule()
Mimosa_rojasii.stipule.abaxial = new AbaxialStipule()

Mimosa_rojasii.leaf = new Leaf()
Mimosa_rojasii.leaf.petiole = new Petiole()
Mimosa_rojasii.leaf.bipinnate = new Bipinnate()
Mimosa_rojasii.leaf.bipinnate.rachis = new Rachis()
Mimosa_rojasii.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_rojasii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_rojasii.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(6, 12)
Mimosa_rojasii.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(15)
Mimosa_rojasii.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_rojasii.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_rojasii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_rojasii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(28)
Mimosa_rojasii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(30, 55)
Mimosa_rojasii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(65)
Mimosa_rojasii.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_rojasii.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_rojasii.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_rojasii.inflorescence = new Inflorescence()
Mimosa_rojasii.inflorescence.peduncle = new Peduncle()
Mimosa_rojasii.inflorescence.capitate = new CapitateInflorescence()

Mimosa_rojasii.flower = new Flower()
Mimosa_rojasii.flower.bracteole = new Bracteole()
Mimosa_rojasii.flower.merism = '4-merous'
Mimosa_rojasii.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_rojasii.flower.calyx = new Calyx()
Mimosa_rojasii.flower.corolla = new Corolla()

Mimosa_rojasii.androecium = new Androecium()
Mimosa_rojasii.androecium.filaments = new Filaments()
Mimosa_rojasii.androecium.filaments.colour = 'pinkish'

Mimosa_rojasii.ginoecium = new Ginoecium()
Mimosa_rojasii.ginoecium.ovary = new Ovary()

Mimosa_rojasii.fruit = new Fruit()
Mimosa_rojasii.fruit.stipe = new Stipe()
Mimosa_rojasii.fruit.replum = new Replum()
Mimosa_rojasii.fruit.epicarp = new Epicarp()

Mimosa_rojasii.seed = new Seed()


// Description authorship
Mimosa_rojasii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_rojasii.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa rojasii
export { Mimosa_rojasii }