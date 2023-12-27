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


// Description of Mimosa rufescens
const Mimosa_rufescens = new Mimosa()
Mimosa_rufescens.specificEpithet = 'rufescens'

Mimosa_rufescens.stems = new Stems()

Mimosa_rufescens.stipule = new Stipule()
Mimosa_rufescens.stipule.margin = new MarginStipule()
Mimosa_rufescens.stipule.adaxial = new AdaxialStipule()
Mimosa_rufescens.stipule.abaxial = new AbaxialStipule()

Mimosa_rufescens.leaf = new Leaf()
Mimosa_rufescens.leaf.petiole = new Petiole()
Mimosa_rufescens.leaf.bipinnate = new Bipinnate()
Mimosa_rufescens.leaf.bipinnate.rachis = new Rachis()
Mimosa_rufescens.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_rufescens.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_rufescens.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(3)
Mimosa_rufescens.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(4, 10)
Mimosa_rufescens.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(12)
Mimosa_rufescens.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_rufescens.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_rufescens.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_rufescens.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(20, 26)
Mimosa_rufescens.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_rufescens.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_rufescens.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_rufescens.inflorescence = new Inflorescence()
Mimosa_rufescens.inflorescence.peduncle = new Peduncle()
Mimosa_rufescens.inflorescence.capitate = new CapitateInflorescence()

Mimosa_rufescens.flower = new Flower()
Mimosa_rufescens.flower.bracteole = new Bracteole()
Mimosa_rufescens.flower.merism = ['4-merous', '5-merous']
Mimosa_rufescens.flower.calyx = new Calyx()
Mimosa_rufescens.flower.calyx.shape = 'campanulate'
Mimosa_rufescens.flower.corolla = new Corolla()
Mimosa_rufescens.flower.corolla.shape = ['turbinate', 'campanulate']

Mimosa_rufescens.androecium = new Androecium()
Mimosa_rufescens.androecium.filaments = new Filaments()
Mimosa_rufescens.androecium.filaments.colour = ['whitenish', 'creamish']

Mimosa_rufescens.ginoecium = new Ginoecium()
Mimosa_rufescens.ginoecium.ovary = new Ovary()

Mimosa_rufescens.fruit = new Fruit()
Mimosa_rufescens.fruit.stipe = new Stipe()
Mimosa_rufescens.fruit.replum = new Replum()
Mimosa_rufescens.fruit.epicarp = new Epicarp()

Mimosa_rufescens.seed = new Seed()


// Description authorship
Mimosa_rufescens.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_rufescens.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa rufescens
export { Mimosa_rufescens }