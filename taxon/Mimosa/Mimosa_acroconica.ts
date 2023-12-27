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


// Description of Mimosa acroconica
const Mimosa_acroconica = new Mimosa()
Mimosa_acroconica.specificEpithet = 'acroconica'

Mimosa_acroconica.stems = new Stems()

Mimosa_acroconica.stipule = new Stipule()
Mimosa_acroconica.stipule.margin = new MarginStipule()
Mimosa_acroconica.stipule.adaxial = new AdaxialStipule()
Mimosa_acroconica.stipule.abaxial = new AbaxialStipule()

Mimosa_acroconica.leaf = new Leaf()
Mimosa_acroconica.leaf.petiole = new Petiole()
Mimosa_acroconica.leaf.bipinnate = new Bipinnate()
Mimosa_acroconica.leaf.bipinnate.rachis = new Rachis()
Mimosa_acroconica.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_acroconica.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_acroconica.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(5, 14)
Mimosa_acroconica.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_acroconica.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_acroconica.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_acroconica.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(17, 24)
Mimosa_acroconica.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(28)
Mimosa_acroconica.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_acroconica.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_acroconica.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_acroconica.inflorescence = new Inflorescence()
Mimosa_acroconica.inflorescence.peduncle = new Peduncle()
Mimosa_acroconica.inflorescence.capitate = new CapitateInflorescence()

Mimosa_acroconica.flower = new Flower()
Mimosa_acroconica.flower.bracteole = new Bracteole()
Mimosa_acroconica.flower.merism = '4-merous'
Mimosa_acroconica.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_acroconica.flower.calyx = new Calyx()
Mimosa_acroconica.flower.calyx.shape = 'campanulate'
Mimosa_acroconica.flower.corolla = new Corolla()
Mimosa_acroconica.flower.corolla.shape = 'turbinate'

Mimosa_acroconica.androecium = new Androecium()
Mimosa_acroconica.androecium.filaments = new Filaments()
Mimosa_acroconica.androecium.filaments.colour = 'pinkish'

Mimosa_acroconica.ginoecium = new Ginoecium()
Mimosa_acroconica.ginoecium.ovary = new Ovary()

Mimosa_acroconica.fruit = new Fruit()
Mimosa_acroconica.fruit.stipe = new Stipe()
Mimosa_acroconica.fruit.replum = new Replum()
Mimosa_acroconica.fruit.epicarp = new Epicarp()

Mimosa_acroconica.seed = new Seed()


// Description authorship
Mimosa_acroconica.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_acroconica.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa acroconica
export { Mimosa_acroconica }