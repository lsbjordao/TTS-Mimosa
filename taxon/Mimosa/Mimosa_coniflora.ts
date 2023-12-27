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


// Description of Mimosa coniflora
const Mimosa_coniflora = new Mimosa()
Mimosa_coniflora.specificEpithet = 'coniflora'

Mimosa_coniflora.stems = new Stems()

Mimosa_coniflora.stipule = new Stipule()
Mimosa_coniflora.stipule.margin = new MarginStipule()
Mimosa_coniflora.stipule.adaxial = new AdaxialStipule()
Mimosa_coniflora.stipule.abaxial = new AbaxialStipule()

Mimosa_coniflora.leaf = new Leaf()
Mimosa_coniflora.leaf.petiole = new Petiole()
Mimosa_coniflora.leaf.bipinnate = new Bipinnate()
Mimosa_coniflora.leaf.bipinnate.rachis = new Rachis()
Mimosa_coniflora.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_coniflora.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_coniflora.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_coniflora.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_coniflora.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_coniflora.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(26)
Mimosa_coniflora.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(30, 46)
Mimosa_coniflora.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_coniflora.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_coniflora.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_coniflora.inflorescence = new Inflorescence()
Mimosa_coniflora.inflorescence.peduncle = new Peduncle()
Mimosa_coniflora.inflorescence.capitate = new CapitateInflorescence()

Mimosa_coniflora.flower = new Flower()
Mimosa_coniflora.flower.bracteole = new Bracteole()
Mimosa_coniflora.flower.merism = '4-merous'
Mimosa_coniflora.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_coniflora.flower.calyx = new Calyx()
Mimosa_coniflora.flower.calyx.shape = 'cup-shaped'
Mimosa_coniflora.flower.corolla = new Corolla()
Mimosa_coniflora.flower.corolla.shape = 'turbinate'

Mimosa_coniflora.androecium = new Androecium()
Mimosa_coniflora.androecium.filaments = new Filaments()
Mimosa_coniflora.androecium.filaments.colour = 'pinkish'

Mimosa_coniflora.ginoecium = new Ginoecium()
Mimosa_coniflora.ginoecium.ovary = new Ovary()

Mimosa_coniflora.fruit = new Fruit()
Mimosa_coniflora.fruit.stipe = new Stipe()
Mimosa_coniflora.fruit.replum = new Replum()
Mimosa_coniflora.fruit.epicarp = new Epicarp()

Mimosa_coniflora.seed = new Seed()


// Description authorship
Mimosa_coniflora.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_coniflora.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa coniflora
export { Mimosa_coniflora }